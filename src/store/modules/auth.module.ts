import type {Commit, Dispatch} from 'vuex'
import axios from "axios";
import {error} from "@/utils/error";

const TOKEN_KEY = 'jwt-token'
type stateType = {
	token: string
}
// @ts-ignore
export default {
	namespaced: true,
	state() {
		return {
			token: localStorage.getItem(TOKEN_KEY)
		}
	},
	mutations: {
		setToken(state: stateType, token: string): void {
			state.token = token
			localStorage.setItem(TOKEN_KEY, token)
		},
		logout(state: stateType): void {
			state.token = ''
			localStorage.removeItem(TOKEN_KEY)
		}
	},
	actions: {
		async login({commit, dispatch}: { commit: Commit, dispatch: Dispatch }, payload: Record<string, string>) {
			try {
				const url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${import.meta.env.VITE_FB_KEY}`
				const {data} = await axios.post(url, {
					...payload, returnSecureToken: true,
				})

				commit('setToken', data.idToken)
				commit('clearMessage',null,{root:true})
			} catch (e: unknown) {
				await dispatch('setMessage',
					{
						// @ts-ignore
						value: error(e.response.data.error.message)
					}, {root: true})
				throw new Error()
			}
		}
	},
	getters: {
		token(state: stateType): string {
			return state.token
		},
		isAuthenticated(_: null, getters: gettersType): boolean {
			return !!getters.token
		}
	}
}
type gettersType = {
	token: (state: stateType) => string,
	isAuthenticated: (_: null, getters: gettersType) => boolean
}
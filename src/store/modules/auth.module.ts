import type {Commit} from 'vuex'

const TOKEN_KEY = ' jwt-token'
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
		logout(state:stateType):void{
			state.token=''
			localStorage.removeItem(TOKEN_KEY)
		}
	},
	actions: {
		async login({ commit }: { commit: Commit },payload:Record<string, string>) {
			commit('setToken', 'TEST TOKEN')
		}
	},
	getters: {
		token(state: stateType): string {
			return state.token
		},
		isAuthenticated(_:null,getters:gettersType): boolean {
			return !!getters.token
		}
	}
}
type gettersType={
	token:(state:stateType)=>string,
	isAuthenticated:(_:null,getters:gettersType)=> boolean
}
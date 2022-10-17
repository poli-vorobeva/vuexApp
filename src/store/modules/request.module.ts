import requestAxios from "@/axios/requestAxios";
import store from '../index'
import type {Commit, Dispatch} from "vuex";

type stateType = {
	requests: unknown[],
	optionsData:Record<string, string>
}
type createType = { fio: string, phone: string, amount: number, action: string }
interface arrayDataType extends createType{
	id:string
}
export default {
	namespaced: true,
	state() {
		return {
			requests: [],
			optionsData:{
				done:'Готово',
				cancelled:'Отменен',
				active:'Активный',
				pending:'Ожидает'
			}

		}
	},
	mutations: {
		setRequests(state: stateType, requests: unknown[]) {
			state.requests = requests
		},
		addRequest(state: stateType, request: unknown) {
			state.requests.push(request)
		}
	},
	actions: {
		async create({commit, dispatch}: { commit: Commit, dispatch: Dispatch }, payload: createType) {
			try {
				const token = store.getters['auth/token']
				const {data} = await requestAxios.post(`/requests.json?auth=${token}`, payload)
				console.log('DATA',data)
				commit('addRequest', {...payload, id: data.name})
				await dispatch('setMessage', {
					value: "Заявка создана"
				}, {root: true})
			} catch (e) {
				// @ts-ignore
				await dispatch('setMessage', {value: e.message}, {root: true})
			}
		},
		async load({commit, dispatch}: { commit: Commit, dispatch: Dispatch }) {
			try {
				const token = store.getters['auth/token']
				const {data} = await requestAxios.get(`/requests.json?auth=${token}`)
				const arrayFromData:createType[] =[]
					if(data){
						Object.keys(data).forEach((el)=>{
							arrayFromData.push({...data[el],id:el})
				})
			}
				commit('setRequests', arrayFromData)
			} catch (e) {
				// @ts-ignore
				await dispatch('setMessage', {value: e.message}, {root: true})
			}
		}
	},
	getters: {
		getRequests(state: stateType) {
			return state.requests
		},
		getOptionsData(state:stateType){
			return state.optionsData
		}
	}
}
import {createStore, createLogger} from 'vuex';
import auth from './modules/auth.module'
import request from './modules/request.module'

const plugins = []

if (process.env.NODE_ENV === 'development') {
	plugins.push(createLogger())
}
type stateType = {
	message: string
}
export default createStore({
	plugins,
	state() {
		return {
			//	counter: 0
			message: null
		}
	},
	mutations: {
		setMessage(state, message) {
			state.message = message.value
		},
		clearMessage(state) {
			state.message = null
		},
	},
	actions: {
		setMessage({commit}, message) {
			commit('setMessage', message)
			setTimeout(() => {
				commit('clearMessage')
			}, 5000)
		}
	},
	modules: {
		auth, request
	}
})
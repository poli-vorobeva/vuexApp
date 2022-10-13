import {createStore, createLogger} from 'vuex';
import auth from './modules/auth.module'

const plugins = []

if (process.env.NODE_ENV === 'development') {
	plugins.push(createLogger())
}
type stateType={
	message:string
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
		//	console.log(message.value,'$$')
			state.message = message.value
			//console.log(state.message,'setMessage')
		},
		clearMessage(state) {
			state.message = null
		},
	},
	actions: {
		setMessage({commit}, message) {
			commit('setMessage', message)
			setTimeout(()=>{
				commit('clearMessage')
			},5000)
		}
	},
	modules: {
		auth
	}
})
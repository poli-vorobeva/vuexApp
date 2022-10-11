import {createStore,createLogger} from 'vuex';
import auth from './modules/auth.module'

const plugins=[]

if(process.env.NODE_ENV==='development'){
		plugins.push(createLogger())
}
export default createStore({
	plugins,
	state() {
		return {
		//	counter: 0
		}
	},
	mutations: {},
	actions: {},
	modules: {
		auth
	}
})
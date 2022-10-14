import axios from "axios";
import router from "@/router";

console.log(import.meta.env.BASE_URL)
const requestAxios=axios.create({
		baseURL:'https://vuex-project-f48cc-default-rtdb.europe-west1.firebasedatabase.app'
	})

requestAxios.interceptors.response.use(undefined,
	async (error)=>{
	if(error.response.status===401){
		await router.push('/auth?message=auth')
	}
	return Promise.reject(error)
})

export default requestAxios
import {useField, useForm} from 'vee-validate'
import * as yup from 'yup'
import {computed, watch} from 'vue'
import {useStore} from "vuex";
import {useRouter} from "vue-router";

export function useLoginForm() {
	const store= useStore()
	const router=useRouter()

	const {handleSubmit, isSubmitting, submitCount} = useForm()
	//console.log(submitCount.value,'COUNTSUB')
	const {value: email, errorMessage: eError, handleBlur: eBlur} = useField<string>(
		'email',
		yup
			.string()
			.trim()
			.required('Пожалуйста введите мэйл')
			.email('введите корректный мэйл')
	)
	const {value: password, errorMessage: pError, handleBlur: pBlur} = useField('password',
		yup
			.string().trim().required('Введите пароль').min(6, 'Минимум 6 символов')
	)
	const isTooManyAttempts = computed(() => submitCount.value >= 3)
	watch(isTooManyAttempts, val => {
		//console.log("VAL",val)
		if (val) {
			setTimeout(() => submitCount.value = 0, 1500)
		}
	})
	const onSubmit = handleSubmit(async (values:Record<string, string>) => {
		await store.dispatch('auth/login',values)
		await router.push('/')
	})
	return{
		email,password,eError,pError,eBlur,pBlur,onSubmit,isSubmitting,isTooManyAttempts
	}
}
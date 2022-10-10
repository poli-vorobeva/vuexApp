import {useField, useForm} from 'vee-validate'
import * as yup from 'yup'
import {computed, watch} from 'vue'

export function useLoginForm() {
	const {handleSubmit, isSubmitting, submitCount} = useForm()
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
		if (val) {
			setTimeout(() => submitCount.value = 0, 1500)
		}
	})
	const onSubmit = handleSubmit(values => {
		console.log('Form0', values)
	})
	return{
		email,password,eError,pError,eBlur,pBlur,onSubmit,isSubmitting,isTooManyAttempts
	}
}
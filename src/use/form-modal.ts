import {useField, useForm} from "vee-validate";
import * as yup from 'yup'

export default function useRequestForm(fn:()=>void){
		const {isSubmitting, handleSubmit} = useForm({
			initialValues:{
				status:'active'
			}
		})
		const {value: fio, handleBlur: fBlur, errorMessage: fError} = useField('fio',
			yup.string().trim().required('Введите ваше Имя и Фамилию'))
		const {value: phone, handleBlur: pBlur, errorMessage: pError} = useField('phone',
			yup.string().trim().required('Введите телефон'))
		const {value: amount, handleBlur: aBlur, errorMessage: aError} = useField('amount',
			yup.number().min(0, 'Сумма не может быть меньше 0'))
		const {value: status} = useField('status')
		const onSubmit = handleSubmit(fn)
		return {
			fio, fBlur, fError,
			phone, pError, pBlur,
			amount, aBlur, aError,
			status,isSubmitting,
			onSubmit
		}
}
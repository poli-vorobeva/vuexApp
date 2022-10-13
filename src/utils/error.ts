import type {LocationQueryValue} from "vue-router";

const ERRORS_CODES:Record<string, string>={
	EMAIL_NOT_FOUND:'Пользователь не найден',
	INVALID_PASSWORD:'Неправильный пароль',
	auth:"Пожалуйста войдите в систему",
	TOO_MANY_ATTEMPTS_TRY_LATER:"Слишком много неудачных попыток"
}

export function error(code: string | LocationQueryValue[]){
	return ERRORS_CODES[code as keyof typeof  ERRORS_CODES]
		?ERRORS_CODES[code as keyof typeof  ERRORS_CODES]
		:'Неизвестная ошибка'
}
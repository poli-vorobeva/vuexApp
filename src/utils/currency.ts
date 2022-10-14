const formatter= Intl.NumberFormat('ru-RU',{currency:'RUB', style:"currency"})
export default function currency(value:number){
	return formatter.format(value)
}
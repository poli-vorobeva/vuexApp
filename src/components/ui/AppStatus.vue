<template>
    <div :style="{background:className}">
        {{text}}
    </div>
</template>
<script>
    import {ref} from 'vue'
	export default {
		props: {
			type: {
				type: String,
				required: true
			}
		},
		setup(props) {
			console.log(props.value)
			const statusString = {
				done: 'Готово',
				cancelled: 'Отменен',
				active: 'Активный',
				pending: 'Ожидает',
			}
			const statusStyle = {
				done: 'green',
				cancelled: 'red',
				active: 'orange',
				pending: 'yellow',
			}
			const className = ref(statusStyle[props.type])
			const classString = ref(statusString[props.type])
			return {
				text: classString.value,
				className
			}
		}
	}
</script>

<style scoped>

</style>
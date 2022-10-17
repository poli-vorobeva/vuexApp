<template>
    <div :style="{background:className}">
        {{text}}
    </div>
</template>
<script>
	import {ref} from 'vue'
	import {useStore} from 'vuex'

	export default {
		props: {
			type: {
				type: String,
				required: true
			}
		},
		setup(props) {
			const store = useStore()
			const statusString = store.getters['request/getOptionsData']
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
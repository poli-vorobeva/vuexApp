<template>
    <label v-if="props.title" for="status">{{props.title}}</label>
    <select
            id="status"
            v-model="props.status"
            @change="changeSelect"
    >
        <slot/>
        <option
                v-for='(key,value) in options'
                :value="value"
                :selected="defaultSelected"
        >{{key}}
        </option>
    </select>
</template>
<script>
	import {useStore} from 'vuex'

	export default {
		emits: ['changeSelect'],
		props: {
			title: {
				type: String,
				required: false
			},
			status: {
				type: String
			}
		},
		setup(props, {emit}) {
			const store = useStore()
			const options = store.getters['request/getOptionsData']
			const changeSelect = (e) => {
				console.log("%%%",e.target.value)
				emit('changeSelect', e.target.value)}
			const defaultSelected = (value) => {
				return value === 'active' ? ' selected' : ''
			}
			return {
				props, changeSelect, options, defaultSelected
			}
		}
	}

</script>
<style scoped>
</style>
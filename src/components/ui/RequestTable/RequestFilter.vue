<template>
    <div>
        <h6>Сортировка</h6>
        <input type="text" v-model="sortInputByName" @input="sortItems"/>
        <div>
            <app-select title="по статусу"></app-select>
        </div>
    </div>
</template>

<script>
	import {useStore} from 'vuex'
	import {ref} from 'vue'
	import AppSelect from "@/components/AppSelect.vue";

	export default {
		components: {AppSelect},
		props: ['requests'],
      emit:['onFilter'],
		setup(props,{emit}) {
			const store = useStore()
			const sortInputByName = ref('')
			const optionsData = store.getters['/request/getOptionsData']
			const sortItems = (e) => {
				const requests = store.getters['request/getRequests']
				const filteredRequests = requests.filter(el => {
					if (new RegExp(e.target.value).test(el.fio)) {
						return el
					}
				})
            //  console.log(filteredRequests,'^^^^')
				emit('onFilter',filteredRequests)
			}
			return {
				optionsData, sortInputByName, sortItems
			}
		}
	}
</script>

<style scoped>

</style>
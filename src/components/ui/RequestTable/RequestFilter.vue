<template>
    <div>
        <h6>Сортировка</h6>
        <input type="text" v-model="sortInputByName" @input="changeInput"/>
        <div>
            <app-select v-model:status="sortByStatus" @changeSelect="changeSelect" title="по статусу">
                <option value="all">Показать все</option>
            </app-select>
        </div>
    </div>
</template>

<script>
	import {useStore} from 'vuex'
	import {ref, reactive} from 'vue'
	import AppSelect from "@/components/AppSelect.vue";

	export default {

		components: {AppSelect},
		props: ['requests'],
		emit: ['onFilter', 'onSortStatus'],
		setup(props, {emit}) {
			const store = useStore()
			const sortInputByName = ref('')
			const sortByStatus = ref('')
			const requests = store.getters['request/getRequests']

			const onSortByFio = (dataRequest, regString) => {
				if (regString) {
					return dataRequest.filter(el => {
						if (new RegExp(regString).test(el.fio)) {
							return el
						}
					})
				}
				return dataRequest
			}
			const onSortByStatus = (dataRequest) => {
				if (sortByStatus.value === 'all') {
					return dataRequest
				}
				if (sortByStatus.value) {
					return dataRequest.filter(el => el.status === sortByStatus.value)
				}
				return dataRequest
			}
			const sortItems = () => {
				const filteredRequests = onSortByFio(requests, sortInputByName.value)
				const doubleResult = onSortByStatus(filteredRequests)
				emit('onFilter', doubleResult)
			}
			const changeInput = (e) => {
				sortInputByName.value = e.target.value
				sortItems()
			}
			const changeSelect = (data) => {
				sortByStatus.value = data
				sortItems()
			}
			return {
				sortInputByName, sortByStatus, changeSelect, changeInput
			}
		}
	}
</script>

<style scoped>

</style>
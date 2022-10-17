<template>
    <div>
        <h6>Сортировка</h6>
        <input type="text" v-model="sortInputByName" @input="sortItems"/>
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
			const optionsData = store.getters['/request/getOptionsData']
			const requests = store.getters['request/getRequests']
          const onSortByFio=(string,regString)=>{

          }
          const onSortByStatus=()=>{

          }
			const sortItems = (e) => {
				const filteredRequests = requests.filter(el => {
					if (new RegExp(e.target.value).test(el.fio)) {
						if (sortByStatus.value && el.status === sortByStatus.value) {
							return el
						}else if (!sortByStatus.value){
							return el
                        }
					}
				})
				emit('onFilter', filteredRequests)
			}

			const changeSelect = (data) => {
				let reqSorts = []
				if (data === 'all') {
					if (sortInputByName.value) {
						sortItems(sortInputByName.value)
					}
					else {
						const ar = requests.map(el => el)
						emit('onFilter', ar)
					}
					return
				}
				if (sortInputByName.value) {
					reqSorts = props.requests.filter(req => req.status === data)
				}
				else {
					reqSorts = requests.filter(req => req.status === data)
				}

				emit('onSortStatus', reqSorts)
			}
			return {
				optionsData, sortInputByName, sortItems, sortByStatus, changeSelect
			}
		}
	}
</script>

<style scoped>

</style>
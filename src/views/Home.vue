<template>
    <div v-if="isLoading">LOADING</div>
    <app-page title="Список заявок" v-else>
        <template #header>
            <request-filter v-if="requests"
                            @onFilter='onFilterRequests'
                            @onSortStatus="onSortStatus"
                            :requests="dataForRequests"
            ></request-filter>
            <button @click="modal=true">Создать</button>
            <request-table v-if="dataForRequests"
                           :requests="dataForRequests"
            ></request-table>
            <teleport to="body">
                <app-modal v-if="modal" title="Создать заявку" @closeModal="modal=false">
                    <request-modal @created="modal=false"></request-modal>
                </app-modal>
            </teleport>
        </template>
    </app-page>
</template>

<script>
	import AppPage from "@/components/ui/AppPage.vue";
	import RequestTable from "@/components/ui/RequestTable/RequestTable.vue";
	import AppModal from "@/components/ui/AppModal.vue";
	import RequestModal from "@/components/ui/RequestTable/RequestModal.vue";
	import RequestFilter from "@/components/ui/RequestTable/RequestFilter.vue";
	import {ref, reactive, computed, onMounted} from 'vue'
	import {useStore} from "vuex";

	export default {
		setup() {
			const filteredData = reactive({})
			const isLoading = ref(true)
			const store = useStore()
			const modal = ref(false)
			onMounted(async () => {
				await store.dispatch('request/load')
				isLoading.value = false
			})
			const requests = computed(() => {
				return store.getters['request/getRequests']
			})
			const onFilterRequests = (data) => {
				filteredData.value = data
				console.log("!!!!", filteredData.value)
			}
			const dataForRequests = computed(() => {
				console.log("$$$$", filteredData)
				if (filteredData.value?.length > 0) {
					return filteredData.value
				}
				else if (filteredData.value?.length === 0) {
					return {}
				}
				else if (requests.value.length > 0) {
					return requests.value
				}
				return null
			})
			const onSortStatus = (data) => {
				filteredData.value = data
			}
			return {
				modal, requests, isLoading, onFilterRequests, dataForRequests, onSortStatus
			}
		},
		components: {AppPage, RequestTable, AppModal, RequestModal, RequestFilter}
	}
</script>

<style scoped>

</style>
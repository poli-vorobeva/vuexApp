<template>
    <div v-if="isLoading">LOADING</div>
    <app-page title="Список заявок" v-else>
        <template #header>
            <button @click="modal=true">Создать</button>
            <request-table :requests="requests"></request-table>
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
	import {ref, computed, onMounted} from 'vue'
	import {useStore} from "vuex";

	export default {
		setup() {
			const isLoading=ref(true)
			const store = useStore()
			const modal = ref(false)
			onMounted(async () => {
				await store.dispatch('request/load')
              isLoading.value=false
			})
			const requests = computed(() => {
				return store.getters['request/getRequests']
			})
			return {
				modal, requests,isLoading
			}
		},
		components: {AppPage, RequestTable, AppModal, RequestModal}
	}
</script>

<style scoped>

</style>
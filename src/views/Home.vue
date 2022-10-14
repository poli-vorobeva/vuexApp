<template>
    <app-page title="Список заявок">
        <template #header>
            <button @click="modal=true">Создать</button>
            <request-table requests="[]"></request-table>
            <teleport to="body">
                <app-modal  v-if="modal" title="Создать заявку" @closeModal="modal=false">
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
	import {ref} from 'vue'

	export default {
		setup() {
			const modal = ref(false)
			return {
				modal
			}
		},
		components: {AppPage, RequestTable, AppModal,RequestModal}
	}
</script>

<style scoped>

</style>
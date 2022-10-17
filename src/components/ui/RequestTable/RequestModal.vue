<template>
    <form @submit.prevent="onSubmit">
        <div class="form-control">
            <label for="fio">ФИО</label>
            <input type="text" id="fio" v-model="fio" @blur="fBlur"/>
            <small v-if="fError">{{fError}}</small>
        </div>
        <div class="form-control">
            <label for="phone">Телефон</label>
            <input type="text" id="phone" v-model="phone" @blur="pBlur"/>
            <small v-if="pError">{{pError}}</small>
        </div>
        <div class="form-control">
            <label for="amount">Суммы</label>
            <input type="text" id="amount" v-model='amount' @blur="aBlur"/>
            <small v-if="aError">{{aError}}</small>
        </div>
        <div class="form-control">
            <app-select title="Статус" @changeSelect="changeSelect" v-model:status="status"></app-select>
           </div>
        <button :disabled="isSubmitting">Создать</button>
    </form>
</template>
<script>
	import useRequestForm from "@/use/form-modal";
	import {useStore} from "vuex";
	import AppSelect from "@/components/AppSelect.vue";

	export default {
		components: {AppSelect},
		setup(_, {emit}) {
			const store = useStore()
			const submit = async (values) => {
					await store.dispatch('request/create', values)
				emit('created')
			}
			const requestForm = useRequestForm(submit)
			const changeSelect = (selectValue) => {
				requestForm.status.value = selectValue
			}
			return {
				...requestForm,changeSelect
			}
		}
	}
</script>

<style scoped>

</style>

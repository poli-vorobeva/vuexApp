<template>
    <form @submit.prevent="onSubmit">
        <div class="form-control">
            <label for="fio">ФИО</label>
            <input type="text" id="fio" v-model="fio" @blur="fBlur" />
            <small v-if="fError">{{fError}}</small>
        </div>
        <div class="form-control">
            <label for="phone">Телефон</label>
            <input type="text" id="phone" v-model="phone" @blur="pBlur" />
            <small v-if="pError">{{pError}}</small>
        </div>
        <div class="form-control">
            <label for="amount">Суммы</label>
            <input type="text" id="amount" v-model='amount' @blur="aBlur" />
            <small v-if="aError">{{aError}}</small>
        </div>
        <div class="form-control">
            <label for="status">Статус</label>
            <select id="status" v-model="status">
                <option value="done">Готово</option>
                <option value="cancelled">Отменен</option>
                <option value="active">Активный</option>
                <option value="pending">Ожидает</option>
            </select>
        </div>
        <button :disabled="isSubmitting">Создать</button>
    </form>
</template>
<script>
	import useRequestForm from "@/use/form-modal";
		import {useStore} from "vuex";

	export default {
		setup(_,{emit}) {
			const store= useStore()
			const submit=async (values)=>{
			  await store.dispatch('request/create',values)
              emit('created')
            }
			return {
				...useRequestForm(submit)
			}
		}
	}
</script>

<style scoped>

</style>

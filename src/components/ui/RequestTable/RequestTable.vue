<template>
   <table>
       <thead>
       <tr>
           <td>#</td>
           <td>ФИО</td>
           <td>Телефон</td>
           <td>Статус</td>
           <td>Действие</td>
           <td></td>
       </tr>
       </thead>
       <tbody>
       <tr v-for="(r,indx) in requests" :key="r.id">
           <td>{{indx+1}}</td>
           <td>{{r.fio}}</td>
           <td>{{r.phone}}</td>
           <td>{{currency(r.amount)}}</td>
           <td>
               <app-status :type="r.status"></app-status>
           </td>
           <td>

               <!--                            :to="{name:'Request',params:{id:r.id}}" -->
               <router-link custom
                            to="/"
                            v-slot="{navigate}">
                   <button @click="navigate">
                       Открыть
                   </button>
               </router-link>
           </td>
       </tr>
       </tbody>
   </table>
</template>

<script>
    import currency from '../../../utils/currency.ts'
    import AppStatus from "@/components/ui/AppStatus.vue";
	export default {
      props:['requests'],
      components:{AppStatus},
      setup(){
      	return{
      		currency
        }
      }
	}
</script>

<style scoped>

</style>
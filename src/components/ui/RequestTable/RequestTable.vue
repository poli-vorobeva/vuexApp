<template>
   <table>
       <thead>
       <tr>
           <td>#</td>
           <td>ФИО</td>
           <td>Телефон</td>
           <td>Статус</td>
           <td>Действие</td>
       </tr>
       </thead>
       <tbody>
       <tr v-for="(r,indx) in requests" :key="r.id">
           <td>{{indx+1}}</td>
           <td>{{r.fio}}</td>
           <td>{{r.phone}}</td>
           <td>{{r.amount}}</td>
           <td>{{r.status}}</td>
       </tr>
       </tbody>
   </table>
</template>

<script>
	export default {
      props:['requests']
	}
</script>

<style scoped>

</style>
<template>
    <div>
        <the-nav></the-nav>
        <app-message></app-message>
        <router-view></router-view>
    </div>
</template>

<script>
	import TheNav from "../components/TheNav.vue";
	import AppMessage from "@/components/ui/AppMessage.vue";

	export default {

		components: {TheNav, AppMessage}
	}
</script>

<style scoped>

</style>
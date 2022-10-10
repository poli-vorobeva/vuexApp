<template>
    <div>
        <the-nav></the-nav>
        <router-view></router-view>
    </div>
</template>

<script>
	import TheNav from "../components/TheNav.vue";

	export default {

		components: {TheNav}
	}
</script>

<style scoped>

</style>
<template>
    <div>
        <component :is="layout+'-layout'" v-if="layout"/>
    </div>
</template>
<script>
	import MainLayout from './layout/MainLayout.vue'
	import AuthLayout from "./layout/AuthLayout.vue";
	import {useRoute} from "vue-router";
	import {computed} from "vue";

	export default {
		setup() {
			const route = useRoute()
			return {
				layout: computed(() => route.meta.layout)
			}
		},
		components: {MainLayout, AuthLayout}
	}
</script>
<style scoped>

</style>

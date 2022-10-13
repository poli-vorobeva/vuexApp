<template>
    <div  v-if='message' :class="['alert']">
        <p>{{message}}</p>
        <span class="alert-close" @click="close">x</span>
    </div>
</template>

<script>
	import {useStore} from "vuex";
	import {computed} from 'vue'
	import {ref} from 'vue'

	export default {
		setup() {
			const store = useStore()
			const isShow = ref(true)
			const message = computed(() => store.state.message)
          const close=()=>store.commit('clearMessage')
			return {message, isShow,close}
		},
	}
</script>

<style scoped>
    .alert {
        position: relative;
        background: #2c5f4d;
        color: white;
        letter-spacing: 1px;
        height: 50px;
    }

    .alert-close {
        position: absolute;
        top: -5px;
        right: 0;
        color: white;
        font-size: 24px;
    }
</style>
<template>
    <div @click="$emit('closeModal')">
        <div class="modal">
            <h3 v-if="title">{{title}}</h3>
            <slot/>
        </div>
    </div>
</template>

<script>
	export default {
		emits: ['closeModal'],
      props:{
			title:{
				type:String
            }
      }
	}
</script>

<style scoped>

</style>
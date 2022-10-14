<template>
    <div class="wrapper" @click="$emit('closeModal')"></div>
        <div class="modal">
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
.wrapper{
    width: 100vw;
    height: 100vh;
    background-color: rgba(68, 51, 51, 0.27);
    position: absolute;
    top: 0;
    left: 0;
}
    .modal{
        position: absolute;
    }
</style>
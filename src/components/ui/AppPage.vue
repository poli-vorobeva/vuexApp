<template>
    <div>
        <h4>{{title}}</h4>
        <slot name="header"/>
    </div>
</template>

<script>
	export default {
		props: {
			title: {
				type: String,
				required: true
			}
		},
		setup(props) {
			document.title = props.title || "Online Bank"
		}
	}
</script>

<style scoped>

</style>
<template>
	<div class="wip-container">
		<v-icon
			scale="8"
			name="io-hammer-sharp"
			animation="wrench"
			speed="slow"
		></v-icon>
		<div class="flex flex-col md:flex-row text-center">
			<h1 class="pr-8">Work</h1>
			<h1 class="pr-8">In</h1>
			<h1>Progress</h1>
		</div>
	</div>
</template>

<script>
export default {
	name: 'WorkInProgress',
};
</script>

<style scoped>
.wip-container {
	@apply flex items-center align-middle flex-col text-[70px] 
    md:text-8xl break-all text-gray-500 font-bold;
}
</style>

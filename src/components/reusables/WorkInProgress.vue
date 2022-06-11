<template>
	<div class="wip-container">
		<v-icon
			scale="8"
			name="io-hammer-sharp"
			animation="wrench"
			speed="slow"
		></v-icon>
		<h1 class="text-center">Work In Progress</h1>
		<p>
			Sorry for the inconvenience
			<v-icon scale="2" name="hi-emoji-sad"></v-icon>
		</p>
	</div>
</template>

<script>
export default {
	name: 'WorkInProgress',
};
</script>

<style scoped lang="scss">
.wip-container {
	@apply flex items-center align-middle flex-col;

	h1,
	svg {
		@apply text-[70px] md:text-8xl text-gray-500 font-bold opacity-[0.8];
	}

	p {
		@apply text-4xl text-gray-500 opacity-[0.5] relative top-10 text-center;

		svg {
			@apply relative -top-2;
		}
	}
}
</style>

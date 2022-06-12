<template>
	<div class="wip-container">
		<v-icon
			scale="8"
			name="io-hammer-sharp"
			animation="wrench"
			speed="slow"
			class="hammer-icon"
		></v-icon>
		<h1 class="wip-text">Work In Progress</h1>
		<p class="wip-sub-text">
			Sorry for the inconvenience
			<v-icon class="sad-icon" scale="2" name="hi-emoji-sad"></v-icon>
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
	@apply h-full flex items-center align-middle flex-col;

	.hammer-icon {
		@apply mb-10;
	}

	.hammer-icon,
	.wip-text {
		@apply text-[70px] md:text-8xl text-gray-500 font-bold opacity-[0.8] text-center;
	}

	.wip-sub-text {
		@apply text-4xl text-gray-500 opacity-[0.5] relative top-10 text-center;

		.sad-icon {
			@apply relative -top-[10px];
		}
	}
}
</style>

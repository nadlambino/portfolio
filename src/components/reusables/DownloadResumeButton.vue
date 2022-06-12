<template>
	<button type="button" class="download-btn" @click="handleDownloadClick">
		<v-icon
			:scale="iconScale"
			name="md-download-twotone"
			ref="download-icon"
		></v-icon>
		<span v-show="!hideText">Resume</span>
	</button>
</template>

<script>
export default {
	name: 'DownloadResumeButton',
	props: {
		iconScale: {
			type: Number,
			default: () => 1,
		},
		hideText: {
			type: Boolean,
			default: () => false,
		},
	},
	methods: {
		handleDownloadClick() {
			const downloadIcon = this.$refs['download-icon'].$el;
			this.$emit('onDownloadResume', downloadIcon);
		},
	},
};
</script>

<style lang="scss" scoped>
.download-btn {
	@apply rounded bg-dark-100 md:bg-dark-200 text-center px-4 py-2 uppercase relative
	md:hover:bg-dark-50;
}
</style>

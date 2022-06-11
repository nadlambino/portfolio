<template>
	<div>
		<button type="button" class="download-btn" @click="handleDownloadClick">
			<v-icon
				scale="1"
				name="md-download-twotone"
				ref="download-icon"
			></v-icon>
			<span>Resume</span>
		</button>
	</div>
</template>

<script>
export default {
	name: 'DownloadResumeButton',
	methods: {
		handleDownloadClick() {
			const downloadIcon = this.$refs['download-icon'].$el;
			this.$emit('onDownloadResume', downloadIcon);
		},
	},
};
</script>

<template>
	<navigation-bar></navigation-bar>
	<router-view class="router-view"></router-view>
	<DownloadResumeButton
		class="resume-download-container-float"
		@onDownloadResume="handleDownloadResume"
	/>
</template>

<script>
import NavigationBar from './components/NavigationBar.vue';
import DownloadResumeButton from './components/reusables/DownloadResumeButton.vue';
import useDownloadResume from './composables/useDownloadResume';

export default {
	name: 'App',
	components: {
		NavigationBar,
		DownloadResumeButton,
	},
	methods: {
		handleDownloadResume(downloadIcon) {
			const { downloadResume } = useDownloadResume();
			downloadResume(downloadIcon);
		},
	},
};
</script>

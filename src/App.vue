<template>
	<navigation-bar></navigation-bar>
	<router-view class="router-view"></router-view>
</template>

<script>
import NavigationBar from './components/NavigationBar.vue';
import DownloadResumeButton from './components/reusables/DownloadResumeButton.vue';

export default {
	name: 'App',
	components: {
		NavigationBar,
		DownloadResumeButton,
	},
};
</script>

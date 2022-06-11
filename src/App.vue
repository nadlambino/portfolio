<template>
	<navigation-bar></navigation-bar>
	<router-view class="router-view"></router-view>
</template>

<script>
import NavigationBar from './pages/NavigationBar.vue';

export default {
	name: 'App',
	components: {
		NavigationBar,
	},
};
</script>

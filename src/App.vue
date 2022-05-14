<template>
	<navigation-bar></navigation-bar>
	<home-page></home-page>
</template>

<script>
import NavigationBar from './components/NavigationBar.vue';
import HomePage from './components/HomePage.vue';

export default {
	name: 'App',
	components: {
		NavigationBar,
		HomePage,
	},
};
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');
@import 'bootstrap/dist/css/bootstrap.css';

body {
	font-family: 'Montserrat';
}
</style>

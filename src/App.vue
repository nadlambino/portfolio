<template>
	<navigation-bar />
	<home-page />
	<about-page />
	<portfolio-page />
	<contact-page />
</template>

<script>
import NavigationBar from './components/NavigationBar.vue';
import HomePage from './components/HomePage.vue';
import AboutPage from './components/AboutPage.vue';
import PortfolioPage from './components/PortfolioPage.vue';
import ContactPage from './components/ContactPage.vue';

export default {
	name: 'App',
	components: {
		NavigationBar,
		HomePage,
		AboutPage,
		PortfolioPage,
		ContactPage,
	},
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');
@import 'bootstrap/dist/css/bootstrap.css';
@import './scss/main.scss';
</style>

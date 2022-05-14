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

body {
	font-family: 'Montserrat';
	overflow-x: hidden;
	background-color: antiquewhite;
	padding-bottom: 50px;

	section {
		text-align: center;
	}
}

::-webkit-scrollbar {
	width: 12px;
	background-color: transparent;
}
::-webkit-scrollbar-track {
	background-color: transparent !important;
}
::-webkit-scrollbar-thumb {
	background-color: rgb(243, 217, 186);
}
::-webkit-scrollbar-thumb:hover {
	background: rgb(248, 210, 164);
}
</style>

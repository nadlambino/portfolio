<template>
	<navigation-bar></navigation-bar>
	<router-view class="router-view ps-3 pe-3 ps-sm-5 pe-sm-5"></router-view>
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
	mounted() {
		window.addEventListener('scroll', this.scroll);
	},
	methods: {
		scroll() {
			let section = document.querySelectorAll('.section');

			section.forEach((el) => {
				let windowHeight = window.innerHeight;
				let revealTop = el.getBoundingClientRect().top;
				let revealPoint = 50;

				if (revealTop < windowHeight - revealPoint) {
					el.classList.add('section-active');
				} else {
					el.classList.remove('section-active');
				}
			});
		},
	},
};
</script>

<style lang="scss">
@import './scss/main.scss';
</style>

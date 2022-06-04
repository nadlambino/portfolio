<template>
	<navigation-bar></navigation-bar>
	<router-view class="router-view"></router-view>
</template>

<script>
import NavigationBar from './components/NavigationBar.vue';

export default {
	name: 'App',
	components: {
		NavigationBar
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
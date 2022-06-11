<template>
	<nav class="md:flex justify-between">
		<div class="nav-brand" ref="nav-brand">
			<span class="font-bold">
				<router-link to="/">Nad Lambino</router-link>
			</span>
			<span class="nav-toggler" @click="handleToggleMenu">
				<v-icon
					scale="1.5"
					name="gi-hamburger-menu"
					class="open-menu -mr-7"
					ref="open-menu"
				></v-icon>
				<v-icon
					scale="1.5"
					name="io-close-sharp"
					class="close-menu opacity-0"
					ref="close-menu"
				></v-icon>
			</span>
		</div>
		<ul
			class="nav-link -mt-96 opacity-0 md:mt-auto md:opacity-100"
			ref="menu"
		>
			<router-link to="/" @click="handleCloseMenu">
				<li>Home</li>
			</router-link>
			<router-link to="/about" @click="handleCloseMenu">
				<li>About</li>
			</router-link>
			<router-link to="/portfolio" @click="handleCloseMenu">
				<li>Portfolio</li>
			</router-link>
			<router-link to="/contact" @click="handleCloseMenu">
				<li>Contact</li>
			</router-link>
		</ul>
	</nav>
</template>

<script>
export default {
	name: 'NavigationBar',
	data() {
		return {
			show: false,
		};
	},
	watch: {
		show() {
			this.handleToggleClass();
		},
	},
	methods: {
		handleToggleMenu() {
			this.show = !this.show;
		},
		handleCloseMenu() {
			this.show = false;
		},
		handleToggleClass() {
			const navbrand = this.$refs['nav-brand'];
			const menu = this.$refs['menu'];
			// Add $el to access the element inside of icon component
			const open = this.$refs['open-menu'].$el;
			const close = this.$refs['close-menu'].$el;
			if (this.show === true) {
				menu.classList.remove('-mt-96');
				menu.classList.remove('opacity-0');
				close.classList.remove('rotate-180');
				close.classList.remove('opacity-0');
				navbrand.classList.add('shadow-md');
				open.classList.add('rotate-180');
				open.classList.add('opacity-0');
			} else {
				menu.classList.add('-mt-96');
				menu.classList.add('opacity-0');
				close.classList.add('rotate-180');
				close.classList.add('opacity-0');
				navbrand.classList.remove('shadow-md');
				open.classList.remove('rotate-180');
				open.classList.remove('opacity-0');
			}
		},
	},
};
</script>

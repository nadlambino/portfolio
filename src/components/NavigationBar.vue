<template>
	<nav class="md:flex justify-between py-4 px-8">
		<div class="flex justify-between">
			<span class="font-bold">Nad Lambino</span>
			<span class="nav-toggler" @click="handleToggleMenu">
				<v-icon scale="1.5" name="gi-hamburger-menu" v-if="!show"></v-icon>
				<v-icon scale="1.5" name="io-close-sharp" v-else></v-icon>
			</span>
		</div>
		<ul class="nav-link md:flex -mt-96 opacity-0 md:mt-auto md:opacity-100" ref="menu">
			<li><router-link to="/">Home</router-link></li>
			<li><router-link to="/about">About</router-link></li>
			<li><router-link to="/portfolio">Porfolio</router-link></li>
			<li><router-link to="/contact">Contact</router-link></li>
		</ul>
	</nav>
</template>

<script>

export default {
	name: 'NavigationBar',
	data() {
		return {
			show: false
		}
	},
	methods: {
		handleToggleMenu() {
			this.show = !this.show;
			const menu = this.$refs['menu'];
			if (this.show === true) {
				menu.classList.remove('-mt-96');
				menu.classList.remove('opacity-0');
			} else {
				menu.classList.add('-mt-96');
				menu.classList.add('opacity-0');
			}
		}
	}
};
</script>

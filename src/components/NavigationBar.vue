<template>
	<nav class="md:flex justify-between">
		<div class="flex justify-between px-8 py-4 z-10 relative">
			<span class="font-bold">
				<router-link to="/">Nad Lambino</router-link>
			</span>
			<span class="nav-toggler" @click="handleToggleMenu">
				<v-icon scale="1.5" name="gi-hamburger-menu" class="open-menu -mr-7" ref="open-menu"></v-icon>
				<v-icon scale="1.5" name="io-close-sharp" class="close-menu opacity-0" ref="close-menu"></v-icon>
			</span>
		</div>
		<ul class="nav-link -mt-96 opacity-0 md:mt-auto md:opacity-100" ref="menu">
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
			// Add $el to access the element inside of icon component
			const open = this.$refs['open-menu'].$el;
			const close = this.$refs['close-menu'].$el;
			if (this.show === true) {
				menu.classList.remove('-mt-96');
				menu.classList.remove('opacity-0');
				close.classList.remove('rotate-180');
				close.classList.remove('opacity-0');
				open.classList.add('rotate-180');
				open.classList.add('opacity-0');
			} else {
				menu.classList.add('-mt-96');
				menu.classList.add('opacity-0');
				close.classList.add('rotate-180');
				close.classList.add('opacity-0');
				open.classList.remove('rotate-180');
				open.classList.remove('opacity-0');
			}
		}
	}
};
</script>

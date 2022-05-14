<template>
	<nav
		class="navbar navbar-expand-lg navbar-light bg-light fixed-top ps-sm-5 pe-sm-5"
	>
		<div class="container-fluid">
			<a class="navbar-brand">Nad Lambino</a>
			<button
				class="navbar-toggler ms-auto"
				type="button"
				data-bs-toggle="collapse"
				data-bs-target="#navbar-nav"
				aria-controls="navbar-nav"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse text-end" id="navbar-nav">
				<ul class="nav navbar-nav ms-auto">
					<nav-link linkText="Home" link="#home" />
					<nav-link linkText="About" link="#about" />
					<nav-link linkText="Portfolio" link="#portfolio" />
					<nav-link linkText="Contact" link="#contact" />
				</ul>
			</div>
		</div>
	</nav>
</template>

<script>
import NavLink from './navbar/NavLink.vue';

export default {
	name: 'NavigationBar',
	components: {
		NavLink,
	},
};
</script>

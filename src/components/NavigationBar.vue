<template>
	<nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top ps-sm-5 pe-sm-5">
		<div class="container-fluid">
			<a class="navbar-brand">Nad Lambino</a>
			<button
				class="navbar-toggler ms-auto"
				type="button"
				data-bs-toggle="collapse"
				data-bs-target="#navbar-nav"
				aria-controls="navbar-nav"
				aria-expanded="false"
				aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse text-end" id="navbar-nav">
				<ul class="nav navbar-nav ms-auto">
					<router-link to="/" class="nav-link">Home</router-link>
					<router-link to="/about" class="nav-link">About</router-link>
					<router-link to="/portfolio" class="nav-link">Portfolio</router-link>
					<router-link to="/contact" class="nav-link">Contact</router-link>
				</ul>
			</div>
		</div>
	</nav>
</template>

<script>

export default {
	name: 'NavigationBar'
};
</script>

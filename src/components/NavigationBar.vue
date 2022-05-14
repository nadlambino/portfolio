<template>
	<nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
		<div class="container-fluid">
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
			<div
				class="collapse navbar-collapse text-end pe-lg-5 pe-2"
				id="navbar-nav"
			>
				<ul class="nav navbar-nav ms-auto">
					<li class="nav-item">
						<a class="nav-link" href="#home">Home</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="#about">About</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="#portfolio">Portfolio</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="#contact">Contact</a>
					</li>
				</ul>
			</div>
		</div>
	</nav>
</template>

<script>
export default {
	name: 'NavigationBar',
};
</script>

<style scoped>
.navbar-toggler:focus {
	outline: none;
	box-shadow: none;
}
</style>

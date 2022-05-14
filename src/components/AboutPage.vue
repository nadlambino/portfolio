<template>
	<section id="about" class="about">
		<div class="row">
			<div class="col-12 col-md-4">
				<div class="card">
					<div class="card-header">Education</div>
					<div class="card-body">
						<h5 class="card-title">Quezon City University</h5>
						<p class="card-text">
							I studied at Quezon City Polytechnic University, now
							Quezon City University. I took Bachelor of Science
							in Information Techonlogy and graduated in 2019.
						</p>
					</div>
				</div>
			</div>
			<div class="col-12 col-md-4">
				<div class="card">
					<div class="card-header">Hobby</div>
					<div class="card-body">
						<h5 class="card-title"></h5>
						<p class="card-text">
							I like playing chess. I also write poems sometimes.
							You can see some of my piece on Poetizer.
						</p>
					</div>
				</div>
			</div>
			<div class="col-12 col-md-4">
				<div class="card">
					<div class="card-header">Career</div>
					<div class="card-body">
						<h5 class="card-title">Cafe24 Philippines</h5>
						<p class="card-text">
							I am a web developer at Cafe24 Philippines. I
							started working here since 2019.
						</p>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	name: 'AboutPage',
};
</script>

<style lang="scss">
.card {
	border: none !important;
	background-color: transparent !important;

	.card-header {
		background-color: transparent !important;
	}
}
</style>

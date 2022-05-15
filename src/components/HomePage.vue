<template>
	<section class="home section-active" id="home">
		<div class="welcome-container row d-flex justify-content-center align-content-center">
			<div class="image col-sm-12 col-md-6"></div>
			<div class="welcome col-sm-12 col-md-6">
				<div class="message">
					<word-builder word="Hi there! I am" class="intro"></word-builder>
					<word-builder word="Ronald" class="name"></word-builder>
					<word-builder word="Web Developer" class="job-title"></word-builder>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import WordBuilder from './reusables/WordBuilder.vue';
export default {
	name: 'HomePage',
	components: {
		WordBuilder
	}
};
</script>

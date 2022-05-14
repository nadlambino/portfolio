<template>
	<section class="home" id="home">
		<div class="parallax d-flex align-items-center justify-content-center">
			<div class="welcome p-5">
				<p class="display-1">Hi, I am <strong>Ronald</strong></p>
				<p class="display-5">Web Developer</p>
			</div>
		</div>
	</section>
</template>

<script>
import SectionHeader from './reusables/SectionHeader.vue';

export default {
	components: { SectionHeader },
	name: 'HomePage',
};
</script>

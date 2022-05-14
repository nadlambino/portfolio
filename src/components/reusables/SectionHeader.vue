<template>
	<div class="row section-header">
		<h3>{{ headerText }}</h3>
	</div>
</template>

<script>
export default {
	name: 'SectionHeader',
	props: ['headerText'],
};
</script>

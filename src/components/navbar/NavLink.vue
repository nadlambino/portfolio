<template>
	<li class="nav-item">
		<a class="nav-link" :href="link">{{ linkText }}</a>
	</li>
</template>

<script>
export default {
	name: 'NavLink',
	props: ['linkText', 'link'],
};
</script>

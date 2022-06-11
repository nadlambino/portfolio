<template>
	<div :class="['timeline-content', leftPositionClass]">
		<span class="timeline-dot"></span>
		<span class="timeline-arrow"></span>
		<div class="timeline-event">
			<span class="timeline-date">{{ dateRange }}</span>
			<h1 class="timeline-title">{{ data.title }}</h1>
			<p class="timeline-details" v-html="data.details"></p>
		</div>
	</div>
</template>

<script>
export default {
	name: 'TimelineContent',
	props: {
		data: {
			type: Object,
			required: true,
		},
		left: {
			type: Boolean,
			default: () => false,
		},
	},
	computed: {
		dateRange() {
			return this.data.hasOwnProperty('until')
				? `${this.data.date} - ${this.data.until}`
				: this.data.date;
		},
		leftPositionClass() {
			return this.left === true ? 'timeline-content-left' : '';
		},
	},
};
</script>

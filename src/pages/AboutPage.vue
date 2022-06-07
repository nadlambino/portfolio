<template>
	<section id="about" class="h-full">
		<HistoryTimeline :histories="histories" />
	</section>
</template>

<script>
import HistoryTimeline from '../components/reusables/HistoryTimeline.vue';

export default {
    name: "AboutPage",
    components: { HistoryTimeline },
    data() {
        return {
            histories: [
                {
                    date: new Date(),
                    title: 'New stacks on my arsenal',
                    details: 'I learned about Vue!'
                },
                {
                    date: new Date(),
                    title: 'New stacks on my arsenal',
                    details: 'I learned about Vue!'
                },
                {
                    date: new Date(),
                    title: 'New stacks on my arsenal',
                    details: 'I learned about Vue!'
                },
                {
                    date: new Date(),
                    title: 'New stacks on my arsenal',
                    details: 'I learned about Vue!'
                }
            ]
        }
    }
};
</script>

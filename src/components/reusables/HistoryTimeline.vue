<template>
    <div class="timeline-container">
        <div class="timeline-track"></div>
        <TimelineContent 
            v-for="(history, key) in sortedHistory" 
            :key="key" 
            :data="history" 
            :left="(key % 2) !== 0" 
        />
    </div>
</template>

<script>
import TimelineContent from './history-timeline/TimelineContent.vue';

export default {
    name: 'HistoryTimeline',
    components: {TimelineContent},
    props : {
        histories: {
            type: Array,
            required: true
        }
    },
	computed: {
		sortedHistory() {
			return this.histories.sort((historyA, historyB) => {
				return dayjs(historyB.date) - dayjs(historyA.date);
			})
		}
	}
}
</script>
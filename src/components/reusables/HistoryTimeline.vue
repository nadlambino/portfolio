<template>
    <div class="timeline-container">
        <div class="timeline-track"></div>
        <TimelineContent 
            v-for="(history, key) in histories" 
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
    }
}
</script>
<template>
    <div :class="['timeline-content', leftPositionClass]">
        <span class="timeline-dot"></span>
        <span class="timeline-arrow"></span>
        <div class="timeline-details">
            <h2>{{data.date}}</h2>
            <h1>{{data.title}}</h1>
            <p>{{data.details}}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TimelineContent',
    props: {
        data: {
            type: Object,
            required: true
        },
        left: {
            type: Boolean,
            default: () => (false)
        }
    },
    computed: {
        leftPositionClass() {
            return this.left === true ? 'timeline-content-left' : ''
        }
    }
}
</script>
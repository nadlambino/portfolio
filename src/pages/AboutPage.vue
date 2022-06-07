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
                    date: dayjs('April 2019').format('MMMM YYYY'),
                    title: 'Graduation Day!',
                    details: 'I graduated in <strong>Bachelor of Science in Information Technology</strong> from Quezon City University '
                },
                {
                    date: dayjs('May 20 2019').format('DD MMMM YYYY'),
                    title: 'Journey Started',
                    details: 'I immediately got hired by Cafe24 Philippines Inc. I learned a lot of things here about web development.'
                },
                {
                    date: dayjs('Aug 2019').format('MMMM YYYY'),
                    title: 'Worked On A Real Project!',
                    details: 'This is my first ever experience to work on a real project after my training. I was introduced to Laravel Framework. Around this time, I also learned about React JS.'
                },
                {
                    date: dayjs('Feb 2020').format('MMMM YYYY'),
                    title: 'New Project',
                    details: 'I was introduced to my second project. This time is to revamp the project and use Vue JS framework. I immediately got hooked on how easy and beginner friendly Vue JS is.'
                },
                {
                    date: dayjs('May 2020').format('MMMM YYYY'),
                    title: 'Started A New Project From Scratch',
                    details: 'This time, I was assigned to a team who will revamp a legacy application and build it from scratch. We used Vue JS here and also Bootstrap.'
                },
                {
                    date: dayjs('May 2021').format('MMMM YYYY'),
                    title: 'Explore Other Web Technologies',
                    details: 'I got interested to learn GraphQL, so I did learned it even when I wasn\'t able to apply it on a real project.'
                },
                {
                    date: dayjs('May 2022').format('MMMM YYYY'),
                    title: 'Explore Other Web Technologies Part 2',
                    details: 'I started to learn more things aside from everything I use at work. I created small projects with React JS as a refresher. I created simple chat application with React and Firebase. I started to develop my Portfolio and learned TailwindCSS to use it.'
                }
            ]
        }
    }
};
</script>

<template>
	<section id="about" class="h-full">
		<HistoryTimeline :histories="histories" />
	</section>
</template>

<script>
import HistoryTimeline from '../components/reusables/HistoryTimeline.vue';

export default {
	name: 'AboutPage',
	components: { HistoryTimeline },
	data() {
		return {
			histories: [
				{
					date: dayjs('April 2019').format('MMMM YYYY'),
					title: 'Graduation Day',
					details:
						'I graduated in Quezon City University with the degree in Bachelor of Science in Information Technology',
				},
				{
					date: dayjs('May 20 2019').format('DD MMMM YYYY'),
					title: 'Career Journey',
					details:
						'I got hired by Cafe24 Philippines and worked as a Junior Web Developer.',
				},
				{
					date: dayjs('Aug 2019').format('MMMM YYYY'),
					title: 'Working On A Real Project',
					details:
						'<li>After months of training, I was deployed on my first project to support in the development and maintain the application.</li>' +
						"<li>This project is an Influencer Reward application that allows a mall owner to register their influencers and reward them based on the product purchased by customers using the influencer's link.</li>" +
						'<li>I learned about Laravel and ReactJS in this project.</li>',
				},
				{
					date: dayjs('Feb 2020').format('MMMM YYYY'),
					title: 'New Project',
					details:
						'<li>I was introduced to my 2nd project.</li>' +
						'<li>The project is a web application that can be embedded and allows the mall owner to sync their instagram images and display it in the mall webpage.</li>' +
						'<li>I learned about VueJS in this project</li>',
				},
				{
					date: dayjs('May 2020').format('MMMM YYYY'),
					title: 'First Official Project',
					details:
						'<li>I was assigned to revamp a legacy application to enhance the navigation and simplify the processes.</li>' +
						'<li>The project is an Employee Information System which allows the employee to view their information, attendance, apply for leave application, and monitor their leave credits.</li>' +
						'<li>This also allows the admin to monitor each employees attendance, leave applications, customize leave rules, and specify work days and holidays.</li>' +
						'<li>In this project, I learned about docker, redis, laravel queues, and server sent events.</li>',
				},
				{
					date: dayjs('May 2021').format('MMMM YYYY'),
					until: dayjs('May 2022').format('MMMM YYYY'),
					title: 'Exploring Web Technologies',
					details:
						'<li>Aside from what I used at work, I also explore other web technologies such as GraphQL, VueApollo, Laravel Lighthouse, Firebase, and TailwindCSS.</li>' +
						'<li>I also bought a VueJS and ReactJS course to further improve my knowledge on my current stacks.</li>',
				},
			],
		};
	},
};
</script>

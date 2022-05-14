import HomePage from './../components/HomePage.vue';
import AboutPage from './../components/AboutPage.vue';

const navbar_routes = [
	{ name: 'home', path: '/', component: HomePage },
	{ nme: 'about', path: '/about', component: AboutPage },
];

export { navbar_routes };

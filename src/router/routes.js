import HomePage from './../pages/HomePage.vue';
import AboutPage from './../pages/AboutPage.vue';
import PortfolioPage from './../pages/PortfolioPage.vue'
import ContactPage from './../pages/ContactPage.vue'

export const routes = [
	{ name: 'home', path: '/', component: HomePage },
	{ name: 'about', path: '/about', component: AboutPage },
	{ name: 'portfolio', path: '/portfolio', component: PortfolioPage },
	{ name: 'contact', path: '/contact', component: ContactPage },
];

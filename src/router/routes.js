import HomePage from './../components/HomePage.vue';
import AboutPage from './../components/AboutPage.vue';
import PortfolioPage from './../components/PortfolioPage.vue'
import ContactPage from './../components/ContactPage.vue'

export const routes = [
	{ name: 'home', path: '/', component: HomePage },
	{ nme: 'about', path: '/about', component: AboutPage },
	{ nme: 'portfolio', path: '/portfolio', component: PortfolioPage },
	{ nme: 'contact', path: '/contact', component: ContactPage },
];

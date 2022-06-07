import { createApp } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';
import { routes } from './router/routes';
import App from './App.vue';
import './scss/main.scss';
import { OhVueIcon, addIcons } from 'oh-vue-icons';
import { GiHamburgerMenu, IoCloseSharp } from 'oh-vue-icons/icons';
import dayjs from 'dayjs';

window.dayjs = dayjs;

const app = createApp(App);

const router = createRouter({
	history: createWebHashHistory(),
	routes,
});

app.use(router);

addIcons(GiHamburgerMenu);
addIcons(IoCloseSharp);
app.component('v-icon', OhVueIcon);

app.mount('#app');

import './bootstrap';
import {createApp} from 'vue'
import { createRouter, createWebHistory } from 'vue-router';
import App from "./components/App.vue";
import Contact from "./components/Contact.vue";
import Home from "./components/Home.vue";



const routes = [
    {path: '/contact', component:Contact},
    {path: '/', component:Home},
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

const app = createApp(App).use(router);

app.component('contact', Contact);
app.component('home', Home);

app.mount("#app");

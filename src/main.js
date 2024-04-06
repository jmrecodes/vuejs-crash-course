import { createApp } from 'vue';
import App from './App.vue';
import {createRouter, createWebHistory} from 'vue-router';

import Posts from "@/components/Posts.vue";
import Home from "@/components/Home.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: Home },
        { path: '/posts', component: Posts }
    ]
});



// Apply the router to the app
createApp(App)
    .use(router)
    .mount('#app');

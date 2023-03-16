import { createRouter, createWebHistory } from "vue-router";

// PAGES
import HomePage from '../components/pages/HomePage.vue';


// ROUTES

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', name: 'home', component: HomePage },
    ]
});

export { router };
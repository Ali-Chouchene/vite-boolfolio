import { createRouter, createWebHistory } from "vue-router";

// PAGES
import HomePage from '../components/pages/HomePage.vue';


// ROUTES

export default createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', name: 'home', component: HomePage },
    ]
});

export { router };
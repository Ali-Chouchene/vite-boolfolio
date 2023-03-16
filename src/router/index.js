import { createRouter, createWebHistory } from "vue-router";

// PAGES
import HomePage from '../components/pages/HomePage.vue';
import ProjectDetail from '../components/pages/ProjectDetail.vue';

// ROUTES

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', name: 'home', component: HomePage },
        { path: '/projects/:id', name: 'project-detail', component: ProjectDetail },
    ]
});

export { router };
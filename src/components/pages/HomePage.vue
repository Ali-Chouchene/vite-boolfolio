<script>
import axios from 'axios';
import ProjectsMain from '../projects/ProjectsMain.vue'
const apiBase = 'http://127.0.0.1:8000/api/';
export default {
    name: 'App',
    components: { ProjectsMain },
    data: () => ({
        projects: []
    }),
    methods: {
        fetchApi() {
            axios.get(apiBase + 'projects').then(res => {
                this.projects = res.data;
            });
        }
    },
    created() {
        this.fetchApi();
    }
};
</script>

<template>
    <div class="container py-5">
        <ProjectsMain :projects="projects"></ProjectsMain>
    </div>
</template>
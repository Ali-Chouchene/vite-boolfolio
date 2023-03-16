<script>
import axios from 'axios';
import ProjectCard from '../projects/ProjectCard.vue';
const apiBase = 'http://127.0.0.1:8000/api/';
export default {
    name: 'ProjectsDetail',
    components: { ProjectCard },
    data: () => ({
        project: [],
    }),
    methods: {
        getProject() {
            const endpoint = apiBase + 'projects/' + this.$route.params.id;
            axios.get(endpoint).then(res => {
                this.project = res.data;
            }).catch(err => {
                console.log(err)
            })
        }
    },
    created() {
        this.getProject();
    }
};

</script>

<template>
    <ProjectCard :project="project" />
</template>
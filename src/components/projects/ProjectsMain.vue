<script>

import ProjectCard from './ProjectCard.vue';
export default {
    name: 'ProjectsMain',
    components: { ProjectCard, ProjectCard },
    props: { projects: Array }
}
</script>

<template>
    <section id="projects-main" class="">
        <ProjectCard class="my-5" v-for="project in projects" :key="project.id" :project="project"></ProjectCard>
    </section>
</template>
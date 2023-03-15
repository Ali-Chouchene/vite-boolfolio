<script >
import axios from 'axios';
import ProjectsMain from './components/projects/ProjectsMain.vue'
import AppHeader from './components/AppHeader.vue';
const apiBase = 'http://127.0.0.1:8000/api/';
export default {
  name: 'App',
  components: { AppHeader, ProjectsMain },
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
  <AppHeader></AppHeader>
  <main class="container">
    <ProjectsMain :projects="projects"></ProjectsMain>
  </main>
</template>

<style scoped></style>

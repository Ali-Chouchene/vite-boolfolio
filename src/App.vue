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

<template >
  <AppHeader></AppHeader>
  <main id="base">
    <RouterView />
  </main>
</template>

<style lang="scss">
#base {
  background-image: url(../public/bg.jpg);
  background-size: contain;
  background-position: center;
  margin: 0 auto;
}
</style>


 <!-- <div class="container py-5">
  <ProjectsMain :projects="projects"></ProjectsMain>
</div> -->
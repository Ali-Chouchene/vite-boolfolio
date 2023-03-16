<script >
import AppHeader from './components/AppHeader.vue';
export default {
  name: 'App',
  components: { AppHeader, },
  data: () => ({

  }),

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


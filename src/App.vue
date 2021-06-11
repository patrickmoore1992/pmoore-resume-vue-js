<template>
  <v-app style="background-color: #fafafa">
    <NavDrawer v-model="isNavDrawerOpen"/>
    <v-content>
      <v-container fluid>
        <router-view/>
      </v-container>
    </v-content>
    <v-footer fixed app padless dark>
      <v-spacer/>
      <span>Patrick Thomas Moore, Est. July 3rd, 1992</span>&nbsp;
    </v-footer>
  </v-app>
</template>

<script>
import NavDrawer from './components/NavDrawer';

export default {
  name: 'App',
  components: {
    NavDrawer,
  },

  data: () => ({
    isNavDrawerOpen: true
  }),
};
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css?family=Roboto+Condensed');
@import url("https://fonts.googleapis.com/css2?family=Lobster&display=swap");
</style>

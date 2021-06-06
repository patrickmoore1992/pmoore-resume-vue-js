<template>
  <v-app style="background-color: #fafafa">
    <!-- <v-app-bar style="opacity: .9; color: #0e0e14" app clipped-left dark color="#0e0e14">
      <v-app-bar-nav-icon @click="isNavDrawerOpen = !isNavDrawerOpen"/>
      <span 
        style="font-family: 'Lobster', cursive; color: white">
          "If wishes were fishes we'd all cast nets"
      </span>
    </v-app-bar> -->
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

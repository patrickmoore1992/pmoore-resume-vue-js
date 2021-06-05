<template>
  <v-app style="background-color: #fafafa">
    <v-app-bar style="opacity: .9" app clipped-left color="#0e0e14" dark>
      <v-app-bar-nav-icon @click="isNavDrawerOpen = !isNavDrawerOpen" />
    </v-app-bar>
    <NavDrawer v-model="isNavDrawerOpen"/>
    <v-content>
      <v-container fluid>
        <router-view/>
      </v-container>
    </v-content>

    <v-footer fixed app padless dark>
      <v-spacer></v-spacer><span>Last Updated June 2021</span>&nbsp;
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
</style>

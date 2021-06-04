<template>
  <v-app>
    <v-app-bar
      app
      clipped-left
      color="#092d3d"
      dark
    >
      <v-app-bar-nav-icon @click="isNavDrawerOpen = !isNavDrawerOpen" />
      <v-toolbar-title>Patrick T. Moore</v-toolbar-title>
    </v-app-bar>
    <NavDrawer/>
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
    //
  }),
};
</script>

<template>
  <v-app style="background-color: #2a2b2b">
    <v-app-bar
      app
      clipped-left
      color="#0e0e14"
      dark
    >
      <v-app-bar-nav-icon @click="isNavDrawerOpen = !isNavDrawerOpen" />
      <v-toolbar-title class="flex text-center">Patrick T. Moore</v-toolbar-title>
    </v-app-bar>
    <NavDrawer v-model="isNavDrawerOpen"/>
      <v-content>
        <v-container fluid>
          <router-view/>
        </v-container>
      </v-content>
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

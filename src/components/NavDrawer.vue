<template>
  <v-navigation-drawer 
    dark color="#0e0e14" 
    app 
    clipped 
    v-bind="$attrs" 
    class="py-2"
  >
    <v-list dense nav class="py-0">
      
      <!-- TODO: put into a list and iterate -->
      <v-list-item :to="'/overview'">
        <v-list-item-icon>
          <v-icon>mdi-all-inclusive</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>Overview</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list-item :to="'/work-experience'">
        <v-list-item-icon>
          <v-icon>mdi-briefcase</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>Work Experience</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list-item :to="'/education'">
        <v-list-item-icon>
          <v-icon>mdi-bookshelf</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>Education</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list-item :to="'/site-info'">
        <v-list-item-icon>
          <v-icon>mdi-head-question-outline</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>How was this site built?</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list-item :to="'/contact'">
        <v-list-item-icon>
          <v-icon>mdi-card-account-mail-outline</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>Contact</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

    </v-list>
  </v-navigation-drawer>
</template>

<script>
  export default {
    name: 'NavDrawer',
    data: () => ({}),
  }
</script>

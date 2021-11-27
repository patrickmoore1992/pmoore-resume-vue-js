<template>
  <v-navigation-drawer 
    permanent
    dark 
    color="#0e0e14"
    style="opacity: .9"
    app 
    clipped 
    v-bind="$attrs" 
    class="py-2">
    <v-list 
      dense 
      nav 
      class="py-0">
      <v-list-item >
        <v-list-item-avatar size="35">
          <v-img src="@/assets/patrick_avatar.png"></v-img>
        </v-list-item-avatar>
        <v-list-item-content>
          <b>Patrick T. Moore</b>
        </v-list-item-content>
      </v-list-item>
      
      <!-- TODO: put into a list and iterate -->
      <v-list-item :to="'/overview'">
        <v-list-item-icon>
          <v-icon>mdi-all-inclusive</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>Overview</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list-item :to="'/experience'">
        <v-list-item-icon>
          <v-icon>mdi-briefcase</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>Experience & Skills</v-list-item-title>
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

      <v-list-item :to="'/siteinfo'">
        <v-list-item-icon>
          <v-icon>mdi-head-question-outline</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>How was this site built?</v-list-item-title>
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

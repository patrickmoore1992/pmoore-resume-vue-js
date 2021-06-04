<template>
  <v-navigation-drawer dark color="#092d3d" app clipped v-bind="$attrs" class="py-2">
    <v-list dense nav class="py-0">
      <v-list-item :to="{ name: 'Phone Lookup' }">
        <v-list-item-icon>
          <v-icon>mdi-magnify</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>Education</v-list-item-title>
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

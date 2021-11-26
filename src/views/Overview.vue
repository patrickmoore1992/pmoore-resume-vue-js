<template>
  <v-container fluid>
      <v-row>
        <v-col align="center" justify="center">
          <transition name="fade">
            <v-avatar v-if="seen" size="150">
              <v-img src="@/assets/patrick_avatar.png"/>
            </v-avatar>
          </transition>
        </v-col>
      </v-row>
      <v-row >
        <v-col align="center" justify="center" width='50' sm>
          <transition name="fade">
            <h1 v-if="seen" style="font-family: Roboto"><strong>Patrick T. Moore</strong></h1>
          </transition>
        </v-col>
      </v-row>
      <v-row>
        <v-col align="center" justify="center" width='50' sm>
          <transition name="fade">
            <span 
              v-if="seen" 
              style="font-family: Roboto; color: grey">
              <strong>
                Full-stack software engineer looking for exciting and challenging opportunities.
              </strong>
            </span>
          </transition>
        </v-col>
      </v-row>
      <v-row>
        <v-col align="center" justify="center" width='50' sm>
          <transition name="fade">
            <span 
              v-if="seen" 
              style="font-family: Roboto; color: grey">
                Former business major turned data engineer with a focus in operations and scalable web application development.
            </span>
          </transition>
        </v-col>
      </v-row>
      <OverviewFooter/>
  </v-container>
</template>

<script>
import OverviewFooter from '@/components/OverviewFooter.vue'

export default {
  name: 'overview',

  components: {
    OverviewFooter
  },
  
  data: () => ({
    seen: false,
  }),

  mounted() {
    this.seen = !this.seen
  }
}
</script>
<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 2s
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0
}
</style>
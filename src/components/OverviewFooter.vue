<template>
  <v-container fluid>
    <!-- TODO: v-for -->
    <v-row dense>
      <v-col align="center" justify="center">
        <transition name="fade">
          <v-btn v-if="seen" plain large href="https://twitter.com/mcpattigans"><b>Tweets</b>
            <v-img width="45px" height="45px" src="@/assets/twitter_logo.png"/>
          </v-btn>
        </transition>
        <transition name="fade">
          <v-btn v-if="seen" plain large href="https://github.com/patrickmoore1992"><b>Code</b>
            <v-img width="45px" height="45px" src="@/assets/github_logo.png"/>
          </v-btn>
        </transition>
        <transition name="fade">
          <v-btn v-if="seen" plain large href="https://www.linkedin.com/in/patrick-moore-4748824b/"><b>LinkedIn</b>
            <v-img width="45px" height="45px" src="@/assets/linkedin_logo.png"/>
          </v-btn>
        </transition>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default ({
  name: 'OverviewFooter',

  data: () => ({
    seen: false
  }),

  mounted() {
    this.seen = !this.seen
  }
})
</script>
<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 2s
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0
}
</style>
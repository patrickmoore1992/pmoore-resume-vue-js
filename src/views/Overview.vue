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
            <h1 v-if="seen" style="font-family: Roboto"><strong>Patrick Moore</strong></h1>
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
                Former business major turned data engineer with a focus in operations and scalable web tool development.
            </span>
          </transition>
        </v-col>
      </v-row>

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

export default {
  name: 'overview',  
  
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
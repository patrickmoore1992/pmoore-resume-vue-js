<template>
  <v-container fluid>
    <v-row>
      <v-col/>
      <v-col>
        <transition name="fade">
          <div v-if="seen">
            <span>
              <b>AWS High-Level Architecture</b>
            </span>
            <v-img
              src="@/assets/resume-site-architecture.png"
              max-height="500"
              max-width="500">
            </v-img>
          </div>
        </transition>
      </v-col>
      <v-col/>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'siteinfo',
  
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
<template>
  <v-container fluid>
    
    <v-row>
      <v-col align="center" justify="center">
        <transition name="fade">
          <h1 style="font-family: Roboto" v-if="seen">
            <b>University of Central Arkansas</b>
          </h1>
        </transition>    
      </v-col>
    </v-row>

    <v-row>
      <v-col align="center" justify="center">
        <transition name="fade">
          <span style="font-family: Roboto; color: grey" v-if="seen">
            <b>Management Information Systems, BBA</b>
          </span>
        </transition>    
      </v-col>
    </v-row>

    <v-row>
      <v-col align="center" justify="center">
        <transition name="fade">
          <span style="font-family: Roboto; color: grey" v-if="seen">
            Graduated May 2014
          </span>
        </transition>    
      </v-col>
    </v-row>

    <v-row>
      <v-col align="center" justify="center">
        <transition name="fade">
          <!-- <v-timeline v-if="seen">
            <v-timeline-item>timeline item</v-timeline-item>
            <v-timeline-item>timeline item</v-timeline-item>
            <v-timeline-item>timeline item</v-timeline-item>
          </v-timeline> -->
        </transition>    
      </v-col>
    </v-row>

  </v-container>
</template>

<script>
export default {
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
  transition: opacity 3.5s
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0
}
</style>
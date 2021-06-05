<template>
  <v-container fluid>
    <v-row>
      <v-col>
        <transition name="fade">
          
          <!-- TODO: Build out your form here. -->
          <v-card v-if="seen">
            <v-card-title>Contact Me Form</v-card-title>
          </v-card>

        </transition>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
  name: 'ContactForm',

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
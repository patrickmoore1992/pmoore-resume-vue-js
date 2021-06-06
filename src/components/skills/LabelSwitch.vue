<template>
  <v-container fluid>
    <v-row>
      <v-col>
        <transition name="fade">
          <v-switch
            v-if="seen"
            v-model="toggled"
            label="Toggle Labels"
            color="indigo darken-3"
            @click="onToggle()"
            hide-details/>
        </transition>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default ({
  name: 'LabelSwitch',

  data: () => ({
    toggled: false,
    seen: false,
    showAll: false
  }),

  methods: {
    onToggle() {
      this.showAll = !this.showAll
      this.$emit('toggled', this.showAll)
    }
  },

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
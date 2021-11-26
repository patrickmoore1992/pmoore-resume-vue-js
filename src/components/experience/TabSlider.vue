<template>
  <v-container fluid>
    <v-row>
      <v-col>
        <transition name="fade">
          <v-tabs
            v-if="seen"
            centered 
            v-model="tab" 
            background-color="transparent" 
            color="black" 
            grow>
            <v-tabs-slider/>
            <v-tab 
              @click="tabSwitch(index)" 
              v-for="(tab, index) in tabs" 
              :key="index">
                {{tab.title}}
            </v-tab>
          </v-tabs>
        </transition>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default ({
  name: 'TabSlider',

  data: () => ({
    tab: null,
    seen: false,
    tabs: [
      { title: 'Skills' },
      { title: 'Work Experience' }
    ],
  }),

  methods: {
    tabSwitch(index) {
      this.$emit('switched', index)
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
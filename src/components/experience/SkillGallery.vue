<template>
  <v-container fluid>
    <!-- Label -->
    <v-row>
      <v-col>
        <transition name="fade">
          <h3 v-if="seen" style="font-family: Roboto"><strong>{{ label }}</strong></h3>
        </transition>
      </v-col>
    </v-row>
    <!-- Image list -->
    <v-row>
      <v-col>
        <ul style="display: grid;grid-template-columns:repeat(15,1fr);">
          <li v-for="(item, i) in skillObjList" :key="i" style="display: block">
            <v-tooltip v-model="item.show" bottom>
              <template v-slot:activator="{ on, attrs }">
                <transition name="fade">  
                  <v-img
                    v-if="seen"
                    v-bind="attrs"
                    v-on="on"
                    contain 
                    v-bind:src="item.src" 
                    height="50px" 
                    width="50px"/>
                </transition>
              </template>
              <span>{{ item.name }}</span>
            </v-tooltip>
          </li>
        </ul>  
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default ({
  props: ['skillObjList', 'label'],
  name: 'SkillGallery',

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
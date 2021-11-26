<template>
  <v-row align="center" justify="center" style="margin-top: 50px">
    <v-col style="max-width: 50%">
      <transition name="fade">
        <v-timeline align-top dense>
          <v-timeline-item color="grey" small>
            <div>
              <h4 style="font-family: Roboto; color: grey">
                <b>{{ this.title }}</b>, {{ this.company }}
              </h4>
              <h4 style="font-family: Roboto"><b>{{ this.dateRange }}</b></h4>
              <div
                style="margin-top: 10px"
                v-for="(description, index) in this.descriptions"
                :key="index">
                <span 
                  style="font-family: Roboto; color: grey; margin-top: 50px">
                  {{ description }}
                </span>
              </div>
            </div>
          </v-timeline-item>
        </v-timeline>
      </transition>
    </v-col>
  </v-row>
</template>

<script>
export default ({
  name: 'JobDescription',
  props: ['dateRange', 'title', 'company', 'descriptions'],
  data: () => ({
    test: []
  }),
  mounted() {
    this.test = this.descriptions
  }
})
</script>
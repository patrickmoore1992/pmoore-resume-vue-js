<template>
  <v-container fluid>

    <v-form v-model="valid">
      <v-row align="center" justify="center">
          <h3 style="font-family: Roboto; color">Contact Me</h3>
      </v-row>

      <v-row>
        <v-col align="center" justify="center">
          <v-text-field
            v-model="firstname"
            :rules="nameRules"
            :counter="20"
            label="First name"
            required
            style="max-width: 50%"
          ></v-text-field>
        </v-col>
      </v-row>
      
      <v-row>
        <v-col  align="center" justify="center">
          <v-text-field
            v-model="lastname"
            :rules="nameRules"
            :counter="20"
            label="Last name"
            required
            style="max-width: 50%"
          ></v-text-field>
        </v-col>
      </v-row>

      <v-row>
        <v-col align="center" justify="center">
          <v-text-field
            v-model="email"
            label="E-mail Address"
            required
            :rules="emailRules"
            style="max-width: 50%"
          ></v-text-field>
        </v-col>
      </v-row>

      <v-row>
        <v-col align="center" justify="center">
          <v-textarea v-model="description" label="Comments" style="max-width: 50%"/>
        </v-col>
      </v-row>

      <!-- Submit Form -->
      <v-row>
        <v-col align="center" justify="center">
          <v-btn
            :disabled="!valid"
            @click="submit"
            x-large 
            plain
            rounded
            tile>
            Submit
          </v-btn>
        </v-col>
      </v-row>
  </v-form>
  </v-container>
</template>

<script>
export default {
  name: 'ContactForm',

  data: () => ({
    seen: false,
    valid: false,
    firstname: '',
    lastname: '',
    email: '',
    description: '',
    nameRules: [
      v => !!v || 'Name is required',
      v => v.length <= 20 || 'Name must be less than 10 characters',
    ],
    emailRules: [
      v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/.test(v)
    ]
  }),
  
  mounted() {
      this.seen = !this.seen
  },

  methods: {
    validate () {
      this.$refs.form.validate()
     },
      submit () {
        alert('Submitting form.')
      }
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
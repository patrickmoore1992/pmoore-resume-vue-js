<template>
  <v-container fluid>

    <!-- GENERIC SCHOOL/DEGREE INFO -->
    <v-row>
      <v-col align="center" justify="center">
        <transition name="fade">
          <v-img v-if="seen" src="@/assets/education/uca_logo.png" max-height="150" max-width="150"/>
        </transition>    
      </v-col>
    </v-row>

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
          <h3 style="font-family: Roboto; color: grey" v-if="seen">
            Management Information Systems, BBA
          </h3>
        </transition>    
      </v-col>
    </v-row>

    <v-row>
      <v-col align="center" justify="center">
        <transition name="fade">
          <span style="font-family: Roboto; color: grey" v-if="seen">
            Fall 2010 - Spring 2014
          </span>
        </transition>    
      </v-col>
    </v-row>

    <v-row>
      <v-col align="center" justify="center">
        <transition name="fade">
          <v-divider v-if="seen" light width='70%'/>
        </transition>    
      </v-col>
    </v-row>

    <!-- RELEVANT COURSEWORK -->
    <!-- TODO: Convert this from simple-table into like a v-list or something. -->
    <v-row>
      <v-col align="center" justify="center">
        <transition name="fade">
          <!-- Turn into a component. -->
          <v-simple-table dense v-if="seen" height="300px">
            <template v-slot:default>
              <thead>
                <tr>
                  <th 
                    class="text-center" 
                    style="color: black">
                      <h3>Relevant Coursework</h3>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr 
                  class="text-center" 
                  v-for="item in courses" 
                  :key="item.name">
                  <td>{{ item.name }}</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </transition>    
      </v-col>
    </v-row>

    <v-row>
      <v-col align="center" justify="center">
        <transition name="fade">
          <v-divider v-if="seen" light width='70%'/>
        </transition>    
      </v-col>
    </v-row>

    <!-- STUDENT ORGANIZATIONS -->
    <v-row>
      <v-col align="center" justify="center">
        <transition name="fade">
          <h3 v-if="seen" style="font-family: Roboto">Student Organizations</h3>
        </transition>    
      </v-col>
    </v-row>

    <v-row align="center" justify="center">
      <v-col>
        <transition name="fade">
          <v-card
            v-if="seen"
            class="mx-auto"
            max-width="800"
            tile>
            <v-list-item three-line>
              <v-list-item-content>
                <v-list-item-title><b>Student Activities Board</b><v-divider light/></v-list-item-title>
                <v-list-item-subtitle style="padding-bottom: 15px; padding-top: 5px;">
                    The UCA Student Activities Board is responsible for deciding how to allocate the student activity fee obtained
                    from students' tuition costs for various campus events.
                </v-list-item-subtitle>
                <v-list-item-subtitle>
                  <b>Executive Comittee - Vice President</b> - August 2013 - May 2014
                </v-list-item-subtitle>
                <v-list-item-subtitle>
                 <b>Executive Comittee - Comedy Chair</b> - August 2012 - May 2013
                </v-list-item-subtitle>
                <v-list-item-subtitle>
                 <b>General Member</b> - August 2011 - May 2012
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-card>
        </transition>    
      </v-col>

      <v-col>
        <transition name="fade">
          <v-card
            v-if="seen"
            class="mx-auto"
            max-width="800"
            tile>
            <v-list-item two-line>
              <v-list-item-content>
                <v-list-item-title><b>Business Information Technology (BIT) Club</b><v-divider light/></v-list-item-title>
                <v-list-item-subtitle style="padding-bottom: 15px; padding-top: 5px;">
                    The BIT club sponsored various speakers from the local tech community to come and give lectures
                    about the various fields/technologies that they worked with.
                </v-list-item-subtitle>
                <v-list-item-subtitle>
                  <b>Officer</b> - August 2013 - May 2014
                </v-list-item-subtitle>
                <v-list-item-subtitle>
                 <b>General Member</b> - August 2011 - May 2013
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-card>
        </transition>    
      </v-col>
    </v-row>

    <v-row>
      <v-col align="center" justify="center">
        <transition name="fade">
          <v-divider v-if="seen" light width='70%'/>
        </transition>    
      </v-col>
    </v-row>

    <!-- Picture Gallery -->
    <v-row>
      <v-col align="center" justify="center">
        <transition name="fade">
           <v-carousel>
            <v-carousel-item
              v-for="(item,i) in items"
              :key="i"
              :src="item.src"
              reverse-transition="fade-transition"
              transition="fade-transition"
            />
        </v-carousel>
        </transition>    
      </v-col>
    </v-row>

  </v-container>
</template>

<script>
export default {
  data: () => ({
    seen: false,
    courses: [
        { name: 'Computer Science I & II' },
        { name: 'Data Structures' },
        { name: 'Database Applications' },
        { name: 'Database Management Systems' },
        { name: 'Assembly Language & Computer Organization' },
        { name: 'Software Development in Java' },
        { name: 'Telecommunications & Computer Networking' },
        { name: 'Advanced Web Design' },
        { name: 'Programming in COBOL' },
        { name: 'Systems Analysis & Design' },
        { name: 'Managing Production & Operations' },
        { name: 'Managing People & Work' },
        { name: 'Managing Policies & Strategies' },
        { name: 'Accounting I & II' },
        { name: 'Managerial Finance' },
        { name: 'Business Law' },
        { name: 'Macro & Micro Economics' },
    ],
    studentOrganizations: [
        { name: 'Student Activities Board' },
        { name: 'Business Information Technology (BIT) Club' },
    ],
    items: [
        { src: require('@/assets/education/sab1.png') },
        { src: require('@/assets/education/sab2.png') },
        { src: require('@/assets/education/sab3.png') },
        { src: require('@/assets/education/bmb1.png') },
      ],
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
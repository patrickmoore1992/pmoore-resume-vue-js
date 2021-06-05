<template>
  <v-container fluid>
    <!-- Convert/move this to a toggle switch and add ability to disable v-tooltip while active -->
    <!-- <v-row>
      <v-col>
        <v-btn @click="toggleLabels()">test</v-btn>
      </v-col>
    </v-row> -->

    <!-- TODO: Make these a component! -->
    <!-- Programming Language Logos -->
    <v-row>
      <v-col>
        <transition name="fade">
          <h3 v-if="seen" style="font-family: Roboto"><strong>Languages:</strong></h3>
        </transition>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <ul style="display: grid;grid-template-columns:repeat(15,1fr);">
          <li v-for="(item, i) in languages" :key="i" style="display: block">
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

    <!-- Framework Logos -->
    <v-row>
      <v-col>
        <transition name="fade">
          <h3 v-if="seen" style="font-family: Roboto"><strong>Frameworks:</strong></h3>
        </transition>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <ul style="display: grid;grid-template-columns:repeat(15,1fr);">
          <li v-for="(item, i) in frameworks" :key="i" style="display: block">
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

    <!-- Cloud Service Logos -->
    <v-row>
      <v-col>
        <transition name="fade">
          <h3 v-if="seen" style="font-family: Roboto"><strong>Cloud Services:</strong></h3>
        </transition>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <ul style="display: grid;grid-template-columns:repeat(15,1fr);">
          <li v-for="(item, i) in cloudServices" :key="i" style="display: block">
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

    <!-- databases -->
    <v-row>
      <v-col>
        <transition name="fade">
          <h3 v-if="seen" style="font-family: Roboto"><strong>Databases:</strong></h3>
        </transition>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <ul style="display: grid;grid-template-columns:repeat(15,1fr);">
          <li v-for="(item, i) in databases" :key="i" style="display: block">
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

    <!-- Operating System Logos -->
    <v-row>
      <v-col>
        <transition name="fade">
          <h3 v-if="seen" style="font-family: Roboto"><strong>Operating Systems:</strong></h3>
        </transition>
      </v-col>
    </v-row>
    <!-- TODO: Make these into components where you just pass the array of objects. -->
    <v-row>
      <v-col>
        <ul style="display: grid;grid-template-columns:repeat(15,1fr);">
          <li v-for="(item, i) in operatingSystems" :key="i" style="display: block">
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
export default {
  data: () => ({
    showAll: false,
    show: false,
    seen: false,
    displayLabels: false,
    operatingSystems: [
        { src: require('@/assets/experience/operating_systems/mac_logo.png'), name: 'MacOS', show: false },
        { src: require('@/assets/experience/operating_systems/windows_logo.png'), name: 'Windows', show: false },
        { src: require('@/assets/experience/operating_systems/linux_logo.png'), name: 'Linux', show: false },
    ],
    languages: [
        { src: require('@/assets/experience/languages/scala_logo.png'), name: 'Scala', show: false },
        { src: require('@/assets/experience/languages/python_logo.jpg'), name: 'Python', show: false },
        { src: require('@/assets/experience/languages/sql_logo.png'), name: 'SQL', show: false },
        { src: require('@/assets/experience/languages/terraform_logo.png'), name: 'Terraform', show: false },       
        { src: require('@/assets/experience/languages/javascript_logo.png'), name: 'Javascript', show: false },
        { src: require('@/assets/experience/languages/html_logo.png'), name: 'HTML5', show: false },  
        { src: require('@/assets/experience/languages/csharp_logo.png'), name: 'C#', show: false },
        { src: require('@/assets/experience/languages/go_logo.jpg'), name: 'Golang', show: false },
    ],
    cloudServices: [
        { src: require('@/assets/experience/cloud/aws.png'), name: 'Amazon Web Services', show: false },
        { src: require('@/assets/experience/cloud/databricks.png'), name: 'Databricks', show: false },
        { src: require('@/assets/experience/cloud/emr.png'), name: 'Elastic Map Reduce (EMR)', show: false },
        { src: require('@/assets/experience/cloud/kinesis.png'), name: 'Kinesis', show: false },
        { src: require('@/assets/experience/cloud/rds.png'), name: 'RDS', show: false },
        { src: require('@/assets/experience/cloud/jupyter.png'), name: 'Jupyter', show: false },
        { src: require('@/assets/experience/cloud/s3.png'), name: 'Simple Storage Service (S3)', show: false },
        { src: require('@/assets/experience/cloud/opsworks.png'), name: 'OpsWorks', show: false },
        { src: require('@/assets/experience/cloud/ecs.png'), name: 'Elastic Container Service (ECS)', show: false },
        { src: require('@/assets/experience/cloud/ec2.png'), name: 'Elastic Compute Cloud (EC2)', show: false },
        { src: require('@/assets/experience/cloud/kms.png'), name: 'Key Management Service (KMS)', show: false },
        { src: require('@/assets/experience/cloud/codepipeline.png'), name: 'CodePipeline', show: false },
        { src: require('@/assets/experience/cloud/cloudfront.png'), name: 'CloudFront', show: false },
        { src: require('@/assets/experience/cloud/dynamo.png'), name: 'DynamoDB', show: false },
        { src: require('@/assets/experience/cloud/azureAD.png'), name: 'Azure Active Directory', show: false },
    ],
    frameworks: [
        { src: require('@/assets/experience/frameworks/spark.png'), name: 'Apache Spark', show: false },
        { src: require('@/assets/experience/frameworks/vertx.png'), name: 'Vert.X', show: false },
        { src: require('@/assets/experience/frameworks/vue.png'), name: 'VueJS', show: false },
        { src: require('@/assets/experience/frameworks/django.png'), name: 'Django', show: false },
        { src: require('@/assets/experience/frameworks/unity.png'), name: 'Unity', show: false },
        { src: require('@/assets/experience/frameworks/godot.png'), name: 'Godot Engine', show: false },
    ],
    databases: [
        { src: require('@/assets/experience/databases/mysql.png'), name: 'MySQL', show: false },
        { src: require('@/assets/experience/databases/redshift.png'), name: 'Amazon Redshift', show: false },
        { src: require('@/assets/experience/databases/mssql.png'), name: 'Microsoft SQL Server', show: false },
    ]
  }),

  mounted() {
    this.seen = !this.seen
  },

  methods: {
    toggleLabels() {
      this.showAll = !this.showAll
      
      let skillsList = [
          this.operatingSystems,
          this.languages,
          this.cloudServices,
          this.frameworks,
          this.databases
      ]

      for (var idx in skillsList) {
        skillsList[idx].forEach( x => {
          x.show = this.showAll
        })
      }
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
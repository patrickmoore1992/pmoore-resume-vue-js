<template>
  <v-container fluid>

    <!-- Operating System Logos -->
    <v-row>
      <v-col>
        <transition name="fade">
          <h3 v-if="seen" style="font-family: Roboto"><strong>Operating Systems:</strong></h3>
        </transition>
      </v-col>
    </v-row>

    <v-row>
      <v-col v-if="seen">
        <ul style="display: grid;grid-template-columns:repeat(15,1fr);">
          <li v-for="(item, i) in operatingSystems" :key="i" style="display: block">
             <transition name="fade">  
              <v-img
                v-if="seen"
                :id="i"
                contain 
                v-bind:src="item.src" 
                height="50px" 
                width="50px"/>
            </transition>
            <transition name="fade">
              <label v-if="seen" :for="i">{{ item.name }}</label>
            </transition>  
          </li>
        </ul>  
      </v-col>
    </v-row>

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
             <transition name="fade">  
              <v-img
                v-if="seen"
                :id="i"
                contain 
                v-bind:src="item.src" 
                height="50px" 
                width="50px"/>
            </transition>
            <transition name="fade">
              <label v-if="seen" :for="i">{{ item.name }}</label>
            </transition>    
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
             <transition name="fade">  
              <v-img
                v-if="seen"
                :id="i"
                contain 
                v-bind:src="item.src" 
                height="50px" 
                width="50px"/>
            </transition>
            <transition name="fade">
              <label v-if="seen" :for="i">{{ item.name }}</label>
            </transition>  
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
             <transition name="fade">  
              <v-img
                v-if="seen"
                :id="i"
                contain 
                v-bind:src="item.src" 
                height="50px" 
                width="50px"/>
            </transition>
            <transition name="fade">
              <label v-if="seen" :for="i">{{ item.name }}</label>
            </transition>
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
             <transition name="fade">  
              <v-img
                v-if="seen"
                :id="i"
                contain 
                v-bind:src="item.src" 
                height="50px" 
                width="50px"/>
            </transition>
            <transition name="fade">
              <label v-if="seen" :for="i">{{ item.name }}</label>
            </transition>
          </li>
        </ul>  
      </v-col>
    </v-row>


  </v-container>
</template>

<script>

export default {
  data: () => ({
    seen: false,
    operatingSystems: [
        { src: require('@/assets/experience/operating_systems/mac_logo.png'), name: 'MacOS' },
        { src: require('@/assets/experience/operating_systems/windows_logo.png'), name: 'Windows' },
        { src: require('@/assets/experience/operating_systems/linux_logo.png'), name: 'Linux' },
    ],
    languages: [
        { src: require('@/assets/experience/languages/scala_logo.png'), name: 'Scala' },
        { src: require('@/assets/experience/languages/python_logo.jpg'), name: 'Python' },
        { src: require('@/assets/experience/languages/sql_logo.png'), name: 'SQL' },
        { src: require('@/assets/experience/languages/terraform_logo.png'), name: 'Terraform' },       
        { src: require('@/assets/experience/languages/javascript_logo.png'), name: 'Javascript' },
        { src: require('@/assets/experience/languages/html_logo.png'), name: 'HTML5' },  
        { src: require('@/assets/experience/languages/csharp_logo.png'), name: 'C#' },
        { src: require('@/assets/experience/languages/go_logo.jpg'), name: 'Golang' },
    ],
    cloudServices: [
        { src: require('@/assets/experience/cloud/databricks.png'), name: 'Databricks' },
        { src: require('@/assets/experience/cloud/emr.png'), name: 'Elastic Map Reduce (EMR)' },
        { src: require('@/assets/experience/cloud/kinesis.png'), name: 'Kinesis' },
        { src: require('@/assets/experience/cloud/rds.png'), name: 'RDS' },
        { src: require('@/assets/experience/cloud/jupyter.png'), name: 'Jupyter' },
        { src: require('@/assets/experience/cloud/s3.png'), name: 'Simple Storage Service (S3)' },
        { src: require('@/assets/experience/cloud/opsworks.png'), name: 'OpsWorks' },
        { src: require('@/assets/experience/cloud/ecs.png'), name: 'Elastic Container Service (ECS)' },
        { src: require('@/assets/experience/cloud/ec2.png'), name: 'Elastic Compute Cloud (EC2)' },
        { src: require('@/assets/experience/cloud/kms.png'), name: 'Key Management Service (KMS)' },
        { src: require('@/assets/experience/cloud/codepipeline.png'), name: 'CodePipeline' },
        { src: require('@/assets/experience/cloud/cloudfront.png'), name: 'CloudFront' },
        { src: require('@/assets/experience/cloud/dynamo.png'), name: 'DynamoDB' },
        { src: require('@/assets/experience/cloud/azureAD.png'), name: 'Azure Active Directory' },
    ],
    frameworks: [
        { src: require('@/assets/experience/frameworks/spark.png'), name: 'Apache Spark' },
        { src: require('@/assets/experience/frameworks/vertx.png'), name: 'Vert.X' },
        { src: require('@/assets/experience/frameworks/vue.png'), name: 'VueJS' },
        { src: require('@/assets/experience/frameworks/django.png'), name: 'Django' },
        { src: require('@/assets/experience/frameworks/unity.png'), name: 'Unity' },
        { src: require('@/assets/experience/frameworks/godot.png'), name: 'Godot Engine' },
    ],
    databases: [
        { src: require('@/assets/experience/databases/mysql.png'), name: 'MySQL' },
        { src: require('@/assets/experience/databases/redshift.png'), name: 'Amazon Redshift' },
        { src: require('@/assets/experience/databases/mssql.png'), name: 'Microsoft SQL Server' },
    ]
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
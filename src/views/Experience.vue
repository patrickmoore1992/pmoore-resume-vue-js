<template>
  <v-container fluid>
    <TabSlider @switched="tabSwitch"/>
    <v-row>
      <v-col>
        <div v-if="tabIndex === 0">
          <LabelSwitch @toggled="toggleLabels"/>
          <SkillGallery :skillObjList="languages" :label="'Languages:'"/>
          <SkillGallery :skillObjList="cloudServices" :label="'Cloud Services & Technologies:'"/>
          <SkillGallery :skillObjList="frameworks" :label="'Frameworks:'"/>
          <SkillGallery :skillObjList="databases" :label="'Databases:'"/>
          <SkillGallery :skillObjList="operatingSystems" :label="'Operating Systems:'"/>
        </div>
        <div v-else>
          <WorkExperience/>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import SkillGallery from '@/components/experience/SkillGallery.vue'
import LabelSwitch from '@/components/experience/LabelSwitch.vue'
import TabSlider from '@/components/experience/TabSlider.vue'
import WorkExperience from '@/components/experience/WorkExperience.vue'

export default {
  components: {
    WorkExperience,
    TabSlider,
    SkillGallery,
    LabelSwitch
  },

  data: () => ({
    show: false,
    seen: false,
    tabIndex: 0,

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

  methods: {
    tabSwitch(value) {
      this.tabIndex = value
    },

    toggleLabels(showAll) {
      console.log(showAll)
      let skillsList = [
          this.operatingSystems,
          this.languages,
          this.cloudServices,
          this.frameworks,
          this.databases
      ]

      for (var idx in skillsList) {
        skillsList[idx].forEach( x => {
          x.show = showAll
        })
      }
    }
  }
}
</script>
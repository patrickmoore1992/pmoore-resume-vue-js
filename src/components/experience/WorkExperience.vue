<template>
  <v-container fluid ma-0 pa-0 fill-height>
    <transition name="fade">
      <div v-if="seen">
        <JobDescription 
          v-for="(job, index) in jobs" 
          :key="index"
          :dateRange="job.dateRange"
          :title="job.title"
          :company="job.company"
          :descriptions="job.descriptions"/>
      </div>
    </transition>
  </v-container>
</template>

<script>
import JobDescription from '@/components/experience/JobDescription.vue'

export default ({
  name: 'WorkExperience',

  components: {
    JobDescription
  },

  data: () => ({
    seen: false,
    jobs: [
      {
        dateRange: 'DECEMBER 2021 - PRESENT', 
        title: 'ASSOCIATE DIRECTOR, SOFTWARE ENGINEERING', 
        company: 'FIRST ORION', 
        descriptions: [
          'Direct an organization containing two software engineering teams that oversee the engineering work relating to internal tools & data operations. Assisting the team leads with providing mentorship, coaching, and career growth opportunities for all team members.',
          'Architected First Orion’s ‘Shared Data Lake’, using Databricks Unity Catalog for centralized data governance & Terraform templates for streamlining new workspace deployments across the company.',
          'Architected First Orion’s ‘Shared Data Lake’, using Databricks Unity Catalog for centralized data governance & Terraform templates for streamlining new workspace deployments across the company.',
          'Assisted in the documentation of many core applications owned by our engineering organization.',
          'Responsible for recruitment for the team, determining technical acumen and pay level for prospective new hires.'
        ] 
      },
      {
        dateRange: 'FEBRUARY 2020 - DECEMBER 2021', 
        title: 'DATA ENGINEER, TEAM LEADER', 
        company: 'FIRST ORION', 
        descriptions: [
          'Led a software engineering team on the various domains we owned, primarily relating to internal tooling. Ensured that deliverables were being met on time and that everybody on my team had the appropriate resources they needed to complete their work.',
          'Developed a process using Scala & Apache Spark deployed in Databricks that ingests 60,000 CSV files daily from a client’s SFTP server and published them for consumption by our data science team’s scoring models.',
          '	Streamlined the deployment process for our spark clusters by creating reusable Terraform modules for Databricks jobs & altering our core data engineering framework to allow for managing config files in source control by utilizing KMS encryption, cutting deployment time by 70%.',
          'Identified opportunities for cost saving in our Databricks & AWS accounts that resulted in a $30k monthly drop in the data team’s monthly infrastructure expenses.'
        ] 
      },
      {
        dateRange: 'JANUARY 2017 - FEBRUARY 2020', 
        title: 'DATA ENGINEER', 
        company: 'FIRST ORION', 
        descriptions: [
          'Coded a series of data pipelines using Scala & Spark for our client-facing reporting warehouse, which read data periodically from Kinesis streams and performed ETL on the raw data before writing to Amazon Redshift.',
          'Developed stored procedures for our Amazon Redshift clusters that handled syncing large historical datasets to ‘current’ tables, and archiving table data to S3 to reduce costs associated with storage on the cluster.',
          'Created a suite of Rest API endpoints in Scala using the Vert.X framework that helped expose our backend application data in a secure manner, so that it could be sold to customers.'
        ] 
      },
      {
        dateRange: 'MAY 2014 - JANUARY 2017', 
        title: 'PROGRAMMER ANALYST', 
        company: 'FIRST ORION', 
        descriptions: [
          'Maintained a transaction processing system in MS-SQL Server that identified leads based off application data and distributed them to our partner’s various CRM systems.',
          'Created automated data auditing jobs that ran on our primary production SQL Server database.'
        ] 
      },
      {
        dateRange: 'OCTOBER 2013 - MAY 2014', 
        title: 'DATA QUALITY & ANALYSIS INTERN', 
        company: 'FIRST ORION', 
        descriptions: [
          'Automated the auditing of various tables in our MS-SQL database using scheduled stored procedures.',
          'Assisted in the design of complex data processing jobs that cleaned and formatted data from our various mobile applications for reporting purposes.'
        ] 
      },
      {
        dateRange: 'SUMMER 2013', 
        title: 'QUALITY ASSURANCE INTERN', 
        company: 'FIDELITY NATIONAL INFORMATION SERVICES (FIS)', 
        descriptions: [
          'Created/Updated manual test condition scripts for several core projects owned by our team. I also documented changes in client customized code versus the generic core code, as well as, assisted business leaders on the team with creating excel macros using VBA.',
        ] 
      },
      {
        dateRange: 'JUNE 2011 - OCTOBER 2013', 
        title: 'TEAM TRAINER', 
        company: 'TARGET CORPORATION', 
        descriptions: [
          'Documented changes in client customized code versus the generic core code, as well as assisted business leaders on the team with creating excel macros using VBA.',
          'In charge of training new crew members of policies/procedures and compiling a report for HR to review their performance. In that time period I was employee of the month eight times in a twoyear period.',
        ] 
      },
    ]
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
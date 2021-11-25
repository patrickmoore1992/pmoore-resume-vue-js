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
        dateRange: 'FEBRUARY 2020 - PRESENT', 
        title: 'DATA OPERATIONS & INTERNAL TOOLS TEAM LEAD', 
        company: 'FIRST ORION', 
        descriptions: [
          'Manage a team of software engineers with a focus in DevOps & Internal Tools/Services for our Data Engineering/Science teams. Assigning tasks and ensuring team members understanding of requirements, proposed designs and priorities.',
          'Lead the design/architecture of implementing CI/CD for each of the cloud-based projects that our team works with.',
          'Troubleshoot issues from across all facets of our team’s infrastructure, as well as design ways to help improve the monitoring, job health, and metrics that we gather.'
        ] 
      },
      {
        dateRange: 'JANUARY 2017 - FEBRUARY 2020', 
        title: 'DATA ENGINEER', 
        company: 'FIRST ORION', 
        descriptions: [
          'Was the sole developer for a suite of processes written in Scala using the Apache Spark framework and deployed in both EMR & Databricks. This involves tuning these flows to run efficiently on the minimum amount of hardware needed to get the job done.',
          'Managed various web applications built in VueJS & Django, as well as their corresponding backend components. This includes APIs (Scala/Vert.x), Databases (Redshift, MySQL), and Apache Spark Flows. All of which are hosted through AWS.',
        ] 
      },
      {
        dateRange: 'MAY 2014 - JANUARY 2017', 
        title: 'BUSINESS PROGRAMMER ANALYST', 
        company: 'FIRST ORION', 
        descriptions: [
          'Updated, maintained, and created reporting processes to fulfill the needs of our sales team, and developed formatted reports in SQL Server Reporting Services (SSRS).',
          'Maintained an elaborate transaction processing system in MS SQL Server that at its height produced $60k of revue per month for the company.'
        ] 
      },
      {
        dateRange: 'OCTOBER 2013 - MAY 2014', 
        title: 'DATA QUALITY & ANALYSIS INTERN', 
        company: 'PRIVACYSTARD', 
        descriptions: [
          'Created stored procedures in MS SQL Server that help automate data auditing operations. Developed several desktop applications in java to help automate menial tasks, saving time that could be spent more productively.',
        ] 
      },
      {
        dateRange: 'JUNE 2013 - AUGUST 2013', 
        title: 'QA INTERN', 
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
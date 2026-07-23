<template>
  <section id="projects" class="projects">
    <div class="container">

      <!-- Section Header -->

      <div class="section-header">

        <span class="subtitle">
          MY WORK
        </span>

        <h2>
          Featured Projects
        </h2>

        <p>
          Here are some of the projects I have built using modern technologies.
        </p>

      </div>

      <!-- Projects Grid -->

      <div class="projects-grid">

        <ProjectCard
          v-for="project in projects"
          :key="project.id"
          :project="project"
        />

      </div>

    </div>
  </section>
</template>

<script setup>

import projects from '@/data/projects'
import ProjectCard from '@/components/projects/ProjectCard.vue'

</script>

<style scoped lang="scss">

.projects{
  padding:80px 0;
  background:#F8FAFC;
}

.section-header{
  text-align:center;
  margin-bottom:50px;
}

.subtitle{
  color:#2563EB;
  font-weight:700;
  letter-spacing:2px;
}

.section-header h2{
  font-size:42px;
  font-weight:800;
  margin:15px 0;
  color:#0F172A;
}

.section-header p{
  max-width:650px;
  margin:auto;
  color:#64748B;
  font-size:18px;
  line-height:1.8;
}

.projects-grid{
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(350px,1fr));
  gap:30px;
}

@media(max-width:768px){

.projects-grid{
  grid-template-columns:1fr;
}

.section-header h2{
  font-size:34px;
}

}

</style>
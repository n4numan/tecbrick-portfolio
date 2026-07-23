<template>
  <q-card class="project-card">

    <!-- Project Image -->

    <img
      :src="project.image"
      :alt="project.title"
      class="project-image"
    />

    <q-card-section>

      <!-- Title -->

      <h3 class="project-title">
        {{ project.title }}
      </h3>

      <!-- Description -->

      <p class="project-description">
        {{ project.description }}
      </p>

      <!-- Technologies -->

      <div class="tech-stack">

        <q-chip
          v-for="tech in project.technologies"
          :key="tech"
          color="primary"
          text-color="white"
          dense
          outline
        >
          {{ tech }}
        </q-chip>

      </div>

      <!-- Buttons -->

      <div class="project-buttons">

        <q-btn
          color="primary"
          rounded
          unelevated
          icon="code"
          label="GitHub"
          :href="project.github"
          target="_blank"
        />

        <q-btn
          outline
          rounded
          color="primary"
          icon="launch"
          label="Live Demo"
          :disable="!project.demo"
          :href="project.demo"
          target="_blank"
        />

      </div>

    </q-card-section>

  </q-card>
</template>

<script setup>

defineProps({
  project: {
    type: Object,
    required: true
  }
})

</script>

<style scoped lang="scss">

.project-card{

  border-radius:20px;

  overflow:hidden;

  transition:.35s;

  height:100%;

  border:1px solid #E2E8F0;

}

.project-card:hover{

  transform:translateY(-8px);

  box-shadow:0 20px 40px rgba(0,0,0,.12);

}

.project-image{

  width:100%;

  height:230px;

  object-fit:cover;

}

.project-title{

  font-size:24px;

  font-weight:700;

  color:#0F172A;

  margin-bottom:15px;

}

.project-description{

  color:#64748B;

  line-height:1.8;

  min-height:70px;

}

.tech-stack{

  display:flex;

  flex-wrap:wrap;

  gap:10px;

  margin:25px 0;

}

.project-buttons{

  display:flex;

  gap:15px;

  margin-top:20px;

}

@media(max-width:600px){

.project-buttons{

flex-direction:column;

}

.project-buttons .q-btn{

width:100%;

}

}

</style>
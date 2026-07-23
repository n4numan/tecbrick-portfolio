<template>
  <div class="section-title">
    <h2>{{ title }}</h2>
    <p v-if="subtitle">
      {{ subtitle }}
    </p>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  subtitle: String,
})
</script>

<style scoped lang="scss">
.section-title {
  text-align: center;
  margin-bottom: 40px;

  h2 {
    font-size: 2.4rem;
    margin-bottom: 12px;
  }

  p {
    color: #64748b;
    max-width: 650px;
    margin: auto;
  }
}
</style>
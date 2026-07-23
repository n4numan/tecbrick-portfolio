<template>
  <q-btn
    :label="label"
    :color="color"
    :icon="icon"
    :outline="outline"
    :flat="flat"
    :rounded="rounded"
    :unelevated="unelevated"
    :to="to"
    class="app-btn"
  />
</template>

<script setup>
defineProps({
  label: {
    type: String,
    default: 'Button',
  },
  color: {
    type: String,
    default: 'primary',
  },
  icon: {
    type: String,
    default: '',
  },
  outline: {
    type: Boolean,
    default: false,
  },
  flat: {
    type: Boolean,
    default: false,
  },
  rounded: {
    type: Boolean,
    default: true,
  },
  unelevated: {
    type: Boolean,
    default: true,
  },
  to: {
    type: [String, Object],
    default: null,
  },
})
</script>
<style scoped lang="scss">
.app-btn {
  padding: 10px 24px;
  border-radius: 12px;
}
</style>
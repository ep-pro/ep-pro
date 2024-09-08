<script lang="ts" setup>
defineProps<{
  id: string
  title: string
}>()
</script>

<template>
  <ElConfigProvider>
    <ElCard shadow="never">
      <template #header>
        <span class="font-bold">{{ title }}</span>
      </template>
      <div class="demo-content">
        <slot />
      </div>
      <template #footer>
        <slot name="footer" />
      </template>
    </ElCard>
  </ElConfigProvider>
</template>

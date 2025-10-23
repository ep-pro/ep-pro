<script lang="ts" setup>
import Container from './Container.vue'

const props = defineProps<{
  typescript: string
  // if using ts, typescript will transform the to js
  javascript: string
  typescriptHtml: string
  javascriptHtml: string
  title: string
  metadata: Record<string, any>
  expand?: boolean
}>()
</script>

<template>
  <ClientOnly>
    <Container v-bind="props">
      <template
        v-for="(slot, key) in $slots"
        #[key]
      >
        <slot :name="key" />
      </template>
    </Container>
  </ClientOnly>
</template>

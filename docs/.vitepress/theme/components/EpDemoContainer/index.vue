<script lang="ts" setup>
import Container from './Container.vue'

const props = defineProps<{
  tsCode: string
  // if using ts, sfcJsCode will transform the to js
  jsCode: string
  tsHtml: string
  jsHtml: string
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

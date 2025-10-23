<script lang="ts" setup>
import EpContainer from './EpContainer.vue'

const props = defineProps<{
  typescript: string
  // if using ts, typescript will transform the to js
  javascript: string
  typescriptHtml: string
  javascriptHtml: string
  // descriptionHtml is generally not used since the slot with name="desc" will handle everything
  descriptionHtml?: string
  title: string
  metadata: Record<string, any>
  expand?: boolean
}>()

const isUsingTs = computed(() => !!props.typescript)
const showHighlighted = ref(props.expand ?? false)

// const tsCode = computed(() => decodeURIComponent(props.tsCode))
// const jsCode = computed(() => decodeURIComponent(props.jsCode))

const showTs = ref(isUsingTs.value)

const highlightedHtml = computed(() =>
  decodeURIComponent(
    showTs.value ? props.typescriptHtml : props.javascriptHtml,
  ),
)
</script>

<template>
  <EpContainer
    :title
    :id="metadata.fileName"
  >
    <slot />
    <template
      v-if="showHighlighted"
      #footer
    >
      <div
        v-html="highlightedHtml"
        class="language-vue"
      />
    </template>
  </EpContainer>
</template>

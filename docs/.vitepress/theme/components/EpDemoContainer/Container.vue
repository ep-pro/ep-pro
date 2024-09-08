<script lang="ts" setup>
import EpContainer from './EpContainer.vue'

const props = defineProps<{
  sfcTsCode: string
  // if using ts, sfcJsCode will transform the to js
  sfcJsCode: string
  sfcTsHtml: string
  sfcJsHtml: string
  // descriptionHtml is generally not used since the slot with name="desc" will handle everything
  descriptionHtml?: string
  title: string
  metadata: Record<string, any>
  expand?: boolean
}>()

const visible = ref(props.expand ?? false)

// const sfcTsCode = computed(() => decodeURIComponent(props.sfcTsCode))
// const sfcJsCode = computed(() => decodeURIComponent(props.sfcJsCode))

const isUsingTs = computed(() => !!props.sfcTsCode)

// const sfcCode = computed(() => (isUsingTs.value ? sfcTsCode.value : sfcJsCode.value))

const showTs = ref(isUsingTs.value)

const highlightedHtml = computed(() =>
  decodeURIComponent(showTs.value ? props.sfcTsHtml : props.sfcJsHtml),
)
</script>

<template>
  <EpContainer
    :title="title"
    :id="metadata.fileName"
  >
    <slot />
    <template
      v-if="visible"
      #footer
    >
      <div
        v-html="highlightedHtml"
        class="language-vue"
      />
    </template>
  </EpContainer>
</template>

<script lang="ts" setup>
import type { EpDescriptionItemProps } from '@ep-pro/components'

const items = ref<Partial<EpDescriptionItemProps>[]>([
  {
    label: 'Username',
    // cspell: disable-next-line
    content: 'kooriookami',
  },
  {
    label: 'Telephone',
    content: '18100000000',
  },
  {
    label: 'Place',
    content: 'Suzhou',
  },
  {
    label: 'Place',
    content: 'Suzhou',
  },
  {
    label: 'Remarks',
    content: 'School',
  },
  {
    label: 'Address',
    // cspell: disable-next-line
    content:
      'No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province',
  },
])
</script>

<template>
  <EpDescriptions
    :items
    :column="2"
    label-class-name="w-100px"
    class-name="min-w-300px"
    border
  />
</template>

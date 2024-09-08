import { computed, defineComponent } from 'vue'
import { reactiveOmit } from '@vueuse/core'
import {
  ElDescriptions,
  ElDescriptionsItem,
  descriptionItemProps,
  descriptionProps,
} from 'element-plus'
import type { ExtractPropTypes, PropType } from 'vue'

export const epDescriptionItemProps = {
  ...descriptionItemProps,
  content: String,
}

export type EpDescriptionItemProps = ExtractPropTypes<typeof epDescriptionItemProps>

export const epDescriptionProps = {
  ...descriptionProps,
  items: Array as PropType<Partial<EpDescriptionItemProps>[]>,
  labelClassName: epDescriptionItemProps.labelClassName,
  className: epDescriptionItemProps.className,
}

export type EpDescriptionProps = ExtractPropTypes<typeof epDescriptionProps>

export const EpDescription = defineComponent({
  name: 'EpDescription',

  props: epDescriptionProps,

  setup(props) {
    const items = computed(() => props.items || [])
    const rootProps = reactiveOmit(props, ['items'])

    function renderDescriptionItem(item: Partial<EpDescriptionItemProps>, idx: number) {
      const { content, className, labelClassName, ...restProps } = item
      return (
        <ElDescriptionsItem
          key={idx}
          className={className || rootProps.className}
          labelClassName={labelClassName || rootProps.labelClassName}
          {...restProps}
        >
          {content}
        </ElDescriptionsItem>
      )
    }

    return () => (
      <ElDescriptions {...rootProps}>{items.value.map(renderDescriptionItem)}</ElDescriptions>
    )
  },
})
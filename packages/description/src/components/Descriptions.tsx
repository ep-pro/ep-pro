import { reactiveOmit } from '@vueuse/core'
import { ElDescriptions, ElDescriptionsItem } from 'element-plus'
import { computed, defineComponent } from 'vue'
import type { DescriptionItemProps, DescriptionProps } from 'element-plus'

export type EpDescriptionItemProps = Partial<DescriptionItemProps> & {
  content?: string
}

export type EpDescriptionProps = Partial<DescriptionProps> & {
  items?: Partial<EpDescriptionItemProps>[]
  labelClassName?: string
  className?: string
}

export const EpDescriptions = defineComponent<EpDescriptionProps>({
  name: 'EpDescriptions',

  setup(props) {
    const items = computed(() => props.items || [])
    const rootProps = reactiveOmit(props, ['items']) as any

    function renderDescriptionItem(
      item: Partial<EpDescriptionItemProps>,
      idx: number,
    ) {
      const { content, className, labelClassName, ...restProps } = item
      return (
        <ElDescriptionsItem
          key={idx}
          className={className ?? rootProps.className}
          labelClassName={labelClassName ?? rootProps.labelClassName}
          {...restProps}
        >
          {content}
        </ElDescriptionsItem>
      )
    }

    return () => (
      <ElDescriptions {...rootProps}>
        {items.value.map(renderDescriptionItem)}
      </ElDescriptions>
    )
  },
})

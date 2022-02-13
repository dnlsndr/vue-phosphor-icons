<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 256 256"
    :width="displaySize"
    :height="displaySize"
    :fill="displayColor"
    :transform="displayMirrored"
    v-bind="$attrs"
  >
    <slot />
    <g v-if="displayWeight === 'bold'"><path d="M122.1,38.4,45,118.5A8,8,0,0,0,50.8,132H205.2a8,8,0,0,0,5.8-13.5L133.9,38.4A7.9,7.9,0,0,0,122.1,38.4Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><rect x="108" y="100" width="40" height="176" rx="8" transform="translate(-60 316) rotate(-90)" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></g>
    <g v-else-if="displayWeight === 'duotone'"><path d="M122.1,38.4,44.4,122.6A8,8,0,0,0,50.3,136H205.7a8,8,0,0,0,5.9-13.4L133.9,38.4A7.9,7.9,0,0,0,122.1,38.4Z" opacity="0.2"/><rect x="108" y="100" width="40" height="176" rx="8" transform="translate(-60 316) rotate(-90)" opacity="0.2"/><path d="M122.1,38.4,44.4,122.6A8,8,0,0,0,50.3,136H205.7a8,8,0,0,0,5.9-13.4L133.9,38.4A7.9,7.9,0,0,0,122.1,38.4Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><rect x="108" y="100" width="40" height="176" rx="8" transform="translate(-60 316) rotate(-90)" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></g>
    <g v-else-if="displayWeight === 'fill'"><path d="M35.6,134.4a15.8,15.8,0,0,1,2.9-17.3l77.7-84.2h0a16.2,16.2,0,0,1,23.6,0l77.7,84.2A16,16,0,0,1,205.7,144H50.3A15.9,15.9,0,0,1,35.6,134.4ZM208,160H48a16,16,0,0,0-16,16v24a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V176A16,16,0,0,0,208,160Z"/></g>
    <g v-else-if="displayWeight === 'light'"><path d="M122.1,38.4,44.4,122.6A8,8,0,0,0,50.3,136H205.7a8,8,0,0,0,5.9-13.4L133.9,38.4A7.9,7.9,0,0,0,122.1,38.4Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><rect x="108" y="100" width="40" height="176" rx="8" transform="translate(-60 316) rotate(-90)" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/></g>
    <g v-else-if="displayWeight === 'thin'"><path d="M122.1,38.4,44.4,122.6A8,8,0,0,0,50.3,136H205.7a8,8,0,0,0,5.9-13.4L133.9,38.4A7.9,7.9,0,0,0,122.1,38.4Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><rect x="108" y="100" width="40" height="176" rx="8" transform="translate(-60 316) rotate(-90)" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/></g>
    <g v-else-if="displayWeight === 'regular'"><path d="M122.1,38.4,44.4,122.6A8,8,0,0,0,50.3,136H205.7a8,8,0,0,0,5.9-13.4L133.9,38.4A7.9,7.9,0,0,0,122.1,38.4Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><rect x="108" y="100" width="40" height="176" rx="8" transform="translate(-60 316) rotate(-90)" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></g>
  </svg>
</template>

<script lang="ts">
import { computed, defineComponent, inject, PropType } from "vue";

export default defineComponent({
  name: "PhEject",
  props: {
    weight: {
      type: String as PropType<"thin" | "light" | "regular" | "bold" | "fill" | "duotone">
    },
    size: {
      type: [String, Number]
    },
    color: {
      type: String
    },
    mirrored: {
      type: Boolean
    },
  },
  setup(props) {
    const contextWeight = inject("weight", "regular")
    const contextSize = inject("size", "1em")
    const contextColor = inject("color", "currentColor")
    const contextMirrored = inject("mirrored", false)

    const displayWeight = computed(() => props.weight ?? contextWeight)
    const displaySize = computed(() => props.size ?? contextSize)
    const displayColor = computed(() => props.color ?? contextColor)
    const displayMirrored = computed(() => props.mirrored ?? contextMirrored ? "scale(-1, 1)" : undefined)

    return {
      displayWeight,
      displaySize,
      displayColor,
      displayMirrored
    }
  }
})
</script>

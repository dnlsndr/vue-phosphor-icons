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
    <g v-if="displayWeight === 'bold'"><path d="M176,32H95.7L80,128.4a56.4,56.4,0,0,1,79.5,0,55.8,55.8,0,0,1,0,79.2,56.4,56.4,0,0,1-79.5,0" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></g>
    <g v-else-if="displayWeight === 'duotone'"><path d="M176,32H95.7L80,128.4a56.4,56.4,0,0,1,79.5,0,55.8,55.8,0,0,1,0,79.2,56.4,56.4,0,0,1-79.5,0" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></g>
    <g v-else-if="displayWeight === 'fill'"><path d="M165.2,122.7a64,64,0,0,1,0,90.6,64.5,64.5,0,0,1-90.8,0,8,8,0,1,1,11.2-11.4,48.4,48.4,0,0,0,68.3,0A48,48,0,0,0,119.8,120a48.3,48.3,0,0,0-34.2,14.1,8,8,0,0,1-13.5-7L87.8,30.7A7.9,7.9,0,0,1,95.7,24H176a8,8,0,0,1,0,16H102.5L91,110.8a63,63,0,0,1,28.8-6.8A64.4,64.4,0,0,1,165.2,122.7Z"/></g>
    <g v-else-if="displayWeight === 'light'"><path d="M176,32H95.7L80,128.4a56.4,56.4,0,0,1,79.5,0,55.8,55.8,0,0,1,0,79.2,56.4,56.4,0,0,1-79.5,0" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/></g>
    <g v-else-if="displayWeight === 'thin'"><path d="M176,32H95.7L80,128.4a56.4,56.4,0,0,1,79.5,0,55.8,55.8,0,0,1,0,79.2,56.4,56.4,0,0,1-79.5,0" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/></g>
    <g v-else-if="displayWeight === 'regular'"><path d="M176,32H95.7L80,128.4a56.4,56.4,0,0,1,79.5,0,55.8,55.8,0,0,1,0,79.2,56.4,56.4,0,0,1-79.5,0" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></g>
  </svg>
</template>

<script lang="ts">
import { computed, defineComponent, inject, PropType } from "vue";

export default defineComponent({
  name: "PhNumberFive",
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

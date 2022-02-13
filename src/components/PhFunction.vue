/* GENERATED FILE */
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
    <g v-if="displayWeight === 'bold'"><line x1="72" y1="128" x2="184" y2="128" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M56,216H85.3a32.1,32.1,0,0,0,31.5-26.3L139.2,66.3A32.1,32.1,0,0,1,170.7,40H200" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></g>
    <g v-else-if="displayWeight === 'duotone'"><line x1="72" y1="128" x2="184" y2="128" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M56,216H85.3a32.1,32.1,0,0,0,31.5-26.3L139.2,66.3A32.1,32.1,0,0,1,170.7,40H200" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></g>
    <g v-else-if="displayWeight === 'fill'"><path d="M208,40a8,8,0,0,1-8,8H170.7a24,24,0,0,0-23.6,19.7L137.6,120H184a8,8,0,0,1,0,16H134.7l-10.1,55.2A39.9,39.9,0,0,1,85.3,224H56a8,8,0,0,1,0-16H85.3a24,24,0,0,0,23.6-19.7l9.5-52.3H72a8,8,0,0,1,0-16h49.3l10.1-55.2A39.9,39.9,0,0,1,170.7,32H200A8,8,0,0,1,208,40Z"/></g>
    <g v-else-if="displayWeight === 'light'"><line x1="72" y1="128" x2="184" y2="128" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><path d="M56,216H85.3a32.1,32.1,0,0,0,31.5-26.3L139.2,66.3A32.1,32.1,0,0,1,170.7,40H200" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/></g>
    <g v-else-if="displayWeight === 'thin'"><line x1="72" y1="128" x2="184" y2="128" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M56,216H85.3a32.1,32.1,0,0,0,31.5-26.3L139.2,66.3A32.1,32.1,0,0,1,170.7,40H200" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/></g>
    <g v-else-if="displayWeight === 'regular'"><line x1="72" y1="128" x2="184" y2="128" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M56,216H85.3a32.1,32.1,0,0,0,31.5-26.3L139.2,66.3A32.1,32.1,0,0,1,170.7,40H200" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></g>
  </svg>
</template>

<script lang="ts">
import { computed, defineComponent, inject, PropType } from "vue";

export default defineComponent({
  name: "PhFunction",
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

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
    <g v-if="displayWeight === 'bold'"><path d="M121.8,39.6,34.6,147a8,8,0,0,0,6.2,13H215.2a8,8,0,0,0,6.2-13L134.2,39.6A8,8,0,0,0,121.8,39.6Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="224" y1="208" x2="32" y2="208" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></g>
    <g v-else-if="displayWeight === 'duotone'"><path d="M121.8,39.6,34.6,147a8,8,0,0,0,6.2,13H215.2a8,8,0,0,0,6.2-13L134.2,39.6A8,8,0,0,0,121.8,39.6Z" opacity="0.2"/><path d="M121.8,39.6,34.6,147a8,8,0,0,0,6.2,13H215.2a8,8,0,0,0,6.2-13L134.2,39.6A8,8,0,0,0,121.8,39.6Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="224" y1="208" x2="32" y2="208" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></g>
    <g v-else-if="displayWeight === 'fill'"><path d="M26.4,158.9a15.9,15.9,0,0,1,2-17L115.6,34.6a16,16,0,0,1,24.8,0l87.2,107.3A16,16,0,0,1,215.2,168H40.8A15.8,15.8,0,0,1,26.4,158.9ZM224,200H32a8,8,0,0,0,0,16H224a8,8,0,0,0,0-16Z"/></g>
    <g v-else-if="displayWeight === 'light'"><path d="M121.8,39.6,34.6,147a8,8,0,0,0,6.2,13H215.2a8,8,0,0,0,6.2-13L134.2,39.6A8,8,0,0,0,121.8,39.6Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><line x1="224" y1="208" x2="32" y2="208" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/></g>
    <g v-else-if="displayWeight === 'thin'"><path d="M121.8,39.6,34.6,147a8,8,0,0,0,6.2,13H215.2a8,8,0,0,0,6.2-13L134.2,39.6A8,8,0,0,0,121.8,39.6Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><line x1="224" y1="208" x2="32" y2="208" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/></g>
    <g v-else-if="displayWeight === 'regular'"><path d="M121.8,39.6,34.6,147a8,8,0,0,0,6.2,13H215.2a8,8,0,0,0,6.2-13L134.2,39.6A8,8,0,0,0,121.8,39.6Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="224" y1="208" x2="32" y2="208" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></g>
  </svg>
</template>

<script lang="ts">
import { computed, defineComponent, inject, PropType } from "vue";

export default defineComponent({
  name: "PhEjectSimple",
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

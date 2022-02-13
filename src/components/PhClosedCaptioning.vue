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
    <g v-if="displayWeight === 'bold'"><rect x="32" y="48" width="192" height="160" rx="8" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M113,152.8a28.4,28.4,0,0,1-13,3.2,28,28,0,0,1,0-56,28.4,28.4,0,0,1,13,3.2" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M185,152.8a28.4,28.4,0,0,1-13,3.2,28,28,0,0,1,0-56,28.4,28.4,0,0,1,13,3.2" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></g>
    <g v-else-if="displayWeight === 'duotone'"><rect x="32" y="48" width="192" height="160" rx="8" opacity="0.2"/><rect x="32" y="48" width="192" height="160" rx="8" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M116,147.6a28,28,0,1,1,0-39.2" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M188,147.6a28,28,0,1,1,0-39.2" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></g>
    <g v-else-if="displayWeight === 'fill'"><path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM96,148a19.8,19.8,0,0,0,14.3-6,8,8,0,0,1,11.4,11.2A35.4,35.4,0,0,1,96,164a36,36,0,0,1,0-72,35.4,35.4,0,0,1,25.7,10.8A8,8,0,0,1,110.3,114,19.8,19.8,0,0,0,96,108a20,20,0,0,0,0,40Zm72,0a19.8,19.8,0,0,0,14.3-6,8,8,0,0,1,11.4,11.2A35.4,35.4,0,0,1,168,164a36,36,0,0,1,0-72,35.4,35.4,0,0,1,25.7,10.8A8,8,0,0,1,182.3,114a19.8,19.8,0,0,0-14.3-6,20,20,0,0,0,0,40Z"/></g>
    <g v-else-if="displayWeight === 'light'"><rect x="32" y="48" width="192" height="160" rx="8" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><path d="M116,147.6a28,28,0,1,1,0-39.2" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><path d="M188,147.6a28,28,0,1,1,0-39.2" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/></g>
    <g v-else-if="displayWeight === 'thin'"><rect x="32" y="48" width="192" height="160" rx="8" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M116,147.6a28,28,0,1,1,0-39.2" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M188,147.6a28,28,0,1,1,0-39.2" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/></g>
    <g v-else-if="displayWeight === 'regular'"><rect x="32" y="48" width="192" height="160" rx="8" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M116,147.6a28,28,0,1,1,0-39.2" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M188,147.6a28,28,0,1,1,0-39.2" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></g>
  </svg>
</template>

<script lang="ts">
import { computed, defineComponent, inject, PropType } from "vue";

export default defineComponent({
  name: "PhClosedCaptioning",
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

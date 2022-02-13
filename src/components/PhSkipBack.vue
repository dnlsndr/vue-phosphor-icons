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
    <g v-if="displayWeight === 'bold'"><path d="M67.2,121.2,187.8,47.4A8,8,0,0,1,200,54.3V201.7a8,8,0,0,1-12.2,6.9L67.2,134.8A8,8,0,0,1,67.2,121.2Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="56" y1="40" x2="56" y2="216" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></g>
    <g v-else-if="displayWeight === 'duotone'"><path d="M67.2,121.2,187.8,47.4A8,8,0,0,1,200,54.3V201.7a8,8,0,0,1-12.2,6.9L67.2,134.8A8,8,0,0,1,67.2,121.2Z" opacity="0.2"/><path d="M67.2,121.2,187.8,47.4A8,8,0,0,1,200,54.3V201.7a8,8,0,0,1-12.2,6.9L67.2,134.8A8,8,0,0,1,67.2,121.2Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="56" y1="40" x2="56" y2="216" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></g>
    <g v-else-if="displayWeight === 'fill'"><path d="M56,32a8,8,0,0,1,8,8v73.7L183.7,40.6A16,16,0,0,1,208,54.3V201.7a15.9,15.9,0,0,1-8.2,14,15.4,15.4,0,0,1-7.8,2,16.2,16.2,0,0,1-8.3-2.3L64,142.3V216a8,8,0,0,1-16,0V40A8,8,0,0,1,56,32Z"/></g>
    <g v-else-if="displayWeight === 'light'"><path d="M67.2,121.2,187.8,47.4A8,8,0,0,1,200,54.3V201.7a8,8,0,0,1-12.2,6.9L67.2,134.8A8,8,0,0,1,67.2,121.2Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><line x1="56" y1="40" x2="56" y2="216" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/></g>
    <g v-else-if="displayWeight === 'thin'"><path d="M67.2,121.2,187.8,47.4A8,8,0,0,1,200,54.3V201.7a8,8,0,0,1-12.2,6.9L67.2,134.8A8,8,0,0,1,67.2,121.2Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><line x1="56" y1="40" x2="56" y2="216" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/></g>
    <g v-else-if="displayWeight === 'regular'"><path d="M67.2,121.2,187.8,47.4A8,8,0,0,1,200,54.3V201.7a8,8,0,0,1-12.2,6.9L67.2,134.8A8,8,0,0,1,67.2,121.2Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="56" y1="40" x2="56" y2="216" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></g>
  </svg>
</template>

<script lang="ts">
import { computed, defineComponent, inject, PropType } from "vue";

export default defineComponent({
  name: "PhSkipBack",
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

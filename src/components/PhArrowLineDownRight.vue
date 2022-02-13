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
    <g v-if="displayWeight === 'bold'"><line x1="80" y1="88" x2="192" y2="200" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><polyline points="192 100 192 200 92 200" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="40" y1="40" x2="216" y2="40" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></g>
    <g v-else-if="displayWeight === 'duotone'"><line x1="80" y1="88" x2="192" y2="200" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><polyline points="192 100 192 200 92 200" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="40" y1="40" x2="216" y2="40" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></g>
    <g v-else-if="displayWeight === 'fill'"><path d="M200,100V200a8,8,0,0,1-8,8H92a8,8,0,0,1-7.4-4.9,8.4,8.4,0,0,1,1.7-8.8L130.7,150,74.3,93.7A8.1,8.1,0,0,1,85.7,82.3L142,138.7l44.3-44.4a8.4,8.4,0,0,1,8.8-1.7A8,8,0,0,1,200,100Zm16-68H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z"/></g>
    <g v-else-if="displayWeight === 'light'"><line x1="80" y1="88" x2="192" y2="200" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><polyline points="192 100 192 200 92 200" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><line x1="40" y1="40" x2="216" y2="40" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/></g>
    <g v-else-if="displayWeight === 'thin'"><line x1="80" y1="88" x2="192" y2="200" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><polyline points="192 100 192 200 92 200" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><line x1="40" y1="40" x2="216" y2="40" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/></g>
    <g v-else-if="displayWeight === 'regular'"><line x1="80" y1="88" x2="192" y2="200" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><polyline points="192 100 192 200 92 200" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="40" y1="40" x2="216" y2="40" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></g>
  </svg>
</template>

<script lang="ts">
import { computed, defineComponent, inject, PropType } from "vue";

export default defineComponent({
  name: "PhArrowLineDownRight",
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

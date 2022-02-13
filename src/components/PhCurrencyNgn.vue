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
    <g v-if="displayWeight === 'bold'"><line x1="40" y1="128" x2="216" y2="128" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><polyline points="64 210 64 46 192 210 192 46" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></g>
    <g v-else-if="displayWeight === 'duotone'"><line x1="40" y1="144" x2="216" y2="144" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="40" y1="112" x2="216" y2="112" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><polyline points="64 210 64 46 192 210 192 46" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></g>
    <g v-else-if="displayWeight === 'fill'"><path d="M216,136H200V120h16a8,8,0,0,0,0-16H200V46a8,8,0,0,0-16,0v58H119.4L70.3,41.1A8,8,0,0,0,56,46v58H40a8,8,0,0,0,0,16H56v16H40a8,8,0,0,0,0,16H56v58a8,8,0,0,0,16,0V152h64.6l49.1,62.9a8.1,8.1,0,0,0,8.9,2.7A8.1,8.1,0,0,0,200,210V152h16a8,8,0,0,0,0-16Zm-32-16v16H144.4l-12.5-16ZM72,69.3,99.1,104H72ZM72,136V120h39.6l12.5,16Zm112,50.7L156.9,152H184Z"/></g>
    <g v-else-if="displayWeight === 'light'"><line x1="40" y1="144" x2="216" y2="144" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><line x1="40" y1="112" x2="216" y2="112" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><polyline points="64 210 64 46 192 210 192 46" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/></g>
    <g v-else-if="displayWeight === 'thin'"><line x1="40" y1="144" x2="216" y2="144" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><line x1="40" y1="112" x2="216" y2="112" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><polyline points="64 210 64 46 192 210 192 46" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/></g>
    <g v-else-if="displayWeight === 'regular'"><line x1="40" y1="144" x2="216" y2="144" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="40" y1="112" x2="216" y2="112" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><polyline points="64 210 64 46 192 210 192 46" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></g>
  </svg>
</template>

<script lang="ts">
import { computed, defineComponent, inject, PropType } from "vue";

export default defineComponent({
  name: "PhCurrencyNgn",
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

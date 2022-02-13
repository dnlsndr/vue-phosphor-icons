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
    <g v-if="displayWeight === 'bold'"><rect x="40" y="40" width="176" height="176" rx="24" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><circle cx="128" cy="128" r="16"/></g>
    <g v-else-if="displayWeight === 'duotone'"><rect x="40" y="40" width="176" height="176" rx="24" opacity="0.2"/><rect x="40" y="40" width="176" height="176" rx="24" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><circle cx="128" cy="128" r="12"/></g>
    <g v-else-if="displayWeight === 'fill'"><path d="M192,32H64A32.1,32.1,0,0,0,32,64V192a32.1,32.1,0,0,0,32,32H192a32.1,32.1,0,0,0,32-32V64A32.1,32.1,0,0,0,192,32ZM128,140a12,12,0,1,1,12-12A12,12,0,0,1,128,140Z"/></g>
    <g v-else-if="displayWeight === 'light'"><rect x="40" y="40" width="176" height="176" rx="24" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><circle cx="128" cy="128" r="10"/></g>
    <g v-else-if="displayWeight === 'thin'"><rect x="40" y="40" width="176" height="176" rx="24" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><circle cx="128" cy="128" r="8"/></g>
    <g v-else-if="displayWeight === 'regular'"><rect x="40" y="40" width="176" height="176" rx="24" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><circle cx="128" cy="128" r="12"/></g>
  </svg>
</template>

<script lang="ts">
import { computed, defineComponent, inject, PropType } from "vue";

export default defineComponent({
  name: "PhDiceOne",
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

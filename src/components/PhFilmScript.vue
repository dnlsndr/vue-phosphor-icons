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
    <g v-if="displayWeight === 'bold'"><rect x="48" y="32" width="160" height="192" rx="8" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><circle cx="92" cy="80" r="16"/><circle cx="92" cy="176" r="16"/><circle cx="92" cy="128" r="16"/></g>
    <g v-else-if="displayWeight === 'duotone'"><rect x="48" y="32" width="160" height="192" rx="8" opacity="0.2"/><rect x="48" y="32" width="160" height="192" rx="8" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><circle cx="84" cy="80" r="12"/><circle cx="84" cy="176" r="12"/><circle cx="84" cy="128" r="12"/></g>
    <g v-else-if="displayWeight === 'fill'"><path d="M200,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V40A16,16,0,0,0,200,24ZM76,188a12,12,0,1,1,12-12A12,12,0,0,1,76,188Zm0-48a12,12,0,1,1,12-12A12,12,0,0,1,76,140Zm0-48A12,12,0,1,1,88,80,12,12,0,0,1,76,92Z"/></g>
    <g v-else-if="displayWeight === 'light'"><rect x="48" y="32" width="160" height="192" rx="8" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><circle cx="84" cy="80" r="10"/><circle cx="84" cy="176" r="10"/><circle cx="84" cy="128" r="10"/></g>
    <g v-else-if="displayWeight === 'thin'"><rect x="48" y="32" width="160" height="192" rx="8" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><circle cx="84" cy="80" r="8"/><circle cx="84" cy="176" r="8"/><circle cx="84" cy="128" r="8"/></g>
    <g v-else-if="displayWeight === 'regular'"><rect x="48" y="32" width="160" height="192" rx="8" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><circle cx="84" cy="76" r="12"/><circle cx="84" cy="180" r="12"/><circle cx="84" cy="128" r="12"/></g>
  </svg>
</template>

<script lang="ts">
import { computed, defineComponent, inject, PropType } from "vue";

export default defineComponent({
  name: "PhFilmScript",
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

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
    <g v-if="displayWeight === 'bold'"><circle cx="60" cy="92" r="16"/><circle cx="128" cy="92" r="16"/><circle cx="196" cy="92" r="16"/><circle cx="60" cy="164" r="16"/><circle cx="128" cy="164" r="16"/><circle cx="196" cy="164" r="16"/></g>
    <g v-else-if="displayWeight === 'duotone'"><circle cx="60" cy="92" r="12"/><circle cx="128" cy="92" r="12"/><circle cx="196" cy="92" r="12"/><circle cx="60" cy="164" r="12"/><circle cx="128" cy="164" r="12"/><circle cx="196" cy="164" r="12"/></g>
    <g v-else-if="displayWeight === 'fill'"><path d="M72,92A12,12,0,1,1,60,80,12,12,0,0,1,72,92Zm56-12a12,12,0,1,0,12,12A12,12,0,0,0,128,80Zm68,24a12,12,0,1,0-12-12A12,12,0,0,0,196,104ZM60,152a12,12,0,1,0,12,12A12,12,0,0,0,60,152Zm68,0a12,12,0,1,0,12,12A12,12,0,0,0,128,152Zm68,0a12,12,0,1,0,12,12A12,12,0,0,0,196,152Z"/></g>
    <g v-else-if="displayWeight === 'light'"><circle cx="60" cy="92" r="10"/><circle cx="128" cy="92" r="10"/><circle cx="196" cy="92" r="10"/><circle cx="60" cy="164" r="10"/><circle cx="128" cy="164" r="10"/><circle cx="196" cy="164" r="10"/></g>
    <g v-else-if="displayWeight === 'thin'"><circle cx="60" cy="92" r="8"/><circle cx="128" cy="92" r="8"/><circle cx="196" cy="92" r="8"/><circle cx="60" cy="164" r="8"/><circle cx="128" cy="164" r="8"/><circle cx="196" cy="164" r="8"/></g>
    <g v-else-if="displayWeight === 'regular'"><circle cx="60" cy="92" r="12"/><circle cx="128" cy="92" r="12"/><circle cx="196" cy="92" r="12"/><circle cx="60" cy="164" r="12"/><circle cx="128" cy="164" r="12"/><circle cx="196" cy="164" r="12"/></g>
  </svg>
</template>

<script lang="ts">
import { computed, defineComponent, inject, PropType } from "vue";

export default defineComponent({
  name: "PhDotsSix",
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

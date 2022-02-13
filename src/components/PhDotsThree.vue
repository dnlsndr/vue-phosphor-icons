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
    <g v-if="displayWeight === 'bold'"><circle cx="128" cy="128" r="16"/><circle cx="64" cy="128" r="16"/><circle cx="192" cy="128" r="16"/></g>
    <g v-else-if="displayWeight === 'duotone'"><circle cx="128" cy="128" r="12"/><circle cx="192" cy="128" r="12"/><circle cx="64" cy="128" r="12"/></g>
    <g v-else-if="displayWeight === 'fill'"><path d="M140,128a12,12,0,1,1-12-12A12,12,0,0,1,140,128Zm52-12a12,12,0,1,0,12,12A12,12,0,0,0,192,116ZM64,116a12,12,0,1,0,12,12A12,12,0,0,0,64,116Z"/></g>
    <g v-else-if="displayWeight === 'light'"><circle cx="128" cy="128" r="10"/><circle cx="64" cy="128" r="10"/><circle cx="192" cy="128" r="10"/></g>
    <g v-else-if="displayWeight === 'thin'"><circle cx="128" cy="128" r="8"/><circle cx="64" cy="128" r="8"/><circle cx="192" cy="128" r="8"/></g>
    <g v-else-if="displayWeight === 'regular'"><circle cx="128" cy="128" r="12"/><circle cx="192" cy="128" r="12"/><circle cx="64" cy="128" r="12"/></g>
  </svg>
</template>

<script lang="ts">
import { computed, defineComponent, inject, PropType } from "vue";

export default defineComponent({
  name: "PhDotsThree",
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

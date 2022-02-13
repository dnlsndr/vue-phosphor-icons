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
    <g v-if="displayWeight === 'bold'"><path d="M45.4,177A95.9,95.9,0,1,1,79,210.6h0L45.8,220a7.9,7.9,0,0,1-9.8-9.8L45.4,177Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><circle cx="100" cy="128" r="16"/><circle cx="156" cy="128" r="16"/></g>
    <g v-else-if="displayWeight === 'duotone'"><path d="M45.4,177A95.9,95.9,0,1,1,79,210.6h0L45.8,220a7.9,7.9,0,0,1-9.8-9.8L45.4,177Z" opacity="0.2"/><path d="M45.4,177A95.9,95.9,0,1,1,79,210.6h0L45.8,220a7.9,7.9,0,0,1-9.8-9.8L45.4,177Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><circle cx="128" cy="128" r="12"/><circle cx="80" cy="128" r="12"/><circle cx="176" cy="128" r="12"/></g>
    <g v-else-if="displayWeight === 'fill'"><path d="M128,24A104,104,0,0,0,36.8,178l-8.5,29.9a16.1,16.1,0,0,0,4,15.8,15.8,15.8,0,0,0,15.7,4l30-8.5A104,104,0,1,0,128,24ZM80,140a12,12,0,1,1,12-12A12,12,0,0,1,80,140Zm48,0a12,12,0,1,1,12-12A12,12,0,0,1,128,140Zm48,0a12,12,0,1,1,12-12A12,12,0,0,1,176,140Z"/></g>
    <g v-else-if="displayWeight === 'light'"><path d="M45.4,177A95.9,95.9,0,1,1,79,210.6h0L45.8,220a7.9,7.9,0,0,1-9.8-9.8L45.4,177Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><circle cx="128" cy="128" r="10"/><circle cx="176" cy="128" r="10"/><circle cx="80" cy="128" r="10"/></g>
    <g v-else-if="displayWeight === 'thin'"><path d="M45.4,177A95.9,95.9,0,1,1,79,210.6h0L45.8,220a7.9,7.9,0,0,1-9.8-9.8L45.4,177Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><circle cx="128" cy="128" r="8"/><circle cx="80" cy="128" r="8"/><circle cx="176" cy="128" r="8"/></g>
    <g v-else-if="displayWeight === 'regular'"><path d="M45.4,177A95.9,95.9,0,1,1,79,210.6h0L45.8,220a7.9,7.9,0,0,1-9.8-9.8L45.4,177Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><circle cx="128" cy="128" r="12"/><circle cx="80" cy="128" r="12"/><circle cx="176" cy="128" r="12"/></g>
  </svg>
</template>

<script lang="ts">
import { computed, defineComponent, inject, PropType } from "vue";

export default defineComponent({
  name: "PhChatCircleDots",
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

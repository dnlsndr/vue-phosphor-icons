<script lang="ts">
export default {
  name: "PhArrowFatLinesLeft"
}
</script>

<script lang="ts" setup>
import { computed, inject, PropType } from "vue";

const props = defineProps({
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
})

const contextWeight = inject("weight", "regular")
const contextSize = inject("size", "1em")
const contextColor = inject("color", "currentColor")
const contextMirrored = inject("mirrored", false)

const displayWeight = computed(() => props.weight ?? contextWeight)
const displaySize = computed(() => props.size ?? contextSize)
const displayColor = computed(() => props.color ?? contextColor)
const displayMirrored = computed(() => props.mirrored ?? contextMirrored ? "scale(-1, 1)" : undefined)
</script>

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
    <g v-if="displayWeight === 'bold'"><polygon points="120 32 24 128 120 224 120 176 140 176 140 80 120 80 120 32" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="212" y1="176" x2="212" y2="80" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="176" y1="176" x2="176" y2="80" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></g>
    <g v-else-if="displayWeight === 'duotone'"><polygon points="120 32 24 128 120 224 120 176 152 176 152 80 120 80 120 32" opacity="0.2"/><polygon points="120 32 24 128 120 224 120 176 152 176 152 80 120 80 120 32" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="216" y1="176" x2="216" y2="80" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="184" y1="176" x2="184" y2="80" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></g>
    <g v-else-if="displayWeight === 'fill'"><path d="M114.3,229.7l-96-96a8.1,8.1,0,0,1,0-11.4l96-96a8.4,8.4,0,0,1,8.8-1.7A8,8,0,0,1,128,32V72h24a8,8,0,0,1,8,8v96a8,8,0,0,1-8,8H128v40a8,8,0,0,1-4.9,7.4A8.4,8.4,0,0,1,114.3,229.7ZM216,184a8,8,0,0,0,8-8V80a8,8,0,0,0-16,0v96A8,8,0,0,0,216,184Zm-32,0a8,8,0,0,0,8-8V80a8,8,0,0,0-16,0v96A8,8,0,0,0,184,184Z"/></g>
    <g v-else-if="displayWeight === 'light'"><polygon points="120 32 24 128 120 224 120 176 152 176 152 80 120 80 120 32" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><line x1="216" y1="176" x2="216" y2="80" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><line x1="184" y1="176" x2="184" y2="80" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/></g>
    <g v-else-if="displayWeight === 'thin'"><polygon points="120 32 24 128 120 224 120 176 152 176 152 80 120 80 120 32" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><line x1="216" y1="176" x2="216" y2="80" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><line x1="184" y1="176" x2="184" y2="80" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/></g>
    <g v-else-if="displayWeight === 'regular'"><polygon points="120 32 24 128 120 224 120 176 152 176 152 80 120 80 120 32" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="216" y1="176" x2="216" y2="80" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="184" y1="176" x2="184" y2="80" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></g>
  </svg>
</template>

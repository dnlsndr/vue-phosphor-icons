<script lang="ts">
export default {
  name: "PhArrowFatLinesUp"
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
    <g v-if="displayWeight === 'bold'"><polygon points="32 120 128 24 224 120 176 120 176 140 80 140 80 120 32 120" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="176" y1="212" x2="80" y2="212" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="176" y1="176" x2="80" y2="176" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></g>
    <g v-else-if="displayWeight === 'duotone'"><polygon points="32 120 128 24 224 120 176 120 176 152 80 152 80 120 32 120" opacity="0.2"/><polygon points="32 120 128 24 224 120 176 120 176 152 80 152 80 120 32 120" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="176" y1="216" x2="80" y2="216" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="176" y1="184" x2="80" y2="184" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></g>
    <g v-else-if="displayWeight === 'fill'"><path d="M231.4,123.1A8,8,0,0,1,224,128H184v24a8,8,0,0,1-8,8H80a8,8,0,0,1-8-8V128H32a8,8,0,0,1-7.4-4.9,8.4,8.4,0,0,1,1.7-8.8l96-96a8.1,8.1,0,0,1,11.4,0l96,96A8.4,8.4,0,0,1,231.4,123.1ZM176,208H80a8,8,0,0,0,0,16h96a8,8,0,0,0,0-16Zm0-32H80a8,8,0,0,0,0,16h96a8,8,0,0,0,0-16Z"/></g>
    <g v-else-if="displayWeight === 'light'"><polygon points="32 120 128 24 224 120 176 120 176 152 80 152 80 120 32 120" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><line x1="176" y1="216" x2="80" y2="216" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><line x1="176" y1="184" x2="80" y2="184" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/></g>
    <g v-else-if="displayWeight === 'thin'"><polygon points="32 120 128 24 224 120 176 120 176 152 80 152 80 120 32 120" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><line x1="176" y1="216" x2="80" y2="216" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><line x1="176" y1="184" x2="80" y2="184" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/></g>
    <g v-else-if="displayWeight === 'regular'"><polygon points="32 120 128 24 224 120 176 120 176 152 80 152 80 120 32 120" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="176" y1="216" x2="80" y2="216" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="176" y1="184" x2="80" y2="184" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></g>
  </svg>
</template>

<script lang="ts">
export default {
  name: "PhPaperclip"
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
    <g v-if="displayWeight === 'bold'"><path d="M96,176l95.8-92.2a28,28,0,0,0-39.6-39.6L54.1,142.1a47.9,47.9,0,0,0,67.8,67.8L204,128" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></g>
    <g v-else-if="displayWeight === 'duotone'"><path d="M160,80,76.7,164.7a16,16,0,0,0,22.6,22.6L198.6,86.6a32,32,0,0,0-45.2-45.2L54.1,142.1a47.9,47.9,0,0,0,67.8,67.8L204,128" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></g>
    <g v-else-if="displayWeight === 'fill'"><path d="M209.7,122.3a8.1,8.1,0,0,1-.1,11.4l-82,81.9a56,56,0,0,1-79.2-79.2L147.7,35.8a40,40,0,1,1,56.6,56.5L105,192.9A23.8,23.8,0,0,1,88,200a24,24,0,0,1-17-41l83.3-84.6a8,8,0,1,1,11.4,11.2L82.4,170.3A8,8,0,0,0,80,176a8.1,8.1,0,0,0,13.7,5.7L192.9,81A23.8,23.8,0,0,0,200,64a24,24,0,0,0-41-17L59.8,147.7a40,40,0,1,0,56.5,56.6l82-82A8.1,8.1,0,0,1,209.7,122.3Z"/></g>
    <g v-else-if="displayWeight === 'light'"><path d="M160,80,76.7,164.7a16,16,0,0,0,22.6,22.6L198.6,86.6a32,32,0,0,0-45.2-45.2L54.1,142.1a47.9,47.9,0,0,0,67.8,67.8L204,128" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/></g>
    <g v-else-if="displayWeight === 'thin'"><path d="M160,80,76.7,164.7a16,16,0,0,0,22.6,22.6L198.6,86.6a32,32,0,0,0-45.2-45.2L54.1,142.1a47.9,47.9,0,0,0,67.8,67.8L204,128" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/></g>
    <g v-else-if="displayWeight === 'regular'"><path d="M160,80,76.7,164.7a16,16,0,0,0,22.6,22.6L198.6,86.6a32,32,0,0,0-45.2-45.2L54.1,142.1a47.9,47.9,0,0,0,67.8,67.8L204,128" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></g>
  </svg>
</template>

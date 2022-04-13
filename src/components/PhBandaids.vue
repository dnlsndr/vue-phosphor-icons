<script lang="ts">
export default {
  name: "PhBandaids"
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
    <g v-if="displayWeight === 'bold'"><path d="M49.4,94.6A32,32,0,0,1,94.6,49.4l112,112a32,32,0,0,1-45.2,45.2Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M161.4,49.4a32,32,0,0,1,45.2,45.2l-112,112a32,32,0,0,1-45.2-45.2Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></g>
    <g v-else-if="displayWeight === 'duotone'"><path d="M206.6,94.6a32,32,0,0,0-45.2-45.2L128,82.7,173.3,128Z" opacity="0.2"/><path d="M49.4,161.4a32,32,0,0,0,45.2,45.2L128,173.3,82.7,128Z" opacity="0.2"/><path d="M94.6,49.4A32,32,0,0,0,49.4,94.6L82.7,128,128,82.7Z" opacity="0.2"/><path d="M173.3,128,128,173.3l33.4,33.3a32,32,0,0,0,45.2-45.2Z" opacity="0.2"/><path d="M49.4,94.6A32,32,0,0,1,94.6,49.4l112,112a32,32,0,0,1-45.2,45.2Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M161.4,49.4a32,32,0,0,1,45.2,45.2l-112,112a32,32,0,0,1-45.2-45.2Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><circle cx="128" cy="128" r="4" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" opacity="0.5"/><circle cx="128" cy="128" r="12"/></g>
    <g v-else-if="displayWeight === 'fill'"><circle cx="128" cy="128" r="12"/><path d="M184.6,128l27.7-27.7a40,40,0,0,0-56.6-56.6L128,71.4,100.3,43.7a40,40,0,0,0-56.6,56.6L71.4,128,43.7,155.7a40,40,0,0,0,56.6,56.6L128,184.6l27.7,27.7a40,40,0,0,0,56.6-56.6ZM128,94.1,161.9,128,128,161.9,94.1,128ZM167,55a24,24,0,0,1,34,34l-27.7,27.7-34-34ZM89,201a24,24,0,0,1-34-34l27.7-27.7,34,34Z"/></g>
    <g v-else-if="displayWeight === 'light'"><path d="M49.4,94.6A32,32,0,0,1,94.6,49.4l112,112a32,32,0,0,1-45.2,45.2Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><path d="M161.4,49.4a32,32,0,0,1,45.2,45.2l-112,112a32,32,0,0,1-45.2-45.2Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><circle cx="128" cy="128" r="4" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12" opacity="0.5"/><circle cx="128" cy="128" r="10"/></g>
    <g v-else-if="displayWeight === 'thin'"><path d="M161.4,49.4a32,32,0,0,1,45.2,45.2l-112,112a32,32,0,0,1-45.2-45.2Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M49.4,94.6A32,32,0,0,1,94.6,49.4l112,112a32,32,0,0,1-45.2,45.2Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><circle cx="128" cy="128" r="4" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8" opacity="0.5"/><circle cx="128" cy="128" r="8"/></g>
    <g v-else-if="displayWeight === 'regular'"><path d="M49.4,94.6A32,32,0,0,1,94.6,49.4l112,112a32,32,0,0,1-45.2,45.2Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M161.4,49.4a32,32,0,0,1,45.2,45.2l-112,112a32,32,0,0,1-45.2-45.2Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><circle cx="128" cy="128" r="4" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" opacity="0.5"/><circle cx="128" cy="128" r="12"/></g>
  </svg>
</template>

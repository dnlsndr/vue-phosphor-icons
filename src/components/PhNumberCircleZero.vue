<script lang="ts">
export default {
  name: "PhNumberCircleZero"
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
    <g v-if="displayWeight === 'bold'"><ellipse cx="128" cy="128" rx="32" ry="48" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><circle cx="128" cy="128" r="96" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></g>
    <g v-else-if="displayWeight === 'duotone'"><circle cx="128" cy="128" r="96" opacity="0.2"/><ellipse cx="128" cy="128" rx="32" ry="48" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><circle cx="128" cy="128" r="96" fill="none" :stroke="displayColor" stroke-miterlimit="10" stroke-width="16"/></g>
    <g v-else-if="displayWeight === 'fill'"><ellipse cx="128" cy="128" rx="24" ry="40"/><path d="M128,24A104,104,0,1,0,232,128,104.2,104.2,0,0,0,128,24Zm0,160c-27.6,0-40-28.1-40-56s12.4-56,40-56,40,28.1,40,56S155.6,184,128,184Z"/></g>
    <g v-else-if="displayWeight === 'light'"><ellipse cx="128" cy="128" rx="32" ry="48" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><circle cx="128" cy="128" r="96" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/></g>
    <g v-else-if="displayWeight === 'thin'"><ellipse cx="128" cy="128" rx="32" ry="48" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><circle cx="128" cy="128" r="96" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/></g>
    <g v-else-if="displayWeight === 'regular'"><ellipse cx="128" cy="128" rx="32" ry="48" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><circle cx="128" cy="128" r="96" fill="none" :stroke="displayColor" stroke-miterlimit="10" stroke-width="16"/></g>
  </svg>
</template>

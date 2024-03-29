<script lang="ts">
export default {
  name: "PhTerminal"
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
    <g v-if="displayWeight === 'bold'"><polyline points="40 64 112 128 40 192" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="120" y1="192" x2="216" y2="192" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></g>
    <g v-else-if="displayWeight === 'duotone'"><polyline points="40 64 112 128 40 192" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="120" y1="192" x2="216" y2="192" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></g>
    <g v-else-if="displayWeight === 'fill'"><path d="M120,128a8,8,0,0,0-2.7-6l-72-64A8,8,0,1,0,34.7,70L100,128,34.7,186A8,8,0,0,0,40,200a8.1,8.1,0,0,0,5.3-2l72-64A8,8,0,0,0,120,128Z"/><path d="M216,184H120a8,8,0,0,0,0,16h96a8,8,0,0,0,0-16Z"/></g>
    <g v-else-if="displayWeight === 'light'"><polyline points="40 64 112 128 40 192" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><line x1="120" y1="192" x2="216" y2="192" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/></g>
    <g v-else-if="displayWeight === 'thin'"><polyline points="40 64 112 128 40 192" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><line x1="120" y1="192" x2="216" y2="192" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/></g>
    <g v-else-if="displayWeight === 'regular'"><polyline points="40 64 112 128 40 192" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="120" y1="192" x2="216" y2="192" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></g>
  </svg>
</template>

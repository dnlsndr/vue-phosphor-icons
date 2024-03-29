<script lang="ts">
export default {
  name: "PhArrowBendUpRight"
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
    <g v-if="displayWeight === 'bold'"><polyline points="176 152 224 104 176 56" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M32,200a96,96,0,0,1,96-96h96" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></g>
    <g v-else-if="displayWeight === 'duotone'"><polyline points="176 152 224 104 176 56" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M32,200a96,96,0,0,1,96-96h96" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></g>
    <g v-else-if="displayWeight === 'fill'"><path d="M229.7,109.7l-48,48A8.3,8.3,0,0,1,176,160a8.5,8.5,0,0,1-3.1-.6A8,8,0,0,1,168,152V112H128a88.1,88.1,0,0,0-88,88,8,8,0,0,1-16,0A104.2,104.2,0,0,1,128,96h40V56a8,8,0,0,1,4.9-7.4,8.4,8.4,0,0,1,8.8,1.7l48,48A8.1,8.1,0,0,1,229.7,109.7Z"/></g>
    <g v-else-if="displayWeight === 'light'"><polyline points="176 152 224 104 176 56" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><path d="M32,200a96,96,0,0,1,96-96h96" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/></g>
    <g v-else-if="displayWeight === 'thin'"><polyline points="176 152 224 104 176 56" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M32,200a96,96,0,0,1,96-96h96" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/></g>
    <g v-else-if="displayWeight === 'regular'"><polyline points="176 152 224 104 176 56" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M32,200a96,96,0,0,1,96-96h96" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></g>
  </svg>
</template>

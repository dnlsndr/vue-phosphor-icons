<script lang="ts">
export default {
  name: "PhHandFist"
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
    <g v-if="displayWeight === 'bold'"><path d="M128,104a24,24,0,0,1-48,0V64a24,24,0,0,1,48,0Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M128,64a24,24,0,0,1,48,0V88" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M128,176a40,40,0,0,1,40-40H152a23.9,23.9,0,0,1-24-24V96a8,8,0,0,1,8-8h64a23.9,23.9,0,0,1,24,24v16a96,96,0,0,1-192,0V88a24,24,0,0,1,48,0v16a24,24,0,0,1-48,0" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></g>
    <g v-else-if="displayWeight === 'duotone'"><path d="M128,64a24,24,0,0,1,48,0V88h24a23.9,23.9,0,0,1,24,24v16a96,96,0,0,1-192,0V88a24,24,0,0,1,48,0V64a24,24,0,0,1,48,0" opacity="0.2"/><path d="M128,104a24,24,0,0,1-48,0V64a24,24,0,0,1,48,0Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M128,64a24,24,0,0,1,48,0V88" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M128,176a40,40,0,0,1,40-40H152a23.9,23.9,0,0,1-24-24V96a8,8,0,0,1,8-8h64a23.9,23.9,0,0,1,24,24v16a96,96,0,0,1-192,0V88a24,24,0,0,1,48,0v16a24,24,0,0,1-48,0" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></g>
    <g v-else-if="displayWeight === 'fill'"><path d="M200,80H184V64a32,32,0,0,0-56-21.1A31.8,31.8,0,0,0,104,32,32.1,32.1,0,0,0,72.2,60.4,32,32,0,0,0,24,88v40a104,104,0,0,0,208,0V112A32.1,32.1,0,0,0,200,80ZM152,48a16,16,0,0,1,16,16V80H136V64A16,16,0,0,1,152,48ZM88,64a16,16,0,0,1,32,0v40a16,16,0,0,1-32,0ZM40,88a16,16,0,0,1,32,0v16a16,16,0,0,1-32,0Zm88,128a88,88,0,0,1-87.9-84.2A32,32,0,0,0,80,125.1a31.9,31.9,0,0,0,44.6,3.4,32.3,32.3,0,0,0,11.8,11.4A47.7,47.7,0,0,0,120,176a8,8,0,0,0,16,0,32.1,32.1,0,0,1,32-32,8,8,0,0,0,0-16H152a16,16,0,0,1-16-16V96h64a16,16,0,0,1,16,16v16A88.1,88.1,0,0,1,128,216Z"/></g>
    <g v-else-if="displayWeight === 'light'"><path d="M128,104a24,24,0,0,1-48,0V64a24,24,0,0,1,48,0Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><path d="M128,64a24,24,0,0,1,48,0V88" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><path d="M128,176a40,40,0,0,1,40-40H152a23.9,23.9,0,0,1-24-24V96a8,8,0,0,1,8-8h64a23.9,23.9,0,0,1,24,24v16a96,96,0,0,1-192,0V88a24,24,0,0,1,48,0v16a24,24,0,0,1-48,0" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/></g>
    <g v-else-if="displayWeight === 'thin'"><path d="M128,104a24,24,0,0,1-48,0V64a24,24,0,0,1,48,0Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M128,64a24,24,0,0,1,48,0V88" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M128,176a40,40,0,0,1,40-40H152a23.9,23.9,0,0,1-24-24V96a8,8,0,0,1,8-8h64a23.9,23.9,0,0,1,24,24v16a96,96,0,0,1-192,0V88a24,24,0,0,1,48,0v16a24,24,0,0,1-48,0" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/></g>
    <g v-else-if="displayWeight === 'regular'"><path d="M128,104a24,24,0,0,1-48,0V64a24,24,0,0,1,48,0Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M128,64a24,24,0,0,1,48,0V88" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M128,176a40,40,0,0,1,40-40H152a23.9,23.9,0,0,1-24-24V96a8,8,0,0,1,8-8h64a23.9,23.9,0,0,1,24,24v16a96,96,0,0,1-192,0V88a24,24,0,0,1,48,0v16a24,24,0,0,1-48,0" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></g>
  </svg>
</template>

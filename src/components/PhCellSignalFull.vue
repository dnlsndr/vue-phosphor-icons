<script lang="ts">
export default {
  name: "PhCellSignalFull"
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
    <g v-if="displayWeight === 'bold'"><path d="M200,43.3V208a8,8,0,0,1-8,8H27.3a8,8,0,0,1-5.6-13.7L186.3,37.7A8,8,0,0,1,200,43.3Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="160" y1="64" x2="160" y2="216" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="120" y1="104" x2="120" y2="216" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="80" y1="144" x2="80" y2="216" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></g>
    <g v-else-if="displayWeight === 'duotone'"><path d="M200,43.3V208a8,8,0,0,1-8,8H27.3a8,8,0,0,1-5.6-13.7L186.3,37.7A8,8,0,0,1,200,43.3Z" opacity="0.2"/><path d="M200,43.3V208a8,8,0,0,1-8,8H27.3a8,8,0,0,1-5.6-13.7L186.3,37.7A8,8,0,0,1,200,43.3Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></g>
    <g v-else-if="displayWeight === 'fill'"><path d="M198.1,28.5A15.9,15.9,0,0,0,180.7,32L16,196.7A16,16,0,0,0,27.3,224H192a16,16,0,0,0,16-16V43.3A16,16,0,0,0,198.1,28.5Z"/></g>
    <g v-else-if="displayWeight === 'light'"><path d="M200,43.3V208a8,8,0,0,1-8,8H27.3a8,8,0,0,1-5.6-13.7L186.3,37.7A8,8,0,0,1,200,43.3Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><line x1="160" y1="64" x2="160" y2="216" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><line x1="120" y1="104" x2="120" y2="216" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><line x1="80" y1="144" x2="80" y2="216" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/></g>
    <g v-else-if="displayWeight === 'thin'"><path d="M200,43.3V208a8,8,0,0,1-8,8H27.3a8,8,0,0,1-5.6-13.7L186.3,37.7A8,8,0,0,1,200,43.3Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><line x1="160" y1="64" x2="160" y2="216" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><line x1="120" y1="104" x2="120" y2="216" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><line x1="80" y1="144" x2="80" y2="216" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/></g>
    <g v-else-if="displayWeight === 'regular'"><line x1="160" y1="64" x2="160" y2="216" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M200,43.3V208a8,8,0,0,1-8,8H27.3a8,8,0,0,1-5.6-13.7L186.3,37.7A8,8,0,0,1,200,43.3Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="120" y1="104" x2="120" y2="216" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="80" y1="144" x2="80" y2="216" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></g>
  </svg>
</template>

<script lang="ts">
export default {
  name: "PhFastForwardCircle"
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
    <g v-if="displayWeight === 'bold'"><circle cx="128" cy="128" r="96" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><polygon points="88 156 124 128 88 100 88 156" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><polygon points="144 156 180 128 144 100 144 156" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></g>
    <g v-else-if="displayWeight === 'duotone'"><path d="M128,32a96,96,0,1,0,96,96A96,96,0,0,0,128,32ZM80,160V96l48,32Zm64,0V96l48,32Z" opacity="0.2"/><circle cx="128" cy="128" r="96" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><polygon points="80 160 128 128 80 96 80 160" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><polygon points="144 160 192 128 144 96 144 160" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></g>
    <g v-else-if="displayWeight === 'fill'"><path d="M128,24A104,104,0,1,0,232,128,104.2,104.2,0,0,0,128,24Zm56.6,110.6-40,28A8.6,8.6,0,0,1,140,164a8,8,0,0,1-8-8V128a8.2,8.2,0,0,1-3.4,6.6l-40,28A8.6,8.6,0,0,1,84,164a8,8,0,0,1-8-8V100a8.1,8.1,0,0,1,4.3-7.1,8,8,0,0,1,8.3.5l40,28A8.2,8.2,0,0,1,132,128V100a8.1,8.1,0,0,1,4.3-7.1,8,8,0,0,1,8.3.5l40,28a8.1,8.1,0,0,1,0,13.2Z"/></g>
    <g v-else-if="displayWeight === 'light'"><circle cx="128" cy="128" r="96" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><polygon points="84 160 132 128 84 96 84 160" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><polygon points="140 160 188 128 140 96 140 160" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/></g>
    <g v-else-if="displayWeight === 'thin'"><circle cx="128" cy="128" r="96" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><polygon points="84 160 132 128 84 96 84 160" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><polygon points="140 160 188 128 140 96 140 160" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/></g>
    <g v-else-if="displayWeight === 'regular'"><circle cx="128" cy="128" r="96" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><polygon points="80 160 128 128 80 96 80 160" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><polygon points="144 160 192 128 144 96 144 160" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></g>
  </svg>
</template>

<script lang="ts">
export default {
  name: "PhCurrencyCny"
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
    <g v-if="displayWeight === 'bold'"><line x1="64" y1="64" x2="192" y2="64" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="48" y1="120" x2="208" y2="120" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M152,120v56a23.9,23.9,0,0,0,24,24h40V176" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M104,120v16a64.1,64.1,0,0,1-64,64" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></g>
    <g v-else-if="displayWeight === 'duotone'"><line x1="64" y1="64" x2="192" y2="64" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="48" y1="120" x2="208" y2="120" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M152,120v56a23.9,23.9,0,0,0,24,24h40V176" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M104,120v16a64.1,64.1,0,0,1-64,64" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></g>
    <g v-else-if="displayWeight === 'fill'"><path d="M56,64a8,8,0,0,1,8-8H192a8,8,0,0,1,0,16H64A8,8,0,0,1,56,64ZM216,168a8,8,0,0,0-8,8v16H176a16,16,0,0,1-16-16V128h48a8,8,0,0,0,0-16H48a8,8,0,0,0,0,16H96v8a56,56,0,0,1-56,56,8,8,0,0,0,0,16,72.1,72.1,0,0,0,72-72v-8h32v48a32.1,32.1,0,0,0,32,32h40a8,8,0,0,0,8-8V176A8,8,0,0,0,216,168Z"/></g>
    <g v-else-if="displayWeight === 'light'"><line x1="64" y1="64" x2="192" y2="64" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><line x1="48" y1="120" x2="208" y2="120" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><path d="M152,120v56a23.9,23.9,0,0,0,24,24h40V176" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><path d="M104,120v16a64.1,64.1,0,0,1-64,64" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/></g>
    <g v-else-if="displayWeight === 'thin'"><line x1="64" y1="64" x2="192" y2="64" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><line x1="48" y1="120" x2="208" y2="120" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M152,120v56a23.9,23.9,0,0,0,24,24h40V176" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M104,120v16a64.1,64.1,0,0,1-64,64" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/></g>
    <g v-else-if="displayWeight === 'regular'"><line x1="64" y1="64" x2="192" y2="64" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="48" y1="120" x2="208" y2="120" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M152,120v56a23.9,23.9,0,0,0,24,24h40V176" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M104,120v16a64.1,64.1,0,0,1-64,64" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></g>
  </svg>
</template>

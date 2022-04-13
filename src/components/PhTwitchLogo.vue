<script lang="ts">
export default {
  name: "PhTwitchLogo"
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
    <g v-if="displayWeight === 'bold'"><path d="M165.1,200H122.9a7.8,7.8,0,0,0-5.1,1.9L72,240V200H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8H208a8,8,0,0,1,8,8V156.3a8.1,8.1,0,0,1-2.9,6.1l-42.9,35.7A7.8,7.8,0,0,1,165.1,200Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="168" y1="88" x2="168" y2="136" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="120" y1="88" x2="120" y2="136" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></g>
    <g v-else-if="displayWeight === 'duotone'"><path d="M165.1,200H122.9a7.8,7.8,0,0,0-5.1,1.9L72,240V200H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8H208a8,8,0,0,1,8,8V156.3a8.1,8.1,0,0,1-2.9,6.1l-42.9,35.7A7.8,7.8,0,0,1,165.1,200Z" opacity="0.2"/><path d="M165.1,200H122.9a7.8,7.8,0,0,0-5.1,1.9L72,240V200H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8H208a8,8,0,0,1,8,8V156.3a8.1,8.1,0,0,1-2.9,6.1l-42.9,35.7A7.8,7.8,0,0,1,165.1,200Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="168" y1="88" x2="168" y2="136" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="120" y1="88" x2="120" y2="136" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></g>
    <g v-else-if="displayWeight === 'fill'"><path d="M208,32H48A16,16,0,0,0,32,48V192a16,16,0,0,0,16,16H64v32a7.9,7.9,0,0,0,4.6,7.2,6.8,6.8,0,0,0,3.4.8,7.5,7.5,0,0,0,5.1-1.9L122.9,208h42.2a15.8,15.8,0,0,0,10.2-3.7l42.9-35.8a15.7,15.7,0,0,0,5.8-12.2V48A16,16,0,0,0,208,32ZM128,136a8,8,0,0,1-16,0V88a8,8,0,0,1,16,0Zm48,0a8,8,0,0,1-16,0V88a8,8,0,0,1,16,0Z"/></g>
    <g v-else-if="displayWeight === 'light'"><path d="M165.1,200H122.9a7.8,7.8,0,0,0-5.1,1.9L72,240V200H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8H208a8,8,0,0,1,8,8V156.3a8.1,8.1,0,0,1-2.9,6.1l-42.9,35.7A7.8,7.8,0,0,1,165.1,200Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><line x1="168" y1="88" x2="168" y2="136" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><line x1="120" y1="88" x2="120" y2="136" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/></g>
    <g v-else-if="displayWeight === 'thin'"><path d="M165.1,200H122.9a7.8,7.8,0,0,0-5.1,1.9L72,240V200H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8H208a8,8,0,0,1,8,8V156.3a8.1,8.1,0,0,1-2.9,6.1l-42.9,35.7A7.8,7.8,0,0,1,165.1,200Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><line x1="168" y1="88" x2="168" y2="136" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><line x1="120" y1="88" x2="120" y2="136" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/></g>
    <g v-else-if="displayWeight === 'regular'"><path d="M165.1,200H122.9a7.8,7.8,0,0,0-5.1,1.9L72,240V200H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8H208a8,8,0,0,1,8,8V156.3a8.1,8.1,0,0,1-2.9,6.1l-42.9,35.7A7.8,7.8,0,0,1,165.1,200Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="168" y1="88" x2="168" y2="136" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="120" y1="88" x2="120" y2="136" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></g>
  </svg>
</template>

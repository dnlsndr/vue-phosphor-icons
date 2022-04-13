<script lang="ts">
export default {
  name: "PhMapTrifold"
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
    <g v-if="displayWeight === 'bold'"><polyline points="96 184 32 200 32 56 96 40" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><polygon points="160 216 96 184 96 40 160 72 160 216" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><polyline points="160 72 224 56 224 200 160 216" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></g>
    <g v-else-if="displayWeight === 'duotone'"><polygon points="160 216 96 184 96 40 160 72 160 216" opacity="0.2"/><polyline points="96 184 32 200 32 56 96 40" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><polygon points="160 216 96 184 96 40 160 72 160 216" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><polyline points="160 72 224 56 224 200 160 216" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></g>
    <g v-else-if="displayWeight === 'fill'"><path d="M228.9,49.7a8,8,0,0,0-6.8-1.5L160.9,63.5,99.6,32.8h-.1l-.8-.3h-.2l-.7-.2h-.3l-.7-.2H94.1l-64,16A8,8,0,0,0,24,56V200a7.8,7.8,0,0,0,3.1,6.3A7.9,7.9,0,0,0,32,208l1.9-.2,61.2-15.3,61.3,30.7h.1l.7.3h.1l.8.3h3.8l64-16A8,8,0,0,0,232,200V56A7.8,7.8,0,0,0,228.9,49.7ZM152,203.1l-48-24V52.9l48,24Z"/></g>
    <g v-else-if="displayWeight === 'light'"><polyline points="96 184 32 200 32 56 96 40" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><polygon points="160 216 96 184 96 40 160 72 160 216" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><polyline points="160 72 224 56 224 200 160 216" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/></g>
    <g v-else-if="displayWeight === 'thin'"><polyline points="96 184 32 200 32 56 96 40" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><polygon points="160 216 96 184 96 40 160 72 160 216" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><polyline points="160 72 224 56 224 200 160 216" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/></g>
    <g v-else-if="displayWeight === 'regular'"><polyline points="96 184 32 200 32 56 96 40" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><polygon points="160 216 96 184 96 40 160 72 160 216" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><polyline points="160 72 224 56 224 200 160 216" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></g>
  </svg>
</template>

<script lang="ts">
export default {
  name: "PhTelevision"
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
    <g v-if="displayWeight === 'bold'"><rect x="32" y="72" width="192" height="136" rx="8" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><polyline points="80 24 128 72 176 24" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><circle cx="184" cy="116" r="16"/><circle cx="184" cy="164" r="16"/><line x1="140" y1="208" x2="140" y2="72" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></g>
    <g v-else-if="displayWeight === 'duotone'"><path d="M152,208V72H40a8,8,0,0,0-8,8V200a8,8,0,0,0,8,8Z" opacity="0.2"/><rect x="32" y="72" width="192" height="136" rx="8" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><polyline points="80 24 128 72 176 24" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><circle cx="188" cy="116" r="12"/><circle cx="188" cy="164" r="12"/><line x1="152" y1="208" x2="152" y2="72" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></g>
    <g v-else-if="displayWeight === 'fill'"><path d="M216,64H147.3l34.4-34.3a8.1,8.1,0,0,0-11.4-11.4L128,60.7,85.7,18.3A8.1,8.1,0,0,0,74.3,29.7L108.7,64H40A16,16,0,0,0,24,80V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V80A16,16,0,0,0,216,64Zm0,136H160V80h56V200Zm-16-84a12,12,0,1,1-12-12A12,12,0,0,1,200,116Zm0,48a12,12,0,1,1-12-12A12,12,0,0,1,200,164Z"/></g>
    <g v-else-if="displayWeight === 'light'"><rect x="32" y="72" width="192" height="136" rx="8" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><polyline points="80 24 128 72 176 24" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><circle cx="188" cy="116" r="10"/><circle cx="188" cy="164" r="10"/><line x1="152" y1="208" x2="152" y2="72" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/></g>
    <g v-else-if="displayWeight === 'thin'"><rect x="32" y="72" width="192" height="136" rx="8" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><polyline points="80 24 128 72 176 24" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><circle cx="188" cy="116" r="8"/><circle cx="188" cy="164" r="8"/><line x1="152" y1="208" x2="152" y2="72" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/></g>
    <g v-else-if="displayWeight === 'regular'"><rect x="32" y="72" width="192" height="136" rx="8" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><polyline points="80 24 128 72 176 24" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><circle cx="188" cy="116" r="12"/><circle cx="188" cy="164" r="12"/><line x1="152" y1="208" x2="152" y2="72" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></g>
  </svg>
</template>

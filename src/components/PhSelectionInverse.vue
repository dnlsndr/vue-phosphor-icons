<script lang="ts">
export default {
  name: "PhSelectionInverse"
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
    <g v-if="displayWeight === 'bold'"><line x1="112" y1="216" x2="144" y2="216" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="40" y1="112" x2="40" y2="144" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M72,216H48a8,8,0,0,1-8-8V184" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M184,216h24a8,8,0,0,0,8-8V48a8,8,0,0,0-8-8H48a8,8,0,0,0-8,8V72" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="42.3" y1="42.3" x2="213.7" y2="213.7" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></g>
    <g v-else-if="displayWeight === 'duotone'"><path d="M42.3,42.3,213.7,213.7h0A8.4,8.4,0,0,0,216,208V48a8,8,0,0,0-8-8H48a8.4,8.4,0,0,0-5.7,2.3Z" opacity="0.2"/><line x1="112" y1="216" x2="144" y2="216" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="40" y1="112" x2="40" y2="144" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M72,216H48a8,8,0,0,1-8-8V184" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M184,216h24a8,8,0,0,0,8-8V48a8,8,0,0,0-8-8H48a8,8,0,0,0-8,8V72" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="42.3" y1="42.3" x2="213.7" y2="213.7" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></g>
    <g v-else-if="displayWeight === 'fill'"><path d="M152,216a8,8,0,0,1-8,8H112a8,8,0,0,1,0-16h32A8,8,0,0,1,152,216ZM40,152a8,8,0,0,0,8-8V112a8,8,0,0,0-16,0v32A8,8,0,0,0,40,152Zm32,56H48V184a8,8,0,0,0-16,0v24a16,16,0,0,0,16,16H72a8,8,0,0,0,0-16ZM224,48a16,16,0,0,0-16-16H48a16.4,16.4,0,0,0-10.7,4.1l-.6.6-.6.6A16.4,16.4,0,0,0,32,48V72a8,8,0,0,0,16,0V59.3L196.7,208H184a8,8,0,0,0,0,16h24a16.4,16.4,0,0,0,10.7-4.1l.6-.6.6-.6A16.4,16.4,0,0,0,224,208Z"/></g>
    <g v-else-if="displayWeight === 'light'"><line x1="112" y1="216" x2="144" y2="216" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><line x1="40" y1="112" x2="40" y2="144" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><path d="M72,216H48a8,8,0,0,1-8-8V184" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><path d="M184,216h24a8,8,0,0,0,8-8V48a8,8,0,0,0-8-8H48a8,8,0,0,0-8,8V72" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><line x1="42.3" y1="42.3" x2="213.7" y2="213.7" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/></g>
    <g v-else-if="displayWeight === 'thin'"><line x1="112" y1="216" x2="144" y2="216" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><line x1="40" y1="112" x2="40" y2="144" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M72,216H48a8,8,0,0,1-8-8V184" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M184,216h24a8,8,0,0,0,8-8V48a8,8,0,0,0-8-8H48a8,8,0,0,0-8,8V72" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><line x1="42.3" y1="42.3" x2="213.7" y2="213.7" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/></g>
    <g v-else-if="displayWeight === 'regular'"><line x1="112" y1="216" x2="144" y2="216" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="40" y1="112" x2="40" y2="144" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M72,216H48a8,8,0,0,1-8-8V184" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M184,216h24a8,8,0,0,0,8-8V48a8,8,0,0,0-8-8H48a8,8,0,0,0-8,8V72" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="42.3" y1="42.3" x2="213.7" y2="213.7" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></g>
  </svg>
</template>

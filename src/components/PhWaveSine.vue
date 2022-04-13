<script lang="ts">
export default {
  name: "PhWaveSine"
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
    <g v-if="displayWeight === 'bold'"><path d="M24,128c104-224,104,224,208,0" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></g>
    <g v-else-if="displayWeight === 'duotone'"><path d="M24,128c104-224,104,224,208,0Z" opacity="0.2"/><path d="M24,128c104-224,104,224,208,0" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></g>
    <g v-else-if="displayWeight === 'fill'"><path d="M178,200.7c-25.1,0-40.7-33.7-57.3-69.3-13-28.2-27.8-60.1-42.7-60.1s-36.3,37.6-46.7,60.1a8.1,8.1,0,1,1-14.6-6.8C38.7,77.4,58.1,55.3,78,55.3c25.1,0,40.7,33.7,57.3,69.3,13,28.2,27.8,60.1,42.7,60.1,16.4,0,36.3-37.6,46.7-60.1a8.1,8.1,0,0,1,14.6,6.8C217.3,178.6,197.9,200.7,178,200.7Z"/></g>
    <g v-else-if="displayWeight === 'light'"><path d="M24,128c104-224,104,224,208,0" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/></g>
    <g v-else-if="displayWeight === 'thin'"><path d="M24,128c104-224,104,224,208,0" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/></g>
    <g v-else-if="displayWeight === 'regular'"><path d="M24,128c104-224,104,224,208,0" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></g>
  </svg>
</template>

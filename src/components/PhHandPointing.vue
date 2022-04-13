<script lang="ts">
export default {
  name: "PhHandPointing"
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
    <g v-if="displayWeight === 'bold'"><path d="M168,112V100a20,20,0,0,0-40,0V36a20,20,0,0,0-40,0V157.3l-21.9-38a20,20,0,0,0-34.7,20C64,208,83.8,232,128,232a80,80,0,0,0,80-80V112a20,20,0,0,0-40,0Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></g>
    <g v-else-if="displayWeight === 'duotone'"><path d="M168,112V100a20,20,0,0,0-40,0V36a20,20,0,0,0-40,0V157.3l-21.9-38a20,20,0,0,0-34.7,20C64,208,83.8,232,128,232a80,80,0,0,0,80-80V112a20,20,0,0,0-40,0Z" opacity="0.2"/><path d="M168,112V100a20,20,0,0,0-40,0V36a20,20,0,0,0-40,0V157.3l-21.9-38a20,20,0,0,0-34.7,20C64,208,83.8,232,128,232a80,80,0,0,0,80-80V112a20,20,0,0,0-40,0Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></g>
    <g v-else-if="displayWeight === 'fill'"><path d="M188,84a27.6,27.6,0,0,0-14.6,4.1A28.1,28.1,0,0,0,136,74.7V36a28,28,0,0,0-56,0v91.4l-7-12.1A28,28,0,0,0,24.3,143c32.5,68.4,54.1,97,103.7,97a88.1,88.1,0,0,0,88-88V112A28.1,28.1,0,0,0,188,84Zm12,68a72.1,72.1,0,0,1-72,72c-20.2,0-34.2-5.5-47-18.2S56.3,173,38.7,135.9l-.3-.6a11.6,11.6,0,0,1-1.2-9.1,11.8,11.8,0,0,1,5.6-7.3,12,12,0,0,1,9.1-1.2,11.6,11.6,0,0,1,7.2,5.6l22,38a8.1,8.1,0,0,0,9,3.7,7.9,7.9,0,0,0,5.9-7.7V36a12,12,0,0,1,24,0v68a8,8,0,0,0,16,0v-4a12,12,0,0,1,24,0v12a8,8,0,0,0,16,0,12,12,0,0,1,24,0Z"/></g>
    <g v-else-if="displayWeight === 'light'"><path d="M168,112V100a20,20,0,0,0-40,0V36a20,20,0,0,0-40,0V157.3l-21.9-38a20,20,0,0,0-34.7,20C64,208,83.8,232,128,232a80,80,0,0,0,80-80V112a20,20,0,0,0-40,0Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/></g>
    <g v-else-if="displayWeight === 'thin'"><path d="M168,112V100a20,20,0,0,0-40,0V36a20,20,0,0,0-40,0V157.3l-21.9-38a20,20,0,0,0-34.7,20C64,208,83.8,232,128,232a80,80,0,0,0,80-80V112a20,20,0,0,0-40,0Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/></g>
    <g v-else-if="displayWeight === 'regular'"><path d="M168,112V100a20,20,0,0,0-40,0V36a20,20,0,0,0-40,0V157.3l-21.9-38a20,20,0,0,0-34.7,20C64,208,83.8,232,128,232a80,80,0,0,0,80-80V112a20,20,0,0,0-40,0Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></g>
  </svg>
</template>

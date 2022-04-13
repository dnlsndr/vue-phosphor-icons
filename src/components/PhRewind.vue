<script lang="ts">
export default {
  name: "PhRewind"
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
    <g v-if="displayWeight === 'bold'"><path d="M18.5,121.3l89.2-57.4A8,8,0,0,1,120,70.7V185.3a8,8,0,0,1-12.3,6.8L18.5,134.7A7.9,7.9,0,0,1,18.5,121.3Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M126.5,121.3l89.2-57.4A8,8,0,0,1,228,70.7V185.3a8,8,0,0,1-12.3,6.8l-89.2-57.4A7.9,7.9,0,0,1,126.5,121.3Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></g>
    <g v-else-if="displayWeight === 'duotone'"><path d="M14.5,121.3l89.2-57.4A8,8,0,0,1,116,70.7V185.3a8,8,0,0,1-12.3,6.8L14.5,134.7A7.9,7.9,0,0,1,14.5,121.3Z" opacity="0.2"/><path d="M126.5,121.3l89.2-57.4A8,8,0,0,1,228,70.7V185.3a8,8,0,0,1-12.3,6.8l-89.2-57.4A7.9,7.9,0,0,1,126.5,121.3Z" opacity="0.2"/><path d="M14.5,121.3l89.2-57.4A8,8,0,0,1,116,70.7V185.3a8,8,0,0,1-12.3,6.8L14.5,134.7A7.9,7.9,0,0,1,14.5,121.3Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M126.5,121.3l89.2-57.4A8,8,0,0,1,228,70.7V185.3a8,8,0,0,1-12.3,6.8l-89.2-57.4A7.9,7.9,0,0,1,126.5,121.3Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></g>
    <g v-else-if="displayWeight === 'fill'"><path d="M10.1,114.5,99.3,57.2A16,16,0,0,1,124,70.7v42.6l87.3-56.1A16,16,0,0,1,236,70.7V185.3a16.1,16.1,0,0,1-8.3,14.1,16.5,16.5,0,0,1-16.4-.6L124,142.7v42.6a16.1,16.1,0,0,1-8.3,14.1,16.5,16.5,0,0,1-16.4-.6L10.1,141.5a16.1,16.1,0,0,1,0-27Z"/></g>
    <g v-else-if="displayWeight === 'light'"><path d="M14.5,121.3l89.2-57.4A8,8,0,0,1,116,70.7V185.3a8,8,0,0,1-12.3,6.8L14.5,134.7A7.9,7.9,0,0,1,14.5,121.3Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><path d="M126.5,121.3l89.2-57.4A8,8,0,0,1,228,70.7V185.3a8,8,0,0,1-12.3,6.8l-89.2-57.4A7.9,7.9,0,0,1,126.5,121.3Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/></g>
    <g v-else-if="displayWeight === 'thin'"><path d="M14.5,121.3l89.2-57.4A8,8,0,0,1,116,70.7V185.3a8,8,0,0,1-12.3,6.8L14.5,134.7A7.9,7.9,0,0,1,14.5,121.3Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M126.5,121.3l89.2-57.4A8,8,0,0,1,228,70.7V185.3a8,8,0,0,1-12.3,6.8l-89.2-57.4A7.9,7.9,0,0,1,126.5,121.3Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/></g>
    <g v-else-if="displayWeight === 'regular'"><path d="M14.5,121.3l89.2-57.4A8,8,0,0,1,116,70.7V185.3a8,8,0,0,1-12.3,6.8L14.5,134.7A7.9,7.9,0,0,1,14.5,121.3Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M126.5,121.3l89.2-57.4A8,8,0,0,1,228,70.7V185.3a8,8,0,0,1-12.3,6.8l-89.2-57.4A7.9,7.9,0,0,1,126.5,121.3Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></g>
  </svg>
</template>

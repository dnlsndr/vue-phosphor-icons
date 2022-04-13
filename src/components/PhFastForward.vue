<script lang="ts">
export default {
  name: "PhFastForward"
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
    <g v-if="displayWeight === 'bold'"><path d="M237.5,121.3,148.3,63.9A8,8,0,0,0,136,70.7V185.3a8,8,0,0,0,12.3,6.8l89.2-57.4A7.9,7.9,0,0,0,237.5,121.3Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M129.5,121.3,40.3,63.9A8,8,0,0,0,28,70.7V185.3a8,8,0,0,0,12.3,6.8l89.2-57.4A7.9,7.9,0,0,0,129.5,121.3Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></g>
    <g v-else-if="displayWeight === 'duotone'"><path d="M241.5,121.3,152.3,63.9A8,8,0,0,0,140,70.7V185.3a8,8,0,0,0,12.3,6.8l89.2-57.4A7.9,7.9,0,0,0,241.5,121.3Z" opacity="0.2"/><path d="M129.5,121.3,40.3,63.9A8,8,0,0,0,28,70.7V185.3a8,8,0,0,0,12.3,6.8l89.2-57.4A7.9,7.9,0,0,0,129.5,121.3Z" opacity="0.2"/><path d="M241.5,121.3,152.3,63.9A8,8,0,0,0,140,70.7V185.3a8,8,0,0,0,12.3,6.8l89.2-57.4A7.9,7.9,0,0,0,241.5,121.3Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M129.5,121.3,40.3,63.9A8,8,0,0,0,28,70.7V185.3a8,8,0,0,0,12.3,6.8l89.2-57.4A7.9,7.9,0,0,0,129.5,121.3Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></g>
    <g v-else-if="displayWeight === 'fill'"><path d="M253.2,128a16,16,0,0,1-7.3,13.5l-89.2,57.3A16,16,0,0,1,132,185.3V142.7L44.7,198.8A16,16,0,0,1,20,185.3V70.7A16,16,0,0,1,44.7,57.2L132,113.3V70.7a16,16,0,0,1,24.7-13.5l89.2,57.3A16,16,0,0,1,253.2,128Z"/></g>
    <g v-else-if="displayWeight === 'light'"><path d="M241.5,121.3,152.3,63.9A8,8,0,0,0,140,70.7V185.3a8,8,0,0,0,12.3,6.8l89.2-57.4A7.9,7.9,0,0,0,241.5,121.3Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><path d="M129.5,121.3,40.3,63.9A8,8,0,0,0,28,70.7V185.3a8,8,0,0,0,12.3,6.8l89.2-57.4A7.9,7.9,0,0,0,129.5,121.3Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/></g>
    <g v-else-if="displayWeight === 'thin'"><path d="M241.5,121.3,152.3,63.9A8,8,0,0,0,140,70.7V185.3a8,8,0,0,0,12.3,6.8l89.2-57.4A7.9,7.9,0,0,0,241.5,121.3Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M129.5,121.3,40.3,63.9A8,8,0,0,0,28,70.7V185.3a8,8,0,0,0,12.3,6.8l89.2-57.4A7.9,7.9,0,0,0,129.5,121.3Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/></g>
    <g v-else-if="displayWeight === 'regular'"><path d="M241.5,121.3,152.3,63.9A8,8,0,0,0,140,70.7V185.3a8,8,0,0,0,12.3,6.8l89.2-57.4A7.9,7.9,0,0,0,241.5,121.3Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M129.5,121.3,40.3,63.9A8,8,0,0,0,28,70.7V185.3a8,8,0,0,0,12.3,6.8l89.2-57.4A7.9,7.9,0,0,0,129.5,121.3Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></g>
  </svg>
</template>

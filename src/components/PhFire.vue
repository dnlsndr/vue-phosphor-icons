<script lang="ts">
export default {
  name: "PhFire"
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
    <g v-if="displayWeight === 'bold'"><path d="M171.8,144A44.1,44.1,0,0,1,136,183.3" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M72,65.4C56.6,88.6,44,115.2,44,140a84,84,0,0,0,168,0c0-52-36-92-65.2-121.1h0L112,92,72,65.4Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></g>
    <g v-else-if="displayWeight === 'duotone'"><path d="M72,65.4C56.6,88.6,44,115.2,44,140a84,84,0,0,0,168,0c0-52-36-92-65.2-121.1h0L112,92,72,65.4Z" opacity="0.2"/><path d="M179.4,148A52.2,52.2,0,0,1,136,191.4" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M72,65.4C56.6,88.6,44,115.2,44,140a84,84,0,0,0,168,0c0-52-36-92-65.2-121.1h0L112,92,72,65.4Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></g>
    <g v-else-if="displayWeight === 'fill'"><path d="M197.1,66.6c-13-20.8-29.9-38.7-44.6-53.4a8,8,0,0,0-7-2.2,7.9,7.9,0,0,0-5.9,4.4L108.7,80.2,76.5,58.7a8.1,8.1,0,0,0-6-1.2,8,8,0,0,0-5.1,3.4C45.9,90.3,36,116.9,36,140a92,92,0,0,0,184,0C220,115.1,212.5,91.1,197.1,66.6Zm-9.8,82.6a59.6,59.6,0,0,1-50.1,50.1H136a8,8,0,0,1-1.2-15.9,44.4,44.4,0,0,0,36.7-36.7,8,8,0,1,1,15.8,2.4Z"/></g>
    <g v-else-if="displayWeight === 'light'"><path d="M179.4,148A52.2,52.2,0,0,1,136,191.4" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><path d="M72,65.4C56.6,88.6,44,115.2,44,140a84,84,0,0,0,168,0c0-52-36-92-65.2-121.1h0L112,92,72,65.4Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/></g>
    <g v-else-if="displayWeight === 'thin'"><path d="M179.4,148A52.2,52.2,0,0,1,136,191.4" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M72,65.4C56.6,88.6,44,115.2,44,140a84,84,0,0,0,168,0c0-52-36-92-65.2-121.1h0L112,92,72,65.4Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/></g>
    <g v-else-if="displayWeight === 'regular'"><path d="M179.4,148A52.2,52.2,0,0,1,136,191.4" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M72,65.4C56.6,88.6,44,115.2,44,140a84,84,0,0,0,168,0c0-52-36-92-65.2-121.1h0L112,92,72,65.4Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></g>
  </svg>
</template>

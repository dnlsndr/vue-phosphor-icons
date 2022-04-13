<script lang="ts">
export default {
  name: "PhDiamond"
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
    <g v-if="displayWeight === 'bold'"><rect x="51.6" y="51.6" width="152.7" height="152.74" rx="8" transform="translate(-53 128) rotate(-45)" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></g>
    <g v-else-if="displayWeight === 'duotone'"><rect x="51.6" y="51.6" width="152.7" height="152.74" rx="8" transform="translate(-53 128) rotate(-45)" opacity="0.2"/><rect x="51.6" y="51.6" width="152.7" height="152.74" rx="8" transform="translate(-53 128) rotate(-45)" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></g>
    <g v-else-if="displayWeight === 'fill'"><path d="M236,139.3,139.3,236a15.9,15.9,0,0,1-22.6,0L20,139.3a16.1,16.1,0,0,1,0-22.6L116.7,20a16.1,16.1,0,0,1,22.6,0L236,116.7A16.1,16.1,0,0,1,236,139.3Z"/></g>
    <g v-else-if="displayWeight === 'light'"><rect x="51.6" y="51.6" width="152.7" height="152.74" rx="8" transform="translate(-53 128) rotate(-45)" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/></g>
    <g v-else-if="displayWeight === 'thin'"><rect x="51.6" y="51.6" width="152.7" height="152.74" rx="8" transform="translate(-53 128) rotate(-45)" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/></g>
    <g v-else-if="displayWeight === 'regular'"><rect x="51.6" y="51.6" width="152.7" height="152.74" rx="8" transform="translate(-53 128) rotate(-45)" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></g>
  </svg>
</template>

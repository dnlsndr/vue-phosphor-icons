<script lang="ts">
export default {
  name: "PhCar"
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
    <g v-if="displayWeight === 'bold'"><line x1="16" y1="120" x2="240" y2="120" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M224,176v32a8,8,0,0,1-8,8H192a8,8,0,0,1-8-8V176" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M72,176v32a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V176" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M224,120,194.1,52.8a8,8,0,0,0-7.3-4.8H69.2a8,8,0,0,0-7.3,4.8L32,120v56H224Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></g>
    <g v-else-if="displayWeight === 'duotone'"><path d="M224,184v24a8,8,0,0,1-8,8H192a8,8,0,0,1-8-8V184Z" opacity="0.2"/><path d="M72,184v24a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V184Z" opacity="0.2"/><path d="M224,120,194.1,52.8a8,8,0,0,0-7.3-4.8H69.2a8,8,0,0,0-7.3,4.8L32,120Z" opacity="0.2"/><line x1="16" y1="120" x2="240" y2="120" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M224,184v24a8,8,0,0,1-8,8H192a8,8,0,0,1-8-8V184" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M72,184v24a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V184" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="64" y1="152" x2="80" y2="152" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="176" y1="152" x2="192" y2="152" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M224,120,194.1,52.8a8,8,0,0,0-7.3-4.8H69.2a8,8,0,0,0-7.3,4.8L32,120v64H224Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></g>
    <g v-else-if="displayWeight === 'fill'"><path d="M240,112H229.2L201.4,49.5A15.9,15.9,0,0,0,186.8,40H69.2a15.9,15.9,0,0,0-14.6,9.5L26.8,112H16a8,8,0,0,0,0,16h8v80a16,16,0,0,0,16,16H64a16,16,0,0,0,16-16V192h96v16a16,16,0,0,0,16,16h24a16,16,0,0,0,16-16V128h8a8,8,0,0,0,0-16ZM80,160H64a8,8,0,0,1,0-16H80a8,8,0,0,1,0,16Zm96,0a8,8,0,0,1,0-16h16a8,8,0,0,1,0,16Z"/></g>
    <g v-else-if="displayWeight === 'light'"><line x1="16" y1="120" x2="240" y2="120" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><path d="M224,184v24a8,8,0,0,1-8,8H192a8,8,0,0,1-8-8V184" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><path d="M72,184v24a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V184" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><line x1="64" y1="152" x2="80" y2="152" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><line x1="176" y1="152" x2="192" y2="152" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><path d="M224,120,194.1,52.8a8,8,0,0,0-7.3-4.8H69.2a8,8,0,0,0-7.3,4.8L32,120v64H224Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/></g>
    <g v-else-if="displayWeight === 'thin'"><line x1="16" y1="120" x2="240" y2="120" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M224,184v24a8,8,0,0,1-8,8H192a8,8,0,0,1-8-8V184" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M72,184v24a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V184" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><line x1="64" y1="152" x2="80" y2="152" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><line x1="176" y1="152" x2="192" y2="152" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M224,120,194.1,52.8a8,8,0,0,0-7.3-4.8H69.2a8,8,0,0,0-7.3,4.8L32,120v64H224Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/></g>
    <g v-else-if="displayWeight === 'regular'"><line x1="16" y1="120" x2="240" y2="120" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M224,184v24a8,8,0,0,1-8,8H192a8,8,0,0,1-8-8V184" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M72,184v24a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V184" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="64" y1="152" x2="80" y2="152" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="176" y1="152" x2="192" y2="152" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M224,120,194.1,52.8a8,8,0,0,0-7.3-4.8H69.2a8,8,0,0,0-7.3,4.8L32,120v64H224Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></g>
  </svg>
</template>

<script lang="ts">
export default {
  name: "PhFileArrowDown"
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
    <g v-if="displayWeight === 'bold'"><path d="M200,224H56a8,8,0,0,1-8-8V40a8,8,0,0,1,8-8h96l56,56V216A8,8,0,0,1,200,224Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><polyline points="148 32 148 92 208 92" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><polyline points="100 156 128 184 156 156" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="128" y1="124" x2="128" y2="184" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></g>
    <g v-else-if="displayWeight === 'duotone'"><polygon points="152 32 152 88 208 88 152 32" opacity="0.2"/><path d="M200,224H56a8,8,0,0,1-8-8V40a8,8,0,0,1,8-8h96l56,56V216A8,8,0,0,1,200,224Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><polyline points="152 32 152 88 208 88" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><polyline points="100 156 128 184 156 156" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="128" y1="120" x2="128" y2="184" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></g>
    <g v-else-if="displayWeight === 'fill'"><path d="M213.7,82.3l-56-56A8.1,8.1,0,0,0,152,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V88A8.1,8.1,0,0,0,213.7,82.3Zm-52,79.4-28,28a8.2,8.2,0,0,1-11.4,0l-28-28a8.1,8.1,0,0,1,11.4-11.4L120,164.7V120a8,8,0,0,1,16,0v44.7l14.3-14.4a8.1,8.1,0,0,1,11.4,11.4ZM152,88V44l44,44Z"/></g>
    <g v-else-if="displayWeight === 'light'"><path d="M200,224H56a8,8,0,0,1-8-8V40a8,8,0,0,1,8-8h96l56,56V216A8,8,0,0,1,200,224Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><polyline points="152 32 152 88 208 88" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><polyline points="100 156 128 184 156 156" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><line x1="128" y1="120" x2="128" y2="184" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/></g>
    <g v-else-if="displayWeight === 'thin'"><path d="M200,224H56a8,8,0,0,1-8-8V40a8,8,0,0,1,8-8h96l56,56V216A8,8,0,0,1,200,224Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><polyline points="152 32 152 88 208 88" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><polyline points="100 156 128 184 156 156" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><line x1="128" y1="120" x2="128" y2="184" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/></g>
    <g v-else-if="displayWeight === 'regular'"><path d="M200,224H56a8,8,0,0,1-8-8V40a8,8,0,0,1,8-8h96l56,56V216A8,8,0,0,1,200,224Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><polyline points="152 32 152 88 208 88" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><polyline points="100 156 128 184 156 156" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="128" y1="120" x2="128" y2="184" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></g>
  </svg>
</template>

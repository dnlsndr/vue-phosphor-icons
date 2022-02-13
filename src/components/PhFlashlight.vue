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
    <g v-if="displayWeight === 'bold'"><path d="M72,24H184a8,8,0,0,1,8,8V77.3a8.1,8.1,0,0,1-1.6,4.8l-20.8,27.8a8.1,8.1,0,0,0-1.6,4.8V224a8,8,0,0,1-8,8H96a8,8,0,0,1-8-8V114.7a8.1,8.1,0,0,0-1.6-4.8L65.6,82.1A8.1,8.1,0,0,1,64,77.3V32A8,8,0,0,1,72,24Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="128" y1="120" x2="128" y2="152" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="64" y1="64" x2="192" y2="64" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></g>
    <g v-else-if="displayWeight === 'duotone'"><path d="M192,77.3a8.1,8.1,0,0,1-1.6,4.8l-20.8,27.8a8.1,8.1,0,0,0-1.6,4.8V224a8,8,0,0,1-8,8H96a8,8,0,0,1-8-8V114.7a8.1,8.1,0,0,0-1.6-4.8L65.6,82.1A8.1,8.1,0,0,1,64,77.3V64H192Z" opacity="0.2"/><path d="M72,24H184a8,8,0,0,1,8,8V77.3a8.1,8.1,0,0,1-1.6,4.8l-20.8,27.8a8.1,8.1,0,0,0-1.6,4.8V224a8,8,0,0,1-8,8H96a8,8,0,0,1-8-8V114.7a8.1,8.1,0,0,0-1.6-4.8L65.6,82.1A8.1,8.1,0,0,1,64,77.3V32A8,8,0,0,1,72,24Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="128" y1="120" x2="128" y2="152" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="64" y1="64" x2="192" y2="64" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></g>
    <g v-else-if="displayWeight === 'fill'"><path d="M184,16H72A16,16,0,0,0,56,32V77.3a15.6,15.6,0,0,0,3.2,9.6L80,114.7V224a16,16,0,0,0,16,16h64a16,16,0,0,0,16-16V114.7l20.8-27.8a15.6,15.6,0,0,0,3.2-9.6V32A16,16,0,0,0,184,16ZM136,152a8,8,0,0,1-16,0V120a8,8,0,0,1,16,0ZM72,56V32H184V56Z"/></g>
    <g v-else-if="displayWeight === 'light'"><path d="M72,24H184a8,8,0,0,1,8,8V77.3a8.1,8.1,0,0,1-1.6,4.8l-20.8,27.8a8.1,8.1,0,0,0-1.6,4.8V224a8,8,0,0,1-8,8H96a8,8,0,0,1-8-8V114.7a8.1,8.1,0,0,0-1.6-4.8L65.6,82.1A8.1,8.1,0,0,1,64,77.3V32A8,8,0,0,1,72,24Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><line x1="128" y1="120" x2="128" y2="152" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><line x1="64" y1="64" x2="192" y2="64" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/></g>
    <g v-else-if="displayWeight === 'thin'"><path d="M72,24H184a8,8,0,0,1,8,8V77.3a8.1,8.1,0,0,1-1.6,4.8l-20.8,27.8a8.1,8.1,0,0,0-1.6,4.8V224a8,8,0,0,1-8,8H96a8,8,0,0,1-8-8V114.7a8.1,8.1,0,0,0-1.6-4.8L65.6,82.1A8.1,8.1,0,0,1,64,77.3V32A8,8,0,0,1,72,24Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><line x1="128" y1="120" x2="128" y2="152" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><line x1="64" y1="64" x2="192" y2="64" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/></g>
    <g v-else-if="displayWeight === 'regular'"><path d="M72,24H184a8,8,0,0,1,8,8V77.3a8.1,8.1,0,0,1-1.6,4.8l-20.8,27.8a8.1,8.1,0,0,0-1.6,4.8V224a8,8,0,0,1-8,8H96a8,8,0,0,1-8-8V114.7a8.1,8.1,0,0,0-1.6-4.8L65.6,82.1A8.1,8.1,0,0,1,64,77.3V32A8,8,0,0,1,72,24Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="128" y1="120" x2="128" y2="152" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="64" y1="64" x2="192" y2="64" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></g>
  </svg>
</template>

<script lang="ts">
import { computed, defineComponent, inject, PropType } from "vue";

export default defineComponent({
  name: "PhFlashlight",
  props: {
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
  },
  setup(props) {
    const contextWeight = inject("weight", "regular")
    const contextSize = inject("size", "1em")
    const contextColor = inject("color", "currentColor")
    const contextMirrored = inject("mirrored", false)

    const displayWeight = computed(() => props.weight ?? contextWeight)
    const displaySize = computed(() => props.size ?? contextSize)
    const displayColor = computed(() => props.color ?? contextColor)
    const displayMirrored = computed(() => props.mirrored ?? contextMirrored ? "scale(-1, 1)" : undefined)

    return {
      displayWeight,
      displaySize,
      displayColor,
      displayMirrored
    }
  }
})
</script>

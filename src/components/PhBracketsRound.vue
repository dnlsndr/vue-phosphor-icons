/* GENERATED FILE */
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
    <g v-if="displayWeight === 'bold'"><path d="M72,40S32,64,32,128s40,88,40,88" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M184,40s40,24,40,88-40,88-40,88" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></g>
    <g v-else-if="displayWeight === 'duotone'"><path d="M72,40S32,64,32,128s40,88,40,88" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M184,40s40,24,40,88-40,88-40,88" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></g>
    <g v-else-if="displayWeight === 'fill'"><path d="M40,128c0,58.3,34.7,80.3,36.2,81.2A8,8,0,0,1,72,224a8.7,8.7,0,0,1-4.1-1.1C66.1,221.8,24,195.8,24,128S66.1,34.2,67.9,33.1a8.1,8.1,0,0,1,11,2.8,8,8,0,0,1-2.8,10.9C74.5,47.8,40,69.8,40,128ZM188.1,33.1a8,8,0,0,0-8.3,13.7c1.5.9,36.2,22.9,36.2,81.2s-34.7,80.3-36.1,81.1A8,8,0,0,0,184,224a8.7,8.7,0,0,0,4.1-1.1c1.8-1.1,43.9-27.1,43.9-94.9S189.9,34.2,188.1,33.1Z"/></g>
    <g v-else-if="displayWeight === 'light'"><path d="M72,40S32,64,32,128s40,88,40,88" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><path d="M184,40s40,24,40,88-40,88-40,88" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/></g>
    <g v-else-if="displayWeight === 'thin'"><path d="M72,40S32,64,32,128s40,88,40,88" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M184,40s40,24,40,88-40,88-40,88" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/></g>
    <g v-else-if="displayWeight === 'regular'"><path d="M72,40S32,64,32,128s40,88,40,88" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M184,40s40,24,40,88-40,88-40,88" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></g>
  </svg>
</template>

<script lang="ts">
import { computed, defineComponent, inject, PropType } from "vue";

export default defineComponent({
  name: "PhBracketsRound",
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

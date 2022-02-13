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
    <g v-if="displayWeight === 'bold'"><path d="M232,101,128,160,24,101,124.1,44.2a8.3,8.3,0,0,1,7.8,0Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M232,165,131.9,221.8a8.3,8.3,0,0,1-7.8,0L24,165l104-59Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="232" y1="101" x2="232" y2="165" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="24" y1="101" x2="24" y2="165" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="128" y1="160" x2="128" y2="222.8" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="128" y1="43.2" x2="128" y2="106" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></g>
    <g v-else-if="displayWeight === 'duotone'"><path d="M232,165,131.9,221.8a8.3,8.3,0,0,1-7.8,0L24,165l104-59Z" opacity="0.2"/><path d="M232,101,128,160,24,101,124.1,44.2a8.3,8.3,0,0,1,7.8,0Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M232,165,131.9,221.8a8.3,8.3,0,0,1-7.8,0L24,165l104-59Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="232" y1="101" x2="232" y2="165" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="24" y1="101" x2="24" y2="165" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="128" y1="160" x2="128" y2="222.8" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="128" y1="43.2" x2="128" y2="106" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></g>
    <g v-else-if="displayWeight === 'fill'"><path d="M240,101v64a8,8,0,0,1-4.1,7L142,225.3a4,4,0,0,1-6-3.5V164.7L191.8,133,224,151.3V114.7L191.8,133l-16.2-9.2L215.8,101,136,55.7v45.6l39.6,22.5-47.6,27-47.6-27L120,101.3V55.7L40.2,101l40.2,22.8L64.2,133,32,114.7v36.6L64.2,133,120,164.7v57.1a4,4,0,0,1-6,3.5L20.1,172a8,8,0,0,1-4.1-7V101a8,8,0,0,1,4.1-7l100-56.7a15.9,15.9,0,0,1,15.8,0L235.9,94A8,8,0,0,1,240,101Z"/></g>
    <g v-else-if="displayWeight === 'light'"><path d="M232,101,128,160,24,101,124.1,44.2a8.3,8.3,0,0,1,7.8,0Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><path d="M232,165,131.9,221.8a8.3,8.3,0,0,1-7.8,0L24,165l104-59Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><line x1="232" y1="101" x2="232" y2="165" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><line x1="24" y1="101" x2="24" y2="165" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><line x1="128" y1="160" x2="128" y2="222.8" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><line x1="128" y1="43.2" x2="128" y2="106" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/></g>
    <g v-else-if="displayWeight === 'thin'"><path d="M232,101,128,160,24,101,124.1,44.2a8.3,8.3,0,0,1,7.8,0Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M232,165,131.9,221.8a8.3,8.3,0,0,1-7.8,0L24,165l104-59Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><line x1="232" y1="101" x2="232" y2="165" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><line x1="24" y1="101" x2="24" y2="165" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><line x1="128" y1="160" x2="128" y2="222.8" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><line x1="128" y1="43.2" x2="128" y2="106" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/></g>
    <g v-else-if="displayWeight === 'regular'"><path d="M232,101,128,160,24,101,124.1,44.2a8.3,8.3,0,0,1,7.8,0Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M232,165,131.9,221.8a8.3,8.3,0,0,1-7.8,0L24,165l104-59Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="232" y1="101" x2="232" y2="165" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="24" y1="101" x2="24" y2="165" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="128" y1="160" x2="128" y2="222.8" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="128" y1="43.2" x2="128" y2="106" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></g>
  </svg>
</template>

<script lang="ts">
import { computed, defineComponent, inject, PropType } from "vue";

export default defineComponent({
  name: "PhCodepenLogo",
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

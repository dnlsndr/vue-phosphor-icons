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
    <g v-if="displayWeight === 'bold'"><circle cx="128" cy="128" r="96" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><circle cx="128" cy="128" r="40" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="99.7" y1="99.7" x2="60.1" y2="60.1" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="156.3" y1="99.7" x2="195.9" y2="60.1" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="156.3" y1="156.3" x2="195.9" y2="195.9" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="99.7" y1="156.3" x2="60.1" y2="195.9" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></g>
    <g v-else-if="displayWeight === 'duotone'"><path d="M195.9,60.1a96,96,0,0,1,0,135.8l-39.6-39.6a40.1,40.1,0,0,0,0-56.6Z" opacity="0.2"/><path d="M60.1,195.9a96,96,0,0,1,0-135.8L99.7,99.7a40.1,40.1,0,0,0,0,56.6Z" opacity="0.2"/><circle cx="128" cy="128" r="96" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><circle cx="128" cy="128" r="40" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="99.7" y1="99.7" x2="60.1" y2="60.1" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="156.3" y1="99.7" x2="195.9" y2="60.1" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="156.3" y1="156.3" x2="195.9" y2="195.9" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="99.7" y1="156.3" x2="60.1" y2="195.9" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></g>
    <g v-else-if="displayWeight === 'fill'"><path d="M202.2,200.8a103.8,103.8,0,0,0,0-145.6,2.3,2.3,0,0,0-.7-.7,2.3,2.3,0,0,0-.7-.7,103.8,103.8,0,0,0-145.6,0,2.3,2.3,0,0,0-.7.7,2.3,2.3,0,0,0-.7.7,103.8,103.8,0,0,0,0,145.6l.7.7a2.3,2.3,0,0,0,.7.7,103.8,103.8,0,0,0,145.6,0,2.3,2.3,0,0,0,.7-.7A2.3,2.3,0,0,0,202.2,200.8ZM96,128a32,32,0,1,1,32,32A32.1,32.1,0,0,1,96,128Zm88.3-67.6L155.8,88.9a47.9,47.9,0,0,0-55.6,0L71.7,60.4a87.9,87.9,0,0,1,112.6,0ZM71.7,195.6l28.5-28.5a47.9,47.9,0,0,0,55.6,0l28.5,28.5a87.9,87.9,0,0,1-112.6,0Z"/></g>
    <g v-else-if="displayWeight === 'light'"><circle cx="128" cy="128" r="96" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><circle cx="128" cy="128" r="40" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><line x1="99.7" y1="99.7" x2="60.1" y2="60.1" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><line x1="156.3" y1="99.7" x2="195.9" y2="60.1" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><line x1="156.3" y1="156.3" x2="195.9" y2="195.9" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><line x1="99.7" y1="156.3" x2="60.1" y2="195.9" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/></g>
    <g v-else-if="displayWeight === 'thin'"><circle cx="128" cy="128" r="96" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><circle cx="128" cy="128" r="40" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><line x1="99.7" y1="99.7" x2="60.1" y2="60.1" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><line x1="156.3" y1="99.7" x2="195.9" y2="60.1" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><line x1="156.3" y1="156.3" x2="195.9" y2="195.9" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><line x1="99.7" y1="156.3" x2="60.1" y2="195.9" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/></g>
    <g v-else-if="displayWeight === 'regular'"><circle cx="128" cy="128" r="96" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><circle cx="128" cy="128" r="40" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="99.7" y1="99.7" x2="60.1" y2="60.1" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="156.3" y1="99.7" x2="195.9" y2="60.1" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="156.3" y1="156.3" x2="195.9" y2="195.9" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="99.7" y1="156.3" x2="60.1" y2="195.9" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></g>
  </svg>
</template>

<script lang="ts">
import { computed, defineComponent, inject, PropType } from "vue";

export default defineComponent({
  name: "PhLifebuoy",
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

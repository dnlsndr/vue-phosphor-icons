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
    <g v-if="displayWeight === 'bold'"><path d="M184,120H48a28,28,0,0,0,0,56H188a48,48,0,0,0,0-96H76" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></g>
    <g v-else-if="displayWeight === 'duotone'"><path d="M78,144H190a16,16,0,0,0,0-32H46c-17.2,0-31.2,14.3-31.2,32s14,32,31.2,32H192a48,48,0,0,0,0-96H80" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></g>
    <g v-else-if="displayWeight === 'fill'"><path d="M192,184H46c-21.6,0-39.2-17.9-39.2-40S24.4,104,46,104H190a24,24,0,0,1,0,48H78a8,8,0,0,1,0-16H190a8,8,0,0,0,0-16H46c-12.8,0-23.2,10.8-23.2,24S33.2,168,46,168H192a40,40,0,0,0,0-80H80a8,8,0,0,1,0-16H192a56,56,0,0,1,0,112Z"/></g>
    <g v-else-if="displayWeight === 'light'"><path d="M78,144H190a16,16,0,0,0,0-32H46c-17.2,0-31.2,14.3-31.2,32s14,32,31.2,32H192a48,48,0,0,0,0-96H80" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/></g>
    <g v-else-if="displayWeight === 'thin'"><path d="M78,144H190a16,16,0,0,0,0-32H46c-17.2,0-31.2,14.3-31.2,32s14,32,31.2,32H192a48,48,0,0,0,0-96H80" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/></g>
    <g v-else-if="displayWeight === 'regular'"><path d="M78,144H190a16,16,0,0,0,0-32H46c-17.2,0-31.2,14.3-31.2,32s14,32,31.2,32H192a48,48,0,0,0,0-96H80" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></g>
  </svg>
</template>

<script lang="ts">
import { computed, defineComponent, inject, PropType } from "vue";

export default defineComponent({
  name: "PhPaperclipHorizontal",
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

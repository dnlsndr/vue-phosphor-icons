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
    <g v-if="displayWeight === 'bold'"><line x1="24" y1="224" x2="232" y2="224" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M56,224V40a8,8,0,0,1,8-8H192a8,8,0,0,1,8,8V224" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><circle cx="156" cy="128" r="16"/></g>
    <g v-else-if="displayWeight === 'duotone'"><path d="M56,224V40a8,8,0,0,1,8-8H192a8,8,0,0,1,8,8V224Z" opacity="0.2"/><line x1="24" y1="224" x2="232" y2="224" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M56,224V40a8,8,0,0,1,8-8H192a8,8,0,0,1,8,8V224" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><circle cx="156" cy="128" r="12"/></g>
    <g v-else-if="displayWeight === 'fill'"><path d="M232,216H208V40a16,16,0,0,0-16-16H64A16,16,0,0,0,48,40V216H24a8,8,0,0,0,0,16H232a8,8,0,0,0,0-16Zm-68-76a12,12,0,1,1,12-12A12,12,0,0,1,164,140Z"/></g>
    <g v-else-if="displayWeight === 'light'"><line x1="24" y1="224" x2="232" y2="224" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><path d="M56,224V40a8,8,0,0,1,8-8H192a8,8,0,0,1,8,8V224" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><circle cx="156" cy="128" r="10"/></g>
    <g v-else-if="displayWeight === 'thin'"><line x1="24" y1="224" x2="232" y2="224" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M56,224V40a8,8,0,0,1,8-8H192a8,8,0,0,1,8,8V224" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><circle cx="156" cy="128" r="8"/></g>
    <g v-else-if="displayWeight === 'regular'"><line x1="24" y1="224" x2="232" y2="224" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M56,224V40a8,8,0,0,1,8-8H192a8,8,0,0,1,8,8V224" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><circle cx="156" cy="128" r="12"/></g>
  </svg>
</template>

<script lang="ts">
import { computed, defineComponent, inject, PropType } from "vue";

export default defineComponent({
  name: "PhDoor",
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

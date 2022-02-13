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
    <g v-if="displayWeight === 'bold'"><line x1="96" y1="68" x2="96" y2="48" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="160" y1="208" x2="160" y2="188" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="68" y1="96" x2="48" y2="96" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="208" y1="160" x2="188" y2="160" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M67,132.4l-7.3,7.3a40,40,0,0,0,56.6,56.6l7.3-7.3" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M189,123.6l7.3-7.3a40,40,0,0,0-56.6-56.6L132.4,67" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></g>
    <g v-else-if="displayWeight === 'duotone'"><line x1="96" y1="72" x2="96" y2="48" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="160" y1="208" x2="160" y2="184" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="72" y1="96" x2="48" y2="96" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="208" y1="160" x2="184" y2="160" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M71,128.4,59.7,139.7a40,40,0,0,0,56.6,56.6L127.6,185" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M185,127.6l11.3-11.3a40,40,0,0,0-56.6-56.6L128.4,71" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></g>
    <g v-else-if="displayWeight === 'fill'"><path d="M88,72V48a8,8,0,0,1,16,0V72a8,8,0,0,1-16,0Zm72,104a8,8,0,0,0-8,8v24a8,8,0,0,0,16,0V184A8,8,0,0,0,160,176ZM48,104H72a8,8,0,0,0,0-16H48a8,8,0,0,0,0,16Zm160,48H184a8,8,0,0,0,0,16h24a8,8,0,0,0,0-16Zm-86.1,27.3-11.3,11.3a32,32,0,0,1-45.2-45.2l11.3-11.3a8.1,8.1,0,0,0,0-11.4,8,8,0,0,0-11.3,0L54.1,134.1a47.9,47.9,0,1,0,67.8,67.8l11.4-11.3a8,8,0,0,0,0-11.3A8.1,8.1,0,0,0,121.9,179.3ZM190.6,65.4a31.9,31.9,0,0,1,0,45.2l-11.3,11.3a8.1,8.1,0,0,0,0,11.4,8.3,8.3,0,0,0,5.7,2.3,8,8,0,0,0,5.6-2.3l11.3-11.4a47.9,47.9,0,0,0-67.8-67.8L122.7,65.4a8,8,0,0,0,0,11.3,8.1,8.1,0,0,0,11.4,0l11.3-11.3A31.9,31.9,0,0,1,190.6,65.4Z"/></g>
    <g v-else-if="displayWeight === 'light'"><line x1="96" y1="72" x2="96" y2="48" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><line x1="160" y1="208" x2="160" y2="184" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><line x1="72" y1="96" x2="48" y2="96" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><line x1="208" y1="160" x2="184" y2="160" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><path d="M71,128.4,59.7,139.7a40,40,0,0,0,56.6,56.6L127.6,185" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><path d="M185,127.6l11.3-11.3a40,40,0,0,0-56.6-56.6L128.4,71" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/></g>
    <g v-else-if="displayWeight === 'thin'"><line x1="96" y1="72" x2="96" y2="48" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><line x1="160" y1="208" x2="160" y2="184" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><line x1="72" y1="96" x2="48" y2="96" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><line x1="208" y1="160" x2="184" y2="160" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M71,128.4,59.7,139.7a40,40,0,0,0,56.6,56.6L127.6,185" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M185,127.6l11.3-11.3a40,40,0,0,0-56.6-56.6L128.4,71" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/></g>
    <g v-else-if="displayWeight === 'regular'"><line x1="96" y1="72" x2="96" y2="48" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="160" y1="208" x2="160" y2="184" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="72" y1="96" x2="48" y2="96" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="208" y1="160" x2="184" y2="160" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M71,128.4,59.7,139.7a40,40,0,0,0,56.6,56.6L127.6,185" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M185,127.6l11.3-11.3a40,40,0,0,0-56.6-56.6L128.4,71" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></g>
  </svg>
</template>

<script lang="ts">
import { computed, defineComponent, inject, PropType } from "vue";

export default defineComponent({
  name: "PhLinkBreak",
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

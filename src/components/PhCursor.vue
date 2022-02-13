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
    <g v-if="displayWeight === 'bold'"><path d="M38.2,48.5,96.4,203.7a8,8,0,0,0,15-.1l23.3-64.1a8.1,8.1,0,0,1,4.8-4.8l64.1-23.3a8,8,0,0,0,.1-15L48.5,38.2A8,8,0,0,0,38.2,48.5Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="136.6" y1="136.6" x2="208" y2="208" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></g>
    <g v-else-if="displayWeight === 'duotone'"><path d="M38.2,48.5,96.4,203.7a8,8,0,0,0,15-.1l23.3-64.1a8.1,8.1,0,0,1,4.8-4.8l64.1-23.3a8,8,0,0,0,.1-15L48.5,38.2A8,8,0,0,0,38.2,48.5Z" opacity="0.2"/><path d="M38.2,48.5,96.4,203.7a8,8,0,0,0,15-.1l23.3-64.1a8.1,8.1,0,0,1,4.8-4.8l64.1-23.3a8,8,0,0,0,.1-15L48.5,38.2A8,8,0,0,0,38.2,48.5Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="136.6" y1="136.6" x2="208" y2="208" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></g>
    <g v-else-if="displayWeight === 'fill'"><path d="M150.5,139.2l55.9-20.3a16,16,0,0,0,.1-30L51.3,30.7A16,16,0,0,0,30.7,51.3h0L88.9,206.5a15.9,15.9,0,0,0,15,10.4h.1a15.9,15.9,0,0,0,14.9-10.5l20.3-55.9,63.1,63.2A8.5,8.5,0,0,0,208,216a8.3,8.3,0,0,0,5.7-2.3,8.1,8.1,0,0,0,0-11.4Z"/></g>
    <g v-else-if="displayWeight === 'light'"><path d="M38.2,48.5,96.4,203.7a8,8,0,0,0,15-.1l23.3-64.1a8.1,8.1,0,0,1,4.8-4.8l64.1-23.3a8,8,0,0,0,.1-15L48.5,38.2A8,8,0,0,0,38.2,48.5Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><line x1="136.6" y1="136.6" x2="208" y2="208" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/></g>
    <g v-else-if="displayWeight === 'thin'"><path d="M38.2,48.5,96.4,203.7a8,8,0,0,0,15-.1l23.3-64.1a8.1,8.1,0,0,1,4.8-4.8l64.1-23.3a8,8,0,0,0,.1-15L48.5,38.2A8,8,0,0,0,38.2,48.5Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><line x1="136.6" y1="136.6" x2="208" y2="208" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/></g>
    <g v-else-if="displayWeight === 'regular'"><path d="M38.2,48.5,96.4,203.7a8,8,0,0,0,15-.1l23.3-64.1a8.1,8.1,0,0,1,4.8-4.8l64.1-23.3a8,8,0,0,0,.1-15L48.5,38.2A8,8,0,0,0,38.2,48.5Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="136.6" y1="136.6" x2="208" y2="208" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></g>
  </svg>
</template>

<script lang="ts">
import { computed, defineComponent, inject, PropType } from "vue";

export default defineComponent({
  name: "PhCursor",
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

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
    <g v-if="displayWeight === 'bold'"><path d="M37.4,47.6,96,216.9c2.5,7.3,12.9,7.1,15.2-.3L134.8,140a7.5,7.5,0,0,1,5.3-5.2l76.5-23.6c7.4-2.3,7.6-12.7.3-15.2L47.6,37.4A8,8,0,0,0,37.4,47.6Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></g>
    <g v-else-if="displayWeight === 'duotone'"><path d="M37.4,47.6,96,216.9c2.5,7.3,12.9,7.1,15.2-.3L134.8,140a7.5,7.5,0,0,1,5.3-5.2l76.5-23.6c7.4-2.3,7.6-12.7.3-15.2L47.6,37.4A8,8,0,0,0,37.4,47.6Z" opacity="0.2"/><path d="M37.4,47.6,96,216.9c2.5,7.3,12.9,7.1,15.2-.3L134.8,140a7.5,7.5,0,0,1,5.3-5.2l76.5-23.6c7.4-2.3,7.6-12.7.3-15.2L47.6,37.4A8,8,0,0,0,37.4,47.6Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></g>
    <g v-else-if="displayWeight === 'fill'"><path d="M219.5,88.4,50.2,29.8A16,16,0,0,0,29.8,50.2L88.4,219.5a15.8,15.8,0,0,0,15.1,10.8h.3a15.6,15.6,0,0,0,15-11.2l23.6-76.6L219,118.8a15.8,15.8,0,0,0,11.3-15A15.9,15.9,0,0,0,219.5,88.4Z"/></g>
    <g v-else-if="displayWeight === 'light'"><path d="M37.4,47.6,96,216.9c2.5,7.3,12.9,7.1,15.2-.3L134.8,140a7.5,7.5,0,0,1,5.3-5.2l76.5-23.6c7.4-2.3,7.6-12.7.3-15.2L47.6,37.4A8,8,0,0,0,37.4,47.6Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/></g>
    <g v-else-if="displayWeight === 'thin'"><path d="M37.4,47.6,96,216.9c2.5,7.3,12.9,7.1,15.2-.3L134.8,140a7.5,7.5,0,0,1,5.3-5.2l76.5-23.6c7.4-2.3,7.6-12.7.3-15.2L47.6,37.4A8,8,0,0,0,37.4,47.6Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/></g>
    <g v-else-if="displayWeight === 'regular'"><path d="M37.4,47.6,96,216.9c2.5,7.3,12.9,7.1,15.2-.3L134.8,140a7.5,7.5,0,0,1,5.3-5.2l76.5-23.6c7.4-2.3,7.6-12.7.3-15.2L47.6,37.4A8,8,0,0,0,37.4,47.6Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></g>
  </svg>
</template>

<script lang="ts">
import { computed, defineComponent, inject, PropType } from "vue";

export default defineComponent({
  name: "PhNavigationArrow",
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

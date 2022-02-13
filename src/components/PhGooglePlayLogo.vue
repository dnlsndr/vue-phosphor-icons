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
    <g v-if="displayWeight === 'bold'"><path d="M39.8,224.1a8,8,0,0,0,12.1,6.8l167.8-96.1a7.7,7.7,0,0,0,0-13.6L51.9,25.1a8,8,0,0,0-12.1,6.8Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="42.2" y1="26.2" x2="175.9" y2="159.9" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="42.2" y1="229.8" x2="175.9" y2="96.1" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></g>
    <g v-else-if="displayWeight === 'duotone'"><path d="M42.2,26.2a8.1,8.1,0,0,0-2.4,5.7V224.1a8.1,8.1,0,0,0,2.4,5.7h0L144,128,42.2,26.2Z" opacity="0.2"/><path d="M39.8,224.1a8,8,0,0,0,12.1,6.8l167.8-96.1a7.7,7.7,0,0,0,0-13.6L51.9,25.1a8,8,0,0,0-12.1,6.8Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="42.2" y1="26.2" x2="175.9" y2="159.9" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="42.2" y1="229.8" x2="175.9" y2="96.1" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></g>
    <g v-else-if="displayWeight === 'fill'"><path d="M223.6,114.2,55.9,18.1a16.2,16.2,0,0,0-16.2.1,15.8,15.8,0,0,0-7.9,13.7V224.1a16,16,0,0,0,16,15.9,16.9,16.9,0,0,0,8.1-2.1l167.7-96.1a15.7,15.7,0,0,0,0-27.6ZM144,139.3l18.9,18.9L74.7,208.6Zm-69.3-92,88.2,50.5L144,116.7ZM177.2,149.9,155.3,128l21.9-21.9L215.6,128Z"/></g>
    <g v-else-if="displayWeight === 'light'"><path d="M39.8,224.1a8,8,0,0,0,12.1,6.8l167.8-96.1a7.7,7.7,0,0,0,0-13.6L51.9,25.1a8,8,0,0,0-12.1,6.8Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><line x1="42.2" y1="26.2" x2="175.9" y2="159.9" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><line x1="42.2" y1="229.8" x2="175.9" y2="96.1" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/></g>
    <g v-else-if="displayWeight === 'thin'"><path d="M39.8,224.1a8,8,0,0,0,12.1,6.8l167.8-96.1a7.7,7.7,0,0,0,0-13.6L51.9,25.1a8,8,0,0,0-12.1,6.8Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><line x1="42.2" y1="26.2" x2="175.9" y2="159.9" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><line x1="42.2" y1="229.8" x2="175.9" y2="96.1" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/></g>
    <g v-else-if="displayWeight === 'regular'"><path d="M39.8,224.1a8,8,0,0,0,12.1,6.8l167.8-96.1a7.7,7.7,0,0,0,0-13.6L51.9,25.1a8,8,0,0,0-12.1,6.8Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="42.2" y1="26.2" x2="175.9" y2="159.9" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="42.2" y1="229.8" x2="175.9" y2="96.1" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></g>
  </svg>
</template>

<script lang="ts">
import { computed, defineComponent, inject, PropType } from "vue";

export default defineComponent({
  name: "PhGooglePlayLogo",
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

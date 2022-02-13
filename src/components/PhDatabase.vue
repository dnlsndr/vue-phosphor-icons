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
    <g v-if="displayWeight === 'bold'"><ellipse cx="128" cy="80" rx="88" ry="48" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M40,80v48c0,26.5,39.4,48,88,48s88-21.5,88-48V80" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M40,128v48c0,26.5,39.4,48,88,48s88-21.5,88-48V128" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></g>
    <g v-else-if="displayWeight === 'duotone'"><ellipse cx="128" cy="80" rx="88" ry="48" opacity="0.2"/><ellipse cx="128" cy="80" rx="88" ry="48" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M40,80v48c0,26.5,39.4,48,88,48s88-21.5,88-48V80" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M40,128v48c0,26.5,39.4,48,88,48s88-21.5,88-48V128" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></g>
    <g v-else-if="displayWeight === 'fill'"><path d="M128,24C74.2,24,32,48.6,32,80v96c0,31.4,42.2,56,96,56s96-24.6,96-56V80C224,48.6,181.8,24,128,24Zm80,104c0,9.6-7.9,19.4-21.6,26.9C170.9,163.4,150.2,168,128,168s-42.9-4.6-58.4-13.1C55.9,147.4,48,137.6,48,128V111.4C65.1,126.3,94.2,136,128,136s62.9-9.7,80-24.6Zm-21.6,74.9C170.9,211.4,150.2,216,128,216s-42.9-4.6-58.4-13.1C55.9,195.4,48,185.6,48,176V159.4C65.1,174.3,94.2,184,128,184s62.9-9.7,80-24.6V176C208,185.6,200.1,195.4,186.4,202.9Z"/></g>
    <g v-else-if="displayWeight === 'light'"><ellipse cx="128" cy="80" rx="88" ry="48" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><path d="M40,80v48c0,26.5,39.4,48,88,48s88-21.5,88-48V80" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><path d="M40,128v48c0,26.5,39.4,48,88,48s88-21.5,88-48V128" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/></g>
    <g v-else-if="displayWeight === 'thin'"><ellipse cx="128" cy="80" rx="88" ry="48" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M40,80v48c0,26.5,39.4,48,88,48s88-21.5,88-48V80" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M40,128v48c0,26.5,39.4,48,88,48s88-21.5,88-48V128" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/></g>
    <g v-else-if="displayWeight === 'regular'"><ellipse cx="128" cy="80" rx="88" ry="48" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M40,80v48c0,26.5,39.4,48,88,48s88-21.5,88-48V80" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M40,128v48c0,26.5,39.4,48,88,48s88-21.5,88-48V128" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></g>
  </svg>
</template>

<script lang="ts">
import { computed, defineComponent, inject, PropType } from "vue";

export default defineComponent({
  name: "PhDatabase",
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

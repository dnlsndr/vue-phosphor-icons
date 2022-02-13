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
    <g v-if="displayWeight === 'bold'"><circle cx="108" cy="188" r="12" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="108" y1="176" x2="108" y2="56" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M240.3,80A20,20,0,0,1,212,80a20,20,0,0,0-28.3,0" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M240.3,120a20,20,0,0,1-28.3,0,20,20,0,0,0-28.3,0" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M68,154.8V56a40,40,0,0,1,80,0v98.8h0a52,52,0,1,1-80,0Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></g>
    <g v-else-if="displayWeight === 'duotone'"><circle cx="120" cy="188" r="20" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="120" y1="168" x2="120" y2="48" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M240.3,80A20,20,0,0,1,212,80a20,20,0,0,0-28.3,0" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M240.3,120a20,20,0,0,1-28.3,0,20,20,0,0,0-28.3,0" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M88,147V48a32,32,0,0,1,64,0v99h0a52,52,0,1,1-64,0Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M152,147h0V48a32,32,0,0,0-64,0v99h0a52,52,0,1,0,64,0Zm-32,61a20,20,0,1,1,20-20A20.1,20.1,0,0,1,120,208Z" opacity="0.2"/></g>
    <g v-else-if="displayWeight === 'fill'"><path d="M160,143.3V48a40,40,0,0,0-80,0v95.3A59.4,59.4,0,0,0,60,188a60,60,0,0,0,120,0A59.4,59.4,0,0,0,160,143.3ZM120,24a24.1,24.1,0,0,1,24,24v8H96V48A24.1,24.1,0,0,1,120,24Zm58.1,61.7a8,8,0,0,1,0-11.4,28,28,0,0,1,19.8-8.2,28.4,28.4,0,0,1,19.8,8.2,11.9,11.9,0,0,0,16.9,0,8,8,0,0,1,11.3,11.4,28,28,0,0,1-19.8,8.2,28.4,28.4,0,0,1-19.8-8.2,11.9,11.9,0,0,0-16.9,0A8,8,0,0,1,178.1,85.7Zm67.8,28.6a8,8,0,0,1,0,11.4,28,28,0,0,1-19.8,8.2,28.4,28.4,0,0,1-19.8-8.2,11.9,11.9,0,0,0-16.9,0,8,8,0,0,1-11.3-11.4,28,28,0,0,1,19.8-8.2,28.4,28.4,0,0,1,19.8,8.2,11.9,11.9,0,0,0,16.9,0A8,8,0,0,1,245.9,114.3Z"/></g>
    <g v-else-if="displayWeight === 'light'"><circle cx="120" cy="188" r="20" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><line x1="120" y1="168" x2="120" y2="48" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><path d="M240.3,80A20,20,0,0,1,212,80a20,20,0,0,0-28.3,0" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><path d="M240.3,120a20,20,0,0,1-28.3,0,20,20,0,0,0-28.3,0" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><path d="M88,147V48a32,32,0,0,1,64,0v99h0a52,52,0,1,1-64,0Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/></g>
    <g v-else-if="displayWeight === 'thin'"><circle cx="120" cy="188" r="20" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><line x1="120" y1="168" x2="120" y2="48" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M240.3,80A20,20,0,0,1,212,80a20,20,0,0,0-28.3,0" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M240.3,120a20,20,0,0,1-28.3,0,20,20,0,0,0-28.3,0" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M88,147V48a32,32,0,0,1,64,0v99h0a52,52,0,1,1-64,0Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/></g>
    <g v-else-if="displayWeight === 'regular'"><circle cx="120" cy="188" r="20" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="120" y1="168" x2="120" y2="48" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M240.3,80A20,20,0,0,1,212,80a20,20,0,0,0-28.3,0" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M240.3,120a20,20,0,0,1-28.3,0,20,20,0,0,0-28.3,0" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M88,147V48a32,32,0,0,1,64,0v99h0a52,52,0,1,1-64,0Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></g>
  </svg>
</template>

<script lang="ts">
import { computed, defineComponent, inject, PropType } from "vue";

export default defineComponent({
  name: "PhThermometerHot",
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

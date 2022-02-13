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
    <g v-if="displayWeight === 'bold'"><path d="M69.3,40H186.7a8.1,8.1,0,0,1,7.4,4.8l41.1,96a8,8,0,0,1-7.3,11.2H28.1a8,8,0,0,1-7.3-11.2l41.1-96A8.1,8.1,0,0,1,69.3,40Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="128" y1="152" x2="128" y2="216" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="96" y1="216" x2="160" y2="216" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="200" y1="152" x2="200" y2="192" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></g>
    <g v-else-if="displayWeight === 'duotone'"><path d="M69.3,40H186.7a8.1,8.1,0,0,1,7.4,4.8l41.1,96a8,8,0,0,1-7.3,11.2H28.1a8,8,0,0,1-7.3-11.2l41.1-96A8.1,8.1,0,0,1,69.3,40Z" opacity="0.2"/><path d="M69.3,40H186.7a8.1,8.1,0,0,1,7.4,4.8l41.1,96a8,8,0,0,1-7.3,11.2H28.1a8,8,0,0,1-7.3-11.2l41.1-96A8.1,8.1,0,0,1,69.3,40Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="128" y1="152" x2="128" y2="216" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="96" y1="216" x2="160" y2="216" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="200" y1="152" x2="200" y2="192" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></g>
    <g v-else-if="displayWeight === 'fill'"><path d="M241.2,152.8a15.8,15.8,0,0,1-13.3,7.2H208v32a8,8,0,0,1-16,0V160H136v48h24a8,8,0,0,1,0,16H96a8,8,0,0,1,0-16h24V160H28.1a16.1,16.1,0,0,1-14.7-22.3l41.2-96A15.9,15.9,0,0,1,69.3,32H186.7a15.9,15.9,0,0,1,14.7,9.7l41.2,96A15.9,15.9,0,0,1,241.2,152.8Z"/></g>
    <g v-else-if="displayWeight === 'light'"><path d="M69.3,40H186.7a8.1,8.1,0,0,1,7.4,4.8l41.1,96a8,8,0,0,1-7.3,11.2H28.1a8,8,0,0,1-7.3-11.2l41.1-96A8.1,8.1,0,0,1,69.3,40Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><line x1="128" y1="152" x2="128" y2="216" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><line x1="96" y1="216" x2="160" y2="216" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><line x1="200" y1="152" x2="200" y2="192" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/></g>
    <g v-else-if="displayWeight === 'thin'"><path d="M69.3,40H186.7a8.1,8.1,0,0,1,7.4,4.8l41.1,96a8,8,0,0,1-7.3,11.2H28.1a8,8,0,0,1-7.3-11.2l41.1-96A8.1,8.1,0,0,1,69.3,40Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><line x1="128" y1="152" x2="128" y2="216" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><line x1="96" y1="216" x2="160" y2="216" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><line x1="200" y1="152" x2="200" y2="192" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/></g>
    <g v-else-if="displayWeight === 'regular'"><path d="M69.3,40H186.7a8.1,8.1,0,0,1,7.4,4.8l41.1,96a8,8,0,0,1-7.3,11.2H28.1a8,8,0,0,1-7.3-11.2l41.1-96A8.1,8.1,0,0,1,69.3,40Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="128" y1="152" x2="128" y2="216" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="96" y1="216" x2="160" y2="216" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="200" y1="152" x2="200" y2="192" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></g>
  </svg>
</template>

<script lang="ts">
import { computed, defineComponent, inject, PropType } from "vue";

export default defineComponent({
  name: "PhLamp",
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

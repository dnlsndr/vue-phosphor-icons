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
    <g v-if="displayWeight === 'bold'"><line x1="128" y1="156" x2="128" y2="244" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><circle cx="128" cy="132" r="24" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M72,72V32a8,8,0,0,1,8-8h96a8,8,0,0,1,8,8V72" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><polygon points="72 72 42.5 131.8 128 244 213.5 131.8 184 72 72 72" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></g>
    <g v-else-if="displayWeight === 'duotone'"><path d="M211.4,127.4,184,72H72L44.6,127.4a8.2,8.2,0,0,0,.7,8.3L128,248l82.7-112.3A8.2,8.2,0,0,0,211.4,127.4ZM128,152a20,20,0,1,1,20-20A20.1,20.1,0,0,1,128,152Z" opacity="0.2"/><line x1="128" y1="152" x2="128" y2="248" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><circle cx="128" cy="132" r="20" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M72,72V32a8,8,0,0,1,8-8h96a8,8,0,0,1,8,8V72" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M72,72,44.6,127.4a8.2,8.2,0,0,0,.7,8.3L128,248l82.7-112.3a8.2,8.2,0,0,0,.7-8.3L184,72Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></g>
    <g v-else-if="displayWeight === 'fill'"><circle cx="128" cy="132" r="16"/><path d="M218.6,123.9,192,70.1V32a16,16,0,0,0-16-16H80A16,16,0,0,0,64,32V70.1L37.4,123.9a16.1,16.1,0,0,0,1.5,16.6l73.9,100.3a4,4,0,0,0,7.2-2.4V163a32,32,0,1,1,16,0v75.4a4,4,0,0,0,7.2,2.4l73.9-100.3A16.1,16.1,0,0,0,218.6,123.9ZM176,64H80V32h96Z"/></g>
    <g v-else-if="displayWeight === 'light'"><line x1="128" y1="152" x2="128" y2="248" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><circle cx="128" cy="132" r="20" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><path d="M72,72V32a8,8,0,0,1,8-8h96a8,8,0,0,1,8,8V72" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><path d="M72,72,44.6,127.4a8.2,8.2,0,0,0,.7,8.3L128,248l82.7-112.3a8.2,8.2,0,0,0,.7-8.3L184,72Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/></g>
    <g v-else-if="displayWeight === 'thin'"><line x1="128" y1="152" x2="128" y2="248" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><circle cx="128" cy="132" r="20" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M72,72V32a8,8,0,0,1,8-8h96a8,8,0,0,1,8,8V72" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M72,72,44.6,127.4a8.2,8.2,0,0,0,.7,8.3L128,248l82.7-112.3a8.2,8.2,0,0,0,.7-8.3L184,72Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/></g>
    <g v-else-if="displayWeight === 'regular'"><line x1="128" y1="152" x2="128" y2="248" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><circle cx="128" cy="132" r="20" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M72,72V32a8,8,0,0,1,8-8h96a8,8,0,0,1,8,8V72" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M72,72,44.6,127.4a8.2,8.2,0,0,0,.7,8.3L128,248l82.7-112.3a8.2,8.2,0,0,0,.7-8.3L184,72Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></g>
  </svg>
</template>

<script lang="ts">
import { computed, defineComponent, inject, PropType } from "vue";

export default defineComponent({
  name: "PhPenNibStraight",
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

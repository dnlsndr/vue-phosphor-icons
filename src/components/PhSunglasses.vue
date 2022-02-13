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
    <g v-if="displayWeight === 'bold'"><path d="M104,140v24a36,36,0,0,1-72,0V140" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M224,140v24a36,36,0,0,1-72,0V140" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M200,48a23.9,23.9,0,0,1,24,24v68H32V72A23.9,23.9,0,0,1,56,48" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="44" y1="140" x2="93.5" y2="189.5" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="164" y1="140" x2="213.5" y2="189.5" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></g>
    <g v-else-if="displayWeight === 'duotone'"><path d="M104,140v24a36,36,0,0,1-72,0V140Z" opacity="0.2"/><path d="M224,140v24a36,36,0,0,1-72,0V140Z" opacity="0.2"/><path d="M104,140v24a36,36,0,0,1-72,0V140" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M224,140v24a36,36,0,0,1-72,0V140" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M200,48a23.9,23.9,0,0,1,24,24v68H32V72A23.9,23.9,0,0,1,56,48" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="168" y1="140" x2="215.4" y2="187.4" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="48" y1="140" x2="95.4" y2="187.4" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></g>
    <g v-else-if="displayWeight === 'fill'"><path d="M200,40a8,8,0,0,0,0,16,16,16,0,0,1,16,16v60H40V72A16,16,0,0,1,56,56a8,8,0,0,0,0-16A32.1,32.1,0,0,0,24,72v92a44,44,0,0,0,88,0V148h32v16a44,44,0,0,0,88,0V72A32.1,32.1,0,0,0,200,40ZM85,177a7.7,7.7,0,0,1-5.6,2.4,8,8,0,0,1-5.7-2.4L58.3,161.7a8.1,8.1,0,0,1,11.4-11.4L85,165.7A7.9,7.9,0,0,1,85,177Zm120,0a7.7,7.7,0,0,1-5.6,2.4,8,8,0,0,1-5.7-2.4l-15.4-15.3a8.1,8.1,0,0,1,11.4-11.4L205,165.7A7.9,7.9,0,0,1,205,177Z"/></g>
    <g v-else-if="displayWeight === 'light'"><path d="M104,140v24a36,36,0,0,1-72,0V140" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><path d="M224,140v24a36,36,0,0,1-72,0V140" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><path d="M200,48a23.9,23.9,0,0,1,24,24v68H32V72A23.9,23.9,0,0,1,56,48" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><line x1="168" y1="140" x2="215.4" y2="187.4" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><line x1="48" y1="140" x2="95.4" y2="187.4" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/></g>
    <g v-else-if="displayWeight === 'thin'"><path d="M104,140v24a36,36,0,0,1-72,0V140" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M224,140v24a36,36,0,0,1-72,0V140" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M200,48a23.9,23.9,0,0,1,24,24v68H32V72A23.9,23.9,0,0,1,56,48" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><line x1="168" y1="140" x2="215.4" y2="187.4" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><line x1="48" y1="140" x2="95.4" y2="187.4" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/></g>
    <g v-else-if="displayWeight === 'regular'"><path d="M104,140v24a36,36,0,0,1-72,0V140" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M224,140v24a36,36,0,0,1-72,0V140" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M200,48a23.9,23.9,0,0,1,24,24v68H32V72A23.9,23.9,0,0,1,56,48" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="168" y1="140" x2="215.4" y2="187.4" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="48" y1="140" x2="95.4" y2="187.4" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></g>
  </svg>
</template>

<script lang="ts">
import { computed, defineComponent, inject, PropType } from "vue";

export default defineComponent({
  name: "PhSunglasses",
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

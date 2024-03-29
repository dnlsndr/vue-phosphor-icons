<script lang="ts">
export default {
  name: "PhFolderLock"
}
</script>

<script lang="ts" setup>
import { computed, inject, PropType } from "vue";

const props = defineProps({
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
})

const contextWeight = inject("weight", "regular")
const contextSize = inject("size", "1em")
const contextColor = inject("color", "currentColor")
const contextMirrored = inject("mirrored", false)

const displayWeight = computed(() => props.weight ?? contextWeight)
const displaySize = computed(() => props.size ?? contextSize)
const displayColor = computed(() => props.color ?? contextColor)
const displayMirrored = computed(() => props.mirrored ?? contextMirrored ? "scale(-1, 1)" : undefined)
</script>

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
    <g v-if="displayWeight === 'bold'"><rect x="152" y="164" width="72" height="44" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M104.6,208H39.4a7.4,7.4,0,0,1-7.4-7.4V80H216a8,8,0,0,1,8,8v4" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M168,164V148a20,20,0,0,1,40,0v16" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M98.4,46.7,128,80H32V52a8,8,0,0,1,8-8H92.4A8,8,0,0,1,98.4,46.7Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></g>
    <g v-else-if="displayWeight === 'duotone'"><path d="M32,80V56a8,8,0,0,1,8-8H92.7a7.9,7.9,0,0,1,5.6,2.3L128,80Z" opacity="0.2"/><rect x="152" y="164" width="72" height="44" opacity="0.2"/><path d="M32,80V56a8,8,0,0,1,8-8H92.7a7.9,7.9,0,0,1,5.6,2.3L128,80" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><rect x="152" y="164" width="72" height="44" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M112.6,208H39.4a7.4,7.4,0,0,1-7.4-7.4V80H216a8,8,0,0,1,8,8v16" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M168,164V152a20,20,0,0,1,40,0v12" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></g>
    <g v-else-if="displayWeight === 'fill'"><path d="M224,156h-8v-4a28,28,0,0,0-56,0v4h-8a8,8,0,0,0-8,8v44a8,8,0,0,0,8,8h72a8,8,0,0,0,8-8V164A8,8,0,0,0,224,156Zm-48-4a12,12,0,0,1,24,0v4H176Zm40-80H131.3L104,44.7A15.9,15.9,0,0,0,92.7,40H40A16,16,0,0,0,24,56V200.6A15.4,15.4,0,0,0,39.4,216h73.2a8,8,0,1,0,0-16H40V88H216v16a8,8,0,0,0,16,0V88A16,16,0,0,0,216,72ZM92.7,56l16,16H40V56Z"/></g>
    <g v-else-if="displayWeight === 'light'"><path d="M32,80V56a8,8,0,0,1,8-8H92.7a7.9,7.9,0,0,1,5.6,2.3L128,80" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><rect x="152" y="164" width="72" height="44" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><path d="M112.6,208H39.4a7.4,7.4,0,0,1-7.4-7.4V80H216a8,8,0,0,1,8,8v16" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><path d="M168,164V152a20,20,0,0,1,40,0v12" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/></g>
    <g v-else-if="displayWeight === 'thin'"><path d="M32,80V56a8,8,0,0,1,8-8H92.7a7.9,7.9,0,0,1,5.6,2.3L128,80" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><rect x="152" y="164" width="72" height="44" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M112.6,208H39.4a7.4,7.4,0,0,1-7.4-7.4V80H216a8,8,0,0,1,8,8v16" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M168,164V152a20,20,0,0,1,40,0v12" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/></g>
    <g v-else-if="displayWeight === 'regular'"><path d="M32,80V56a8,8,0,0,1,8-8H92.7a7.9,7.9,0,0,1,5.6,2.3L128,80" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><rect x="152" y="164" width="72" height="44" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M112.6,208H39.4a7.4,7.4,0,0,1-7.4-7.4V80H216a8,8,0,0,1,8,8v16" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M168,164V152a20,20,0,0,1,40,0v12" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></g>
  </svg>
</template>

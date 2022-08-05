# vue-phosphor-icons

A Vue 3 Phosphor icons library inspired by [phosphor-vue](https://github.com/phosphor-icons/phosphor-vue).

[![GitHub stars](https://img.shields.io/github/stars/dnlsndr/vue-phosphor-icons?style=flat-square&label=Star)](https://github.com/dnlsndr/vue-phosphor-icons)
[![GitHub forks](https://img.shields.io/github/forks/dnlsndr/vue-phosphor-icons?style=flat-square&label=Fork)](https://github.com/dnlsndr/vue-phosphor-icons/fork)
[![GitHub watchers](https://img.shields.io/github/watchers/dnlsndr/vue-phosphor-icons?style=flat-square&label=Watch)](https://github.com/dnlsndr/vue-phosphor-icons)
[![Follow on GitHub](https://img.shields.io/github/followers/dnlsndr?style=flat-square&label=Follow)](https://github.com/dnlsndr)

## Installation

```bash
yarn add @dnlsndr/vue-phosphor-icons
```

or

```bash
npm install --save @dnlsndr/vue-phosphor-icons
```

## Usage

```html
<template>
  <PhHorse />
  <PhHeart :size="32" color="hotpink" weight="fill" />
  <PhCube />
</template>

<script lang="ts" setup>
  import { PhHorse, PhHeart, PhCube } from "@dnlsndr/vue-phosphor-icons";
</script>
```

### Props

Icon components accept all attributes that you can pass to a normal SVG element, including inline `height`/`width`, `x`/`y`, `opacity`, plus `@click` and other `v-on` handlers. The main way of styling them will usually be with the following props:

- **color?**: `string` – Icon stroke/fill color. Can be any CSS color string, including `hex`, `rgb`, `rgba`, `hsl`, `hsla`, named colors, or the special `currentColor` variable.
- **size?**: `number | string` – Icon height & width. As with standard React elements, this can be a number, or a string with units in `px`, `%`, `em`, `rem`, `pt`, `cm`, `mm`, `in`.
- **weight?**: `"thin" | "light" | "regular" | "bold" | "fill" | "duotone"` – Icon weight/style. Can be used, for example, to "toggle" an icon's state: a rating component could use Stars with `weight="regular"` to denote an empty star, and `weight="fill"` to denote a filled star.
- **mirrored?**: `boolean` – Flip the icon horizontally. Can be useful in RTL languages where normal icon orientation is not appropriate.

### Composition

Phosphor takes advantage of Vue's `provide`/`inject` options to make applying a default style to all icons simple. Create a `provide` object or function at the root of the app (or anywhere above the icons in the tree) that returns a configuration object with props to be applied by default to all icons below it in the tree:

```html
<template>
  <PhHorse /> {/* I'm lime-green, 32px, and bold! */} 
  <PhHeart /> {/* Me too! */} 
  <PhCube /> {/* Me three :) */}
</template>

<script lang="ts" setup>
  import { PhHorse, PhHeart, PhCube } from "@dnlsndr/vue-phosphor-icons";
  import { provide } from "vue"
   
  provide("color", "limegreen")
  provide("size", 32)
  provide("weight", "bold")
  provide("mirrored", false)
</script>
```

You may create multiple providers for styling icons differently in separate regions of an application; icons use the nearest provider above them to determine their style.

**Note:** The **color**, **size**, **weight**, and **mirrored** properties are all _optional_ props when creating a context, but default to `"currentColor"`, `"1em"`, `"regular"` and `false`.

### Slots

<img src="/meta/cube-rotate.svg" width="128" align="right" />

Components have a `<slot>` for arbitrary SVG elements, so long as they are valid children of the `<svg>` element. This can be used to modify an icon with background layers or shapes, filters, animations and more. The slotted children will be placed _below_ the normal icon contents.

The following will cause the Cube icon to rotate and pulse:

```html
<template>
  <PhCube color="darkorchid" weight="duotone">
    <animate
      attributeName="opacity"
      values="0;1;0"
      dur="4s"
      repeatCount="indefinite"
    />
    <animateTransform
      attributeName="transform"
      attributeType="XML"
      type="rotate"
      dur="5s"
      from="0 0 0"
      to="360 0 0"
      repeatCount="indefinite"
    />
  </PhCube>
</template>
```

**Note:** The coordinate space of slotted elements is relative to the contents of the icon `viewBox`, which is a 256x256 square. Only [valid SVG elements](https://developer.mozilla.org/en-US/docs/Web/SVG/Element#SVG_elements_by_category) will be rendered.

## Related Projects

- [phosphor-home](https://github.com/phosphor-icons/phosphor-home) ▲ Phosphor homepage and general info
- [phosphor-react](https://github.com/phosphor-icons/phosphor-react) ▲ Phosphor icon component library for React
- [phosphor-icons](https://github.com/phosphor-icons/phosphor-icons) ▲ Phosphor icons for Vanilla JS
- [phosphor-flutter](https://github.com/phosphor-icons/phosphor-flutter) ▲ Phosphor IconData library for Flutter
- [phosphor-webcomponents](https://github.com/phosphor-icons/phosphor-webcomponents) ▲ Phosphor icons as Web Components
- [phosphor-figma](https://github.com/phosphor-icons/phosphor-figma) ▲ Phosphor icons Figma plugin
- [phosphor-sketch](https://github.com/phosphor-icons/phosphor-sketch) ▲ Phosphor icons Sketch plugin

## Community Projects

- [phosphor-react-native](https://github.com/duongdev/phosphor-react-native) ▲ Phosphor icon component library for React Native
- [phosphor-svelte](https://github.com/haruaki07/phosphor-svelte) ▲ Phosphor icons for Svelte apps
- [phosphor-r](https://github.com/dreamRs/phosphoricons) ▲ Phosphor icon wrapper for R documents and applications
- [blade-phosphor-icons](https://github.com/codeat3/blade-phosphor-icons) ▲ Phosphor icons in your Laravel Blade views

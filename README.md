<img src="/meta/phosphor-mark-tight-yellow.png" width="128" align="right" />

# phosphor-vue

Phosphor is a flexible icon family for interfaces, diagrams, presentations — whatever, really. Explore all our icons at [phosphoricons.com](https://phosphoricons.com).

For Vue 3 support, check out the [vue3](https://github.com/phosphor-icons/phosphor-vue/tree/vue3) branch.

[![NPM](https://img.shields.io/npm/v/phosphor-vue.svg?style=flat-square)](https://www.npmjs.com/package/phosphor-vue) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg?style=flat-square)](https://standardjs.com) [![Travis](https://img.shields.io/travis/com/rektdeckard/phosphor-vue.svg?style=flat-square)](https://travis-ci.com/github/rektdeckard/phosphor-vue)

[![GitHub stars](https://img.shields.io/github/stars/phosphor-icons/phosphor-vue?style=flat-square&label=Star)](https://github.com/phosphor-icons/phosphor-vue)
[![GitHub forks](https://img.shields.io/github/forks/phosphor-icons/phosphor-vue?style=flat-square&label=Fork)](https://github.com/phosphor-icons/phosphor-vue/fork)
[![GitHub watchers](https://img.shields.io/github/watchers/phosphor-icons/phosphor-vue?style=flat-square&label=Watch)](https://github.com/phosphor-icons/phosphor-vue)
[![Follow on GitHub](https://img.shields.io/github/followers/rektdeckard?style=flat-square&label=Follow)](https://github.com/rektdeckard)

## Installation

```bash
yarn add phosphor-vue
```

or

```bash
npm install --save phosphor-vue
```

## Usage

```html
<template>
  <div>
    <ph-horse />
    <ph-heart :size="32" color="hotpink" weight="fill" />
    <ph-cube />
  </div>
</template>

<script>
  import { PhHorse, PhHeart, PhCube } from "phosphor-vue";
  export default {
    name: "App",
    components: {
      PhHorse,
      PhHeart,
      PhCube,
    },
  };
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
  <div>
    <ph-horse /> {/* I'm lime-green, 32px, and bold! */} <ph-heart /> {/* Me
    too! */} <ph-cube /> {/* Me three :) */}
  </div>
</template>

<script>
  import { PhHorse, PhHeart, PhCube } from "phosphor-vue";
  export default {
    name: "App",
    components: {
      PhHorse,
      PhHeart,
      PhCube,
    },
    provide: {
      color: "limegreen",
      size: 32,
      weight: "bold",
      mirrored: false,
    },
  };
</script>
```

You may create multiple providers for styling icons differently in separate regions of an application; icons use the nearest provider above them to determine their style.

**Note:** The **color**, **size**, **weight**, and **mirrored** properties are all _optional_ props when creating a context, but default to `"currentColor"`, `"1em"`, `"regular"` and `false`. Also be aware that when using this API, per Vue:

> The `provide` and `inject` bindings are NOT reactive. This is intentional. However, if you pass down an observed object, properties on that object do remain reactive.

### Slots

<img src="/meta/cube-rotate.svg" width="128" align="right" />

Components have a `<slot>` for arbitrary SVG elements, so long as they are valid children of the `<svg>` element. This can be used to modify an icon with background layers or shapes, filters, animations and more. The slotted children will be placed _below_ the normal icon contents.

The following will cause the Cube icon to rotate and pulse:

```html
<template>
  <ph-cube color="darkorchid" weight="duotone">
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
  </ph-cube>
</template>
```

**Note:** The coordinate space of slotted elements is relative to the contents of the icon `viewBox`, which is a 256x256 square. Only [valid SVG elements](https://developer.mozilla.org/en-US/docs/Web/SVG/Element#SVG_elements_by_category) will be rendered.

## Our Related Projects

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

If you've made a port of Phosphor and you want to see it here, just open a PR [here](https://github.com/phosphor-icons/phosphor-home)!

## License

MIT © [phosphor-icons](https://github.com/phosphor-icons)

# @any-design/safari-vh-patch

Fix the viewport height (vh) issue in Safari, especially for PWAs and web apps with dynamic toolbars. Includes both a PostCSS plugin and runtime patch.

## Installation

```bash
npm install @any-design/safari-vh-patch
```

## Usage

### 1. PostCSS Plugin Setup

```js
// postcss.config.js
module.exports = {
  plugins: {
    '@any-design/safari-vh-patch': {
      // options (optional)
      variableName: '--vh',     // default
      keepFallback: true        // default
    }
  }
}
```

### 2. Add Runtime Script

Import the runtime patch in your entry file:

```js
import '@any-design/safari-vh-patch/runtime';
```

### 3. Use in CSS

The plugin will automatically transform your vh units:

```css
.element {
  height: 100vh;  /* Will be transformed automatically */
}

/* Outputs: */
.element {
  height: 100vh;  /* fallback */
  height: calc(var(--vh, 1vh) * 100);
}
```

## Vite Configuration

```ts
// vite.config.ts
import { defineConfig } from 'vite'
import safariVhPatch from '@any-design/safari-vh-patch'

export default defineConfig({
  css: {
    postcss: {
      plugins: [
        safariVhPatch()
      ]
    }
  }
})
```

## How it Works

1. The PostCSS plugin transforms vh units in your CSS to use a CSS custom property
2. The runtime script detects Safari and updates the `--vh` variable when viewport changes
3. Only applies the fix when needed (Safari browsers)

## Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `variableName` | `string` | `'--vh'` | Custom CSS variable name |
| `keepFallback` | `boolean` | `true` | Keep original vh value as fallback |

## Implementation Reference

Based on the viewport unit trick: https://css-tricks.com/the-trick-to-viewport-units-on-mobile/

## License

MIT

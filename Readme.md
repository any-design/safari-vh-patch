# @any-design/safari-vh-patch

`vh` unit is not accurate when page is rendered by Safari, `100vh` will include the toolbar.

This patch will fix this issue automatically when user is using Safari to browse your site.

## How to use

Step 1: Install this package.

```bash
npm install @any-design/safari-vh-patch
```

Step 2: Import it to your project.

```js
import '@any-design/safari-vh-patch';
```

## License

MIT

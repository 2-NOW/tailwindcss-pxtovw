# tailwindcss px-to-vw

## Installation

```sh
npm install tailwindcss-pxtovw
//or
yarn add tailwindcss-pxtovw
```

### Tailwind Config

```js
const pxtovw = require('@tailwindcss-pxtovw');

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
      extend: {},
  },
  // add here a plugin and configuration
  plugins: [pxtovw({ default: 480, tablet: 768, desktop: 1024 })],
}
```

## Usage

You need add variant "@pv" before class
and use arbitrary values

For, example:

```html
<div class="@pv:m-[16px]">Hello World!</div> // convert 16px to vw. divide by 480
<div class="tablet@pv:m-[16px]">Hello World!</div> // convert 16px to vw. divide by 768
<div class="desktop@pv:m-[16px]">Hello World!</div> // convert 16px to vw. divide by 1024
```

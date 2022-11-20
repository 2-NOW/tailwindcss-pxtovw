# tailwincdss px-to-vw

## Installation

    npm install tailwindcss-pxtovw
    //or
    yarn add tailwindcss-pxtovw

### Tailwind Config

    const pxtovw = require('@tailwindcss-pxtovw');

    module.exports  =  {
        content:  ["./src/**/*.{html,js}"],
        theme:  {
    	    extend:  {},
    	  },
    	plugins:  [pxtovw({ default: 480, tablet: 768, desktop: 1024 })], // add here a plugin and configuration
      }

## Usage

You need add variant "@pv" before class
and use arbitrary values

For, example:

    <div class="@pv:m-[16px]">Hello World!</div> // convert 16px to vw. divide by 480
    <div class="tablet@pv@:m-[16px]">Hello World!</div> // convert 16px to vw. divide by 768
    <div class="desktop@pv:m-[16px]">Hello World!</div> // convert 16px to vw. divide by 1024

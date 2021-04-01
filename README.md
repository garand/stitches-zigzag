# Stitches Zigzag [![https://www.npmjs.com/package/stitches-zigzag](https://img.shields.io/npm/v/stitches-zigzag)](https://www.npmjs.com/package/stitches-zigzag)

Tailwind inspired tools to build fast with Stitches

## Get Started

```zsh
npm install stitches-zigzag
```

**stitches.config.ts**

```ts
import createCss from "@stitches/react";
import { tailwind } from "stitches-zigzag";

const stitches = createCss(tailwind);

// ...
```

**global.ts**

```ts
import { global } from "stitches.config";
import { modernNormalize } from "stitches-zigzag";

export const globalStyles = global(modernNormalize);

// ...
```

## Exports

This provides three named exports:

| Name            | Description                                                                                                                                                         |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| screens         | An object with each breakpoint                                                                                                                                      |
| tailwind        | Stitches configuration object based on the [default TailwindCSS configuration](https://github.com/tailwindlabs/tailwindcss/blob/master/stubs/defaultConfig.stub.js) |
| modernNormalize | Stitches global css object port of [`modern-normalize`](https://github.com/sindresorhus/modern-normalize)                                                           |

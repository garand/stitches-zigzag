import { IConfig, TStyledSheet } from "@stitches/core";

export const screens = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
};

export const tailwind: IConfig = {
  theme: {
    colors: {
      black: "#000",
      white: "#fff",

      rose50: "#fff1f2",
      rose100: "#ffe4e6",
      rose200: "#fecdd3",
      rose300: "#fda4af",
      rose400: "#fb7185",
      rose500: "#f43f5e",
      rose600: "#e11d48",
      rose700: "#be123c",
      rose800: "#9f1239",
      rose900: "#881337",

      pink50: "#fdf2f8",
      pink100: "#fce7f3",
      pink200: "#fbcfe8",
      pink300: "#f9a8d4",
      pink400: "#f472b6",
      pink500: "#ec4899",
      pink600: "#db2777",
      pink700: "#be185d",
      pink800: "#9d174d",
      pink900: "#831843",

      fuchsia50: "#fdf4ff",
      fuchsia100: "#fae8ff",
      fuchsia200: "#f5d0fe",
      fuchsia300: "#f0abfc",
      fuchsia400: "#e879f9",
      fuchsia500: "#d946ef",
      fuchsia600: "#c026d3",
      fuchsia700: "#a21caf",
      fuchsia800: "#86198f",
      fuchsia900: "#701a75",

      purple50: "#faf5ff",
      purple100: "#f3e8ff",
      purple200: "#e9d5ff",
      purple300: "#d8b4fe",
      purple400: "#c084fc",
      purple500: "#a855f7",
      purple600: "#9333ea",
      purple700: "#7e22ce",
      purple800: "#6b21a8",
      purple900: "#581c87",

      violet50: "#f5f3ff",
      violet100: "#ede9fe",
      violet200: "#ddd6fe",
      violet300: "#c4b5fd",
      violet400: "#a78bfa",
      violet500: "#8b5cf6",
      violet600: "#7c3aed",
      violet700: "#6d28d9",
      violet800: "#5b21b6",
      violet900: "#4c1d95",

      indigo50: "#eef2ff",
      indigo100: "#e0e7ff",
      indigo200: "#c7d2fe",
      indigo300: "#a5b4fc",
      indigo400: "#818cf8",
      indigo500: "#6366f1",
      indigo600: "#4f46e5",
      indigo700: "#4338ca",
      indigo800: "#3730a3",
      indigo900: "#312e81",

      blue50: "#eff6ff",
      blue100: "#dbeafe",
      blue200: "#bfdbfe",
      blue300: "#93c5fd",
      blue400: "#60a5fa",
      blue500: "#3b82f6",
      blue600: "#2563eb",
      blue700: "#1d4ed8",
      blue800: "#1e40af",
      blue900: "#1e3a8a",

      lightBlue50: "#f0f9ff",
      lightBlue100: "#e0f2fe",
      lightBlue200: "#bae6fd",
      lightBlue300: "#7dd3fc",
      lightBlue400: "#38bdf8",
      lightBlue500: "#0ea5e9",
      lightBlue600: "#0284c7",
      lightBlue700: "#0369a1",
      lightBlue800: "#075985",
      lightBlue900: "#0c4a6e",

      cyan50: "#ecfeff",
      cyan100: "#cffafe",
      cyan200: "#a5f3fc",
      cyan300: "#67e8f9",
      cyan400: "#22d3ee",
      cyan500: "#06b6d4",
      cyan600: "#0891b2",
      cyan700: "#0e7490",
      cyan800: "#155e75",
      cyan900: "#164e63",

      teal50: "#f0fdfa",
      teal100: "#ccfbf1",
      teal200: "#99f6e4",
      teal300: "#5eead4",
      teal400: "#2dd4bf",
      teal500: "#14b8a6",
      teal600: "#0d9488",
      teal700: "#0f766e",
      teal800: "#115e59",
      teal900: "#134e4a",

      emerald50: "#ecfdf5",
      emerald100: "#d1fae5",
      emerald200: "#a7f3d0",
      emerald300: "#6ee7b7",
      emerald400: "#34d399",
      emerald500: "#10b981",
      emerald600: "#059669",
      emerald700: "#047857",
      emerald800: "#065f46",
      emerald900: "#064e3b",

      green50: "#f0fdf4",
      green100: "#dcfce7",
      green200: "#bbf7d0",
      green300: "#86efac",
      green400: "#4ade80",
      green500: "#22c55e",
      green600: "#16a34a",
      green700: "#15803d",
      green800: "#166534",
      green900: "#14532d",

      lime50: "#f7fee7",
      lime100: "#ecfccb",
      lime200: "#d9f99d",
      lime300: "#bef264",
      lime400: "#a3e635",
      lime500: "#84cc16",
      lime600: "#65a30d",
      lime700: "#4d7c0f",
      lime800: "#3f6212",
      lime900: "#365314",

      yellow50: "#fefce8",
      yellow100: "#fef9c3",
      yellow200: "#fef08a",
      yellow300: "#fde047",
      yellow400: "#facc15",
      yellow500: "#eab308",
      yellow600: "#ca8a04",
      yellow700: "#a16207",
      yellow800: "#854d0e",
      yellow900: "#713f12",

      amber50: "#fffbeb",
      amber100: "#fef3c7",
      amber200: "#fde68a",
      amber300: "#fcd34d",
      amber400: "#fbbf24",
      amber500: "#f59e0b",
      amber600: "#d97706",
      amber700: "#b45309",
      amber800: "#92400e",
      amber900: "#78350f",

      orange50: "#fff7ed",
      orange100: "#ffedd5",
      orange200: "#fed7aa",
      orange300: "#fdba74",
      orange400: "#fb923c",
      orange500: "#f97316",
      orange600: "#ea580c",
      orange700: "#c2410c",
      orange800: "#9a3412",
      orange900: "#7c2d12",

      red50: "#fef2f2",
      red100: "#fee2e2",
      red200: "#fecaca",
      red300: "#fca5a5",
      red400: "#f87171",
      red500: "#ef4444",
      red600: "#dc2626",
      red700: "#b91c1c",
      red800: "#991b1b",
      red900: "#7f1d1d",

      warmGray50: "#fafaf9",
      warmGray100: "#f5f5f4",
      warmGray200: "#e7e5e4",
      warmGray300: "#d6d3d1",
      warmGray400: "#a8a29e",
      warmGray500: "#78716c",
      warmGray600: "#57534e",
      warmGray700: "#44403c",
      warmGray800: "#292524",
      warmGray900: "#1c1917",

      trueGray50: "#fafafa",
      trueGray100: "#f5f5f5",
      trueGray200: "#e5e5e5",
      trueGray300: "#d4d4d4",
      trueGray400: "#a3a3a3",
      trueGray500: "#737373",
      trueGray600: "#525252",
      trueGray700: "#404040",
      trueGray800: "#262626",
      trueGray900: "#171717",

      gray50: "#fafafa",
      gray100: "#f4f4f5",
      gray200: "#e4e4e7",
      gray300: "#d4d4d8",
      gray400: "#a1a1aa",
      gray500: "#71717a",
      gray600: "#52525b",
      gray700: "#3f3f46",
      gray800: "#27272a",
      gray900: "#18181b",

      coolGray50: "#f9fafb",
      coolGray100: "#f3f4f6",
      coolGray200: "#e5e7eb",
      coolGray300: "#d1d5db",
      coolGray400: "#9ca3af",
      coolGray500: "#6b7280",
      coolGray600: "#4b5563",
      coolGray700: "#374151",
      coolGray800: "#1f2937",
      coolGray900: "#111827",

      blueGray50: "#f8fafc",
      blueGray100: "#f1f5f9",
      blueGray200: "#e2e8f0",
      blueGray300: "#cbd5e1",
      blueGray400: "#94a3b8",
      blueGray500: "#64748b",
      blueGray600: "#475569",
      blueGray700: "#334155",
      blueGray800: "#1e293b",
      blueGray900: "#0f172a",
    },
    space: {
      "1": "8px",
      "2": "12px",
      "3": "16px",
      "4": "24px",
      "5": "32px",
      "6": "48px",
    },
    fontSizes: {
      xs: ".75rem",
      sm: ".875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "3.75rem",
      "7xl": "4.5rem",
      "8xl": "6rem",
      "9xl": "8rem",
    },
    fonts: {
      sans: `ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"`,
      serif: `ui-serif, Georgia, Cambria, "Times New Roman", Times, serif`,
      mono: `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`,
    },
    fontWeights: {
      thin: 100,
      extralight: 200,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      black: 900,
    },
    lineHeights: {
      "3": ".75rem",
      "4": "1rem",
      "5": "1.25rem",
      "6": "1.5rem",
      "7": "1.75rem",
      "8": "2rem",
      "9": "2.25rem",
      "10": "2.5rem",
      none: "1",
      tight: "1.25",
      snug: "1.375",
      normal: "1.5",
      relaxed: "1.625",
      loose: "2",
    },
    letterSpacings: {
      tighter: "-0.05em",
      tight: "-0.025em",
      normal: "0em",
      wide: "0.025em",
      wider: "0.05em",
      widest: "0.1em",
    },
    sizes: {
      "0": "0px",
      "0.5": "0.125rem",
      "1": "0.25rem",
      "1.5": "0.375rem",
      "2": "0.5rem",
      "2.5": "0.625rem",
      "3": "0.75rem",
      "3.5": "0.875rem",
      "4": "1rem",
      "5": "1.25rem",
      "6": "1.5rem",
      "7": "1.75rem",
      "8": "2rem",
      "9": "2.25rem",
      "10": "2.5rem",
      "11": "2.75rem",
      "12": "3rem",
      "14": "3.5rem",
      "16": "4rem",
      "20": "5rem",
      "24": "6rem",
      "28": "7rem",
      "32": "8rem",
      "36": "9rem",
      "40": "10rem",
      "44": "11rem",
      "48": "12rem",
      "52": "13rem",
      "56": "14rem",
      "60": "15rem",
      "64": "16rem",
      "72": "18rem",
      "80": "20rem",
      "96": "24rem",
      auto: "auto",
      px: "1px",
      "1/2": "50%",
      "1/3": "33.333333%",
      "2/3": "66.666667%",
      "1/4": "25%",
      "2/4": "50%",
      "3/4": "75%",
      "1/5": "20%",
      "2/5": "40%",
      "3/5": "60%",
      "4/5": "80%",
      "1/6": "16.666667%",
      "2/6": "33.333333%",
      "3/6": "50%",
      "4/6": "66.666667%",
      "5/6": "83.333333%",
      "1/12": "8.333333%",
      "2/12": "16.666667%",
      "3/12": "25%",
      "4/12": "33.333333%",
      "5/12": "41.666667%",
      "6/12": "50%",
      "7/12": "58.333333%",
      "8/12": "66.666667%",
      "9/12": "75%",
      "10/12": "83.333333%",
      "11/12": "91.666667%",
      full: "100%",
      screen: "100vw",
      min: "min-content",
      max: "max-content",
      none: "none",
      xs: "20rem",
      sm: "24rem",
      md: "28rem",
      lg: "32rem",
      xl: "36rem",
      "2xl": "42rem",
      "3xl": "48rem",
      "4xl": "56rem",
      "5xl": "64rem",
      "6xl": "72rem",
      "7xl": "80rem",
      prose: "65ch",
      ...Object.fromEntries(
        Object.entries(screens).map(([name, size]) => [
          `screenTest-${name}`,
          size,
        ])
      ),
    },
    borderWidths: {
      "0": "0px",
      "2": "2px",
      "4": "4px",
      "8": "8px",
      "1": "1px",
    },
    borderStyles: {},
    radii: {
      none: "0px",
      sm: "0.125rem",
      base: "0.25rem",
      md: "0.375rem",
      lg: "0.5rem",
      xl: "0.75rem",
      "2xl": "1rem",
      "3xl": "1.5rem",
      full: "9999px",
    },
    shadows: {
      sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
      base: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
      md:
        "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      lg:
        "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      xl:
        "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
      none: "0 0 #0000",
    },
    zIndices: {
      "0": "0",
      "1": "10",
      "2": "20",
      "3": "30",
      "4": "40",
      "5": "50",
    },
    transitions: {},
  },
  media: {
    light: "(prefers-color-scheme: light)",
    dark: "(prefers-color-scheme: dark)",
    ...Object.fromEntries(
      Object.entries(screens).map(([name, size]) => [
        name,
        `(min-width: ${size})`,
      ])
    ),
  },
  utils: {
    p: () => (value: any) => ({
      paddingTop: value,
      paddingBottom: value,
      paddingLeft: value,
      paddingRight: value,
    }),
    pt: () => (value: any) => ({
      paddingTop: value,
    }),
    pr: () => (value: any) => ({
      paddingRight: value,
    }),
    pb: () => (value: any) => ({
      paddingBottom: value,
    }),
    pl: () => (value: any) => ({
      paddingLeft: value,
    }),
    px: () => (value: any) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: () => (value: any) => ({
      paddingTop: value,
      paddingBottom: value,
    }),

    m: () => (value: any) => ({
      marginTop: value,
      marginBottom: value,
      marginLeft: value,
      marginRight: value,
    }),
    mt: () => (value: any) => ({
      marginTop: value,
    }),
    mr: () => (value: any) => ({
      marginRight: value,
    }),
    mb: () => (value: any) => ({
      marginBottom: value,
    }),
    ml: () => (value: any) => ({
      marginLeft: value,
    }),
    mx: () => (value: any) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: () => (value: any) => ({
      marginTop: value,
      marginBottom: value,
    }),

    spaceX: () => (value: any) => ({
      "& > * + *": {
        marginLeft: value,
      },
    }),

    spaceY: () => (value: any) => ({
      "& > * + *": {
        marginTop: value,
      },
    }),
  },
};

export const modernNormalize: Parameters<TStyledSheet["global"]>[0] = {
  /*
   * Document
   * ========
   */

  /**
   * Use a better box model (opinionated).
   */
  "*,*::before,*::after": {
    boxSizing: "border-box",
  },

  /**
   *  Use a more readable tab size (opinionated).
   */
  ":root": {
    "-moz-tab-size": "4",
    tabSize: "4",
  },

  /**
   * 1. Correct the line height in all browsers.
   * 2. Prevent adjustments of font size after orientation changes in iOS.
   */
  html: {
    lineHeight: "1.15" /* 1 */,
    "-webkit-text-size-adjust": "100%" /* 2 */,
  },

  /*
   * Sections
   * ========
   */

  body: {
    /**
     * Remove the margin in all browsers.
     */
    margin: "0",
    /**
     * Improve consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)
     */
    fontFamily:
      "system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji'",
  },

  /*
   * Grouping content
   * ================
   */

  /**
   * 1. Add the correct height in Firefox.
   * 2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)
   */
  hr: {
    height: "0" /* 1 */,
    color: "inherit" /* 2 */,
  },

  /*
   * Text-level semantics
   * ====================
   */

  /**
   * Add the correct text decoration in Chrome, Edge, and Safari.
   */
  "abbr[title]": {
    textDecoration: "underline dotted",
  },

  /**
   * Add the correct font weight in Edge and Safari.
   */
  "b, strong": {
    fontWeight: "bolder",
  },

  /**
   * 1. Improve consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)
   * 2. Correct the odd 'em' font sizing in all browsers.
   */
  "code, kbd, samp, pre": {
    fontFamily:
      "ui-monospace, SFMono-Regular, Consolas, 'Liberation Mono', Menlo, monospace" /* 1 */,
    fontSize: "1em" /* 2 */,
  },

  /**
   * Add the correct font size in all browsers.
   */
  small: {
    fontSize: "80%",
  },

  /**
   * Prevent 'sub' and 'sup' elements from affecting the line height in all browsers.
   */
  "sub, sup": {
    fontSize: "75%",
    lineHeight: "0",
    position: "relative",
    verticalAlign: "baseline",
  },
  sub: {
    bottom: "-0.25em",
  },
  sup: {
    top: "-0.5em",
  },

  /*
   * Tabular data
   * ============
   */

  /**
   * 1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)
   * 2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)
   */
  table: {
    textIndent: "0" /* 1 */,
    borderColor: "inherit" /* 2 */,
  },

  /*
   * Forms
   * =====
   */

  /**
   * 1. Change the font styles in all browsers.
   * 2. Remove the margin in Firefox and Safari.
   */
  "button, input, optgroup, select, textarea": {
    fontFamily: "inherit" /* 1 */,
    fontSize: "100%" /* 1 */,
    lineHeight: "1.15" /* 1 */,
    margin: "0" /* 2 */,
  },

  /**
   * Remove the inheritance of text transform in Edge and Firefox.
   */
  "button, select": {
    textTransform: "none",
  },

  /**
   * Correct the inability to style clickable types in iOS and Safari.
   */
  "button, [type='button'], [type='reset'], [type='submit']": {
    "-webkit-appearance": "button",
  },

  /**
   * Remove the inner border and padding in Firefox.
   */
  "::-moz-focus-inner": {
    borderStyle: "none",
    padding: "0",
  },

  /**
   * Restore the focus styles unset by the previous rule.
   */
  ":-moz-focusring": {
    outline: "1px dotted ButtonText",
  },

  /**
   * Remove the additional ':invalid' styles in Firefox.
   * See: https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737
   */
  ":-moz-ui-invalid": {
    boxShadow: "none",
  },

  /**
   * Remove the padding so developers are not caught out when they zero out 'fieldset' elements in all browsers.
   */
  legend: {
    padding: "0",
  },

  /**
   * Add the correct vertical alignment in Chrome and Firefox.
   */
  progress: {
    verticalAlign: "baseline",
  },

  /**
   *Correct the cursor style of increment and decrement buttons in Safari.
   */
  "::-webkit-inner-spin-button, ::-webkit-outer-spin-button": {
    height: "auto",
  },

  /**
   * 1. Correct the odd appearance in Chrome and Safari.
   * 2. Correct the outline style in Safari.
   */
  "[type='search']": {
    "-webkit-appearance": "textfield" /* 1 */,
    "outline-offset": "-2px" /* 2 */,
  },

  /**
   * Remove the inner padding in Chrome and Safari on macOS.
   */
  "::-webkit-search-decoration": {
    "-webkit-appearance": "none",
  },

  /**
   * 1. Correct the inability to style clickable types in iOS and Safari.
   * 2. Change font properties to 'inherit' in Safari.
   */
  "::-webkit-file-upload-button": {
    "-webkit-appearance": "button" /* 1 */,
    font: "inherit" /* 2 */,
  },

  /*
   * Interactive
   * ===========
   */

  /*
   * Add the correct display in Chrome and Safari.
   */
  summary: {
    display: "list-item",
  },
};

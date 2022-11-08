/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",

        light: {
          green: {
            100: "",
            700: "#272f27",
            900: "#2c3e2d",
          },
          gray: {
            100: "",
            300: "#eeeff1",
            500: "#272f27",
          },
        },
        dark: {
          gray: {
            900: "hsl(0, 0%, 2%)",
          },
        },

        // --theme-primary: ;
        // --theme-primary-hover: "#395a3b";
        // --theme-on-primary: hsl(0, 0%, 100%);

        // --theme-bg: ;
        // --theme-on-bg: ;

        // --theme-surface-1: #e6e4e0;
        // --theme-on-surface-1: #272f27;

        // --theme-surface-2: #c3d9c4;
        // --theme-on-surface-2: #000;
      },
    },
  },
  plugins: [require("flowbite/plugin")],
  darkMode: "class",
}

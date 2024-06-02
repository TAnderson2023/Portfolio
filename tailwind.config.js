/** @type {import('tailwindcss').Config} */
import { fontFamily } from "tailwindcss/defaultTheme";
import plugin from "tailwindcss/plugin";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./public/assets/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          1: "#171717",
          2: "#444444",
          3: "#DA0037",
          4: "#EDEDED",
        },
        stroke: {
          1: "#26242C",
        },
        neutral: {
          1: "#FFFFFF",
          2: "#B4B4B8",
          3: "#C7C8CC",
          4: "#E3E1D9",
          5: "#F2EFE5",
        },
      },
      fontFamily: {
        heading: ["League Spartan"],
        body: ["Open Sans"],
      },
    },
  },
  plugins: [
    plugin(function ({ addBase, addComponents, addUtilities }) {
      addBase({});
      addComponents({
        ".container": {
          "@apply max-w-[77.5rem] mx-auto px-5 md:px-10 lg:px-15 xl:max-w-[87.5rem]":
            {},
        },
        ".h1": {
          "@apply font-semibold font-heading text-[2.5rem] leading-[3.25rem] md:text-[2.75rem] md:leading-[3.75rem] lg:text-[3.25rem] lg:leading-[4.0625rem] xl:text-[3.75rem] xl:leading-[4.5rem]":
            {},
        },
        ".h2": {
          "@apply font-heading text-[1.75rem] leading-[2.5rem] md:text-[2rem] md:leading-[2.5rem] lg:text-[2.5rem] lg:leading-[3.5rem] xl:text-[3rem] xl:leading-tight":
            {},
        },
        ".h3": {
          "@apply text-[2rem] leading-normal md:text-[2.5rem] font-heading": {},
        },
        ".h4": {
          "@apply text-[2rem] leading-normal font-heading": {},
        },
        ".h5": {
          "@apply text-2xl leading-normal font-heading border-primary-1 hover:border-b-[2px]":
            {},
        },
        ".h6": {
          "@apply text-2xl leading-normal font-heading align-middle": {},
        },
        ".p": {
          "@apply font-body text-[16px]": {},
        },
        ".active": {
          "@apply border-b-[2px]": {},
        },
      });
      addUtilities({
        ".tap-highlight-color": {
          "-webkit-tap-highlight-color": "rgba(0, 0, 0, 0)",
        },
      });
    }),
  ],
};

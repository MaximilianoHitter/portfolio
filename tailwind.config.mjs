/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      rotate: {
        minus20: "-20deg",
        plus20: "20deg",
      },
    },
  },
  plugins: [],
};

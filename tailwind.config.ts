import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      screens: {
        xs: {min:'320px',max:'540px'},  // Small devices (phones)
        sm: '640px', 
        md: '768px',  // Medium devices (tablets)
        lg: '1024px', // Large devices (laptops)
        xl: '1279px', // Extra large devices (desktops)
        xxl: '1536px', // 2x large screens (larger desktops)
        xxxl: '1920px', // 3x large screens (larger desktops)
      },
    },
  },
  plugins: [],
};

export default config;

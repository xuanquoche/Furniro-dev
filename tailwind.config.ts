import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        "button-background": "var(--buton-background)",
        "text-gray": "var(--text-gray)",
        "discount-background": "var(--discount-background)",
        "new-product": "var(--new-product)",
        "text-product-name": "var(--text-product-name)",
        "text-sort-description": "var(--text-sort-description)",
        "text-discount-price": "var(--text-discount-price)",
        "banner-background": "var(--banner-background)",
        "text-treating": "var(--text-treating)",
        "text-category": "var(--text-category)",
        "filter-background": "var(--filter-background)",
        error: "var(--error)",
        gray: {
          300: "var(--gray-300)",
          400: "var(--gray-400)",
        },
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [tailwindcssAnimate],
} satisfies Config;

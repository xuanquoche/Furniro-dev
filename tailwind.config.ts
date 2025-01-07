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
          100: "var(--gray-100)",
          300: "var(--gray-300)",
          400: "var(--gray-400)",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        "background-admin": "var(--background-admin)",
        "text-sidebar-admin": "var(--text-sidebar-admin)",
        "background-hover-admin": "var(--background-hover-admin)",
        white: "var(--white)",
        black: {
          DEFAULT: "var(--black)",
          800: "var(--black-800)",
          500: "var(--black-500)",
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

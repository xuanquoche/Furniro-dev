import type { Config } from 'tailwindcss';
import tailwindcssAnimate from 'tailwindcss-animate';

export default {
    darkMode: ['class'],
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}'
    ],
    theme: {
        extend: {
            colors: {
                background: 'hsl(var(--background))',
                foreground: 'hsl(var(--foreground))',
                'button-background': 'hsl(var(--buton-background))',
                'text-gray': 'hsl(var(--text-gray))',
                'discount-background': 'hsl(var(--discount-background))',
                'new-product': 'hsl(var(--new-product))',
                'text-product-name': 'hsl(var(--text-product-name))',
                'text-sort-description': 'hsl(var(--text-sort-description))',
                'text-discount-price': 'hsl(var(--text-discount-price))',
                'banner-background': 'hsl(var(--banner-background))',
                'text-treating': 'hsl(var(--text-treating))',
                'text-category': 'hsl(var(--text-category))',
                'filter-background': 'hsl(var(--filter-background))',
                'discount-price': 'hsl(var(--discount-price))',
                'explore-background': 'hsl(var( --explore-background))',
                explore: 'hsl(var(--explore))',
                card: 'hsl(var(--card))',
                error: 'hsl(var(--error))',
                gray: {
                    100: 'hsl(var(--gray-100))',
                    300: 'hsl(var(--gray-300))',
                    400: 'hsl(var(--gray-400))'
                },
                sidebar: {
                    DEFAULT: 'hsl(var(--sidebar-background))',
                    foreground: 'hsl(var(--sidebar-foreground))',
                    primary: 'hsl(var(--sidebar-primary))',
                    'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
                    accent: 'hsl(var(--sidebar-accent))',
                    'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
                    border: 'hsl(var(--sidebar-border))',
                    ring: 'hsl(var(--sidebar-ring))'
                },
                'background-admin': 'hsl(var(--background-admin))',
                'text-sidebar-admin': 'hsl(var(--text-sidebar-admin))',
                'background-hover-admin': 'hsl(var(--background-hover-admin))',
                white: 'hsl(var(--white))',
                black: {
                    DEFAULT: 'hsl(var(--black))',
                    800: 'hsl(var(--black-800))',
                    500: 'hsl(var(--black-500))'
                }
            },
            fontFamily: {
                poppins: ['Poppins', 'sans-serif']
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)'
            },
            screens: {
                tiny: '390px'
            }
        }
    },
    plugins: [tailwindcssAnimate]
} satisfies Config;

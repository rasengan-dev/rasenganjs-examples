import getPalette from 'tailwindcss-palette-generator';
import path from 'path';
import fs from 'fs';
const theme = JSON.parse(
  fs.readFileSync(path.join(__dirname, 'theme.json'), 'utf8')
);
const palette = getPalette([
  {
    color: theme.primary || '#264653',
    name: 'primary',
  },
  {
    color: theme.secondary || '#264653',
    name: 'secondary',
  },
  {
    color: '#FF2424',
    name: 'danger',
  },
  {
    color: '#34B53A',
    name: 'success',
  },
  {
    color: '#FFB200',
    name: 'warning',
  },
]);
// templates\dashboard\model1\tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: ['./src/**/*.{ts,tsx,js,jsx}'],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        border: theme.border,
        input: theme.border,
        ring: theme.ring,
        background: theme.background,
        foreground: theme.foreground,
        title: theme.title,
        primary: { ...palette.primary, foreground: '#fff' },
        secondary: { ...palette.secondary, foreground: '#fff' },
        destructive: { ...palette.destructive, foreground: '#fff' },
        success: { ...palette.success, foreground: '#fff' },
        warning: { ...palette.warning, foreground: '#fff' },
        muted: theme.muted,
        accent: {
          DEFAULT: palette.primary['50'],
          foreground: theme.foreground,
        },
        popover: {
          foreground: '#fff',
          foreground: theme.foreground,
        },
        card: {
          foreground: '#fff',
          foreground: theme.foreground,
        },
      },
      borderRadius: {
        lg: `14px`,
        md: `8px`,
        sm: '6px',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};

import { adaptPath } from "rasengan";
import getPalette from "tailwindcss-palette-generator";
import path from "path";
import fs from "fs";
const theme = JSON.parse(
  fs.readFileSync(path.join(__dirname, "theme.json"), "utf8")
);

const palette = getPalette([
  {
    color: theme.primary || "#264653",
    name: "primary",
  },
  {
    color: theme.primary100 || "#D9EBFF",
    name: "primary-100",
  },
  {
    color: theme.secondary || "#264653",
    name: "secondary",
  },
  {
    color: theme.success || "#34B53A",
    name: "success",
  },
  {
    color: theme.apple100 || "#DFF9E0",
    name: "apple-100",
  },
  {
    color: theme.warning || "#FFB200",
    name: "warning",
  },
  {
    color: theme.mysin || "#FFF8C5",
    name: "mysin",
  },
  {
    color: theme.red100 || "#FFDFDF",
    name: "red-100",
  },
  {
    color: theme.border || "#EBF0F4",
    name: "border",
  },
  {
    color: theme.ring || "#C5CFDC",
    name: "ring",
  },
  {
    color: theme.background || "#FAFCFF",
    name: "background",
  },
  {
    color: theme.foreground || "#5B6278",
    name: "foreground",
  },
  {
    color: theme.muted || "#858EAD",
    name: "muted",
  },
  {
    color: theme.popover || "#ffffff",
    name: "popover",
  },
  {
    color: theme.card || "#ffffff",
    name: "card",
  },
  {
    color: theme.title || "#1E2A51",
    name: "title",
  },
  {
    color: theme.danger || "#FF2424",
    name: "danger",
  },
  {
    color: theme.destructive || "#FF2424",
    name: "destructive",
  },
]);

// templates\dashboard\model1\tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: adaptPath(["./src/**/*.{ts,tsx,js,jsx}"]),
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
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
        primary: { ...palette.primary, foreground: "#fff" },
        secondary: { ...palette.secondary, foreground: "#fff" },
        destructive: { ...palette.destructive, foreground: "#fff" },
        success: { ...palette.success, foreground: "#fff" },
        warning: { ...palette.warning, foreground: "#fff" },
        muted: theme.muted,
        accent: {
          DEFAULT: palette.primary["50"],
          foreground: theme.foreground,
        },
        popover: {
          foreground: "#fff",
          foreground: theme.foreground,
        },
        card: {
          foreground: "#fff",
          foreground: theme.foreground,
        },
      },
      borderRadius: {
        lg: `14px`,
        md: `8px`,
        sm: "6px",
      },
      height: {
        "main-page": "calc(100vh - 80px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

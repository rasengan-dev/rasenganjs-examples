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
    color: theme.destructive,
    name: "destructive",
  },
  {
    color: theme.success,
    name: "success",
  },
  {
    color: theme.warning,
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
    extend: {
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
      colors: {
        primary: { ...palette.primary, foreground: theme.white },
        secondary: { ...palette.secondary, foreground: theme.white },
        destructive: { ...palette.destructive, foreground: theme.white },
        success: { ...palette.success, foreground: theme.white },
        warning: { ...palette.warning, foreground: theme.white },

        title: theme.title,
        foreground: theme.foreground,
        muted: theme.muted,

        background: theme.background,

        border: theme.border,
        white: theme.white,
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
    },
  },
  plugins: [require("tailwindcss-animate")],
};

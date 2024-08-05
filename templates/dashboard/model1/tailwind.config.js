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
    color: theme.secondary || "#264653",
    name: "secondary",
  },
  {
    color: theme.green,
    name: "green",
  },
  {
    color: theme.yellow,
    name: "yellow",
  },
  {
    color: theme.red || "#FF2424",
    name: "red",
  },
]);

// templates\dashboard\model1\tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: adaptPath(["./src/**/*.{ts,tsx,js,jsx}"]),
  theme: {
    extend: {
      colors: {
        ...palette,
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
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

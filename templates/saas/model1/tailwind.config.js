import { adaptPath } from "rasengan";

/** @type {import('tailwindcss').Config} */
export default {
	content: adaptPath(["./src/**/*.{ts,tsx,js,jsx}"]),
	theme: {
		extend: {
			colors: {
				rasengan: {
					// Colors for light mode
					light: {
						primary: {
							DEFAULT: "#2A7FFF",
						},
						background: {
							DEFAULT: "#F5F5F5",
						},
						text: {
							DEFAULT: "#111",
						},
						border: {
							DEFAULT: "#eee",
						},
						shadow: {
							DEFAULT: "#dddddd",
						},
					},

					// Colors for dark mode
					dark: {
						primary: {
							DEFAULT: "#2A7FFF",
						},
						background: {
							DEFAULT: "#121212",
						},
						text: {
							DEFAULT: "#F5F5F5",
						},
						border: {
							DEFAULT: "#333333",
						},
						shadow: {
							DEFAULT: "#333333",
						},
					},
				},
			},
			fontFamily: {
				"urbanist-light": ["Urbanist-Light", "sans-serif"],
				"urbanist-regular": ["Urbanist-Regular", "sans-serif"],
				"urbanist-bold": ["Urbanist-Bold", "sans-serif"],
				"urbanist-black": ["Urbanist-Black", "sans-serif"],
				"urbanist-thin": ["Urbanist-Thin", "sans-serif"],
				"urbanist-extrabold": ["Urbanist-ExtraBold", "sans-serif"],
				"urbanist-extralight": ["Urbanist-ExtraLight", "sans-serif"],
				"urbanist-semibold": ["Urbanist-SemiBold", "sans-serif"],
				"urbanist-medium": ["Urbanist-Medium", "sans-serif"],
			},
			animation: {
				"slide-in": "slide-in 0.3s ease-in-out",
			},
			keyframes: {
				"slide-in": {
					"0%": {
						transform: "translateY(30%) translateX(-50%)",
					},
					"100%": {
						transform: "translateY(0) translateX(-50%)",
					},
				},
			},
		},
	},
	plugins: [],
};

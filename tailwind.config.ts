import type { Config } from "tailwindcss";

const config = {
    darkMode: ["class"],
    content: [
        "./pages/**/*.{ts,tsx}",
        "./components/**/*.{ts,tsx}",
        "./app/**/*.{ts,tsx}",
        "./src/**/*.{ts,tsx}",
        "./stories/**/*.{ts,tsx}",
        "./stories/**/*.stories.{ts,tsx}",
    ],
    prefix: "",
    theme: {
        colors: {
            neutral: {
                100: "#ffffff",
                200: "#fdfdfd",
                300: "#f5f5f5",
                400: "#f0f0f0",
                500: "#dbdbdb",
                600: "#c3c3c3",
                700: "#929292",
                800: "#626262",
                900: "#4e4e4e",
                1000: "#313131",
                1100: "#2a2a2a",
                1200: "#202020",
                1300: "#0d0d0d",
            },
            primary: {
                50: "#f9e9e6",
                100: "#ebbcb1",
                200: "#e29b8c",
                300: "#d46e57",
                400: "#cc5136",
                500: "#bf2604",
                600: "#ae2304",
                700: "#881b03",
                800: "#691502",
                900: "#501002",
            },
            secondary: {
                50: "#f9e6f1",
                100: "#ebb1d2",
                200: "#e28cbd",
                300: "#d4579f",
                400: "#cc368c",
                500: "#bf046f",
                600: "#ae0465",
                700: "#88034f",
                800: "#69023d",
                900: "#50022f",
            },
            success: "#18c964",
            warning: "#f5a524",
            fail: "#f31260",
        },
        container: {
            center: true,
            padding: "2rem",
            screens: {
                "2xl": "1400px",
            },
        },
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
        },
    },
    plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;

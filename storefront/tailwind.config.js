module.exports = {
  darkMode: "class",
  presets: [require("@medusajs/ui-preset")],
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/modules/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@medusajs/ui/dist/**/*.{js,jsx,ts,tsx}",
    "../../node_modules/@medusajs/ui/dist/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        "8xl": "100rem",
      },
      screens: {
        "2xsmall": "320px",
        xsmall: "512px",
        small: "1024px",
        medium: "1280px",
        large: "1440px",
        xlarge: "1680px",
        "2xlarge": "1920px",
      },
      fontFamily: {
        sans: ["var(--font-poppins)", "var(--font-geist-sans)"],
      },
      colors: {
        // Figma Design Colors
        "figma-text": "#3C465F",
        "figma-bg": "#F7F8FB",
        "figma-primary": "#FF0F5F",
        "figma-header": "#3C465F",
        "figma-accent-blue": "#58C1F9",
        "figma-accent-green": "#6AE579",
        "figma-border": "rgba(210, 214, 218, 0.5)",
        "figma-cream": "#F7F5E7",
        "figma-grey": "#DCDCDC",
        "figma-light-grey": "#D4D4D4",
      },
      boxShadow: {
        "figma-block": "10px 10px 50px 3px rgba(39, 92, 141, 0.1)",
        "figma-drop": "0px 2px 4px 0px rgba(64, 64, 64, 0.1)",
        "figma-card-blue": "0px 6px 0px 0px #58C1F9",
        "figma-card-pink": "0px 6px 0px 0px #FF0F5F",
        "figma-card-green": "0px 6px 0px 0px #6AE579",
      },
      keyframes: {
        "accordion-open": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-close": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-open": "accordion-open 0.3s ease-out",
        "accordion-close": "accordion-close 0.3s ease-out",
      },
    },
  },
}

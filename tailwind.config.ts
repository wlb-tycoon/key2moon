import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "trans-dark": "#78797B",
        "main-purple": "#801eff",
        "main-back": "#000211",
        "main-red": "#f33592",
        "main-green": "#45f336",
        "item-back": "#252525",
        "footer-text": "#aeaeae",
        "mobile-header": "rgb(32 34 39)",
      },
      fontSize: {
        base: ["16px", "19.5px"],
        mini: ["20px", "24.38px"],
        miniTitle: ["32px", "39px"],
        headerSize: ["14px", "17.07px"],
        mobileTitle: ["10px", "12.19px"],
        description: ["12px", "14.68px"],
        containerMobileTitle: ["11px", "13.41px"],
        amountDescription: ["10.79px", "13.15px"],
        amountTitle: ["34.16px", "51.24px"],
        containerTitleDescription: ["22px", "26.82px"],
      },
      screens: {
        "2xl": { min: "1340px" },
        xl: { min: "1200px" },
        lg: { min: "1000px" },
        md: { min: "900px" },
        sm: { min: "500px" },
      },
    },
    letterSpacing: {
      description: "0.03em",
    },
  },
  plugins: [require("flowbite/plugin")],
};
export default config;

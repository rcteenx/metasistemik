/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      fontFamily: {
        base: ["var(--font-base)", "sans-serif"],
      },
      colors: {
        // primary: "#8c8c8c",
        primary: "#242a2b",
        secondary: "#808080",
        accent: {
          DEFAULT: "#1cbccf",
          secondary: "#18abbc",
        },
        grey: "#e0f0f1",
        slate: "#333366",
        slate2: "#5b5b84",
        gray40: "#666666",
        "coral-red": "#FF6452",
        "slate-gray": "#6D6D6D",
        "pale-blue": "#F5F6FF",
        "white-400": "rgba(255, 255, 255, 0.80)",
      },
      boxShadow: {
        custom1: "0px 2px 40px 0px rgba(8, 70, 78, 0.08)",
        custom2: "0px 2px 30px 0px rgba(8, 73, 81, 0.06)",
      },
      backgroundImage: (theme) => ({
        kocluk1: "url('/assets/images/kocluk-1.jpg')",
        bilincSonrasi: "url('/assets/images/bilinc-sonrasi.jpg')",
        services: "url('/assets/images/bg.svg')",
      }),
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("tailwind-scrollbar"),
  ],
};

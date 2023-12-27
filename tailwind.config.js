/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#00b6be",

        secondary: "#ea0000",

        accent: "#00b200",

        neutral: "#051d1c",

        base: "#fffef8",

        info: "#00d8ff",

        success: "#00ffba",

        warning: "#c55e00",

        error: "#ff2f5b",
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        'small': '10px',
        'mid': '14px',
        'high': '18px',
      },
      // dropShadow: {
      //   'small': '0 20px 50px rgba(0, 0, 0, 0.25)',
      //   'mid': '14px',
      //   'high': '18px',
      // },
    },
  },
  plugins: [],
};

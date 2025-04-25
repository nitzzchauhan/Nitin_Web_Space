export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },

      colors: {
        primary: "#141414",
        accent: "#2F80ED",
      },
      animation: {
        pulseSlow: "pulse 3s ease-in-out infinite",
      }
    },
  },
  plugins: [],
};
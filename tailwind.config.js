/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  safelist: ["w-[75%]", "md:w-[30%]", "bg-[#0D0D0F]/95", "md:pt-[140px]"],
  theme: {
    extend: {
      colors: {
        gold: "#CFA15B",
        offwhite: "#F5F5F5",
      },
      fontFamily: {
        body: ["Inter", "sans-serif"],
        heading: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};

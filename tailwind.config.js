/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        custom: "-1px 156px 187px 0px rgba(0, 0, 0, 0.75)",
      },
    },
  },
  plugins: [],
};

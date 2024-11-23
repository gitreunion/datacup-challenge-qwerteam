/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        dark_blue: "#235699", 
        light_blue: "#4faee1", 
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"], // Ajoutez la police ici
      },
      animation: {
        "fade-in-up": "fadeInUp 0.5s ease-out",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: 0, transform: "translateY(20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
}


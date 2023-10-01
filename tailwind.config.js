/** @type {import('tailwindcss').Config} */
module.exports = {
  plugins: ['prettier-plugin-tailwindcss'],
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      dropShadow: {
        custom1: "0 5px 5px rgba(0, 0, 0, 0.5)",
        sm2: "0 5px 3px rgba(0, 0, 0, 0.3)",
        smwhite: "0px 0px 10px rgba(0, 0, 0, 0.8)",
      },
      borderWidth: {
        DEFAULT: '1px',
        '6': '6px',
      },
      fontFamily: {
        SuperBoys: ["SuperBoys", "sans-serif"],
        Poppins: ["Poppins", "sans-serif"],
        Righteous: ["Righteous", "sans-serif"],
      },
      colors: {
        rosa: "#FFF5E0",
        salmao: "#FF6969",
        vermelho: "#BB2525",
        azul: "#141E46",
      },
      scale: {
        '105': '1.05',
        '110': '1.1',
      }
    },
  },
};

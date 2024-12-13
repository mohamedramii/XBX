// tailwind.config.js
module.exports = {
  darkMode: 'class',
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#11A900",
        secondary: "#0D0D0D",
        grayxbx: "#9e9e9e",
        dark: {
          bg: '#1a1a1a',
          secondary: '#2d2d2d',
          accent: '#3a3a3a'
        }
      },
      backgroundColor: {
        'dark-gradient': 'linear-gradient(180deg, #1a1a1a 0%, #2d2d2d 100%)'
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"], 
      },
      fontWeight: {
        thin: '100',
        extralight: '200',
        light: '300',
        regular: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
        black: '900',
      },
    },
  },
  plugins: [],
};

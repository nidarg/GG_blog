module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '280px',
        // => @media (min-width: 280px) { ... }
        'sm': '320px',
        // => @media (min-width: 320px) { ... }
  
        'md': '769px',
        // => @media (min-width: 769px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
        'xl': '1426px',
        // => @media (min-width: 1426px) { ... }
      },
    },
  },
  plugins: [],
}

module.exports = {
  content: ["./index.html", "./src/**/*.{tsx,ts,js}"],
  theme: {
    fontFamily: {
      headings: ["Gavency", "sans-serif"],
      regular: ["Kantumruy Pro", "sans-serif"],
    },
    extend: {
      
      // that is animation class
      animation: {
        fade: 'fadeOut 5s ease-in-out',
      },

      // that is actual animation
      keyframes: theme => ({
        fadeOut: {
          '0%': { backgroundColor: theme('colors.red.300') },
          '100%': { backgroundColor: theme('colors.transparent') },
        },
      }),
    },
  },
  plugins: [],
  variants: {
    extend: {
      textDecoration: ['focus-visible']
    }
  }
};

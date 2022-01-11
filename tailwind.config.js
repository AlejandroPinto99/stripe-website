module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        'strip-blue': '#A6FFCB',
        'stripe-mid-blue':'#05D5FF',
        'stripe-end-blue' : '#5533FF',
        'stripe-purple': '#6772E5',
        'stripe-dark-pruple' : '#32325D',
        'stripe-green': '#24B47E',
        'text-gray': '#6B7C93'
      },
    },
    fontSize: {
      '2xs': '.65rem',
      'xs': '.75rem',
      'sm': '.875rem',
      'tiny': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5.5xl': '2.50rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
    }
  },
  plugins: [],
}

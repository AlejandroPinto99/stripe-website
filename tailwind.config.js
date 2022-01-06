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
        'stripe-green': '#24B47E',
        'text-gray': '#6B7C93'
      },
    },
  },
  plugins: [],
}

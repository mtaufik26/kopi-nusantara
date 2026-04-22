module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0f0f0f',
        surface: '#1a1a1a',
        surface2: '#252525',
        'coffee-dark': '#2d2424',
        'coffee-darker': '#1f1818',
        'coffee-gold': '#b8956a',
        'coffee-gold-light': '#d4b896',
        'coffee-cream': '#e8dcc8',
        'coffee-cream-dim': '#a89f91',
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'serif'],
        sans: ['var(--font-inter)', 'sans-serif'],
      },
    },
  },
}
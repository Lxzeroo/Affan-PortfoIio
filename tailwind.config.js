/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#fdfbf7',
        foreground: '#2d2d2d',
        muted: '#e5e0d8',
        accent: '#ff4d4d',
        secondaryAccent: '#2d5da1',
        border: '#2d2d2d',
      },
      fontFamily: {
        kalam: ['Kalam', 'cursive'],
        patrick: ['Patrick Hand', 'cursive'],
      },
      borderRadius: {
        wobbly: '255px 15px 225px 15px / 15px 225px 15px 255px',
        wobblyMd: '155px 15px 135px 15px / 15px 135px 15px 155px',
      },
      boxShadow: {
        'hard': '4px 4px 0px 0px #2d2d2d',
        'hard-lg': '8px 8px 0px 0px #2d2d2d',
      },
      backgroundImage: {
        'paper-grain': "radial-gradient(#e5e0d8 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
}
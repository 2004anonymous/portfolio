/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {

      width: {
        'progress-one':'10%',
        'progress-two':'50%',
        'progress-three':'100%'
      },
      keyframes: {
        slideIn: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideOut: {
          '0%': { transform: 'translateX(0)', opacity: '1' },
          '100%': { transform: 'translateX(-100%)', opacity: '0' },
        },
      },
      animation: {
        slideIn: 'slideIn 2s ease-out forwards',
        slideOut: 'slideOut 2s ease-out forwards',
      },
    },
  },
  plugins: [],
}


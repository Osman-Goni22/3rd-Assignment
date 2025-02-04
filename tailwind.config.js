/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {},
    },
    plugins: [],
  }

  module.exports = {
    theme: {
      extend: {
        maxWidth: {
          '50p': '50%', // Custom utility for 50% max-width
          '50p': '50%', // Custom utility for 75% max-width
        }
      }
    }
  }
  
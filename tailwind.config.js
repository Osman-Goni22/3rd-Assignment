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
          '65p': '65%', // Custom utility for 75% max-width
        }
      }
    }
  }
  
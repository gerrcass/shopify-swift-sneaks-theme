/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.liquid", "./templates/customers/*.liquid"],
  theme: {
    extend: {
      height: {
        94: "22rem",
      },
    },
  },
  plugins: [],
};

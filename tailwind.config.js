/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        gradient0: "url(/public/image/gradient.jpeg)",
        gradient1: "linear-gradient(135deg, #83A5F2 0%, #204ECF 58.85%)",
      },
      colors: {
        "regal-blue": "#243c5a",
        primary: {
          delft: {
            dark: "#204ECF",
            medium: "rgba(32, 78, 207, 0.90)",
            light: "rgba(32, 78, 207, 0.70)",
          },
          watermelons: {
            dark: "#F26749",
            medium: "rgba(242, 103, 73, 0.50)",
            light: "rgba(242, 103, 73, 0.30)",
          },
          cornflower: {
            dark: "#83A5F2",
            medium: "rgba(131, 165, 242, 0.50)",
            light: "rgba(131, 165, 242, 0.30)",
          },
        },
      },
    },
  },
  plugins: [],
};

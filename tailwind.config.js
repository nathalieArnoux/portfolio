/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        profileImg: "url(/assets/Me.png)",
      },
      boxShadow: {
        heroAnim: 'inset 0 0 0 9px theme("colors.primary")',
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      "night",
      {
        pastel: {
          // eslint-disable-next-line no-undef
          ...require("daisyui/src/theming/themes")["pastel"],
          neutral: "#FFFFFF",
        },
      },
    ],
    darkTheme: "night",
  },
};

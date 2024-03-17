/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        profileImg: "url(/assets/Me.webp)",
      },
      boxShadow: {
        heroAnim: 'inset 0 0 0 9px theme("colors.primary")',
      },
      animation: {
        profilePic: "profilePic 8s ease-in-out infinite 1s",
      },
      keyframes: {
        profilePic: {
          "0%": { "border-radius": "60% 40% 30% 70%/60% 30% 70% 40%;" },
          "50%": { "border-radius": "30% 60% 70% 40%/50% 60% 30% 60%;" },
          "100%": { "border-radius": "60% 40% 30% 70%/60% 30% 70% 40%;" },
        },
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

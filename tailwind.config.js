/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
     screens: {
      'xl': {'max':'1440px'},
      'md': {'max': '950px'},
      'sm': {'max': '430px'},
      // => @media (max-width: 639px) { ... }
    },


    extend: {
      colors: {
        primary: "hsl(10, 79%, 65%)",
        secondary: "hsl(186, 34%, 60%)",
        textPrimary: "hsl(25, 47%, 15%)",
        textSecondary: "hsl(28, 10%, 53%)",
        textWhite: "hsl(33, 100%, 98%)",
        textCream: "hsl(27, 66%, 92%)",
      },
    },
  },
  plugins: [],
};

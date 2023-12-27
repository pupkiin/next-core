import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "regal-blue": "#243c5a",
        gray: "#858484",
        "semi-gray": "#9b9e9fea",
        "gray-light": "#ededed",
        "gray-lightest": "#f5f5f5",
        grayBorder: "rgba(60, 60, 67, .20)",
        white: "#fff",
        "gray-text": "#3f3a3a",
        "navy-blue-darker": "#3a5f8d",
        "navy-blue-lighter": "#698cb6",
        "navy-blue-lightest": "#eff5fe",

        blue: "#646cff",
        "blue-light": "#747bff",
        "blue-lighter": "#9499ff",
        "blue-lightest": "#bcc0ff",

        "blue-dark": "#535bf2",
        "blue-darker": "#454ce1",
      },
      padding: {
        "2px": "2px",
        "3px": "3px",
        "4px": "4px",
        "5px": "5px",
        "7px": "7px",
        "10px": "10px",
        "12px": "12px",
        "14px": "14px",
        "15px": "15px",
        "16px": "16px",
        "18px": "18px",
        "20px": "20px",
        "24px": "24px",
        "28px": "28px",
        "30px": "30px",
        "40px": "40px",
        "70px": "70px",
      },
      margin: {
        "2px": "2px",
        "3px": "3px",
        "4px": "4px",
        "5px": "5px",
        "7px": "7px",
        "10px": "10px",
        "12px": "12px",
        "14px": "14px",
        "15px": "15px",
        "16px": "16px",
        "18px": "18px",
        "20px": "20px",
        "24px": "24px",
        "28px": "28px",
        "30px": "30px",
        "40px": "40px",
        "70px": "70px",
      },
      fontSize: {
        "12px": "12px",
        "13px": "13px",
        "15px": "15px",
        "26px": "26px",
        "30px": "30px",
      },
      maxWidth: {
        "1440px": "1440px",
      },
      width: {
        "70%": "70%",
        "60%": "60%",
        "55%": "55%",
        "50%": "50%",
      },
      borderRadius: {
        "12px": "12px",
        "24px": "24px",
      },
    },
  },
  plugins: [require("daisyui")],
};
export default config

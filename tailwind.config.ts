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
        "grayBorder": "rgba(60, 60, 67, .20)"
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
        "30px": "30px",
      },
      maxWidth: {
        "1440px": "1440px",
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

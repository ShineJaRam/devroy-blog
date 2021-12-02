module.exports = {
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./shared/**/*.{js,ts,jsx,tsx}",
    "./styles/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: false,
  theme: {
    extend: {
      colors: {},
      fontSize: {
        tiny: "12px",
        sm: "14px",
        base: "16px",
        lg: "18px",
        xl: "22px"
      },
      spacing: {
        2: "2px",
        4: "4px",
        6: "6px",
        7: "7px",
        8: "8px",
        9: "9px",
        10: "10px",
        12: "12px",
        16: "16px",
        20: "20px",
        24: "24px",
        30: "30px",
        32: "32px",
        40: "40px",
        48: "48px",
        50: "50px",
        56: "56px",
        60: "60px",
        76: "76px"
      },
      borderRadius: {
        2: "2px",
        8: "8px",
        16: "16px",
        lineHeight: {
          12: "1.2",
          156: "1.56"
        }
      },
      lineHeight: {
        12: "1.2",
        156: "1.56"
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};

module.exports = {
  content: ["./src/**/*.{jsx,js}"],
  darkMode: 'class',
  theme: {
    fontFamily: {
      sora: ["Sora"]
    },
    extend: {
      fontSize: {
        8: '8px',
        10: '10px',
        11: '11px',
        12: '12px',
        13: '13px',
        14: '14px',
        16: '16px',
        20: '20px',
        24: '24px',
        26: '26px',
        32: '32px',
        36: '36px',
        46: '46px',
        48: '48px',
      },
      boxShadow: {
        'md': ' 0 0px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);'
      },
      screens: {
        'sm': '640px',
        // => @media (min-width: 640px) { ... }

        'md': '768px',
        // => @media (min-width: 768px) { ... }

        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }

        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }

        '2xl': '1536px'
      },
      colors: {
        'description-color': "#7e8d98",
        'price-color': '#ff6573',
        'primary-btn': '#ff5b6a',
        'primary-color': '#ff5b6a',
        'hover': '#ecf1f5',
        'gray': '#7e8d98',
      },
    },
  },
  plugins: [],
}
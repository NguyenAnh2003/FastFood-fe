module.exports = {
  content: ["./src/**/*.{jsx,js}"],
  darkMode: 'class',
  theme: {
    fontFamily: {
      sora:["Sora"]
    },
    extend: {
      fontSize: {
        8: '8px',
        13:'13px',
        14:'14px',
        16:'16px',
        20:'20px',
        24:'24px',
        26:'26px',
        32:'32px',
        36:'36px',
        46:'46px',
        48:'48px',
      },
      boxShadow: {
        'md': ' 0 0px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);'
      },
      screens: {
        'mob': '520px'
      },
      colors: {
        'description-color': "#7e8d98" ,
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
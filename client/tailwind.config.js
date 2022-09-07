module.exports = {
  content: ["./src/**/*.{jsx,js}"],
  darkMode: 'class',
  theme: {
    fontFamily: {
      sora:["Sora"]
    },
    extend: {
      fontSize: {
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
        'md': '6px 6px 16px 0 rgba(0,0,0,0.25), -4px -4px 12px 0 rgba(255,255,255,0.3)'
      },
      screens: {
        'mob': '520px'
      },
    },
  },
  plugins: [],
}
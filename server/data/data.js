import bcrypt from 'bcryptjs';

const data = {
  products: [ 
    // burger
    {
      name: 'SANDWICH GÀ GIÒN',
      description: '1 BURGER GÀ GIÒN',
      slug: '_SANDWICH_GA_GION_',
      image: '/assets/menu/burger/_SANDWICH_GA_GION_30.000VND_.png',
      price: 30.000,
      countInStock: 10,
      category: 'Burger',
      new: false,
    },
    // combo
    {
      name: 'Combo 1',
      description: '1 MIẾNG GÀ GIÒN + 01 MỲ Ý SỐT BÒ BẰM + 01 NƯỚC NGỌT (VỪA)',
      slug: '_01_MIENG_GA_GION_01_MY_Y_SOT_BO_BAM_01_NUOC_NGOT_(VUA)_',
      image: '/assets/menu/combo/_01_MIENG_GA_GION_01_MY_Y_SOT_BO_BAM_01_NUOC_NGOT_(VUA)_65.000VND_.png',
      price: 65.000,
      countInStock: 10,
      category: 'Combo',
      new: false,
    },
    // dessert
    {
      name: '7 UP Lớn',
      description: '1 CHAI SEVEN UP SẢNG KHOÁI',
      slug: '_7_UP_LON_',
      image: '/assets/menu/dessert/_7_UP_LON_15.000VND_.png',
      price: 15.000,
      countInStock: 10,
      category: 'Dessert',
      new: true,
    },

  ]
}

export default data;
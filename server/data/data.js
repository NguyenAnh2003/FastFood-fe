import bcrypt from 'bcryptjs';

const data = {
  news:[
    {
      title: 'Temp news',
      description: 'Temp news has just posted today',
      likes: 50,
      image: '/assets/news/news1.jpg',
    }
  ],
  products: [ 
    // burger
    {
      name: 'BURGER BBQ',
      description: '1 BURGER BBQ',
      slug: 'BURGER_BBQ_',
      image: '/assets/menu/burger/BURGER_BBQ_30.000VND_.png',
      price: 30.000,
      countInStock: 10,
      category: 'Burger',
      new: false,
    },
    {
      name: 'BURGER + KHOAI + NƯỚC',
      description: '1 BURGER BBQ 1 KHOAI 1 NƯỚC',
      slug: 'BURGER_BBQ_KHOAI_NC',
      image: '/assets/menu/burger/BURGER_BBQ_KHOAI_NC_50.000VND.png',
      price: 50.000,
      countInStock: 50,
      category: 'Burger',
      new: false,
    },
    {
      name: 'BURGER BBQ NƯỚC',
      description: '1 BURGER BBQ 1 NƯỚC',
      slug: 'BURGER_BBQ_NC_',
      image: '/assets/menu/burger/BURGER_BBQ_NC_35.000VND.png',
      price: 35.000,
      countInStock: 15,
      category: 'Burger',
      new: false,
    },
    {
      name: 'BURGER GÀ GIÒN',
      description: '1 BURGER GÀ GIÒN',
      slug: 'BURGER_GA_',
      image: '/assets/menu/burger/BURGER_GA_30.000VND.png',
      price: 30.000,
      countInStock: 10,
      category: 'Burger',
      new: false,
    },
    {
      name: 'BURGER GÀ GIÒN + NƯỚc',
      description: '1 BURGER GÀ GIÒN 1 NƯỚC',
      slug: 'BURGER_GA_NC',
      image: '/assets/menu/burger/BURGER_GA_NC_35.000VND.png',
      price: 35.000,
      countInStock: 10,
      category: 'Burger',
      new: false,
    },
    {
      name: 'BURGER GÀ GIÒN + KHOAI + NƯỚC',
      description: '1 BURGER GÀ GIÒN 1 KHOAI CHIÊN 1 NƯỚC',
      slug: 'BURGER_GA_KHOAI_NC',
      image: '/assets/menu/burger/BURGER_GA_NC_KHOAI_50.000VND.png',
      price: 50.000,
      countInStock: 10,
      category: 'Burger',
      new: false,
    },
    // combo
    {
      name: 'Combo 1',
      description: '1 MIẾNG GÀ GIÒN + 01 MỲ Ý SỐT BÒ BẰM + 01 NƯỚC NGỌT (VỪA)',
      slug: '_01_MIENG_GA_GION_01_MY_Y_SOT_BO_BAM_01_NUOC_NGOT_(VUA)',
      image: '/assets/menu/combo/_01_MIENG_GA_GION_01_MY_Y_SOT_BO_BAM_01_NUOC_NGOT_(VUA)_65.000VND_.png',
      price: 65.000,
      countInStock: 10,
      category: 'Combo',
      new: false,
    },
    {
      name: 'Combo 2',
      description: '2 MIẾNG GÀ GIÒN + 2 MỲ Ý SỐT BÒ BẰM + 2 NƯỚC NGỌT (VỪA) + 2 NƯỚC PEPSI',
      slug: '_02_GA_GION_02_MY_Y_SOT_BO_BAM_01_KHOAI_TAY_CHIEN_VUA_2_LY_PEPSI_VUA_',
      image: '/assets/menu/combo/_02_GA_GION_02_MY_Y_SOT_BO_BAM_01_KHOAI_TAY_CHIEN_VUA_2_LY_PEPSI_VUA_139.000VND_.png',
      price: 65.000,
      countInStock: 10,
      category: 'Combo',
      new: false,
    },
    {
      name: 'Combo 3',
      description: '2 GÀ GIÒN SỐT CAY + 01 MỲ Ý SỐT BÒ BẰM + 01 NƯỚC NGỌT (VỪA) + 1 KHOAI CHIÊN',
      slug: '_02_GA_SOT_CAY_02_MY_Y_SOT_BO_BAM_01_KHOAI_TAY_CHIEN_VUA_2_LY_PEPSI_VUA',
      image: '/assets/menu/combo/_02_GA_SOT_CAY_02_MY_Y_SOT_BO_BAM_01_KHOAI_TAY_CHIEN_VUA_2_LY_PEPSI_VUA149.000VND_.png',
      price: 149.000,
      countInStock: 10,
      category: 'Combo',
      new: false,
    },
    {
      name: 'Combo 4',
      description: '3 GÀ GIÒN SỐT CAY + 01 MỲ Ý SỐT BÒ BẰM + 2 NƯỚC NGỌT (VỪA) + 1 KHOAI CHIÊN',
      slug: '_03_GA_GION_01_MY_Y_SOT_BO_BAM_01_KHOAI_TAY_CHIEN_VUA_2_LY_PEPSI_VUA_',
      image: '/assets/menu/combo/_03_GA_GION_01_MY_Y_SOT_BO_BAM_01_KHOAI_TAY_CHIEN_VUA_2_LY_PEPSI_VUA_139.000VND_.png',
      price: 139.000,
      countInStock: 10,
      category: 'Combo',
      new: false,
    },
    {
      name: 'Combo 5',
      description: '3 GÀ GIÒN SỐT CAY + 2 MỲ Ý SỐT BÒ BẰM + 3 PEPSI (VỪA) + 1 KHOAI BBQ',
      slug: '_03_GA_GION_02_MY_Y_SOT_BO_BAM_01_KHOAI_BBQ_VUA_03_LY_PEPSI_VUA_',
      image: '/assets/menu/combo/_03_GA_GION_02_MY_Y_SOT_BO_BAM_01_KHOAI_BBQ_VUA_03_LY_PEPSI_VUA_179.000VND_.png',
      price: 179.000,
      countInStock: 10,
      category: 'Combo',
      new: true,
    },
    // dessert
    {
      name: 'CA CAO SỮA ĐÁ',
      description: 'CA CAO SỮA ĐÁ MÁT LẠNH',
      slug: '_CA_CAO_SUA_DA_LON_',
      image: '/assets/menu/dessert/_CA_CAO_SUA_DA_LON_23.000VND_.png',
      price: 23.000,
      countInStock: 10,
      category: 'Tráng Miệng',
      new: false,
    },
    {
      name: 'CA CAO SỮA ĐÁ NHỎ',
      description: 'CA CAO SỮA ĐÁ MÁT LẠNH NHỎ',
      slug: '_CA_CAO_SUA_DA_NHO',
      image: '/assets/menu/dessert/_CA_CAO_SUA_DA_NHO_18.000VND_.png',
      price: 18.000,
      countInStock: 10,
      category: 'Tráng Miệng',
      new: false,
    },
    {
      name: 'BÁNH PIE NHÂN KHOAI MÔN',
      description: 'BÁNH PIE NHÂN KHOAI MÔN NHỎ',
      slug: '_BANH_PIE_NHAN_KHOAI_MON_',
      image: '/assets/menu/dessert/_BANH_PIE_NHAN_KHOAI_MON_18.000VND_.png',
      price: 18.000,
      countInStock: 10,
      category: 'Tráng Miệng',
      new: false,
    },
    {
      name: 'BÁNH PIE NHÂN XOÀI ĐÀO',
      description: 'BÁNH PIE NHÂN XOÀI ĐÀO NHỎ',
      slug: '_BANH_PIE_NHAN_XOAI_DAO_',
      image: '/assets/menu/dessert/_BANH_PIE_NHAN_XOAI_DAO_18.000VND_.png',
      price: 18.000,
      countInStock: 10,
      category: 'Tráng Miệng',
      new: true,
    },
    {
      name: 'KEM CHOCOLATE CUP',
      description: 'KEM CHOCOLATE CUP NHỎ',
      slug: '_KEM_CHOCOLATE_CUP_',
      image: '/assets/menu/dessert/_KEM_CHOCOLATE_CUP_7.000VND_.png',
      price: 7.000,
      countInStock: 10,
      category: 'Tráng Miệng',
      new: false,
    },
    {
      name: 'KEM SUA_TUOI CUP',
      description: 'KEM SỮA TƯƠI CUP NHỎ',
      slug: '_KEM_SUA_TUOI_CUP_',
      image: '/assets/menu/dessert/_KEM_SUA_TUOI_CUP_5.000VND_.png',
      price: 5.000,
      countInStock: 10,
      category: 'Tráng Miệng',
      new: false,
    },
    {
      name: 'KEM SUNDAES CHOCOLATE',
      description: 'KEM SỮA SUNDAES CHOCOLATE NHỎ',
      slug: '_KEM_SUNDAES_CHOCOLATE_',
      image: '/assets/menu/dessert/_KEM_SUNDAES_CHOCOLATE_15.000VND_.png',
      price: 15.000,
      countInStock: 10,
      category: 'Tráng Miệng',
      new: true,
    },
    {
      name: 'KEM SUNDAES DÂU',
      description: 'KEM SỮA SUNDAES DÂU NHỎ',
      slug: '_KEM_SUNDAES_DAU_',
      image: '/assets/menu/dessert/_KEM_SUNDAES_DAU_15.000VND_.png',
      price: 15.000,
      countInStock: 10,
      category: 'Tráng Miệng',
      new: true,
    },
    {
      name: 'TRÀ ĐÀO LY LỚN',
      description: 'TRÀ ĐÀO LY LỚN',
      slug: '_TRA_DAO_LY_LON_',
      image: '/assets/menu/dessert/_TRA_DAO_LY_LON_20.000VND_.png',
      price: 20.000,
      countInStock: 10,
      category: 'Tráng Miệng',
      new: false,
    },
    // funny crunchy chick
    {
      name: '1 GÀ GIÒN KHOAI NƯỚC',
      description: '1 GÀ GIÒN KHOAI NƯỚC',
      slug: '1_GA_GION_KHOAI_NC_',
      image: '/assets/menu/funny_cruchy_chick/1_GA_GION_KHOAI_NC_50.000VND.png',
      price: 50.000,
      countInStock: 10,
      category: 'Gà Giòn',
      new: false,
    },
    {
      name: '2 GÀ GIÒN KHOAI NƯỚC',
      description: '2 GÀ GIÒN KHOAI NƯỚC',
      slug: '2_GA_GION_KHOAI_NC_',
      image: '/assets/menu/funny_cruchy_chick/2_GA_GION_KHOAI_NC_80.000VND.png',
      price: 80.000,
      countInStock: 10,
      category: 'Gà Giòn',
      new: false,
    },
    {
      name: '6 GÀ GIÒN',
      description: '6 GÀ GIÒN',
      slug: '6_GA_GION_',
      image: '/assets/menu/funny_cruchy_chick/6_GA_GION_174.000VND.png',
      price: 174.000,
      countInStock: 10,
      category: 'Gà Giòn',
      new: false,
    },
    {
      name: 'CƠM GÀ',
      description: 'CƠM GÀ',
      slug: 'COM_GA_',
      image: '/assets/menu/funny_cruchy_chick/COM_GA_40.000VND.png',
      price: 40.000,
      countInStock: 10,
      category: 'Gà Giòn',
      new: false,
    },
    {
      name: 'CƠM GÀ + NƯỚC',
      description: 'CƠM GÀ + NƯỚC',
      slug: 'COM_GA_NC_',
      image: '/assets/menu/funny_cruchy_chick/COM_GA_NC_45.000VND.png',
      price: 45.000,
      countInStock: 10,
      category: 'Gà Giòn',
      new: false,
    },
    {
      name: 'CƠM GÀ + SÚP + NƯỚC',
      description: 'CƠM GÀ + SÚP + NƯỚC',
      slug: 'COM_GA_SUP_NC_',
      image: '/assets/menu/funny_cruchy_chick/COM_GA_SUP_NC_50.000VND.png',
      price: 50.000,
      countInStock: 10,
      category: 'Gà Giòn',
      new: false,
    },
    // spaghetti
    {
      name: '1 GÀ GIÒN + 1 MỲ Ý SỐT BÒ BẰM + 1 NƯỚC NGỌT',
      description: '1 GÀ GIÒN + 1 MỲ Ý SỐT BÒ BẰM + 1 NƯỚC NGỌT',
      slug: '_01_MIENG_GA_GION_01_MY_Y_SOT_BO_BAM_01_NUOC_NGOT_(VUA)_',
      image: '/assets/menu/spaghetti/_01_MIENG_GA_GION_01_MY_Y_SOT_BO_BAM_01_NUOC_NGOT_(VUA)_65.000VND_.png',
      price: 65.000,
      countInStock: 10,
      category: 'Spaghetti',
      new: false,
    },
    {
      name: 'MỲ Ý SỐT BÒ BẰM',
      description: 'MỲ Ý SỐT BÒ BẰM',
      slug: '_MI_Y_SOT_BO_BAM_',
      image: '/assets/menu/spaghetti/_MI_Y_SOT_BO_BAM_30.000VND_.png',
      price: 30.000,
      countInStock: 10,
      category: 'Spaghetti',
      new: false,
    },
    {
      name: 'MỲ Ý SỐT BÒ BẰM LỚN + GÀ RÁN + NƯỚC NGỌT',
      description: 'MỲ Ý SỐT BÒ BẰM LỚN + GÀ RÁN + NƯỚC NGỌT',
      slug: '_MI_Y_SOT_BO_BAM_LON_1_MIENG _GA_RAN_NUOC_NGOT_',
      image: '/assets/menu/spaghetti/_MI_Y_SOT_BO_BAM_LON_1_MIENG_GA_RAN_NUOC_NGOT_75.000VND_.png',
      price: 75.000,
      countInStock: 10,
      category: 'Spaghetti',
      new: false,
    },
    {
      name: 'MỲ Ý SỐT BÒ BẮM LỚN + NƯỚC NGỌT',
      description: 'MỲ Ý SỐT BÒ BẮM LỚN + NƯỚC NGỌT',
      slug: '_MI_Y_SOT_BO_BAM_LON_NUOC_NGOT_',
      image: '/assets/menu/spaghetti/_MI_Y_SOT_BO_BAM_LON_NUOC_NGOT_45.000VND_.png',
      price: 45.000,
      countInStock: 10,
      category: 'Spaghetti',
      new: false,
    },
    // spicy chickens
    {
      name: '2 GÀ CAY',
      description: '2 GÀ CAY',
      slug: '2_GA_CAY_',
      image: '/assets/menu/spicy_chick/2_GA_CAY_65.000VND.png',
      price: 65.000,
      countInStock: 10,
      category: 'Gà Cay',
      new: false,
    },
    {
      name: '2 GÀ CAY + NƯỚC + KHOAI',
      description: '2 GÀ CAY + NƯỚC + KHOAI',
      slug: '2_GA_CAY_NC_KHOAI_',
      image: '/assets/menu/spicy_chick/2_GA_CAY_NC_KHOAI_90.000VND.png',
      price: 90.000,
      countInStock: 10,
      category: 'Gà Cay',
      new: false,
    },
    {
      name: '2 GÀ GIÒN + 1 GÀ CAY 1 MỲ Ý + 2 PEPSI + 1 KHOAI',
      description: '2 GÀ GIÒN + 1 GÀ CAY 1 MỲ Ý + 2 PEPSI + 1 KHOAI',
      slug: '2_GA_GION_1GA_CAY_1_MY_2_PEPSI_1_KHOAI_',
      image: '/assets/menu/spicy_chick/2_GA_GION_1GA_CAY_1_MY_2_PEPSI_1_KHOAI_139.000VND.png',
      price: 139.000,
      countInStock: 10,
      category: 'Gà Cay',
      new: false,
    },
    {
      name: '1 GÀ CAY',
      description: '1 GÀ CAY',
      slug: 'GA_CAY_',
      image: '/assets/menu/spicy_chick/GA_CAY_35.000VND.png',
      price: 35.000,
      countInStock: 10,
      category: 'Gà Cay',
      new: false,
    },
    {
      name: '1 CƠM GÀ CAY',
      description: '1 CƠM GÀ CAY',
      slug: 'GA_CAY_COM_',
      image: '/assets/menu/spicy_chick/GA_CAY_COM_45.000VND.png',
      price: 45.000,
      countInStock: 10,
      category: 'Gà Cay',
      new: false,
    },
    {
      name: '1 GÀ CAY CƠM + 1 NƯỚC',
      description: '1 GÀ CAY CƠM + 1 NƯỚC',
      slug: 'GA_CAY_COM_NC_',
      image: '/assets/menu/spicy_chick/GA_CAY_COM_NC_50.000VND.png',
      price: 50.000,
      countInStock: 10,
      category: 'Gà Cay',
      new: false,
    },
    {
      name: '1 GÀ CAY CƠM  + SÚP + NƯỚC',
      description: '1 GÀ CAY CƠM + SÚP + NƯỚC',
      slug: 'GA_CAY_COM_SUP_NC_',
      image: '/assets/menu/spicy_chick/GA_CAY_COM_SUP_NC_55.000VND.png',
      price: 55.000,
      countInStock: 10,
      category: 'Gà Cay',
      new: false,
    },
    // submeal
    {
      name: '3 GÀ KHÔNG XƯƠNG',
      description: '3 GÀ KHÔNG XƯƠNG',
      slug: '3_GA_KHONG_XUONG_',
      image: '/assets/menu/sub_meal/3_GA_KHONG_XUONG_30.000VND.png',
      price: 30.000,
      countInStock: 10,
      category: 'Phần Ăn Phụ',
      new: false,
    },
    {
      name: 'CÁNH GÀ SỐT TIÊU',
      description: 'CÁNH GÀ SỐT TIÊU',
      slug: 'CANH_GA_SOT_TIEU_',
      image: '/assets/menu/sub_meal/CANH_GA_SOT_TIEU_35.000VND.png',
      price: 35.000,
      countInStock: 10,
      category: 'Phần Ăn Phụ',
      new: true,
    },
    {
      name: '1 CƠM TRẮNG',
      description: '1 CƠM TRẮNG',
      slug: 'COM_',
      image: '/assets/menu/sub_meal/COM_5.000VND.png',
      price: 5.000,
      countInStock: 10,
      category: 'Phần Ăn Phụ',
      new: false,
    },
    {
      name: 'KHOAI BBQ',
      description: 'KHOAI BBQ',
      slug: 'KHOAI_BBQ_',
      image: '/assets/menu/sub_meal/KHOAI_BBQ_35.000VND.png',
      price: 35.000,
      countInStock: 10,
      category: 'Phần Ăn Phụ',
      new: true,
    },
    {
      name: 'KHOAI RONG BIỂN',
      description: 'KHOAI RONG BIỂN',
      slug: 'KHOAI_RONG_BIEN_',
      image: '/assets/menu/sub_meal/KHOAI_RONG_BIEN_25.000VND.png',
      price: 25.000,
      countInStock: 10,
      category: 'Phần Ăn Phụ',
      new: true,
    },
    {
      name: '1 SÚP BÍ ĐỎ',
      description: '1 SÚP BÍ ĐỎ',
      slug: 'SUP_BI_DO_',
      image: '/assets/menu/sub_meal/SUP_BI_DO_15.000VND.png',
      price: 15.000,
      countInStock: 10,
      category: 'Phần Ăn Phụ',
      new: false,
    },
  ]
}

export default data;
export const settingsSlideProduct = {
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  swipe: true,
  autoplay: true,
  autoplaySpeed: 5000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};

export const SimpleSlider = {
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,

}

export const HeaderSlider = [
  {
    image: '/assets/news/banner-1.jpg',
    alt: 'banner 1'
  },
  {
    image: '/assets/news/banner-2.jpg',
    alt: 'banner 2'
  },
  {
    image: '/assets/news/banner-3.jpg',
    alt: 'banner 3'
  },
]

export const subDriection = [
  { 
    name: 'Cửa Hàng',
    path: '/about',
    thumbnail: '/assets/logo/sub-1.svg'
  },
  { 
    name: 'Đặt Hàng',
    path: '/menu',
    thumbnail: '/assets/logo/sub-2.svg'
  }
] 
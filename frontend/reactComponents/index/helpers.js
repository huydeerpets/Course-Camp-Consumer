import $ from 'jquery';
import TweenMax, { Power3 } from 'gsap/TweenMax';

export const slickSliderOptions = {
  dots: true,
      speed: 350,
      slidesToShow: 2,
      slidesToScroll: 1,
      centerMode: true,
      responsive: [
    {
      breakpoint: 1554,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 870,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};

export const handleScrollSkewAnimation = () => {
  let skewedBackground = $('.skewed-background');
  $(document.body).on('touchmove', () => scrollEvent(skewedBackground));
  $(window).on("scroll", () => scrollEvent(skewedBackground));
  if (-3 + $(window).scrollTop() / 50 > 0) {
    return skewedBackground.css({transform: 'skewY(0deg)'});
  }
};

const scrollEvent = skewedBackground => {
  if (-3 + $(document).scrollTop() / 50 > 0) {
    return skewedBackground.css({transform: 'skewY(0deg)'});
  }
  skewedBackground.css({transform: `skewY(${-3 + $(document).scrollTop() / 50}deg)`});
};

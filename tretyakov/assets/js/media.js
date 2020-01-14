import Swiper from './../../node_modules/swiper/dist/js/swiper.min.js';

export default function(thisObject) {
    const swiperNextButton = document.querySelector('.swiper-button-next-media');
    const swiperPrevButton = document.querySelector('.swiper-button-prev-media');
    const firstSlide = document.querySelector('.media__slide-1');
    const secondSlide = document.querySelector('.media__slide-2');
    const thirdSlide = document.querySelector('.media__slide-3');

    if (firstSlide) {
      thisObject.mediaSwiper = new Swiper ('.swiper-media', {
        slidesPerView: 2,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        breakpoints: {
          767: {
            slidesPerView: 'auto',
            virtualTranslate: true,
          },
        },
      });

      let swipesCount = 0;

      if (window.innerWidth < 768) {
        firstSlide.classList.add('swiper-mobile-slide');
        secondSlide.classList.add('swiper-mobile-slide');
        thirdSlide.classList.add('swiper-mobile-slide');
        if (swipesCount < 1) {
          swiperNextButton.classList.remove('swiper-button-disabled');
        }
        swiperNextButton.addEventListener('click', (e) => {
          e.preventDefault();
          if (swipesCount < 1) {
            firstSlide.classList.add('move-left-slide');
            secondSlide.classList.add('set-active-slide');
            thirdSlide.classList.add('set-next-slide');
            swiperPrevButton.classList.remove('swiper-button-disabled');
            swipesCount += 1;
          } else {
            secondSlide.classList.add('move-left-second-slide');
            thirdSlide.classList.add('set-active-third-slide');
            swiperNextButton.classList.add('swiper-button-disabled');
            swipesCount += 1;
          }
        });

        swiperPrevButton.addEventListener('click', (e) => {
          e.preventDefault();
          if (swipesCount === 2) {
            thirdSlide.classList.remove('set-active-third-slide');
            secondSlide.classList.remove('move-left-second-slide');
            swiperNextButton.classList.remove('swiper-button-disabled');
            swipesCount -= 1;
          } else {
            firstSlide.classList.remove('move-left-slide');
            secondSlide.classList.remove('set-active-slide');
            thirdSlide.classList.remove('set-next-slide');
            swiperPrevButton.classList.add('swiper-button-disabled');
            swipesCount -= 1;
          }
        });
      }

      let touchStart;
      let touchCurrent;
      thisObject.mediaSwiper.slides.on('touchstart', (e) => {
        touchStart = e.targetTouches[0].pageX;
      }, true);

      thisObject.mediaSwiper.slides.on('touchend', (e) => {
        touchCurrent = e.changedTouches[0].pageX;
        const touchesDiff = touchCurrent - touchStart;
        if (touchesDiff < 0) {
          if (swipesCount < 1) {
            firstSlide.classList.add('move-left-slide');
            secondSlide.classList.add('set-active-slide');
            thirdSlide.classList.add('set-next-slide');
            swiperPrevButton.classList.remove('swiper-button-disabled');
            swipesCount += 1;
          } else {
            secondSlide.classList.add('move-left-second-slide');
            thirdSlide.classList.add('set-active-third-slide');
            swiperNextButton.classList.add('swiper-button-disabled');
            swipesCount += 1;
          }
        } else if (swipesCount === 2) {
          thirdSlide.classList.remove('set-active-third-slide');
          secondSlide.classList.remove('move-left-second-slide');
          swiperNextButton.classList.remove('swiper-button-disabled');
          swipesCount -= 1;
        } else {
          firstSlide.classList.remove('move-left-slide');
          secondSlide.classList.remove('set-active-slide');
          thirdSlide.classList.remove('set-next-slide');
          swiperPrevButton.classList.add('swiper-button-disabled');
          swipesCount -= 1;
        }
      }, true);
    }

  }

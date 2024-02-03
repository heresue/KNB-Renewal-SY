// main slide
var swiper = new Swiper(".main-swiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  autoplay: {
    delay: 3500,
  },
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// 공연정보 슬라이드
var swiper = new Swiper(".swiper-performance", {
  slidesPerView: "auto",
  spaceBetween: 20,
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});



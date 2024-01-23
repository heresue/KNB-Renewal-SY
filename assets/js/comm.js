// --------------------sub2--------------------
var swiper = new Swiper(".swiper-more-chronological-list", {
  slidesPerView: 2,
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// $(document).ready(function () {
//   const poster = $(".poster-wrap");
//   poster.slick({
//     infinite: false,
//     arrows: false,
//     vertical: true,
//     dots: true,
//     speed: 1200,
//     cssEase: "cubic-bezier(0.86, 0, 0.07, 1)",
//   });

//   // poster.mousewheel(function (e) {
//   //   e.preventDefault();
//   //   if (e.deltaY < 0) {
//   //     if (
//   //       $(this).slick("slickCurrentSlide") ===
//   //       $(this).find(".slick-slide").length - 1
//   //     ) {
//   //       return;
//   //     }

//   //     $(this).slick("slickNext");
//   //   } else {
//   //     if ($(this).slick("slickCurrentSlide") === 0) {
//   //       return;
//   //     }

//   //     $(this).slick("slickPrev");
//   //   }
//   // });
// });

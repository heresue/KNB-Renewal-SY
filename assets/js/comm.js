// --------------------sub2--------------------
var swiper = new Swiper(".swiper-more-chronological-list", {
  slidesPerView: 2,
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

gsap.registerPlugin(ScrollTrigger);
const posters = $(".poster-wrap");
const posterEl = posters.array.forEach();
const postersTl = gsap.timeline({
  scrollTrigger: {
    trigger: posters,
    // pin: true, // pin the trigger element while active
    start: "top top",
    end: "bottom center",
    scrub: 1,
  },
});

postersTl.from(posterEl, { yPercent: -100, autoAlpha: 0 });

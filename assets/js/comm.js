// --------------------sub2--------------------
// *****performance-info*****
gsap.registerPlugin(ScrollTrigger);
const posterWrap = $(".poster-wrap");
const poster = $(".poster");
const posters = gsap.utils.toArray(".poster");
const title = $(".tit-page");
// tit-page 위로 posters 올라올 수 있도록 핀 설정
const titleTl = gsap.timeline({
  scrollTrigger: {
    trigger: title,
    pin: title,
    pinSpacing: false,
    start: "bottom bottom",
    end: "+=300%",
    scrub: 0.5,
    markers: true,
  },
});
// poster-wrap 핀 설정
const sectionTl = gsap.timeline({
  scrollTrigger: {
    trigger: posterWrap,
    pin: posterWrap,
    start: "top top",
    end: "+=600%",
    scrub: 0.5,
    markers: true,
  },
});

// 각각의 poster에 대한 애니메이션
posters.forEach(function (elem, i) {
  const tlDelay = i;
  const contentTl = gsap.timeline();

  // poster에 인덱스를 부여해 위로 겹칠 수 있도록 설정
  gsap.set(poster, {
    zIndex: (i, target, targets) => i,
  });

  // 각각의 poster에 애니메이션 설정
  contentTl
    .to(elem, { autoAlpha: 1 }, tlDelay + 0.5)
    .from(elem, {
      yPercent: 100,
      duration: 2,
      ease: "power2.out",
    })
    .to(elem, { y: 0 });
  // 각 포스터에 대한 애니메이션을 순차적으로 실행되도록 설정
  sectionTl.add(contentTl, tlDelay);
});

// *****more-chronological-list*****
var swiper = new Swiper(".swiper-more-chronological-list", {
  slidesPerView: 2,
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

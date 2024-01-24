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
const posterWrap = $(".poster-wrap");
const poster = $(".poster");
const posters = gsap.utils.toArray(".poster");
const titleTl = gsap.timeline({
  scrollTrigger: {
    trigger: $(".tit-page"),
    pin: $(".tit-page"),
    pinSpacing: false,
    start: "bottom bottom",
    end: "+=300%",
    scrub: 0.5,
    markers: true,
  },
});
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
  var contentTl = gsap.timeline();

  gsap.set(poster, {
    zIndex: (i, target, targets) => i,
  });

  contentTl
    .to(elem, { autoAlpha: 1 }, tlDelay + 0.5)
    .from(elem, {
      yPercent: 100,
      duration: 2,
      ease: "power2.out",
    })
    .to(elem, { y: 0 });

  sectionTl.add(contentTl, tlDelay);

  // 각 content 요소에 ScrollTrigger 생성
  // ScrollTrigger.create({
  //   trigger: elem,
  //   start: "center top", // 트리거가 시작되는 위치
  //   // end: "+=600%", // 트리거가 끝나는 위치
  //   pin: elem,
  //   // end: "bottom 40%",
  //   scrub: true,
  //   toggleActions: "play none none reverse", // 트리거 동작 설정
  //   onEnter: function () {
  //     contentTl.play(); // 트리거에 진입하면 애니메이션 재생
  //   },
  //   // onLeaveBack: function () {
  //   //   contentTl.reverse(); // 트리거를 떠날 때 애니메이션 되돌리기
  //   // },
  //   markers: true, // 디버깅을 위한 마커 표시
  // });
});

// const posterWrapTl = gsap.timeline({
//   scrollTrigger: {
//     trigger: $(".performance-info .inner"),
//     pin: true, // pin the trigger element while active
//     start: "top top",
//     scrub: 1,
//     // end: "center center",
//     // end: "+=600%",
//     // pinSpacing: true,
//     // markers: true,
//   },
// });
// poster.each((index, poster) => {
//   const posterTl = gsap.timeline({
//     scrollTrigger: {
//       trigger: $(".performance-info .inner"),
//       pin: true, // pin the trigger element while active
//       start: "center center",
//       // end: "center center",
//       end: "+=600%",
//       scrub: 1,
//       // pin: true,
//       // pinSpacing: true,
//       markers: true,
//     },
//   });

//   posterTl.to(poster, { duration: 0.5, y: "100%", delay: 0.5 * index });
// });
// posterTl
//   .to($(".poster-1"), { duration: 0.5, y: "100%" })
//   .to($(".poster-2"), { duration: 0.5, delay: 0.5, y: "100%" })
//   .to($(".poster-3"), { duration: 0.5, delay: 0.5, y: "100%" })
//   .to($(".poster-4"), { duration: 0.5, delay: 0.5, y: "100%" })
//   .to($(".poster-5"), { duration: 0.5, delay: 0.5, y: "100%" })
//   .to($(".poster-6"), { duration: 0.5, delay: 0.5, y: "100%" });

// postersTl.from(posters, {
//   duration: 0.6,
//   yPercent: -100,
//   autoAlpha: 0,
// });

// 각각의 content에 대한 애니메이션
// posters.forEach((poster, index) => {
//   const tlDelay = index;
//   // const overlap = "200px"; // Adjust the overlap value based on your layout
//   // const staggerOffset = 0.2; // Adjust the stagger offset based on your desired timing
//   const posterTl = gsap.timeline({
//     scrollTrigger: {
//       trigger: poster,
//       // start: "top bottom",
//       start: "top center",
//       end: "center center",
//       scrub: 1,
//       // pin: true,
//       pinSpacing: true,
//       // snap: 1,
//       markers: true,
//     },
//   });
//   gsap.fromTo(
//     poster,
//     {
//       // y: overlap * index,
//       y: -100,
//       opacity: 0,
//       zIndex: -index,
//     },
//     {
//       duration: 0.6,
//       // y: 100,
//       // y: "+=" + overlap * index,
//       y: 0,
//       opacity: 1,
//       ease: "power2.out",
//     }
//   );
//   posterWrapTl.add(posterTl, tlDelay); // posterWrapTl에 각 포스터의 타임라인을 추가
// });

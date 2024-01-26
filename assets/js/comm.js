// --------------------header--------------------
$(function () {
  // const dep1Box = $(".dep-1-box");
  const dep1El = $("#header .dep-1-li");
  const dep2El = $(".dep-2-el");
  const dep2Box = $(".dep-2-box");

  dep1El.on("mouseenter", function () {
    dep1El.removeClass("active");
    $(this).addClass("active");
  });
  dep2Box.on("mouseleave", function () {
    dep1El.removeClass("active");
  });
});
// --------------------sub1, sub2 sidebar--------------------
const sidebarEls = $(".side-bar .side-bar-li").toArray();
const sidebarEl = $(".side-bar .side-bar-li");
sidebarEl.on("click", function () {
  sidebarEls.forEach((el) => $(el).removeClass("active"));
  $(this).addClass("active");
});
// --------------------sub2--------------------
// *****performance-info*****
gsap.registerPlugin(ScrollTrigger);
const txtWrap = $(".performance-info .txt-wrap");
const behindTit = $(".behind-tit");
gsap
  .timeline({
    scrollTrigger: {
      trigger: txtWrap,
      start: "top 80%",
      end: "center center",
      scrub: 0.5,
    },
  })
  .fromTo(txtWrap, { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5 })
  .fromTo(
    behindTit,
    { x: 100, opacity: 0 },
    { x: 0, opacity: 1, duration: 0.6, delay: 0.5 }
  );

const posterWrap = $(".poster-wrap");
const poster = $(".poster");
const posters = gsap.utils.toArray(".poster");
const title = $(".tit-page");
// tit-page 위로 posters 올라올 수 있도록 핀 설정
const titleTl = gsap.timeline({
  scrollTrigger: {
    trigger: title,
    // pin: title,
    pinSpacing: false,
    start: "bottom bottom",
    // end: "+=30%",
    scrub: 0.5,
    // markers: true,
  },
});
// poster-wrap 핀 설정
const sectionTl = gsap.timeline({
  scrollTrigger: {
    trigger: posterWrap,
    pin: posterWrap,
    start: "top top",
    end: "+=400%",
    scrub: 0.5,
    markers: true,
  },
});
// 각각의 poster에 대한 애니메이션
posters.forEach(function (elem, i) {
  const tlDelay = i * 1.5;
  const contentTl = gsap.timeline();
  const posterTxt = gsap.utils.toArray(".poster .txt-wrap");
  const posterArr = gsap.utils.toArray(".poster .go-to-link");
  // poster에 인덱스를 부여해 위로 겹칠 수 있도록 설정
  gsap.set(poster, {
    zIndex: (i, target, targets) => i,
  });

  // 각각의 poster에 애니메이션 설정
  contentTl
    .to(elem, { autoAlpha: 1 }, tlDelay)
    .to([posterTxt[i], posterArr[i]], { autoAlpha: 0, y: 100 }, tlDelay)
    // .to(elem, { autoAlpha: 1 })
    .from(elem, {
      yPercent: 100,
      duration: 2,
      ease: "power2.out",
    })
    .to(
      [posterTxt[i], posterArr[i]],
      { autoAlpha: 1, y: 0, duration: 0.8, ease: "power2.out" },
      tlDelay + 2.5
    )
    .to(elem, { yPercent: 0, duration: 2 });

  // 각 포스터에 대한 애니메이션을 순차적으로 실행되도록 설정
  sectionTl.add(contentTl, tlDelay);
});

// *****before-monthly-schedule*****
const beforeSchedule = $(".before-monthly-schedule");
// const beforeScheduleBf = $(".before-monthly-schedule::before");
gsap.set(beforeSchedule, {
  // xPercent: -100,
  autoAlpha: 0,
});
gsap
  .timeline({
    scrollTrigger: {
      trigger: beforeSchedule,
      start: "top center",
      end: "center center",
      scrub: 0.5,
    },
  })
  .to(beforeSchedule, {
    // xPercent: 0,
    autoAlpha: 1,
  });

const txtElements = gsap.utils.toArray(".highlight-tit");
txtElements.forEach((text) => {
  gsap.to(text, {
    backgroundSize: "100%",
    ease: "none",
    scrollTrigger: {
      trigger: text,
      start: "top bottom",
      end: "top 60%",
      scrub: true,
      // markers: true,
    },
  });
});

// *****monthly-schedule*****
const monthlySchedule = $(".monthly-schedule");
const calendar = $(".calendar");
const ms_txtWrap = $(".monthly-schedule .txt-wrap");
const ms_behindTit = $(".monthly-schedule .behind-tit");
gsap.set(calendar, {
  y: 100,
  autoAlpha: 0,
});
gsap
  .timeline({
    scrollTrigger: {
      trigger: monthlySchedule,
      start: "top bottom",
      end: "center center",
      scrub: 0.5,
    },
  })
  .fromTo(
    ms_txtWrap,
    { y: 100, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.8 }
  )
  .fromTo(
    behindTit,
    { x: 100, opacity: 0 },
    { x: 0, opacity: 1, duration: 0.6 }
  )
  .to(calendar, {
    y: 0,
    autoAlpha: 1,
  });

// *****chronological-list*****
const chronologicalList = $(".chronological-list");
const scrollWrap1 = $(".scroll-1");
const scrollWrap2 = $(".scroll-2");
const scrollCont1 = $(".scroll-1 .scroll-contents-box");
const scrollCont2 = $(".scroll-2 .scroll-contents-box");
const cl_txtWrap = $(".chronological-list .txt-wrap");
const cl_behindTit = $(".chronological-list .behind-tit");
gsap.set(scrollWrap1, {
  y: 100,
  autoAlpha: 0,
});
gsap
  .timeline({
    scrollTrigger: {
      trigger: chronologicalList,
      start: "top 80%",
      end: "center center",
      scrub: 0.5,
    },
  })
  .from(cl_behindTit, {
    x: 100,
    opacity: 0,
  })
  .fromTo(
    cl_txtWrap,
    { y: 100, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.5 }
  )
  .to(cl_behindTit, { x: 0, opacity: 1, duration: 0.6, delay: 0.5 })
  .to(scrollWrap1, {
    y: 0,
    autoAlpha: 1,
    duration: 1,
    delay: 1,
  });

const scrollWrap1Tl = gsap.timeline({
  scrollTrigger: {
    trigger: scrollWrap1,
    pin: scrollWrap1,
    // pinSpacing: false,
    start: "top top",
    end: "+=120%",
    scrub: 0.5,
    markers: true,
  },
});
scrollWrap1Tl.fromTo(
  scrollCont1,
  {
    yPercent: 50,
    opacity: 1,
  },
  {
    yPercent: -80,
    opacity: 1,
  }
);

const scrollWrap2Tl = gsap.timeline({
  scrollTrigger: {
    trigger: scrollWrap2,
    pin: scrollWrap2,
    // pinSpacing: false,
    start: "top top",
    end: "+=120%",
    scrub: 0.5,
    markers: true,
  },
});
scrollWrap2Tl.fromTo(
  scrollCont2,
  {
    yPercent: 50,
    opacity: 1,
  },
  {
    yPercent: -80,
    opacity: 1,
  }
);
// chronologicalListTl.add(scrollWrap1Tl, "-=0.2");
// chronologicalListTl.add(scrollWrap2Tl, "-=0.2");

// *****more-chronological-list*****
var swiper = new Swiper(".swiper-more-chronological-list", {
  slidesPerView: 2,
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

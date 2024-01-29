// --------------------header--------------------
$(function () {
  const $window = $(window);
  const $header = $("#header");
  // *****depth*****
  const dep1El = $("#header .dep-1-li");
  const dep2Box = $(".dep-2-box");

  dep1El.on("mouseenter", function () {
    dep1El.removeClass("active");
    $(this).addClass("active");
  });
  dep2Box.on("mouseleave", function () {
    dep1El.removeClass("active");
  });

  // *****select-lang*****
  const langIcon = $(".language .icon-inner");
  langIcon.on("mouseenter", function () {
    $(this).addClass("active");
  });
  langIcon.on("mouseleave", function () {
    $(this).removeClass("active");
  });

  // *****m-menu*****
  const menu = $(".m-menu");
  const mNav = $(".m-nav");
  menu.on("click", function () {
    menu.toggleClass("active");
    mNav.toggleClass("active");

    // 현재 $header의 배경색 확인
    const currentBackgroundColor = $header.css("background-color");
    $header.css({
      backgroundColor:
        currentBackgroundColor === "rgba(0, 0, 0, 0)"
          ? "black"
          : "rgba(0, 0, 0, 0)",
    });
  });

  // *****m-nav*****
  const mdepEl = $(".dep-1-el");
  mdepEl.on("click", function () {
    $(this).parent().toggleClass("active");
  });

  // scroll될 때 애니메이션

  gsap.registerPlugin(ScrollTrigger);

  // mNav에 active 클래스가 없을 때만 동작
  $window.on("scroll", _.throttle(hdScroll, 300));

  function hdScroll() {
    if (!mNav.hasClass("active")) {
      console.log("mNav does not have active class"); // 디버깅용 메시지
      if ($window.scrollTop() >= ($window.width() >= 1280 ? 100 : 60)) {
        gsap.to($header, {
          y: $window.width() >= 1280 ? -100 : -60,
          duration: 0.3,
        });
      } else {
        gsap.to($header, {
          y: 0,
          duration: 0.3,
        });
      }
    }
  }
});

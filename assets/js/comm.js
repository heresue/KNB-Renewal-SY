// sub1-----------------------------------------------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", function () {
  const sectionWork = document.querySelector(".sec-work");
  const txtGoto = document.querySelector(".txt-goto");

  // txt-goto를 숨김
  txtGoto.style.opacity = "0";
  txtGoto.style.visibility = "hidden";

  document.addEventListener("scroll", function () {
    const scrollPosition = window.scrollY;
    const { offsetTop: sectionWorkTop, offsetHeight: sectionWorkHeight } =
      sectionWork;
    const windowHeight = window.innerHeight;

    // txt-goto가 sec-work에 도달하면 나타나게
    if (
      scrollPosition >= sectionWorkTop &&
      scrollPosition <= sectionWorkTop + sectionWorkHeight - windowHeight
    ) {
      txtGoto.style.opacity = "1";
      txtGoto.style.visibility = "visible";
      // txt-goto 화면 중앙에 위치
      txtGoto.style.top = `${(windowHeight - txtGoto.offsetHeight) / 2}px`;
    } else {
      // 스크롤 벗어나면 txt-goto 다시 숨김
      txtGoto.style.opacity = "0";
      txtGoto.style.visibility = "hidden";
    }
  });

  AOS.init({
    duration: 1000,
  });
});


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

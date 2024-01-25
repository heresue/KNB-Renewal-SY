// sub1-----------------------------------------------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", function() {
  const sectionWork = document.querySelector(".sec-work");
  const txtGoto = document.querySelector(".txt-goto");

  // txt-goto를 숨김
  txtGoto.style.opacity = "0";
  txtGoto.style.visibility = "hidden";

  document.addEventListener("scroll", function() {
      const scrollPosition = window.scrollY;
      const { offsetTop: sectionWorkTop, offsetHeight: sectionWorkHeight } = sectionWork;
      const windowHeight = window.innerHeight;

      // txt-goto가 sec-work에 도달하면 나타나게
      if (scrollPosition >= sectionWorkTop && scrollPosition <= sectionWorkTop + sectionWorkHeight - windowHeight) {
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

js;
new Swiper(".swiper-container", {
  direction: "vertical", // 수직 슬라이드
  autoplay: true, // 자동 재생 여부
  loop: true, // 반복 재생 여부
});

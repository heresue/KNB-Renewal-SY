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



// banner ver2
$(window).on("load", function () {
  setFlowBanner();
});

function setFlowBanner() {
  const $wrap = $(".flow_banner");
  const $list = $(".flow_banner .list");
  let wrapWidth = "100px"; //$wrap의 가로 크기
  let listWidth = "100px"; //$list의 가로 크기
  const speed = 92; //1초에 몇픽셀 이동하는지 설정

  //리스트 복제
  let $clone = $list.clone();
  $wrap.append($clone);
  flowBannerAct();

  // //반응형 :: 디바이스가 변경 될 때마다 배너 롤링 초기화
  // let oldWChk =
  //   window.innerWidth > 1279 ? "pc" : window.innerWidth > 767 ? "ta" : "mo";
  // $(window).on("resize", function () {
  //   let newWChk =
  //     window.innerWidth > 1279 ? "pc" : window.innerWidth > 767 ? "ta" : "mo";
  //   if (newWChk != oldWChk) {
  //     oldWChk = newWChk;
  //     flowBannerAct();
  //   }
  // });

  //배너 실행 함수
  function flowBannerAct() {
    //배너 롤링 초기화
    if (wrapWidth != "100px") {
      $wrap.find(".list").css({
        animation: "none",
      });
      $wrap.find(".list").slice(2).remove();
    }
    wrapWidth = $wrap.width();
    listWidth = $list.width();

    //무한 반복을 위해 리스트를 복제 후 배너에 추가
    if (listWidth < wrapWidth) {
      const listCount = Math.ceil((wrapWidth * 2) / listWidth);
      for (let i = 2; i < listCount; i++) {
        $clone = $clone.clone();
        $wrap.append($clone);
      }
    }
    $wrap.find(".list").css({
      animation: `${listWidth / speed}s linear infinite flowRolling`,
    });
  }

  // 마우스가 요소 위로 진입했을 때 일시정지
  $wrap.on("mouseenter", function () {
    $wrap.find(".list").css("animation-play-state", "paused");
  });

  // 마우스가 요소에서 빠져나갈 때 재생
  $wrap.on("mouseleave", function () {
    $wrap.find(".list").css("animation-play-state", "running");
  });
}

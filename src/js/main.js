// import $ from "jquery";

const btnJoin = document.getElementById("btnJoin");
const btnClose = document.getElementById("btnClose");
const btnRemit = document.getElementById("btnRemit");
const layer1 = document.getElementById("layer01");
const layer2 = document.getElementById("layer02");
const updateLink = document.getElementById("updateLink");
const spark = document.getElementById("spark");
const snsShare = document.getElementById("snsShare");
const wrapInner = document.getElementById("WrapInner");
const coinWrap1 = document.getElementById("CoinWrap-01");
const coinWrap2 = document.getElementById("CoinWrap-02");
const coinBg1 = document.getElementById("CoinBg-01");
const coinBg2 = document.getElementById("CoinBg-02");
const coinBg3 = document.getElementById("CoinBg-03");
const topBar = document.getElementById("topBar").clientHeight;
const bgFixed = document.getElementById("bgFixed");

setTimeout(() => {
  coinWrap1.classList.add("active");
  coinWrap2.classList.add("active");
}, 1000);

function parallaxScroll() {
  let scrolled = window.scrollY;

  coinBg1.style.top = -(scrolled * 0.25) + "px";
  coinBg2.style.top = -(scrolled * 0.4) + "px";
  coinBg3.style.top = -(scrolled * 0.75) + "px";
}

// 스파크 에니메이션
setTimeout(() => {
  spark.classList.add("active");
}, 1500);

// SNS 공유하기 스크롤 이벤트
function getCurrentScroll() {
  return window.scrollY;
}

var scrollBody = false;

document.onscroll = () => {
  parallaxScroll();

  const currentScroll = getCurrentScroll();
  if (currentScroll > 300 && currentScroll < 400) {
    snsShare.classList.add("active", "animate");
  } else {
    snsShare.classList.remove("animate");
  }

  console.log(`current: ${currentScroll}, scrollY: ${window.scrollY}`);
  if (currentScroll > topBar) {
    // layer1.classList.remove("bg-attach-not");
    layer1.classList.add("bg-attach");
    bgFixed.style.transform = `translateY(-${topBar}px)`;
    console.log("sdsfddsf");
    scrollBody = true;
  } else if (currentScroll < topBar) {
    // layer1.classList.add("bg-attach-not");
    layer1.classList.remove("bg-attach");
    bgFixed.style.transform = "translateY(0)";
  } else {
    scrollBody = false;
  }
};

// 참여하기 버튼 이벤트
btnJoin.addEventListener("click", handleCloseDoor);
function handleCloseDoor() {
  layer1.classList.add("off");
  layer2.classList.add("active");
}

// 레이어2 닫기 버튼 이벤트
btnClose.addEventListener("click", handleOpenDoor);
function handleOpenDoor() {
  layer1.classList.remove("off");
  layer2.classList.add("close");

  setTimeout(() => {
    layer2.classList.remove("active", "close");
  }, 500);
}

// 디바이스 체크 별 카톡 업데이트 주소 변경
const userAgent = window.navigator.userAgent;
let AppleAgent =
  userAgent.indexOf("Mac") > -1 ||
  userAgent.indexOf("iPhone") > -1 ||
  userAgent.indexOf("iPad") > -1;
let AndroidAgent = userAgent.indexOf("Android") > -1;

if (!AppleAgent && !AndroidAgent) {
  AppleAgent = true;
  AndroidAgent = true;
}

if (AndroidAgent) {
  updateLink.setAttribute(
    "href",
    "https://play.google.com/store/apps/details?id=com.kakao.talk&hl=ko"
  );
} else if (AppleAgent) {
  updateLink.setAttribute(
    "href",
    "https://apps.apple.com/kr/app/%EC%B9%B4%EC%B9%B4%EC%98%A4%ED%86%A1-kakaotalk/id362057947"
  );
}

// var scrollTop;
// var target = $('.sns-share');
// var targetTop = $('.sns-share').offset().top;

// $(window).on('scroll', function() {
// 	scrollTop = $(this).scrollTop();
// 	var viewGuide = scrollTop + $(window).height() / 2;

// 	if (viewGuide == targetTop) {
// 		target.find('.share-box').addClass('active');
// 	} else {
// 		target.find('.share-box').removeClass('active');
// 	}
// });

// $('.btn-request').on('click', function() {
// 	$('.door').addClass;
// });

// $('.btn-close').on('click', function() {
// 	$('.layer-01').animate({
// 		opacity: 1,
// 	});

// 	$('.door-top').animate({
// 		top: '-50%',
// 	});

// 	$('.door-bottom').animate({
// 		bottom: '-50%',
// 	});
// });

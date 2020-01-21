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
const bgFixed = document.getElementById("bgFixed");

// 리사이징
let lastWidth = window.innerWidth;
window.onresize = () => {
  if (window.innerWidth != lastWidth) {
    location.reload();
  }
};

setTimeout(() => {
  coinWrap1.classList.add("active");
  coinWrap2.classList.add("active");
}, 1000);

function parallaxScroll() {
  let scrolled = window.scrollY;

  coinBg1.style.top = -(scrolled * 0.25) + "px";
  coinBg2.style.top = -(scrolled * 0.3) + "px";
  coinBg3.style.top = -(scrolled * 0.4) + "px";
}

// 스파크 에니메이션
setTimeout(() => {
  spark.classList.add("active");
}, 1500);

var scrollBody = false;

window.onscroll = () => {
  parallaxScroll();

  let currentScroll = window.scrollY;
  let topBar = document.getElementById("topBar").clientHeight;

  let snsoffset = snsShare.offsetTop;
  let currentsnsoffset = snsoffset - window.scrollY;
  let half = window.innerHeight / 2;
  let starthalf = half + 100;
  let endhalf = half - 100;

  // sns 공유하기
  if (currentsnsoffset > endhalf && currentsnsoffset < starthalf) {
    snsShare.classList.add("active", "animate");
  } else {
    snsShare.classList.remove("animate");
  }

  // 배경
  if (currentScroll > topBar) {
    // layer1.classList.remove("bg-attach-not");
    layer1.classList.add("bg-attach");
    bgFixed.style.transform = `translateY(-${topBar}px)`;
    scrollBody = true;
  } else if (currentScroll < topBar && scrollBody) {
    // layer1.classList.add("bg-attach-not");
    layer1.classList.remove("bg-attach");
    bgFixed.style.transform = "translateY(0)";
    scrollBody = false;
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
    "https://itunes.apple.com/kr/app/id362057947"
  );
}

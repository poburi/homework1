(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";var btnJoin=document.getElementById("btnJoin"),btnClose=document.getElementById("btnClose"),btnRemit=document.getElementById("btnRemit"),layer1=document.getElementById("layer01"),layer2=document.getElementById("layer02"),updateLink=document.getElementById("updateLink"),spark=document.getElementById("spark"),snsShare=document.getElementById("snsShare"),wrapInner=document.getElementById("WrapInner"),coinWrap1=document.getElementById("CoinWrap-01"),coinWrap2=document.getElementById("CoinWrap-02"),coinBg1=document.getElementById("CoinBg-01"),coinBg2=document.getElementById("CoinBg-02"),coinBg3=document.getElementById("CoinBg-03"),topBar=document.getElementById("topBar").clientHeight,bgFixed=document.getElementById("bgFixed"),lastWidth=window.innerWidth;function parallaxScroll(){var e=window.scrollY;coinBg1.style.top=-.25*e+"px",coinBg2.style.top=-.4*e+"px",coinBg3.style.top=-.75*e+"px"}window.onresize=function(){window.innerWidth!=lastWidth&&location.reload()},setTimeout(function(){coinWrap1.classList.add("active"),coinWrap2.classList.add("active")},1e3),setTimeout(function(){spark.classList.add("active")},1500);var scrollBody=!1;function handleCloseDoor(){layer1.classList.add("off"),layer2.classList.add("active")}function handleOpenDoor(){layer1.classList.remove("off"),layer2.classList.add("close"),setTimeout(function(){layer2.classList.remove("active","close")},500)}window.onscroll=function(){parallaxScroll();var e=window.scrollY;e>300&&e<400?snsShare.classList.add("active","animate"):snsShare.classList.remove("animate"),e>topBar?(layer1.classList.add("bg-attach"),bgFixed.style.transform="translateY(-".concat(topBar,"px)"),scrollBody=!0):e<topBar&&scrollBody?(layer1.classList.remove("bg-attach"),bgFixed.style.transform="translateY(0)",scrollBody=!1):scrollBody=!1,console.log("".concat(e,", ").concat(scrollBody,", ").concat(topBar,", ").concat(scrolled))},btnJoin.addEventListener("click",handleCloseDoor),btnClose.addEventListener("click",handleOpenDoor);var userAgent=window.navigator.userAgent,AppleAgent=userAgent.indexOf("Mac")>-1||userAgent.indexOf("iPhone")>-1||userAgent.indexOf("iPad")>-1,AndroidAgent=userAgent.indexOf("Android")>-1;AppleAgent||AndroidAgent||(AppleAgent=!0,AndroidAgent=!0),AndroidAgent?updateLink.setAttribute("href","https://play.google.com/store/apps/details?id=com.kakao.talk&hl=ko"):AppleAgent&&updateLink.setAttribute("href","https://itunes.apple.com/kr/app/id362057947");

},{}]},{},[1]);

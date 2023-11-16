let navButtonDiv = document.querySelector(".mobile-nav-btn");
let navButtonOpen = document.querySelector(".menu-btn");
let navButtonClose = document.querySelector(".close-img");
let navMobile = document.getElementById("mobile-bar");
let blackNavBgMobile = document.getElementById("aside-bg");
let backdropBg = document.getElementById("bg-mobile");

console.log(navButtonClose);

navButtonOpen.addEventListener("click", openNav);
navButtonClose.addEventListener("click", removeBg);
backdropBg.addEventListener("click", removeBg);

let btnMoved = 0;
let navBtn = 0;

let priceChangeButton = document.querySelector(".btn-slide");
let circleChangeButton = document.querySelector(".btn-circle");

let navButtonDiv = document.querySelector(".mobile-nav-btn");
let navButtonOpen = document.querySelector(".menu-btn");
let navButtonClose = document.querySelector(".close-img");
let navMobile = document.getElementById("mobile-bar");
let blackNavBgMobile = document.getElementById("aside-bg");

let yearlyPrice = document.querySelectorAll(".price");
console.log(yearlyPrice);
console.log(navButtonClose);

priceChangeButton.addEventListener("click", changePrice);

navButtonDiv.addEventListener("click", openNav);
blackNavBgMobile.addEventListener("click", removeBg);

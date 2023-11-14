let btnMoved = 0;

let priceChangeButton = document.querySelector(".btn-slide");
let circleChangeButton = document.querySelector(".btn-circle");

let yearlyPrice = document.querySelectorAll(".price");
console.log(yearlyPrice);

priceChangeButton.addEventListener("click", changePrice);

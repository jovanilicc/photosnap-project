let btnMoved = 0;

let priceChangeButton = document.querySelector(".btn-slide");
let circleChangeButton = document.querySelector(".btn-circle");

let yearlyPrice = document.querySelectorAll(".price");
console.log(yearlyPrice);

priceChangeButton.addEventListener("click", changePrice);

function changePrice() {
  if (btnMoved === 0) {
    circleChangeButton.style.transform = "translateX(30px)";
    circleChangeButton.style.transition = "0.3s";
    priceChangeButton.style.backgroundColor = "black";
    circleChangeButton.style.backgroundColor = "white";
    yearlyPrice[0].textContent = "$190.00";
    yearlyPrice[1].textContent = "$390.00";
    yearlyPrice[2].textContent = "$990.00";
    btnMoved++;
  } else {
    circleChangeButton.style.transform = "translateX(0)";
    circleChangeButton.style.transition = "0.3s";
    priceChangeButton.style.backgroundColor = "#dfdfdf";
    circleChangeButton.style.backgroundColor = "black";
    yearlyPrice[0].textContent = "$19.00";
    yearlyPrice[1].textContent = "$39.00";
    yearlyPrice[2].textContent = "$99.00";
    btnMoved--;
  }
}

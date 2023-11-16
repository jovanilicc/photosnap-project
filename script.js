// function openNav() {
//   if (navBtn === 0) {
//     navButtonOpen.classList.add("close-btn");
//     navButtonClose.classList.remove("close-btn");
//     navMobile.classList.remove("close-btn");
//     backdropBg.style.display = "block";
//     navBtn++;
//   } else {
//     navButtonOpen.classList.remove("close-btn");
//     navButtonClose.classList.add("close-btn");
//     navMobile.classList.add("close-btn");
//     backdropBg.style.display = "none";
//     navBtn--;
//   }
// }

function openNav() {
  navButtonOpen.classList.add("close-btn");
  navButtonClose.classList.remove("close-btn");
  navMobile.classList.remove("close-btn");
  backdropBg.style.display = "block";
}

function removeBg() {
  backdropBg.style.display = "none";
  navButtonOpen.classList.remove("close-btn");
  navButtonClose.classList.add("close-btn");
  navMobile.classList.add("close-btn");
}

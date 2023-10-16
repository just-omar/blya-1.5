import { swiper } from "./swiper.js";

const button = document.querySelector(".btn-wrapper__hide-show");
const buttonImg = document.querySelector(".btn-wrapper__expand");
const items = Array.from(document.querySelectorAll(".grid-item"));

for (let i = 0; i < items.length; i++) {
  items[i].classList.add(`hide-desktop-items`);
  items[i].classList.add(`hide-tablet-items`);
}
console.log("script started");

button.addEventListener("click", () => {
  button.classList.toggle("content-hidden");
  if (button.classList.contains("content-hidden")) {
    for (let i = 0; i < items.length; i++) {
      items[i].classList.remove(`show-desktop-items`);
      items[i].classList.add(`hide-desktop-items`);

      items[i].classList.remove(`show-tablet-items`);
      items[i].classList.add(`hide-tablet-items`);

      buttonImg.classList.remove(`rotate`);
    }
    button.textContent = "Показать все";
  } else {
    for (let i = 0; i < items.length; i++) {
      buttonImg.classList.add(`rotate`);
      // items[i].classList.add(`green`);
      // items[i].classList.add(`red`);

      items[i].classList.remove(`hide-desktop-items`);
      items[i].classList.add(`show-desktop-items`);

      items[i].classList.remove(`hide-tablet-items`);
      items[i].classList.add(`show-tablet-items`);
    }

    button.textContent = "Скрыть";
  }
});

addEventListener("resize", debounce(onResize, 20));

function onResize() {
  const mobile = window.matchMedia("(min-width: 320px) and (max-width:767px)");
  const tablet = window.matchMedia("(min-width: 767px) and (max-width:1119px)");
  const desktop = window.matchMedia("(min-width: 1119px)");
  if (innerWidth > 700) {
    swiper.slideTo(0);
  }
  if (mobile.matches) {
    console.log("mobile");
  } else if (tablet.matches) {
    console.log("tablet");
  } else if (desktop.matches) {
    console.log("desktop");
  }
}

function debounce(func, delay) {
  let timeoutId;
  return function () {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(func, delay);
  };
}

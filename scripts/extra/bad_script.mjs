const button = document.querySelector(".hide-show");
const items = Array.from(document.querySelectorAll(".grid-item"));

function debounce(func, delay) {
  let timeoutId;
  return function () {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(func, delay);
  };
}
function getIndex() {
  const mobile = window.matchMedia("(min-width: 320px) and (max-width:767px)");
  const tablet = window.matchMedia("(min-width: 767px) and (max-width:1119px)");
  const desktop = window.matchMedia("(min-width: 1119px)");
  let i = 0;
  if (mobile.matches) {
    i = items.length;
  } else if (tablet.matches) {
    i = 6;
  } else if (desktop.matches) i = 8;
  return i;
}

function changeGrid() {
  let n = getIndex();

  for (let i = 0; i < items.length; i++) {
    if (i <= n - 1) items[i].classList.remove("hidden");
    else {
      // console.log(i, items[i]);
      items[i].classList.add("hidden");
    }
  }
  // console.log("changed");
}
changeGrid();

function handleResize() {
  if (window.innerWidth >= 768) {
    console.log(innerWidth);
    console.log("foobar");
    // swiper.slideTo(1);
  }
  // console.log(getIndex());
  changeGrid();
}

// handleResize();
addEventListener("resize", debounce(handleResize, 100));

button.addEventListener("click", () => {
  let n = getIndex();
  for (let i = n; i < items.length; i++) items[i].classList.toggle("hidden");
});

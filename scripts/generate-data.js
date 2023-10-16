import { data } from "./data.js";

const gridContainer = document.querySelector(".grid-container");

for (let i = 0; i < data.length; i++) {
  const gridItem = document.createElement("div");
  gridItem.classList.add("grid-item", "swiper-slide");
  const image = document.createElement("img");
  image.src = `images/${data[i]}.svg`;
  image.alt = `${data[i]}`;
  const link = document.createElement("a");
  link.classList.add("link");
  gridItem.appendChild(image);
  gridItem.appendChild(link);
  gridContainer.appendChild(gridItem);
}

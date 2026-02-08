function moveRandomEl(element) {
  element.style.position = "absolute";
  element.style.top = Math.floor(Math.random() * 90) + "%";
  element.style.left = Math.floor(Math.random() * 90) + "%";
}

const moveRandom = document.querySelector("#move-random");

moveRandom.addEventListener("mouseover", function (e) {
  moveRandomEl(e.target);
});

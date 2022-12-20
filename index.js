let tBtn = document.getElementById("toggle-btn");
let nav = document.getElementById("navigation");
let arrow = document.getElementById("arrow");

tBtn.addEventListener("click", function () {
  console.log("hello");
  nav.classList.add("active");
});

arrow.addEventListener("click", function () {
  nav.classList.remove("active");
});

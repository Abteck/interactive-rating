const rating_scr = document.getElementById("rating-section");
const success_scr = document.getElementById("success-screen");
const number = document.querySelector("small");
const submit = document.getElementById("button");
const container = document.getElementById("container");
const main = document.getElementById("main");
const rating = container.querySelectorAll("span");
const output = document.querySelector("small");

rating.forEach((element) => {
  element.addEventListener("click", () => {
    element.classList.toggle("active");
  });
});

submit.onclick = function () {
  rating.forEach((item) => {
    if (!item.matches(".active")) {
      return;
    }
    rating_scr.classList.remove("flex");
    rating_scr.classList.add("hidden");

    success_scr.classList.remove("hidden");
    success_scr.classList.add("flex");

    output.innerHTML = document.querySelectorAll(".active").length;
  });
};

document.addEventListener("click", (e) => {
  if (!main.contains(e.target)) {
    rating_scr.classList.remove("hidden");
    rating_scr.classList.add("flex");

    success_scr.classList.remove("flex");
    success_scr.classList.add("hidden");
    location.reload();
  }
});

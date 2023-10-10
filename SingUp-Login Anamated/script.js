let signup = document.querySelector("#signup");
let login = document.querySelector("#login");
let page = document.querySelectorAll(".page");

page[0].addEventListener("click", (dets) => {
  if (dets.target == signup) {
    page[0].classList.add("animate1");
    page[1].classList.add("animate2");
    page[0].classList.remove("animate2");
    page[1].classList.remove("animate1");
  }
});
page[1].addEventListener("click", (dets) => {
  if (dets.target == login) {
    page[1].classList.add("animate1");
    page[0].classList.add("animate2");
    page[1].classList.remove("animate2");
    page[0].classList.remove("animate1");
  }
});

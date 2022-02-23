let btn_menu = document.querySelector(".icon-menu");
let links_header = document.querySelector(".header .links");
btn_menu.addEventListener("click", function () {
  btn_menu.classList.toggle("active");
  links_header.classList.toggle("active");
});

let links_a = document.querySelectorAll(".header .links li a");
links_a.forEach(function (e) {
  e.addEventListener("click", function () {
    console.log(e);
  });
});

console.log(links_a);

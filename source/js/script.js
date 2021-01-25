const btnMenu = document.querySelector(".burger-nemu__button");
const menu = document.querySelector(".page-header__nav-menu");
const btn = document.querySelector(".burger-nemu");

menu.classList.add("page-header__nav-menu--hide");
btnMenu.classList.add("burger-nemu__button--open");
btn.classList.remove("burger-nemu--hidden");

btnMenu.addEventListener("click", function (evt) {
  evt.preventDefault();
  menu.classList.toggle("page-header__nav-menu--hide");
  btnMenu.classList.toggle("burger-nemu__button--open");
});

const btnMenu = document.querySelector(".burger-nemu__button");
const menu = document.querySelector(".page-header__nav-menu");

menu.classList.add("page-header__nav-menu--hide");
btnMenu.classList.add("burger-nemu__button--open");

btnMenu.addEventListener("click", function (evt) {
  evt.preventDefault();
  menu.classList.toggle("page-header__nav-menu--hide");
  btnMenu.classList.toggle("burger-nemu__button--open");
});

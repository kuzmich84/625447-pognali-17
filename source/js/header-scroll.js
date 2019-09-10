var menu = document.querySelector(".main-nav__logo-wrapper");
var header = document.querySelector(".header-scroll");
var menuTop = document.querySelector(".main-nav__top-wrapper");

window.addEventListener("scroll", function (event) {
  var scrollY = this.window.pageYOffset;
  var widthX = this.document.documentElement.clientWidth;

  if (scrollY > 650) {
    if (widthX < 768) {
      menu.classList.add("main-nav__logo--scroll");
      header.classList.add("page-header--scroll");
    } else if (widthX >= 768) {
      menu.classList.remove("main-nav__logo--scroll");
      menuTop.classList.add("main-nav__top-wrapper--scroll");
      header.classList.add("page-header--scroll");
    }
  } else {
    menu.classList.remove("main-nav__logo--scroll");
    header.classList.remove("page-header--scroll");
    menuTop.classList.remove("main-nav__top-wrapper--scroll");
    header.classList.remove("page-header--scroll");
  }

  window.addEventListener('resize', function () {
    "use strict";
    window.location.reload();
  });
});

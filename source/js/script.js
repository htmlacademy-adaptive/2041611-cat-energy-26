let navMain = document.querySelector('.main-nav');
let navToggle = document.querySelector('.main-nav__toggle');
let sliderToggle = document.querySelector(".toggle");
let toggleAfter = document.querySelector(".toggle__after");

navMain.classList.remove('main-nav--nojs');

if (navToggle) {
  navToggle.classList.remove("main-nav__toggle--hidden");
  navMain.classList.add("main-nav--closed");

  navToggle.addEventListener("click", function () {
    navMain.classList.toggle("main-nav--opened");
    navMain.classList.toggle("main-nav--closed");
  })
};

function toggle () {
  sliderToggle.addEventListener('mousemove', (event) => {
    let x = event.offsetX;
    toggleAfter.style.width = x + 'px';
  });
}

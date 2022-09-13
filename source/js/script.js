let navMain = document.querySelector('.main-nav');
let navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav--nojs');

navToggle.classList.remove('main-nav__toggle--hidden');
navMain.classList.add('main-nav--closed');

navToggle.addEventListener('click', function () {
  navMain.classList.toggle('main-nav--opened');
  navMain.classList.toggle('main-nav--closed');
})

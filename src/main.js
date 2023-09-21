'use strict';

const header = document.querySelector('.header');
const headerHeight = header.getBoundingClientRect().height;

function handleDarkMode() {
  if (window.scrollY > headerHeight) {
    header.classList.add('header--dark');
  } else {
    header.classList.remove('header--dark')
  }
}

const home = document.querySelector('.home__container');
const homeHeight = home.offsetHeight;

function handleHomeOpacity() {
  const opacity = 1 - window.scrollY / homeHeight;
  home.style.opacity = opacity;
}

const arrowUp = document.querySelector('.arrow-up');

function handleArrowVisibility() {
  if (window.scrollY > homeHeight / 2) {
    arrowUp.classList.add('arrow-up-visible');
  } else {
    arrowUp.classList.remove('arrow-up-visible');
  }
}

document.addEventListener('scroll', () => {
  handleDarkMode();
  handleHomeOpacity();
  handleArrowVisibility();
});

const navbarMenu = document.querySelector('.header__menu');
const btnMenu = document.querySelector('.header__toggle');

btnMenu.addEventListener('click', () => {
  navbarMenu.classList.toggle('open');
});

navbarMenu.addEventListener('clcik', () => {
  navbarMenu.classList.remove('open');
})

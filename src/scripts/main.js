'use strict';

const openBtn = document.querySelector('.menu-opener');
const closeBtn = document.querySelector('.menu-closer');
const menu = document.querySelector('.menu');
const nav = document.querySelector('.menu__list');

openBtn.addEventListener('click', (e) => {
  menu.classList.remove('menu--closed');
  menu.classList.add('menu--opened');
  document.body.classList.add('body--overflow-hidden');
});

closeBtn.addEventListener('click', () => {
  menu.classList.remove('menu--opened');
  menu.classList.add('menu--closed');
  document.body.classList.remove('body--overflow-hidden');
});

nav.addEventListener('click', (e) => {
  if (e.target.classList[0] === 'menu__link') {
    menu.classList.remove('menu--opened');
    menu.classList.add('menu--closed');
    document.body.classList.remove('body--overflow-hidden');
  }
});

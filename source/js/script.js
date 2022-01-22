// modules
import mobileHeight from './modules/mobile-height-adjust.js';
import slider from './modules/slider.js';
import menu from './modules/menu.js';
import footer from './modules/footer.js';
import chat from './modules/chat.js';
import result from './modules/result.js';
import form from './modules/form.js';
import social from './modules/social.js';
import FullPageScroll from './modules/full-page-scroll';

const bodyElement = document.querySelector(`body`);
const menuElements = document.querySelectorAll(`.page-header__menu .js-menu-link`);
const prizesMenuElement = document.querySelector(`.js-menu-link[data-href="prizes"]`);
const pageContent = document.querySelector(`.page-content`);

const setWindowHref = () => {
  window.location.href = prizesMenuElement.getAttribute(`href`);
  pageContent.classList.remove(`page-content--prizes`);
};

// load the page
document.addEventListener(`DOMContentLoaded`, () => {
  bodyElement.classList.add(`page-loaded`);
});

// Background for prizes
prizesMenuElement.addEventListener(`click`, (evt) => {
  if (window.location.hash === `#story`) {
    evt.preventDefault();
    menuElements.forEach((item) => item.classList.remove(`active`));
    prizesMenuElement.classList.add(`active`);
    pageContent.classList.add(`page-content--prizes`);
    setTimeout(setWindowHref, 300);
  }
});

// init modules
mobileHeight();
slider();
menu();
footer();
chat();
result();
form();
social();

const fullPageScroll = new FullPageScroll();
fullPageScroll.init();

const menuList = document.querySelector('.menu-mobile');
const button = document.querySelector('.page-header__menu');

button.addEventListener('click', () => {
  if (menuList.classList.contains('menu-mobile--close')) {
    menuList.classList.remove('menu-mobile--close');
    menuList.classList.add('menu-mobile--active');
  } else {
    menuList.classList.add('menu-mobile--close');
    menuList.classList.remove('menu-mobile--active');
  }
});

const modal = document.querySelector('.modal');
const overlayButton = modal.querySelector('.modal__overlay');
const buttonOpen = document.querySelector('.product__order');

buttonOpen.addEventListener('click', () => {
  modal.classList.add('modal--show');
});

overlayButton.addEventListener('click', () => {
  modal.classList.remove('modal--show');
});

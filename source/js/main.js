const button = document.querySelector('.page-header button');
const container = document.querySelector('.page-header__wrapper');

container.classList.remove('page-header__menu-nojs');

button.addEventListener('click', ()=> {
  if (container.classList.contains('page-header__menu-closed')) {
    container.classList.remove('page-header__menu-closed');
    container.classList.add('page-header__menu-opened');
  } else {
    container.classList.remove('page-header__menu-opened');
    container.classList.add('page-header__menu-closed');
  }
});

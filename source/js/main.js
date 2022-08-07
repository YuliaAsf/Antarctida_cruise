const button = document.querySelector('.page-header button');
const container = document.querySelector('.page-header__wrapper');
const link = document.querySelectorAll('.page-header__navigation a');
const body = document.querySelector('body');
const card = document.querySelectorAll('.catalog li');
const cardInformation = document.querySelectorAll('.catalog__block--information');
const formData = document.querySelectorAll('.reservation-form__input');
const overlay = document.querySelector('.overlay');

container.classList.remove('page-header__menu-nojs');

button.addEventListener('click', ()=> {
  if (container.classList.contains('page-header__menu-closed')) {
    container.classList.remove('page-header__menu-closed');
    container.classList.add('page-header__menu-opened');
    body.classList.add('no-scrolling');
    overlay.style.display = 'block';
  } else {
    container.classList.remove('page-header__menu-opened');
    container.classList.add('page-header__menu-closed');
    body.classList.remove('no-scrolling');
    overlay.style.display = 'none';
  }
});

for (let i = 0; i <= link.length - 1; i++) {
  link[i].addEventListener('click', ()=> {

    if (container.classList.contains('page-header__menu-opened')) {
      container.classList.remove('page-header__menu-opened');
      container.classList.add('page-header__menu-closed');
      body.classList.remove('no-scrolling');
      overlay.style.display = 'none';
    }
  });
}

for (let i = 0; i <= card.length - 1; i++) {
  card[i].addEventListener('touchstart', ()=> {
    cardInformation[i].style.transform = 'rotateY: 360deg';
  });
}

for (let i = 0; i <= formData.length - 1; i++) {
  localStorage.setItem('formData', formData.value);
}

overlay.addEventListener('click', ()=> {
  container.classList.remove('page-header__menu-opened');
  container.classList.add('page-header__menu-closed');
  body.classList.remove('no-scrolling');
  overlay.style.display = 'none';
});

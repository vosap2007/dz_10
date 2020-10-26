import cardsMenu from './cards.hbs'
import e from './allCards.json'
import './styles.css';

const galleryRef = document.querySelector('.js-menu');
const body = document.querySelector('body');

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

/*рп*/
const markup = cardsMenu(e);
galleryRef.insertAdjacentHTML('beforeend', markup)

body.addEventListener('change', switchTheme);

function switchTheme () {
  body.classList.toggle(Theme.LIGHT, !body.classList.toggle(Theme.DARK));
  localStorage.setItem('Theme', body.classList[0]);
};

const themeToggle = document.querySelector('#theme-switch-toggle');
const themeChosen = localStorage.getItem('Theme');
themeToggle.checked = themeChosen == 'dark-theme' ? true : false;
body.classList.add(themeChosen ? themeChosen : Theme.LIGHT);

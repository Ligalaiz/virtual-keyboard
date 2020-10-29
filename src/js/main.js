import languages from './language/languages.js';
import keyboardStructure from './initStructure.js';
import initKeys from './initKeys.js';
import {
  addAnimationButtons,
  removeAnimationButtons,
} from './options/animationButtons.js';
import {
  inputFromMouse,
  removeMouseAnimation,
} from './options/inputAnimationMouse.js';
import backspace from './options/backspace.js';
import space from './options/space.js';
import { tabBtn, tabMouse } from './options/tab.js';
import del from './options/del.js';
import enter from './options/enter.js';
import { shiftOn, shiftOff } from './options/shift.js';
import { capsOn, capsOff } from './options/capsLock.js';
import changeLang from './options/changeLang.js';

// Create structure
const keyboard = document.createElement('div'),
  keyboard__wrap = document.createElement('div'),
  myTextarea = document.createElement('textarea'),
  myList = document.createElement('ul'),
  message = document.createElement('p');

keyboardStructure(keyboard, keyboard__wrap, myTextarea, myList, message);

// Add buttons to the DOM structure
localStorage.getItem('lang') || localStorage.setItem('lang', 'en');
let lang = languages[localStorage.getItem('lang')];

initKeys(lang);

// Add animation for buttons
document.addEventListener('keydown', function (e) {
  addAnimationButtons(e, keyboard);
});

keyboard.addEventListener('keyup', function () {
  removeAnimationButtons(keyboard);
});

const input = document.querySelector('.keyboard__input');

// Add animation and input for mouse
keyboard.addEventListener('mousedown', function (e) {
  inputFromMouse(e, keyboard, input);
});

keyboard.addEventListener('mouseup', function (e) {
  removeMouseAnimation(e, keyboard);
});

// Add Backspace option
keyboard.addEventListener('mousedown', function (e) {
  backspace(e, input);
});

// Add Space option
keyboard.addEventListener('mousedown', function (e) {
  space(e, input);
});

// Add Tab option
document.addEventListener('keydown', function (e) {
  tabBtn(e, input);
});

keyboard.addEventListener('click', function (e) {
  tabMouse(e, input);
});

// Add Del option
keyboard.addEventListener('mousedown', function (e) {
  del(e, input);
});

// Add Enter option
keyboard.addEventListener('mousedown', function (e) {
  enter(e, input);
});

// Add Shift option
keyboard.addEventListener('keydown', function (e) {
  shiftOn(e, keyboard, lang);
});
keyboard.addEventListener('mousedown', function (e) {
  shiftOn(e, keyboard, lang);
});
keyboard.addEventListener('keyup', function (e) {
  shiftOff(e, keyboard, lang);
});
keyboard.addEventListener('mouseup', function (e) {
  shiftOff(e, keyboard, lang);
});

// Add Caps Lock option
let caps = false;

keyboard.addEventListener('keydown', (e) => {
  if (e.keyCode == 20) {
    caps = caps ? false : true;
  }
  caps ? capsOn(e, keyboard, lang) : capsOff(e, keyboard, lang);
});

keyboard.addEventListener('click', (e) => {
  if (e.target.getAttribute('data') == 20) {
    caps = caps ? false : true;
  }
  caps ? capsOn(e, keyboard, lang) : capsOff(e, keyboard, lang);
});

// Add change language option
changeLang(keyboard, lang, languages, initKeys, 'ShiftLeft', 'AltLeft');
changeLang(keyboard, lang, languages, initKeys, 'ShiftRight', 'AltRight');

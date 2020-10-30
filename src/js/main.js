import languages from './language/languages.js';
import keyboardStructure from './initStructure.js';
import initKeys from './initKeys.js';
import {
  addAnimationButtons,
  removeAnimationButtons,
} from './options/animationButtons.js';
import { inputFromMouse } from './options/inputAnimationMouse.js';
import backspace from './options/backspace.js';
import space from './options/space.js';
import { tabBtn, tabMouse } from './options/tab.js';
import del from './options/del.js';
import enter from './options/enter.js';
import { shiftOn, shiftOff } from './options/shift.js';
import { capsOn, capsOff } from './options/capsLock.js';
import { changeLang, clearCache } from './options/changeLang.js';

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

const input = document.querySelector('.keyboard__input');
let caps = false;
function handler(e) {
  myTextarea.focus();

  const { code, type, key } = e;
  if (type.match(/keydown/)) {
    // Add animation for key
    addAnimationButtons(e, keyboard);
    // Add Tab option
    tabBtn(e, input);
    // Add Shift option
    shiftOn(e, keyboard, lang);
    // Add Caps Lock option
    if (e.keyCode == 20) {
      caps = caps ? false : true;
    }
    caps ? capsOn(e, keyboard, lang) : capsOff(e, keyboard, lang);
    // Add change language option
    changeLang(keyboard, lang, languages, initKeys, 'ShiftLeft', 'AltLeft');
    changeLang(keyboard, lang, languages, initKeys, 'ShiftRight', 'AltRight');
  }
  if (type.match(/keyup/)) {
    // Remove from animation from key
    removeAnimationButtons(keyboard);
    // Remove Shift option
    shiftOff(e, keyboard, lang);
    // Clear language cache
    clearCache();
  }
}
document.addEventListener('keydown', (e) => handler(e));
document.addEventListener('keyup', (e) => handler(e));

function mouseHandler(e) {
  myTextarea.focus();
  const { code, type, key } = e;

  if (type.match(/mousedown/)) {
    // Input from mouse click
    inputFromMouse(e, keyboard, input);
    // Add Backspace option
    backspace(e, input);
    // Add Space option
    space(e, input);
    // Add Tab option
    tabMouse(e, input);
    // Add Del option
    del(e, input);
    // Add Enter option
    enter(e, input);
    // Add Shift option
    shiftOn(e, keyboard, lang);
    // Add Caps Lock option
    if (e.target.getAttribute('data') == 20) {
      caps = caps ? false : true;
    }
    caps ? capsOn(e, keyboard, lang) : capsOff(e, keyboard, lang);
  }
  if (type.match(/mouseup/)) {
    // Remove animation for mouse
    removeAnimationButtons(keyboard);
    // Remove Shift option
    shiftOff(e, keyboard, lang);
  }
}
document.addEventListener('mousedown', (e) => mouseHandler(e));
document.addEventListener('mouseup', (e) => mouseHandler(e));

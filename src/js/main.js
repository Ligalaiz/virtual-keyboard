import languages from './language/languages.js';
import keyboardStructure from './initStructure.js';
import initKeys from './initKeys.js';
import inputFromKeyboard from './options/inputFromKeyboard.js';
import {
  addAnimationButtons,
  removeAnimationButtons,
} from './options/addAnimationButtons.js';
import inputFromMouse from './options/inputFromMouse.js';
import addAnimationMouse from './options/addAnimationMouse.js';
import backspace from './options/backspace.js';
import space from './options/space.js';
import { tabBtn } from './options/tab.js';
import del from './options/del.js';
import enter from './options/enter.js';
import { shiftOn, shiftOff } from './options/shift.js';
import { addArrowLeft, addArrowRight } from './options/addArrow.js';
// import { changeLang, clearCache } from './options/changeLang.js';

// Create structure
const keyboard = document.createElement('div'),
  keyboard__wrap = document.createElement('div'),
  myTextarea = document.createElement('textarea'),
  myList = document.createElement('ul'),
  message = document.createElement('p');

keyboardStructure(keyboard, keyboard__wrap, myTextarea, myList, message);

// Add buttons to the DOM structure
localStorage.getItem('lang') || localStorage.setItem('lang', 'ru');
let lang = languages[localStorage.getItem('lang')];

initKeys(lang);

let shift = false;
let caps = false;
function handler(e) {
  if (e.keyCode === 18) e.preventDefault();

  const { type } = e;
  if (type.match(/keydown/)) {
    // Add animation for key
    addAnimationButtons(e, keyboard);
    // Add Input from keyboard option
    inputFromKeyboard(e, keyboard, myTextarea);
    // Add Tab option
    tabBtn(e, myTextarea);

    // Add Shift option
    if (e.keyCode == 16) {
      shift = shift ? false : true;
      shift ? shiftOn(e, keyboard, lang) : shiftOff(e, keyboard, lang);
    }
    if (e.keyCode == 20) {
      caps = caps ? false : true;
      caps ? shiftOn(e, keyboard, lang) : shiftOff(e, keyboard, lang);
    }
    // Add change language option
    // changeLang(e, keyboard, lang, languages, initKeys, 'ShiftLeft', 'AltLeft');
    // changeLang(
    //   e,
    //   keyboard,
    //   languages,
    //   initKeys,
    //   'ShiftRight',
    //   'AltRight'
    // );
  } else if (type.match(/keyup/)) {
    // Remove from animation from key
    removeAnimationButtons(keyboard);
    // Clear language cache
    // clearCache(e);
  }
  myTextarea.focus();
}
document.addEventListener('keydown', (e) => handler(e));
document.addEventListener('keyup', (e) => handler(e));

function mouseHandler(e) {
  const { type } = e;

  if (type.match(/mousedown/)) {
    // Input from mouse click
    inputFromMouse(e, keyboard, myTextarea);
    // Add animation for mouse
    addAnimationMouse(e, keyboard, myTextarea);
    // Add Backspace option
    backspace(e, myTextarea);
    // Add Space option
    space(e, myTextarea);
    // Add Tab option
    tabBtn(e, myTextarea);
    // Add Del option
    del(e, myTextarea);
    // Add Enter option
    enter(e, myTextarea);
    // Add Shift option
    if (e.target.getAttribute('data') == 16) {
      shift = shift ? false : true;
      shift ? shiftOn(e, keyboard, lang) : shiftOff(e, keyboard, lang);
    }
    if (e.target.getAttribute('data') == 20) {
      caps = caps ? false : true;
      caps ? shiftOn(e, keyboard, lang) : shiftOff(e, keyboard, lang);
    }
    // Add arrow left option
    if (e.target.getAttribute('data') == 37) {
      addArrowLeft(myTextarea);
    }
    // Add arrow rigth option
    if (e.target.getAttribute('data') == 39) {
      addArrowRight(myTextarea);
    }
  }
  if (type.match(/mouseup/)) {
    // Remove animation for mouse
    removeAnimationButtons(keyboard);
  }
  myTextarea.focus();
}
document.addEventListener('mousedown', (e) => mouseHandler(e));
document.addEventListener('mouseup', (e) => mouseHandler(e));

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
import addLangAnimation from './options/addLangAnimation.js';
import addSoundAnimation from './options/addSoundAnimation.js';
import addVoiceAnimation from './options/addVoiceAnimation.js';
import changeLang from './options/changeLang.js';
import { addPressSound, addClickSound } from './options/addClickSound.js';
import recognizer from './options/addVoiceRecognition.js';
import { showKeyboard, hideKeyboard } from './options/showKeyboard.js';
import { audio } from './audio.js';

// Create structure
const keyboard = document.createElement('div'),
  keyboard__wrap = document.createElement('div'),
  myTextarea = document.createElement('textarea'),
  myList = document.createElement('ul'),
  optionBtn = document.createElement('div'),
  changeLangBtn = document.createElement('div'),
  enBtn = document.createElement('div'),
  ruBtn = document.createElement('div'),
  soundBtn = document.createElement('div'),
  voiceBtn = document.createElement('div'),
  hideBtn = document.createElement('div');

keyboardStructure(
  keyboard,
  keyboard__wrap,
  myTextarea,
  myList,
  optionBtn,
  changeLangBtn,
  enBtn,
  ruBtn,
  soundBtn,
  voiceBtn,
  hideBtn
);

// Add buttons to the DOM structure
localStorage.getItem('lang') || localStorage.setItem('lang', 'en');
localStorage.getItem('lang') === 'en'
  ? enBtn.classList.add('lang__item--active')
  : ruBtn.classList.add('lang__item--active');
let lang = languages[localStorage.getItem('lang')];

initKeys(lang);

// Add audio
document.body.insertAdjacentHTML('afterbegin', audio);

localStorage.setItem('sound', 'off');
let shift = false,
  caps = false;
function handler(e) {
  if (e.keyCode === 18) e.preventDefault();

  const { type } = e;
  if (type.match(/keydown/)) {
    // Add animation for key
    addAnimationButtons(e, keyboard);
    // Add Press sound
    addPressSound(e);
    // Add Input from keyboard option
    inputFromKeyboard(e, keyboard, myTextarea);
    // Add Tab option
    tabBtn(e, myTextarea);
    // Add Shift option
    if (e.keyCode == 16) {
      shift = shift ? false : true;
      shift
        ? shiftOn(e, keyboard, languages)
        : shiftOff(e, keyboard, languages);
    }
    if (e.keyCode == 20) {
      caps = caps ? false : true;
      caps ? shiftOn(e, keyboard, languages) : shiftOff(e, keyboard, languages);
    }
  } else if (type.match(/keyup/)) {
    // Remove from animation from key
    removeAnimationButtons(keyboard, optionBtn);
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
      shift
        ? shiftOn(e, keyboard, languages)
        : shiftOff(e, keyboard, languages);
    }
    if (e.target.getAttribute('data') == 20) {
      caps = caps ? false : true;
      caps ? shiftOn(e, keyboard, languages) : shiftOff(e, keyboard, languages);
    }
    // Add arrow left option
    if (e.target.getAttribute('data') == 37) {
      addArrowLeft(myTextarea);
    }
    // Add arrow rigth option
    if (e.target.getAttribute('data') == 39) {
      addArrowRight(myTextarea);
    }
    // Add LangBtn Animation
    addLangAnimation(e, enBtn, ruBtn);
    // Add Sound Animation
    addSoundAnimation(e, soundBtn);
    // Add Voice Animation
    addVoiceAnimation(e, voiceBtn);
    // Add Change Lang option
    changeLang(e, keyboard, languages, initKeys);
    // Add Click sound
    addClickSound(e);
    // Add voice record
    if (e.target.dataset.code === 'voice') {
      recognizer();
    }
    // Show keyboard
    showKeyboard(e);
    // Hide keyboard
    hideKeyboard(e);
  }
  if (type.match(/mouseup/)) {
    // Remove animation for mouse
    removeAnimationButtons(keyboard, optionBtn);
  }
  myTextarea.focus();
}
document.addEventListener('mousedown', (e) => mouseHandler(e));
document.addEventListener('mouseup', (e) => mouseHandler(e));

/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_main_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/main.js */ \"./src/js/main.js\");\n/* harmony import */ var _sass_main_sass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sass/main.sass */ \"./src/sass/main.sass\");\n/* harmony import */ var _sass_main_sass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_sass_main_sass__WEBPACK_IMPORTED_MODULE_1__);\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/js/initKeys.js":
/*!****************************!*\
  !*** ./src/js/initKeys.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return initKeys; });\nfunction initKeys(lang) {\r\n  lang.forEach((el) => {\r\n    let div = document.createElement('div');\r\n    div.className = 'keyboard__item';\r\n    div.setAttribute('data', el['num']);\r\n    div.setAttribute('data-code', el['code']);\r\n    div.textContent = el['sign'];\r\n    document.querySelector('.keyboard__list').append(div);\r\n  });\r\n}\r\n\n\n//# sourceURL=webpack:///./src/js/initKeys.js?");

/***/ }),

/***/ "./src/js/initStructure.js":
/*!*********************************!*\
  !*** ./src/js/initStructure.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return initStructure; });\nfunction initStructure(keyboard,keyboard__wrap, myTextarea, myList, message) {\r\n  keyboard.className = 'keyboard';\r\n  document.body.append(keyboard);\r\n\r\n  keyboard__wrap.className = 'keyboard__wrap';\r\n  document.querySelector('.keyboard').append(keyboard__wrap);\r\n \r\n  document.querySelector('.keyboard__wrap').append(message);\r\n\r\n  myTextarea.className = 'keyboard__input';\r\n  myTextarea.setAttribute('autofocus', true);\r\n  document.querySelector('.keyboard__wrap').append(myTextarea);\r\n\r\n  myList.className = 'keyboard__list reset-list';\r\n  document.querySelector('.keyboard__wrap').append(myList);\r\n}\n\n//# sourceURL=webpack:///./src/js/initStructure.js?");

/***/ }),

/***/ "./src/js/language/en.js":
/*!*******************************!*\
  !*** ./src/js/language/en.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ([\r\n  { sign: '`', signOn: '~', num: 192, code: 'Backquote' },\r\n  { sign: '1', signOn: '!', num: 49, code: 'Digit1' },\r\n  { sign: '2', signOn: '\"', num: 50, code: 'Digit2' },\r\n  { sign: '3', signOn: '#', num: 51, code: 'Digit3' },\r\n  { sign: '4', signOn: '$', num: 52, code: 'Digit4' },\r\n  { sign: '5', signOn: '%', num: 53, code: 'Digit5' },\r\n  { sign: '6', signOn: '^', num: 54, code: 'Digit6' },\r\n  { sign: '7', signOn: '&', num: 55, code: 'Digit7' },\r\n  { sign: '8', signOn: '*', num: 56, code: 'Digit8' },\r\n  { sign: '9', signOn: '(', num: 57, code: 'Digit9' },\r\n  { sign: '0', signOn: ')', num: 48, code: 'Digit0' },\r\n  { sign: '-', signOn: '_', num: 189, code: 'Minus' },\r\n  { sign: '=', signOn: '+', num: 187, code: 'Equal' },\r\n  { sign: 'Backspace', num: 8, code: 'Backspace' },\r\n\r\n  { sign: 'Tab', num: 9, code: 'Tab' },\r\n  { sign: 'q', num: 81, code: 'KeyQ' },\r\n  { sign: 'w', num: 87, code: 'KeyW' },\r\n  { sign: 'e', num: 69, code: 'KeyE' },\r\n  { sign: 'r', num: 82, code: 'KeyR' },\r\n  { sign: 't', num: 84, code: 'KeyT' },\r\n  { sign: 'y', num: 89, code: 'KeyY' },\r\n  { sign: 'u', num: 85, code: 'KeyU' },\r\n  { sign: 'i', num: 73, code: 'KeyI' },\r\n  { sign: 'o', num: 79, code: 'KeyO' },\r\n  { sign: 'p', num: 80, code: 'KeyP' },\r\n  { sign: '[', signOn: '{', num: 219, code: 'BracketLeft' },\r\n  { sign: ']', signOn: '}', num: 221, code: 'BracketRight' },\r\n  { sign: '\\\\', signOn: '|', num: 220, code: 'Backslash' },\r\n  { sign: 'Del', num: 46, code: 'Delete' },\r\n\r\n  { sign: 'Caps Lock', num: 20, code: 'CapsLock' },\r\n  { sign: 'a', num: 65, code: 'KeyA' },\r\n  { sign: 's', num: 83, code: 'KeyS' },\r\n  { sign: 'd', num: 68, code: 'KeyD' },\r\n  { sign: 'f', num: 70, code: 'KeyF' },\r\n  { sign: 'g', num: 71, code: 'KeyG' },\r\n  { sign: 'h', num: 72, code: 'KeyH' },\r\n  { sign: 'j', num: 74, code: 'KeyJ' },\r\n  { sign: 'k', num: 75, code: 'KeyK' },\r\n  { sign: 'l', num: 76, code: 'KeyL' },\r\n  { sign: ';', num: 186, code: 'Semicolon' },\r\n  { sign: \"'\", signOn: '\"', num: 222, code: 'Quote' },\r\n  { sign: 'Enter', num: 13, code: 'Enter' },\r\n\r\n  { sign: 'Shift', num: 16, code: 'ShiftLeft' },\r\n  { sign: 'z', num: 90, code: 'KeyZ' },\r\n  { sign: 'x', num: 88, code: 'KeyX' },\r\n  { sign: 'c', num: 67, code: 'KeyC' },\r\n  { sign: 'v', num: 86, code: 'KeyV' },\r\n  { sign: 'b', num: 66, code: 'KeyB' },\r\n  { sign: 'n', num: 78, code: 'KeyN' },\r\n  { sign: 'm', num: 77, code: 'KeyM' },\r\n  { sign: ',', signOn: '<', num: 188, code: 'Comma' },\r\n  { sign: '.', signOn: '>', num: 190, code: 'Period' },\r\n  { sign: '/', signOn: '?', num: 191, code: 'Slash' },\r\n  { sign: '⇑', num: 38, code: 'ArrowUp' },\r\n  { sign: 'Shift', num: 16, code: 'ShiftRight' },\r\n\r\n  { sign: 'Ctrl', num: 17, code: 'ControlLeft' },\r\n  { sign: 'Win', num: 991, code: 'Win' },\r\n  { sign: 'Alt', num: 18, code: 'AltLeft' },\r\n  { sign: '', num: 32, code: 'Space' },\r\n  { sign: 'Alt', num: 18, code: 'AltRight' },\r\n  { sign: '⇐', num: 37, code: 'ArrowLeft' },\r\n  { sign: '⇓', num: 40, code: 'ArrowDown' },\r\n  { sign: '⇒', num: 39, code: 'ArrowRight' },\r\n  { sign: 'Ctrl', num: 17, code: 'ControlRight' },\r\n]);\r\n\n\n//# sourceURL=webpack:///./src/js/language/en.js?");

/***/ }),

/***/ "./src/js/language/languages.js":
/*!**************************************!*\
  !*** ./src/js/language/languages.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ru_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ru.js */ \"./src/js/language/ru.js\");\n/* harmony import */ var _en_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./en.js */ \"./src/js/language/en.js\");\n\r\n\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = ({ ru: _ru_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"], en: _en_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"] });\r\n\n\n//# sourceURL=webpack:///./src/js/language/languages.js?");

/***/ }),

/***/ "./src/js/language/ru.js":
/*!*******************************!*\
  !*** ./src/js/language/ru.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ([\r\n  { sign: 'ё', num: 192, code: 'Backquote' },\r\n  { sign: '1', signOn: '!', num: 49, code: 'Digit1' },\r\n  { sign: '2', signOn: '\"', num: 50, code: 'Digit2' },\r\n  { sign: '3', signOn: '№', num: 51, code: 'Digit3' },\r\n  { sign: '4', signOn: ';', num: 52, code: 'Digit4' },\r\n  { sign: '5', signOn: '%', num: 53, code: 'Digit5' },\r\n  { sign: '6', signOn: ':', num: 54, code: 'Digit6' },\r\n  { sign: '7', signOn: '?', num: 55, code: 'Digit7' },\r\n  { sign: '8', signOn: '*', num: 56, code: 'Digit8' },\r\n  { sign: '9', signOn: '(', num: 57, code: 'Digit9' },\r\n  { sign: '0', signOn: ')', num: 48, code: 'Digit0' },\r\n  { sign: '-', signOn: '_', num: 189, code: 'Minus' },\r\n  { sign: '=', signOn: '+', num: 187, code: 'Equal' },\r\n  { sign: 'Backspace', num: 8, code: 'Backspace' },\r\n\r\n  { sign: 'Tab', num: 9, code: 'Tab' },\r\n  { sign: 'й', num: 81, code: 'KeyQ' },\r\n  { sign: 'ц', num: 87, code: 'KeyW' },\r\n  { sign: 'у', num: 69, code: 'KeyE' },\r\n  { sign: 'к', num: 82, code: 'KeyR' },\r\n  { sign: 'е', num: 84, code: 'KeyT' },\r\n  { sign: 'н', num: 89, code: 'KeyY' },\r\n  { sign: 'г', num: 85, code: 'KeyU' },\r\n  { sign: 'ш', num: 73, code: 'KeyI' },\r\n  { sign: 'щ', num: 79, code: 'KeyO' },\r\n  { sign: 'з', num: 80, code: 'KeyP' },\r\n  { sign: 'х', num: 219, code: 'BracketLeft' },\r\n  { sign: 'ъ', num: 221, code: 'BracketRight' },\r\n  { sign: '\\\\', signOn: '|', num: 220, code: 'Backslash' },\r\n  { sign: 'Del', num: 46, code: 'Delete' },\r\n\r\n  { sign: 'Caps Lock', num: 20, code: 'CapsLock' },\r\n  { sign: 'ф', num: 65, code: 'KeyA' },\r\n  { sign: 'ы', num: 83, code: 'KeyS' },\r\n  { sign: 'в', num: 68, code: 'KeyD' },\r\n  { sign: 'а', num: 70, code: 'KeyF' },\r\n  { sign: 'п', num: 71, code: 'KeyG' },\r\n  { sign: 'р', num: 72, code: 'KeyH' },\r\n  { sign: 'о', num: 74, code: 'KeyJ' },\r\n  { sign: 'л', num: 75, code: 'KeyK' },\r\n  { sign: 'д', num: 76, code: 'KeyL' },\r\n  { sign: 'ж', num: 186, code: 'Semicolon' },\r\n  { sign: 'э', num: 222, code: 'Quote' },\r\n  { sign: 'Enter', num: 13, code: 'Enter' },\r\n\r\n  { sign: 'Shift', num: 16, code: 'ShiftLeft' },\r\n  { sign: 'я', num: 90, code: 'KeyZ' },\r\n  { sign: 'ч', num: 88, code: 'KeyX' },\r\n  { sign: 'с', num: 67, code: 'KeyC' },\r\n  { sign: 'м', num: 86, code: 'KeyV' },\r\n  { sign: 'и', num: 66, code: 'KeyB' },\r\n  { sign: 'т', num: 78, code: 'KeyN' },\r\n  { sign: 'ь', num: 77, code: 'KeyM' },\r\n  { sign: 'б', num: 188, code: 'Comma' },\r\n  { sign: 'ю', num: 190, code: 'Period' },\r\n  { sign: '.', signOn: ',', num: 191, code: 'Slash' },\r\n  { sign: '⇑', num: 38, code: 'ArrowUp' },\r\n  { sign: 'Shift', num: 16, code: 'ShiftRight' },\r\n\r\n  { sign: 'Ctrl', num: 17, code: 'ControlLeft' },\r\n  { sign: 'Win', num: 91, code: 'Win' },\r\n  { sign: 'Alt', num: 18, code: 'AltLeft' },\r\n  { sign: '', num: 32, code: 'Space' },\r\n  { sign: 'Alt', num: 18, code: 'AltRight' },\r\n  { sign: '⇐', num: 37, code: 'ArrowLeft' },\r\n  { sign: '⇓', num: 40, code: 'ArrowDown' },\r\n  { sign: '⇒', num: 39, code: 'ArrowRight' },\r\n  { sign: 'Ctrl', num: 17, code: 'ControlRight' },\r\n]);\r\n\n\n//# sourceURL=webpack:///./src/js/language/ru.js?");

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _language_languages_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./language/languages.js */ \"./src/js/language/languages.js\");\n/* harmony import */ var _initStructure_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./initStructure.js */ \"./src/js/initStructure.js\");\n/* harmony import */ var _initKeys_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./initKeys.js */ \"./src/js/initKeys.js\");\n/* harmony import */ var _options_inputFromKeyboard_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./options/inputFromKeyboard.js */ \"./src/js/options/inputFromKeyboard.js\");\n/* harmony import */ var _options_addAnimationButtons_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./options/addAnimationButtons.js */ \"./src/js/options/addAnimationButtons.js\");\n/* harmony import */ var _options_inputFromMouse_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./options/inputFromMouse.js */ \"./src/js/options/inputFromMouse.js\");\n/* harmony import */ var _options_addAnimationMouse_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./options/addAnimationMouse.js */ \"./src/js/options/addAnimationMouse.js\");\n/* harmony import */ var _options_backspace_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./options/backspace.js */ \"./src/js/options/backspace.js\");\n/* harmony import */ var _options_space_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./options/space.js */ \"./src/js/options/space.js\");\n/* harmony import */ var _options_tab_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./options/tab.js */ \"./src/js/options/tab.js\");\n/* harmony import */ var _options_del_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./options/del.js */ \"./src/js/options/del.js\");\n/* harmony import */ var _options_enter_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./options/enter.js */ \"./src/js/options/enter.js\");\n/* harmony import */ var _options_shift_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./options/shift.js */ \"./src/js/options/shift.js\");\n/* harmony import */ var _options_addArrow_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./options/addArrow.js */ \"./src/js/options/addArrow.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n// import { changeLang, clearCache } from './options/changeLang.js';\r\n\r\n// Create structure\r\nconst keyboard = document.createElement('div'),\r\n  keyboard__wrap = document.createElement('div'),\r\n  myTextarea = document.createElement('textarea'),\r\n  myList = document.createElement('ul'),\r\n  message = document.createElement('p');\r\n\r\nObject(_initStructure_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(keyboard, keyboard__wrap, myTextarea, myList, message);\r\n\r\n// Add buttons to the DOM structure\r\nlocalStorage.getItem('lang') || localStorage.setItem('lang', 'ru');\r\nlet lang = _language_languages_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"][localStorage.getItem('lang')];\r\n\r\nObject(_initKeys_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(lang);\r\n\r\nlet shift = false;\r\nlet caps = false;\r\nfunction handler(e) {\r\n  if (e.keyCode === 18) e.preventDefault();\r\n\r\n  const { type } = e;\r\n  if (type.match(/keydown/)) {\r\n    // Add animation for key\r\n    Object(_options_addAnimationButtons_js__WEBPACK_IMPORTED_MODULE_4__[\"addAnimationButtons\"])(e, keyboard);\r\n    // Add Input from keyboard option\r\n    Object(_options_inputFromKeyboard_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(e, keyboard, myTextarea);\r\n    // Add Tab option\r\n    Object(_options_tab_js__WEBPACK_IMPORTED_MODULE_9__[\"tabBtn\"])(e, myTextarea);\r\n\r\n    // Add Shift option\r\n    if (e.keyCode == 16) {\r\n      shift = shift ? false : true;\r\n      shift ? Object(_options_shift_js__WEBPACK_IMPORTED_MODULE_12__[\"shiftOn\"])(e, keyboard, lang) : Object(_options_shift_js__WEBPACK_IMPORTED_MODULE_12__[\"shiftOff\"])(e, keyboard, lang);\r\n    }\r\n    if (e.keyCode == 20) {\r\n      caps = caps ? false : true;\r\n      caps ? Object(_options_shift_js__WEBPACK_IMPORTED_MODULE_12__[\"shiftOn\"])(e, keyboard, lang) : Object(_options_shift_js__WEBPACK_IMPORTED_MODULE_12__[\"shiftOff\"])(e, keyboard, lang);\r\n    }\r\n    // Add change language option\r\n    // changeLang(e, keyboard, lang, languages, initKeys, 'ShiftLeft', 'AltLeft');\r\n    // changeLang(\r\n    //   e,\r\n    //   keyboard,\r\n    //   languages,\r\n    //   initKeys,\r\n    //   'ShiftRight',\r\n    //   'AltRight'\r\n    // );\r\n  } else if (type.match(/keyup/)) {\r\n    // Remove from animation from key\r\n    Object(_options_addAnimationButtons_js__WEBPACK_IMPORTED_MODULE_4__[\"removeAnimationButtons\"])(keyboard);\r\n    // Clear language cache\r\n    // clearCache(e);\r\n  }\r\n  myTextarea.focus();\r\n}\r\ndocument.addEventListener('keydown', (e) => handler(e));\r\ndocument.addEventListener('keyup', (e) => handler(e));\r\n\r\nfunction mouseHandler(e) {\r\n  const { type } = e;\r\n\r\n  if (type.match(/mousedown/)) {\r\n    // Input from mouse click\r\n    Object(_options_inputFromMouse_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(e, keyboard, myTextarea);\r\n    // Add animation for mouse\r\n    Object(_options_addAnimationMouse_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(e, keyboard, myTextarea);\r\n    // Add Backspace option\r\n    Object(_options_backspace_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(e, myTextarea);\r\n    // Add Space option\r\n    Object(_options_space_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(e, myTextarea);\r\n    // Add Tab option\r\n    Object(_options_tab_js__WEBPACK_IMPORTED_MODULE_9__[\"tabBtn\"])(e, myTextarea);\r\n    // Add Del option\r\n    Object(_options_del_js__WEBPACK_IMPORTED_MODULE_10__[\"default\"])(e, myTextarea);\r\n    // Add Enter option\r\n    Object(_options_enter_js__WEBPACK_IMPORTED_MODULE_11__[\"default\"])(e, myTextarea);\r\n    // Add Shift option\r\n    if (e.target.getAttribute('data') == 16) {\r\n      shift = shift ? false : true;\r\n      shift ? Object(_options_shift_js__WEBPACK_IMPORTED_MODULE_12__[\"shiftOn\"])(e, keyboard, lang) : Object(_options_shift_js__WEBPACK_IMPORTED_MODULE_12__[\"shiftOff\"])(e, keyboard, lang);\r\n    }\r\n    if (e.target.getAttribute('data') == 20) {\r\n      caps = caps ? false : true;\r\n      caps ? Object(_options_shift_js__WEBPACK_IMPORTED_MODULE_12__[\"shiftOn\"])(e, keyboard, lang) : Object(_options_shift_js__WEBPACK_IMPORTED_MODULE_12__[\"shiftOff\"])(e, keyboard, lang);\r\n    }\r\n    // Add arrow left option\r\n    if (e.target.getAttribute('data') == 37) {\r\n      Object(_options_addArrow_js__WEBPACK_IMPORTED_MODULE_13__[\"addArrowLeft\"])(myTextarea);\r\n    }\r\n    // Add arrow rigth option\r\n    if (e.target.getAttribute('data') == 39) {\r\n      Object(_options_addArrow_js__WEBPACK_IMPORTED_MODULE_13__[\"addArrowRight\"])(myTextarea);\r\n    }\r\n  }\r\n  if (type.match(/mouseup/)) {\r\n    // Remove animation for mouse\r\n    Object(_options_addAnimationButtons_js__WEBPACK_IMPORTED_MODULE_4__[\"removeAnimationButtons\"])(keyboard);\r\n  }\r\n  myTextarea.focus();\r\n}\r\ndocument.addEventListener('mousedown', (e) => mouseHandler(e));\r\ndocument.addEventListener('mouseup', (e) => mouseHandler(e));\r\n\n\n//# sourceURL=webpack:///./src/js/main.js?");

/***/ }),

/***/ "./src/js/options/addAnimationButtons.js":
/*!***********************************************!*\
  !*** ./src/js/options/addAnimationButtons.js ***!
  \***********************************************/
/*! exports provided: addAnimationButtons, removeAnimationButtons */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addAnimationButtons\", function() { return addAnimationButtons; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"removeAnimationButtons\", function() { return removeAnimationButtons; });\nfunction addAnimationButtons(e, keyboard) {\r\n  if (e.code.match(/ShiftRight|ControlRight|AltRight/)) {\r\n    keyboard\r\n      .querySelector(`div[data-code=\"${e.code}\"]`)\r\n      .classList.add('active');\r\n  } else if (!e.code.match(/ShiftRight|ControlRight|AltRight/)) {\r\n    if (keyboard.querySelector(`div[data=\"${e.keyCode}\"]`)) {\r\n      keyboard\r\n        .querySelector(`div[data=\"${e.keyCode}\"]`)\r\n        .classList.add('active');\r\n    }\r\n  }\r\n}\r\n\r\nfunction removeAnimationButtons(keyboard) {\r\n  keyboard.querySelectorAll('.keyboard__item').forEach((el) => {\r\n    el.classList.remove('active');\r\n  });\r\n}\r\n\n\n//# sourceURL=webpack:///./src/js/options/addAnimationButtons.js?");

/***/ }),

/***/ "./src/js/options/addAnimationMouse.js":
/*!*********************************************!*\
  !*** ./src/js/options/addAnimationMouse.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return addAnimationMouse; });\nfunction addAnimationMouse(e) {\r\n  e.target.classList.add('active');\r\n}\r\n\n\n//# sourceURL=webpack:///./src/js/options/addAnimationMouse.js?");

/***/ }),

/***/ "./src/js/options/addArrow.js":
/*!************************************!*\
  !*** ./src/js/options/addArrow.js ***!
  \************************************/
/*! exports provided: addArrowLeft, addArrowRight */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addArrowLeft\", function() { return addArrowLeft; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addArrowRight\", function() { return addArrowRight; });\nfunction addArrowLeft(myTextarea) {\r\n  let startPos = myTextarea.selectionStart;\r\n  myTextarea.focus();\r\n  myTextarea.setSelectionRange(startPos - 1, startPos - 1);\r\n}\r\n\r\nfunction addArrowRight(myTextarea) {\r\n  let startPos = myTextarea.selectionStart;\r\n  myTextarea.focus();\r\n  myTextarea.setSelectionRange(startPos + 1, startPos + 1);\r\n}\r\n\n\n//# sourceURL=webpack:///./src/js/options/addArrow.js?");

/***/ }),

/***/ "./src/js/options/backspace.js":
/*!*************************************!*\
  !*** ./src/js/options/backspace.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return backspace; });\nfunction backspace(e, myTextarea) {\r\n  if (e.target.getAttribute('data') == 8) {\r\n    let startPos = myTextarea.selectionStart,\r\n      endPos = myTextarea.selectionEnd;\r\n    if (myTextarea.selectionStart) {\r\n      if (myTextarea.selectionStart == myTextarea.selectionEnd) {\r\n        myTextarea.value =\r\n          myTextarea.value.substring(0, startPos - 1) +\r\n          myTextarea.value.substring(endPos, myTextarea.value.length);\r\n        myTextarea.setSelectionRange(startPos - 1, startPos - 1);\r\n      } else {\r\n        myTextarea.value =\r\n          myTextarea.value.substring(0, startPos) +\r\n          myTextarea.value.substring(endPos, myTextarea.value.length);\r\n        myTextarea.setSelectionRange(startPos, startPos);\r\n      }\r\n    }\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/js/options/backspace.js?");

/***/ }),

/***/ "./src/js/options/del.js":
/*!*******************************!*\
  !*** ./src/js/options/del.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return del; });\nfunction del(e, myTextarea) {\r\n  if (e.target.getAttribute('data') == 46) {\r\n    if (myTextarea.selectionStart == myTextarea.selectionEnd) {\r\n      myTextarea.setRangeText(\r\n        '',\r\n        myTextarea.selectionStart,\r\n        myTextarea.selectionEnd + 1,\r\n        'end'\r\n      );\r\n    } else if (myTextarea.selectionStart != myTextarea.selectionEnd) {\r\n      myTextarea.setRangeText('', myTextarea.selectionStart, myTextarea.selectionEnd, 'end');\r\n    }\r\n  }\r\n}\n\n//# sourceURL=webpack:///./src/js/options/del.js?");

/***/ }),

/***/ "./src/js/options/enter.js":
/*!*********************************!*\
  !*** ./src/js/options/enter.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return enter; });\nfunction enter(e, myTextarea) {\r\n  if (e.target.getAttribute('data') == 13) {\r\n    let startPos = myTextarea.selectionStart,\r\n      endPos = myTextarea.selectionEnd,\r\n      startValue = myTextarea.value.substring(0, startPos),\r\n      endValue = myTextarea.value.substring(endPos, myTextarea.value.length);\r\n    myTextarea.value = startValue + '\\n' + endValue;\r\n    myTextarea.setSelectionRange(startPos + 1, startPos + 1);\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/js/options/enter.js?");

/***/ }),

/***/ "./src/js/options/inputFromKeyboard.js":
/*!*********************************************!*\
  !*** ./src/js/options/inputFromKeyboard.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return inputFromKeyboard; });\nfunction inputFromKeyboard(e, keyboard, myTextarea) {\r\n  const { code } = e;\r\n   keyboard.querySelectorAll('.keyboard__item').forEach((el) => {\r\n    if (\r\n      el.dataset.code === code &&\r\n      !el.dataset.code.match(\r\n        /Backspace|Tab|Delete|CapsLock|Enter|ShiftLeft|ArrowUp|ShiftRight|ControlLeft|Win|AltLeft|Space|AltRight|ArrowLeft|ArrowDown|ArrowRight|ControlRight/\r\n      )\r\n    ) {\r\n      let text = keyboard.querySelector(`div[data-code=\"${code}\"]`).textContent;\r\n      e.preventDefault();\r\n      let startPos = myTextarea.selectionStart,\r\n        endPos = myTextarea.selectionEnd,\r\n        startValue = myTextarea.value.substring(0, startPos),\r\n        endValue = myTextarea.value.substring(endPos, myTextarea.value.length);\r\n      myTextarea.value = startValue + text + endValue;\r\n      myTextarea.setSelectionRange(startPos + 1, startPos + 1);\r\n    }\r\n  });\r\n}\r\n\n\n//# sourceURL=webpack:///./src/js/options/inputFromKeyboard.js?");

/***/ }),

/***/ "./src/js/options/inputFromMouse.js":
/*!******************************************!*\
  !*** ./src/js/options/inputFromMouse.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return inputFromMouse; });\nfunction inputFromMouse(e, keyboard, myTextarea) {\r\n  if (e.target.classList.contains('keyboard__item')) {\r\n    if (\r\n      !e.target.dataset.code.match(\r\n        /Backspace|Tab|Delete|CapsLock|Enter|ShiftLeft|ArrowUp|ShiftRight|ControlLeft|Win|AltLeft|Space|AltRight|ArrowLeft|ArrowDown|ArrowRight|ControlRight/\r\n      )\r\n    ) {\r\n      let text = e.target.textContent;\r\n      let startPos = myTextarea.selectionStart,\r\n        endPos = myTextarea.selectionEnd,\r\n        startValue = myTextarea.value.substring(0, startPos),\r\n        endValue = myTextarea.value.substring(endPos, myTextarea.value.length);\r\n      myTextarea.value = startValue + text + endValue;\r\n      myTextarea.setSelectionRange(startPos + 1, startPos + 1);\r\n    }\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/js/options/inputFromMouse.js?");

/***/ }),

/***/ "./src/js/options/shift.js":
/*!*********************************!*\
  !*** ./src/js/options/shift.js ***!
  \*********************************/
/*! exports provided: shiftOn, shiftOff */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"shiftOn\", function() { return shiftOn; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"shiftOff\", function() { return shiftOff; });\nlet isUpCaps = false;\r\nlet isUpShift = false;\r\n\r\nfunction shiftOn(e, keyboard, lang) {\r\n  const { code, keyCode } = e;\r\n  e.preventDefault();\r\n  if (keyCode === 16 || e.target.getAttribute('data') == 16) {\r\n      if (keyCode) {\r\n      keyboard\r\n        .querySelector(`div[data-code=\"${code}\"]`)\r\n        .classList.add('shift--active');\r\n    } else {\r\n      let place = e.target.getAttribute('data-code');\r\n      keyboard\r\n        .querySelector(`div[data-code=\"${place}\"]`)\r\n        .classList.add('shift--active');\r\n    }\r\n\r\n    isUpShift = true;\r\n  } else if (keyCode === 20 || e.target.getAttribute('data') == 20) {\r\n    keyboard.querySelector(`div[data=\"20\"]`).classList.add('caps--active');\r\n    isUpCaps = true;\r\n  }\r\n  keyboard.querySelectorAll('.keyboard__item').forEach((el) => {\r\n    if (el.textContent.length == 1) {\r\n      if (isUpCaps && isUpShift) {\r\n        el.textContent = el.textContent.toLowerCase();\r\n      } else {\r\n        el.textContent = el.textContent.toUpperCase();\r\n      }\r\n    }\r\n\r\n    if (keyCode == 16 || e.target.getAttribute('data') == 16) {\r\n      lang.forEach((key) => {\r\n        if (el.getAttribute('data') == key['num'] && key['signOn']) {\r\n          el.textContent = key['signOn'];\r\n        }\r\n      });\r\n    }\r\n  });\r\n}\r\n\r\nfunction shiftOff(e, keyboard, lang) {\r\n  const { code, keyCode } = e;\r\n  e.preventDefault();\r\n  if (keyCode === 16 || e.target.getAttribute('data') == 16) {\r\n    if (keyCode) {\r\n      keyboard\r\n        .querySelector(`div[data-code=\"${code}\"]`)\r\n        .classList.remove('shift--active');\r\n    } else {\r\n      let place = e.target.getAttribute('data-code');\r\n      keyboard\r\n        .querySelector(`div[data-code=\"${place}\"]`)\r\n        .classList.remove('shift--active');\r\n    }\r\n\r\n    isUpShift = false;\r\n  } else if (keyCode === 20 || e.target.getAttribute('data') == 20) {\r\n    keyboard.querySelector(`div[data=\"20\"]`).classList.remove('caps--active');\r\n    isUpCaps = false;\r\n  }\r\n  keyboard.querySelectorAll('.keyboard__item').forEach((el) => {\r\n    if (el.textContent.length == 1) {\r\n      if (isUpCaps && isUpShift) {\r\n        el.textContent = el.textContent.toUpperCase();\r\n      } else if (isUpCaps || isUpShift) {\r\n        el.textContent = el.textContent.toUpperCase();\r\n      } else if (!isUpCaps && !isUpShift) {\r\n        el.textContent = el.textContent.toLowerCase();\r\n      }\r\n    }\r\n\r\n    if (e.keyCode == 16 || e.target.getAttribute('data') == 16) {\r\n      lang.forEach((key) => {\r\n        if (el.getAttribute('data') == key['num'] && key['signOn']) {\r\n          el.textContent = key['sign'];\r\n        }\r\n      });\r\n    }\r\n  });\r\n}\r\n\n\n//# sourceURL=webpack:///./src/js/options/shift.js?");

/***/ }),

/***/ "./src/js/options/space.js":
/*!*********************************!*\
  !*** ./src/js/options/space.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return space; });\nfunction space(e, myTextarea) {\r\n  if (e.target.getAttribute('data') == 32) {\r\n    let startPos = myTextarea.selectionStart,\r\n      endPos = myTextarea.selectionEnd,\r\n      startValue = myTextarea.value.substring(0, startPos),\r\n      endValue = myTextarea.value.substring(endPos, myTextarea.value.length);\r\n    myTextarea.value = startValue + ' ' + endValue;\r\n    myTextarea.setSelectionRange(startPos + 1, startPos + 1);\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/js/options/space.js?");

/***/ }),

/***/ "./src/js/options/tab.js":
/*!*******************************!*\
  !*** ./src/js/options/tab.js ***!
  \*******************************/
/*! exports provided: tabBtn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"tabBtn\", function() { return tabBtn; });\nfunction tabBtn(e, myTextarea) {\r\n  if (e.keyCode == 9 || e.target.getAttribute('data') == 9){\r\n    e.preventDefault();\r\n    let startPos = myTextarea.selectionStart,\r\n    endPos = myTextarea.selectionEnd,\r\n    startValue = myTextarea.value.substring(0, startPos),\r\n    endValue = myTextarea.value.substring(endPos, myTextarea.value.length);\r\n    myTextarea.value = startValue + '  ' + endValue;\r\n    myTextarea.setSelectionRange(startPos + 2, startPos + 2); \r\n  }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/js/options/tab.js?");

/***/ }),

/***/ "./src/sass/main.sass":
/*!****************************!*\
  !*** ./src/sass/main.sass ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./src/sass/main.sass?");

/***/ })

/******/ });
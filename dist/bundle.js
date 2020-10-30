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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return initKeys; });\nfunction initKeys(lang) {\r\n  lang.forEach((el) => {\r\n    let div = document.createElement('div');\r\n    div.className = 'keyboard__item';\r\n    div.setAttribute('data', el['num']);\r\n    if (el['right']) {\r\n      div.setAttribute('data-place', el['right']);\r\n    }\r\n    div.textContent = el['sign'];\r\n    document.querySelector('.keyboard__list').append(div);\r\n  });\r\n}\r\n\n\n//# sourceURL=webpack:///./src/js/initKeys.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ([\r\n  { sign: \"`\", signOn: \"~\", num: 192 },\r\n  { sign: \"1\", signOn: \"!\", num: 49 },\r\n  { sign: \"2\", signOn: '\"', num: 50 },\r\n  { sign: \"3\", signOn: \"#\", num: 51 },\r\n  { sign: \"4\", signOn: \"$\", num: 52 },\r\n  { sign: \"5\", signOn: \"%\", num: 53 },\r\n  { sign: \"6\", signOn: \"^\", num: 54 },\r\n  { sign: \"7\", signOn: \"&\", num: 55 },\r\n  { sign: \"8\", signOn: \"*\", num: 56 },\r\n  { sign: \"9\", signOn: \"(\", num: 57 },\r\n  { sign: \"0\", signOn: \")\", num: 48 },\r\n  { sign: \"-\", signOn: \"_\", num: 189 },\r\n  { sign: \"=\", signOn: \"+\", num: 187 },\r\n  { sign: \"Backspace\", num: 8 },\r\n\r\n  { sign: \"Tab\", num: 9 },\r\n  { sign: \"q\", num: 81 },\r\n  { sign: \"w\", num: 87 },\r\n  { sign: \"e\", num: 69 },\r\n  { sign: \"r\", num: 82 },\r\n  { sign: \"t\", num: 84 },\r\n  { sign: \"y\", num: 89 },\r\n  { sign: \"u\", num: 85 },\r\n  { sign: \"i\", num: 73 },\r\n  { sign: \"o\", num: 79 },\r\n  { sign: \"p\", num: 80 },\r\n  { sign: \"[\", signOn: \"{\", num: 219 },\r\n  { sign: \"]\", signOn: \"}\", num: 221 },\r\n  { sign: \"\\\\\", signOn: \"|\", num: 220 },\r\n  { sign: \"Del\", num: 46 },\r\n\r\n  { sign: \"Caps Lock\", num: 20 },\r\n  { sign: \"a\", num: 65 },\r\n  { sign: \"s\", num: 83 },\r\n  { sign: \"d\", num: 68 },\r\n  { sign: \"f\", num: 70 },\r\n  { sign: \"g\", num: 71 },\r\n  { sign: \"h\", num: 72 },\r\n  { sign: \"j\", num: 74 },\r\n  { sign: \"k\", num: 75 },\r\n  { sign: \"l\", num: 76 },\r\n  { sign: \";\", num: 186 },\r\n  { sign: \"'\", num: 222 },\r\n  { sign: \"Enter\", num: 13 },\r\n\r\n  { sign: \"Shift\", num: 16 },\r\n  { sign: \"z\", num: 90 },\r\n  { sign: \"x\", num: 88 },\r\n  { sign: \"c\", num: 67 },\r\n  { sign: \"v\", num: 86 },\r\n  { sign: \"b\", num: 66 },\r\n  { sign: \"n\", num: 78 },\r\n  { sign: \"m\", num: 77 },\r\n  { sign: \",\", signOn: \"<\", num: 188 },\r\n  { sign: \".\", signOn: \">\", num: 190 },\r\n  { sign: \"/\", signOn: \"?\", num: 191 },\r\n  { sign: \"⇑\", num: 38 },\r\n  { sign: \"Shift\", num: 16, right: 'ShiftRight' },\r\n\r\n  { sign: \"Ctrl\", num: 17 },\r\n  { sign: \"Win\", num: 991 },\r\n  { sign: \"Alt\", num: 18 },\r\n  { sign: \"\", num: 32 },\r\n  { sign: \"Alt\", num: 18, right: 'AltRight'},\r\n  { sign: \"⇐\", num: 37 },\r\n  { sign: \"⇓\", num: 40 },\r\n  { sign: \"⇒\", num: 39 },\r\n  { sign: \"Ctrl\", num: 17, right: 'ControlRight' }\r\n]);\r\n\n\n//# sourceURL=webpack:///./src/js/language/en.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ([\r\n  { sign: 'ё', num: 192 },\r\n  { sign: '1', signOn: '!', num: 49 },\r\n  { sign: '2', signOn: '\"', num: 50 },\r\n  { sign: '3', signOn: '№', num: 51 },\r\n  { sign: '4', signOn: ';', num: 52 },\r\n  { sign: '5', signOn: '%', num: 53 },\r\n  { sign: '6', signOn: ':', num: 54 },\r\n  { sign: '7', signOn: '?', num: 55 },\r\n  { sign: '8', signOn: '*', num: 56 },\r\n  { sign: '9', signOn: '(', num: 57 },\r\n  { sign: '0', signOn: ')', num: 48 },\r\n  { sign: '-', signOn: '_', num: 189 },\r\n  { sign: '=', signOn: '+', num: 187 },\r\n  { sign: 'Backspace', num: 8 },\r\n\r\n  { sign: 'Tab', num: 9 },\r\n  { sign: 'й', num: 81 },\r\n  { sign: 'ц', num: 87 },\r\n  { sign: 'у', num: 69 },\r\n  { sign: 'к', num: 82 },\r\n  { sign: 'е', num: 84 },\r\n  { sign: 'н', num: 89 },\r\n  { sign: 'г', num: 85 },\r\n  { sign: 'ш', num: 73 },\r\n  { sign: 'щ', num: 79 },\r\n  { sign: 'з', num: 80 },\r\n  { sign: 'х', num: 219 },\r\n  { sign: 'ъ', num: 221 },\r\n  { sign: '\\\\', signOn: '|', num: 220 },\r\n  { sign: 'Del', num: 46 },\r\n\r\n  { sign: 'Caps Lock', num: 20 },\r\n  { sign: 'ф', num: 65 },\r\n  { sign: 'ы', num: 83 },\r\n  { sign: 'в', num: 68 },\r\n  { sign: 'а', num: 70 },\r\n  { sign: 'п', num: 71 },\r\n  { sign: 'р', num: 72 },\r\n  { sign: 'о', num: 74 },\r\n  { sign: 'л', num: 75 },\r\n  { sign: 'д', num: 76 },\r\n  { sign: 'ж', num: 186 },\r\n  { sign: 'э', num: 222 },\r\n  { sign: 'Enter', num: 13 },\r\n\r\n  { sign: 'Shift', num: 16 },\r\n  { sign: 'я', num: 90 },\r\n  { sign: 'ч', num: 88 },\r\n  { sign: 'с', num: 67 },\r\n  { sign: 'м', num: 86 },\r\n  { sign: 'и', num: 66 },\r\n  { sign: 'т', num: 78 },\r\n  { sign: 'ь', num: 77 },\r\n  { sign: 'б', num: 188 },\r\n  { sign: 'ю', num: 190 },\r\n  { sign: '.', signOn: ',', num: 191 },\r\n  { sign: '⇑', num: 38 },\r\n  { sign: 'Shift', num: 16, right: 'ShiftRight' },\r\n\r\n  { sign: 'Ctrl', num: 17 },\r\n  { sign: 'Win', num: 91 },\r\n  { sign: 'Alt', num: 18 },\r\n  { sign: '', num: 32 },\r\n  { sign: 'Alt', num: 18, right: 'AltRight' },\r\n  { sign: '⇐', num: 37 },\r\n  { sign: '⇓', num: 40 },\r\n  { sign: '⇒', num: 39 },\r\n  { sign: 'Ctrl', num: 17, right: 'ControlRight' },\r\n]);\r\n\n\n//# sourceURL=webpack:///./src/js/language/ru.js?");

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _language_languages_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./language/languages.js */ \"./src/js/language/languages.js\");\n/* harmony import */ var _initStructure_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./initStructure.js */ \"./src/js/initStructure.js\");\n/* harmony import */ var _initKeys_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./initKeys.js */ \"./src/js/initKeys.js\");\n/* harmony import */ var _options_animationButtons_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./options/animationButtons.js */ \"./src/js/options/animationButtons.js\");\n/* harmony import */ var _options_inputAnimationMouse_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./options/inputAnimationMouse.js */ \"./src/js/options/inputAnimationMouse.js\");\n/* harmony import */ var _options_backspace_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./options/backspace.js */ \"./src/js/options/backspace.js\");\n/* harmony import */ var _options_space_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./options/space.js */ \"./src/js/options/space.js\");\n/* harmony import */ var _options_tab_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./options/tab.js */ \"./src/js/options/tab.js\");\n/* harmony import */ var _options_del_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./options/del.js */ \"./src/js/options/del.js\");\n/* harmony import */ var _options_enter_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./options/enter.js */ \"./src/js/options/enter.js\");\n/* harmony import */ var _options_shift_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./options/shift.js */ \"./src/js/options/shift.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n// import { changeLang, clearCache } from './options/changeLang.js';\r\n\r\n// Create structure\r\nconst keyboard = document.createElement('div'),\r\n  keyboard__wrap = document.createElement('div'),\r\n  myTextarea = document.createElement('textarea'),\r\n  myList = document.createElement('ul'),\r\n  message = document.createElement('p');\r\n\r\nObject(_initStructure_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(keyboard, keyboard__wrap, myTextarea, myList, message);\r\n\r\n// Add buttons to the DOM structure\r\nlocalStorage.getItem('lang') || localStorage.setItem('lang', 'ru');\r\nlet lang = _language_languages_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"][localStorage.getItem('lang')];\r\n\r\nObject(_initKeys_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(lang);\r\n\r\nlet shift = false;\r\nlet caps = false;\r\nfunction handler(e) {\r\n  if (e.keyCode === 18) e.preventDefault();\r\n\r\n  const { code, type, key } = e;\r\n  if (type.match(/keydown/)) {\r\n    // Add animation for key\r\n    Object(_options_animationButtons_js__WEBPACK_IMPORTED_MODULE_3__[\"addAnimationButtons\"])(e, keyboard);\r\n    // Add Tab option\r\n    Object(_options_tab_js__WEBPACK_IMPORTED_MODULE_7__[\"tabBtn\"])(e, myTextarea);\r\n\r\n    // Add Shift option\r\n    if (e.keyCode == 16) {\r\n      shift = shift ? false : true;\r\n      shift ? Object(_options_shift_js__WEBPACK_IMPORTED_MODULE_10__[\"shiftOn\"])(e, keyboard, lang) : Object(_options_shift_js__WEBPACK_IMPORTED_MODULE_10__[\"shiftOff\"])(e, keyboard, lang);\r\n    }\r\n    if (e.keyCode == 20) {\r\n      caps = caps ? false : true;\r\n      caps ? Object(_options_shift_js__WEBPACK_IMPORTED_MODULE_10__[\"shiftOn\"])(e, keyboard, lang) : Object(_options_shift_js__WEBPACK_IMPORTED_MODULE_10__[\"shiftOff\"])(e, keyboard, lang);\r\n    }\r\n    // Add change language option\r\n    // changeLang(e, keyboard, lang, languages, initKeys, 'ShiftLeft', 'AltLeft');\r\n    // changeLang(\r\n    //   e,\r\n    //   keyboard,\r\n    //   languages,\r\n    //   initKeys,\r\n    //   'ShiftRight',\r\n    //   'AltRight'\r\n    // );\r\n  } else if (type.match(/keyup/)) {\r\n    // Remove from animation from key\r\n    Object(_options_animationButtons_js__WEBPACK_IMPORTED_MODULE_3__[\"removeAnimationButtons\"])(keyboard);\r\n    // Remove Shift option\r\n    // shiftOff(e, keyboard, lang);\r\n    // Clear language cache\r\n    // clearCache(e);\r\n  }\r\n  myTextarea.focus();\r\n}\r\ndocument.addEventListener('keydown', (e) => handler(e));\r\ndocument.addEventListener('keyup', (e) => handler(e));\r\n\r\nfunction mouseHandler(e) {\r\n  const { code, type, key } = e;\r\n\r\n  if (type.match(/mousedown/)) {\r\n    // Input from mouse click\r\n    Object(_options_inputAnimationMouse_js__WEBPACK_IMPORTED_MODULE_4__[\"inputFromMouse\"])(e, keyboard, myTextarea);\r\n    // Add Backspace option\r\n    Object(_options_backspace_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(e, myTextarea);\r\n    // Add Space option\r\n    Object(_options_space_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(e, myTextarea);\r\n    // Add Tab option\r\n    Object(_options_tab_js__WEBPACK_IMPORTED_MODULE_7__[\"tabBtn\"])(e, myTextarea);\r\n    // Add Del option\r\n    Object(_options_del_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(e, myTextarea);\r\n    // Add Enter option\r\n    Object(_options_enter_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(e, myTextarea);\r\n    // Add Shift option\r\n    if (e.target.getAttribute('data') == 16) {\r\n      shift = shift ? false : true;\r\n      shift ? Object(_options_shift_js__WEBPACK_IMPORTED_MODULE_10__[\"shiftOn\"])(e, keyboard, lang) : Object(_options_shift_js__WEBPACK_IMPORTED_MODULE_10__[\"shiftOff\"])(e, keyboard, lang);\r\n    }\r\n    if (e.target.getAttribute('data') == 20) {\r\n      caps = caps ? false : true;\r\n      caps ? Object(_options_shift_js__WEBPACK_IMPORTED_MODULE_10__[\"shiftOn\"])(e, keyboard, lang) : Object(_options_shift_js__WEBPACK_IMPORTED_MODULE_10__[\"shiftOff\"])(e, keyboard, lang);\r\n    }\r\n\r\n    // console.log(e.target.getAttribute('data'))\r\n  }\r\n  if (type.match(/mouseup/)) {\r\n    // Remove animation for mouse\r\n    Object(_options_animationButtons_js__WEBPACK_IMPORTED_MODULE_3__[\"removeAnimationButtons\"])(keyboard);\r\n    // // Remove Shift option\r\n    // shiftOff(e, keyboard, lang);\r\n  }\r\n  myTextarea.focus();\r\n}\r\ndocument.addEventListener('mousedown', (e) => mouseHandler(e));\r\ndocument.addEventListener('mouseup', (e) => mouseHandler(e));\r\n\n\n//# sourceURL=webpack:///./src/js/main.js?");

/***/ }),

/***/ "./src/js/options/animationButtons.js":
/*!********************************************!*\
  !*** ./src/js/options/animationButtons.js ***!
  \********************************************/
/*! exports provided: addAnimationButtons, removeAnimationButtons */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addAnimationButtons\", function() { return addAnimationButtons; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"removeAnimationButtons\", function() { return removeAnimationButtons; });\nfunction addAnimationButtons(e, keyboard) {\r\n  if (e.code.match(/ShiftRight|ControlRight|AltRight/)) {\r\n    keyboard\r\n      .querySelector(`div[data-place=\"${e.code}\"]`)\r\n      .classList.add('active');\r\n  } else if (!e.code.match(/ShiftRight|ControlRight|AltRight/)) {\r\n    if (keyboard.querySelector(`div[data=\"${e.keyCode}\"]`)) {\r\n      keyboard\r\n        .querySelector(`div[data=\"${e.keyCode}\"]`)\r\n        .classList.add('active');\r\n    }\r\n  }\r\n}\r\n\r\nfunction removeAnimationButtons(keyboard) {\r\n  keyboard.querySelectorAll('.keyboard__item').forEach((el) => {\r\n    el.classList.remove('active');\r\n  });\r\n}\r\n\n\n//# sourceURL=webpack:///./src/js/options/animationButtons.js?");

/***/ }),

/***/ "./src/js/options/backspace.js":
/*!*************************************!*\
  !*** ./src/js/options/backspace.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return backspace; });\nfunction backspace(e, myTextarea) {\r\n  if (e.target.getAttribute('data') == 8) {\r\n    if (myTextarea.value.length > 0) {\r\n      myTextarea.value = myTextarea.value.slice(0, myTextarea.value.length - 1);\r\n    }\r\n  }\r\n}\n\n//# sourceURL=webpack:///./src/js/options/backspace.js?");

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

/***/ "./src/js/options/inputAnimationMouse.js":
/*!***********************************************!*\
  !*** ./src/js/options/inputAnimationMouse.js ***!
  \***********************************************/
/*! exports provided: inputFromMouse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"inputFromMouse\", function() { return inputFromMouse; });\nfunction inputFromMouse(e, keyboard, myTextarea) {\r\n  if (e.target.classList.contains('keyboard__item')) {\r\n    keyboard.querySelectorAll('.keyboard__item').forEach((el) => {\r\n      el.classList.remove('active');\r\n    });\r\n    if (\r\n      e.target.getAttribute('data') < 37 ||\r\n      e.target.getAttribute('data') > 40\r\n    ) {\r\n      myTextarea.value +=\r\n        e.target.textContent.length == 1 ? e.target.textContent : '';\r\n    }\r\n    e.target.classList.add('active');\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/js/options/inputAnimationMouse.js?");

/***/ }),

/***/ "./src/js/options/shift.js":
/*!*********************************!*\
  !*** ./src/js/options/shift.js ***!
  \*********************************/
/*! exports provided: shiftOn, shiftOff */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"shiftOn\", function() { return shiftOn; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"shiftOff\", function() { return shiftOff; });\nlet isUpCaps = false;\r\nlet isUpShift = false;\r\n\r\nfunction shiftOn(e, keyboard, lang) {\r\n  e.preventDefault();\r\n\r\n  if (e.keyCode === 16 || e.target.getAttribute('data') == 16) {\r\n    keyboard.querySelector(`div[data=\"16\"]`).classList.add('shift--active');\r\n    isUpShift = true;\r\n  } else if (e.keyCode === 20 || e.target.getAttribute('data') == 20) {\r\n    keyboard.querySelector(`div[data=\"20\"]`).classList.add('caps--active');\r\n    isUpCaps = true;\r\n  }\r\n  keyboard.querySelectorAll('.keyboard__item').forEach((el) => {\r\n    if (el.textContent.length == 1) {\r\n      if (isUpCaps && isUpShift) {\r\n        el.textContent = el.textContent.toLowerCase();\r\n      } else {\r\n        el.textContent = el.textContent.toUpperCase();\r\n      }\r\n    }\r\n\r\n    if (e.keyCode == 16 || e.target.getAttribute('data') == 16) {\r\n      lang.forEach((key) => {\r\n        if (el.getAttribute('data') == key['num'] && key['signOn']) {\r\n          el.textContent = key['signOn'];\r\n        }\r\n      });\r\n    }\r\n  });\r\n}\r\n\r\nfunction shiftOff(e, keyboard, lang) {\r\n  e.preventDefault();\r\n  if (e.keyCode === 16 || e.target.getAttribute('data') == 16) {\r\n    keyboard.querySelector(`div[data=\"16\"]`).classList.remove('shift--active');\r\n    isUpShift = false;\r\n  } else if (e.keyCode === 20 || e.target.getAttribute('data') == 20) {\r\n    keyboard.querySelector(`div[data=\"20\"]`).classList.remove('caps--active');\r\n    isUpCaps = false;\r\n  }\r\n  keyboard.querySelectorAll('.keyboard__item').forEach((el) => {\r\n    if (el.textContent.length == 1) {\r\n      if (isUpCaps && isUpShift) {\r\n        el.textContent = el.textContent.toUpperCase();\r\n      } else if (isUpCaps || isUpShift) {\r\n        el.textContent = el.textContent.toUpperCase();\r\n      } else if (!isUpCaps && !isUpShift) {\r\n        el.textContent = el.textContent.toLowerCase();\r\n      }\r\n    }\r\n\r\n    if (e.keyCode == 16 || e.target.getAttribute('data') == 16) {\r\n      lang.forEach((key) => {\r\n        if (el.getAttribute('data') == key['num'] && key['signOn']) {\r\n          el.textContent = key['sign'];\r\n        }\r\n      });\r\n    }\r\n  });\r\n}\r\n\n\n//# sourceURL=webpack:///./src/js/options/shift.js?");

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
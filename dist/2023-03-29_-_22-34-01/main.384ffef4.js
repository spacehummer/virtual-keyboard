"use strict";
(self["webpackChunkvirtual_keyboard"] = self["webpackChunkvirtual_keyboard"] || []).push([["main"],{

/***/ "./assets/styles/normalize.css":
/*!*************************************!*\
  !*** ./assets/styles/normalize.css ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/styles/style.css":
/*!*********************************!*\
  !*** ./assets/styles/style.css ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/BasicStructureGenerator.js":
/*!****************************************!*\
  !*** ./src/BasicStructureGenerator.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BasicStructureGenerator)
/* harmony export */ });
/* harmony import */ var _assets_js_inscriptions_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/js/inscriptions.json */ "./assets/js/inscriptions.json");
// ESLint rules per file start
/* eslint-disable no-console */
// ESLint rules per file end



// <editor-fold desc="Keys Object JSDoc">
/**
 * @typedef   {Object} keyInscriptions  - Object, parsed from JSON with info about keys.
 * @property  {Object} en               - inner Object with info
 *                                        about keys for English keyboard.
 */

/**
 * @typedef   {Object} en           - inner Object with info
 *                                    about keys for English keyboard.
 * @property  {Object} keyByNumber  - inner Object with information about separate key.
 */

/**
 * @typedef   {Object} keyByNumber    - inner Object with information about separate key.
 * @property  {String} row            - field with information
 *                                      about keyboard row of current key.
 * @property  {Object} symbolDefault  - Object with information about symbol for default state.
 * @property  {Object} symbolMod      - Object with information about symbol
 *                                      for Shift modification state.
 */

/**
 * @typedef   {Object} symbolDefault  - Object with information about symbol for default state.
 * @property  {String} symbol         - symbol or HTML mnemonic.
 * @property  {String} name           - human-readable name of symbol.
 */

/**
 * @typedef   {Object} symbolMod      - Object with information about symbol
 *                                      for Shift modification state.
 * @property  {String} symbol         - symbol or HTML mnemonic.
 * @property  {String} name           - human-readable name of symbol.
 */
// </editor-fold desc="Keys Object JSDoc">

/**
 * BasicStructureGenerator class for generate basic HTML Elements for App.
 */
class BasicStructureGenerator {
  // <editor-fold desc="Tokens">
  rootToken;
  // </editor-fold desc="Tokens">

  // <editor-fold desc="Elements">
  root;

  rootContainer;

  header;

  main;

  footer;

  container;
  // </editor-fold desc="Elements">

  inscriptions;

  keysCount;

  verboseLvl;

  constructor(rootToken, verboseLvl = 0) {
    this.verboseLvl = verboseLvl;

    this.rootToken = rootToken;
    this.root = document.querySelector(rootToken);

    this.rootContainer = null;
    this.header = null;
    this.main = null;
    this.footer = null;

    this.container = document.createElement('div');
    this.container.classList.add('container');

    /**
     * Object, parsed from JSON with info about keys.
     * @type keyInscriptions
     */
    this.inscriptions = _assets_js_inscriptions_json__WEBPACK_IMPORTED_MODULE_0__;
    this.keysCount = Object.keys(this.inscriptions.en).length;
  }

  /**
   * Generate header HTML Element and its basic content.
   */
  generateHeader() {
    this.header = document.createElement('header');
    this.header.classList.add('header');

    const headingH1 = document.createElement('h1');
    headingH1.innerText = 'Virtual keyboard';
    headingH1.classList.add('header__heading');

    this.header.appendChild(this.container.cloneNode(true));
    this.header.lastElementChild.classList.add('container--header');
    this.header.lastElementChild.appendChild(headingH1);
  }

  /**
   * Generate main HTML Element and its basic content.
   */
  generateMain() {
    this.main = document.createElement('main');
    this.main.classList.add('main');

    const keyboardAndDisplay = document.createElement('div');
    keyboardAndDisplay.classList.add('keyboard-and-display');
    const display = document.createElement('textarea');
    display.classList.add('keyboard__display');
    const keyboard = document.createElement('div');
    keyboard.classList.add('keyboard__keys-container');

    if (this.verboseLvl > 0) {
      console.log('Keys count:', this.keysCount);
    }

    for (let keyIndex = 1; keyIndex <= this.keysCount; keyIndex += 1) {
      const key = document.createElement('button');
      key.classList.add('keys__key-base');
      key.innerHTML = this.inscriptions.en[keyIndex.toString(10)].symbolDefault.symbol;
      if (this.inscriptions.en[keyIndex.toString(10)].symbolDefault.symbol === 'Backspace') {
        key.classList.add('key-base--backspace');
      }
      keyboard.appendChild(key);
    }

    keyboardAndDisplay.appendChild(display);
    keyboardAndDisplay.appendChild(keyboard);
    this.main.appendChild(this.container.cloneNode(true));
    this.main.lastElementChild.classList.add('container--main');
    this.main.lastElementChild.appendChild(keyboardAndDisplay);
  }

  /**
   * Generate footer HTML Element and its basic content.
   */
  generateFooter() {
    this.footer = document.createElement('footer');
    this.footer.classList.add('footer');
    const footerParagraphs = [];
    for (let count = 0; count <= 1; count += 1) {
      footerParagraphs.push(document.createElement('p'));
    }
    footerParagraphs[0].innerText = 'Клавиатура создана для операционной системы Windows';
    footerParagraphs[1].innerText = 'Комбинация переключения языка: левые Ctrl + Shift';

    this.footer.appendChild(this.container.cloneNode(true));
    this.footer.lastElementChild.classList.add('container--footer');

    footerParagraphs.forEach((element) => {
      this.footer.lastElementChild.appendChild(element);
    });
  }

  /**
   * Generate all basic HTML elements for App.
   */
  generateAll() {
    if (this.verboseLvl > 0) {
      console.log('**** Generating basic HTML layout... ****');
    }

    /* For debug */
    const testElement = document.createElement('div');
    testElement.style.width = '256px';
    testElement.style.height = '256px';
    testElement.style.backgroundColor = 'blue';

    /* App root element */
    this.rootContainer = document.createElement('div');
    this.rootContainer.classList.add('root-container');

    /* Generate basic elements */
    this.generateHeader();
    this.generateMain();
    this.generateFooter();

    /* Append to rootContainer */
    this.rootContainer.appendChild(this.header);
    this.rootContainer.appendChild(this.main);
    this.rootContainer.appendChild(this.footer);
  }

  appendHTMLElements() {
    /* Append to DOM */
    this.root.appendChild(this.rootContainer);
  }
}


/***/ }),

/***/ "./src/content.js":
/*!************************!*\
  !*** ./src/content.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "phrase": () => (/* binding */ phrase)
/* harmony export */ });
// ESLint rules per file start
/* eslint-disable quotes */
/*    - хочу использовать двойные кавычки для строки, как в C++ */
/* eslint-disable import/prefer-default-export */
// ESLint rules per file end

/** **** ## Declaration of phrase content in object ****
 * TODO:
 *  - [X] Move to a separate file?.. Import it to this module.
 * */
const phrase = {
  placeholder: null,
};




/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _content__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./content */ "./src/content.js");
/* harmony import */ var _BasicStructureGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BasicStructureGenerator */ "./src/BasicStructureGenerator.js");
/* harmony import */ var _assets_styles_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/styles/style.css */ "./assets/styles/style.css");
/* harmony import */ var _assets_styles_normalize_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/styles/normalize.css */ "./assets/styles/normalize.css");
// ESLint rules per file start
/* eslint-disable no-console */
// ESLint rules per file end

/**
 * Utility's import.
 */
/* Example: */
// import {
//   /* Functions: */
// getRandomInt,
//   colorGenerateRandomHex,
//   shuffleFisherYates,
//   addAllFieldsAsTextNode,
// } from "./utils";

/**
 * App phrase content import.
 */


/**
 * Basic layout generator import.
 */


/* Import Pics */
// Example: import birdPlaceholder from '../assets/images/raven_01.png';

/* Import styles */



/* Debug control. */
const debugHardcode = 1;
/**
 * TODO: get debug flag from somewhere.
 */
const debugFlag = 1;
// eslint-disable-next-line no-unneeded-ternary
const debug = debugHardcode ? debugHardcode : debugFlag;

/* Constants and vars of states and other things. */
let languageGeneral = 'en';

const basicStructureGenerator = new _BasicStructureGenerator__WEBPACK_IMPORTED_MODULE_1__["default"]('body', debug);

basicStructureGenerator.generateAll();
basicStructureGenerator.appendHTMLElements();


/***/ }),

/***/ "./assets/js/inscriptions.json":
/*!*************************************!*\
  !*** ./assets/js/inscriptions.json ***!
  \*************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"en":{"1":{"row":"1","symbolDefault":{"symbol":"&#96;","name":"Grave Accent"},"symbolMod":{"symbol":"&#126;","name":"Tilde"}},"2":{"row":"1","symbolDefault":{"symbol":"1","name":"Digit One"},"symbolMod":{"symbol":"!","name":"Exclamation Mark"}},"3":{"row":"1","symbolDefault":{"symbol":"2","name":"Digit Two"},"symbolMod":{"symbol":"&#64;","name":"Commercial At"}},"4":{"row":"1","symbolDefault":{"symbol":"3","name":"Digit Three"},"symbolMod":{"symbol":"&#35;","name":"Number Sign"}},"5":{"row":"1","symbolDefault":{"symbol":"4","name":"Digit Four"},"symbolMod":{"symbol":"&#36;","name":"Dollar Sign"}},"6":{"row":"1","symbolDefault":{"symbol":"5","name":"Digit Five"},"symbolMod":{"symbol":"&#37;","name":"Percent Sign"}},"7":{"row":"1","symbolDefault":{"symbol":"6","name":"Digit Six"},"symbolMod":{"symbol":"&#94;","name":"Circumflex Accent"}},"8":{"row":"1","symbolDefault":{"symbol":"7","name":"Digit Seven"},"symbolMod":{"symbol":"&#38;","name":"Ampersand"}},"9":{"row":"1","symbolDefault":{"symbol":"8","name":"Digit Eight"},"symbolMod":{"symbol":"&#42;","name":"Asterisk"}},"10":{"row":"1","symbolDefault":{"symbol":"9","name":"Digit Nine"},"symbolMod":{"symbol":"&#40;","name":"Left Parenthesis"}},"11":{"row":"1","symbolDefault":{"symbol":"0","name":"Digit Zero"},"symbolMod":{"symbol":"&#41;","name":"Right Parenthesis"}},"12":{"row":"1","symbolDefault":{"symbol":"-","name":"Hyphen-Minus"},"symbolMod":{"symbol":"_","name":"Low Line"}},"13":{"row":"1","symbolDefault":{"symbol":"=","name":"Equals Sign"},"symbolMod":{"symbol":"+","name":"Plus Sign"}},"14":{"row":"1","symbolDefault":{"symbol":"Backspace","name":"Backspace key"},"symbolMod":{"symbol":"none","name":"none"}},"15":{"row":"2","symbolDefault":{"symbol":"Tab","name":"Tab key"},"symbolMod":{"symbol":"none","name":"none"}},"16":{"row":"2","symbolDefault":{"symbol":"q","name":"Latin Small Letter Q"},"symbolMod":{"symbol":"Q","name":"Latin Capital Letter Q"}},"17":{"row":"2","symbolDefault":{"symbol":"w","name":"Latin Small Letter W"},"symbolMod":{"symbol":"W","name":"Latin Capital Letter W"}},"18":{"row":"2","symbolDefault":{"symbol":"e","name":"Latin Small Letter E"},"symbolMod":{"symbol":"E","name":"Latin Capital Letter E"}},"19":{"row":"2","symbolDefault":{"symbol":"r","name":"Latin Small Letter R"},"symbolMod":{"symbol":"R","name":"Latin Capital Letter R"}},"20":{"row":"2","symbolDefault":{"symbol":"t","name":"Latin Small Letter T"},"symbolMod":{"symbol":"T","name":"Latin Capital Letter T"}},"21":{"row":"2","symbolDefault":{"symbol":"y","name":"Latin Small Letter Y"},"symbolMod":{"symbol":"Y","name":"Latin Capital Letter Y"}},"22":{"row":"2","symbolDefault":{"symbol":"u","name":"Latin Small Letter U"},"symbolMod":{"symbol":"U","name":"Latin Capital Letter U"}},"23":{"row":"2","symbolDefault":{"symbol":"i","name":"Latin Small Letter I"},"symbolMod":{"symbol":"I","name":"Latin Capital Letter I"}},"24":{"row":"2","symbolDefault":{"symbol":"o","name":"Latin Small Letter O"},"symbolMod":{"symbol":"O","name":"Latin Capital Letter O"}},"25":{"row":"2","symbolDefault":{"symbol":"p","name":"Latin Small Letter P"},"symbolMod":{"symbol":"P","name":"Latin Capital Letter P"}},"26":{"row":"2","symbolDefault":{"symbol":"&#91;","name":"Left Square Bracket"},"symbolMod":{"symbol":"&#123;","name":"Left Curly Bracket"}},"27":{"row":"2","symbolDefault":{"symbol":"&#93;","name":"Right Square Bracket"},"symbolMod":{"symbol":"&#125;","name":"Right Curly Bracket"}},"28":{"row":"2","symbolDefault":{"symbol":"&#92;","name":"Reverse Solidus"},"symbolMod":{"symbol":"&#124;","name":"Vertical Line"}},"29":{"row":"2","symbolDefault":{"symbol":"Del","name":"Delete key"},"symbolMod":{"symbol":"none","name":"none"}},"30":{"row":"3","symbolDefault":{"symbol":"Caps Lock","name":"Caps Lock key"},"symbolMod":{"symbol":"none","name":"none"}},"31":{"row":"3","symbolDefault":{"symbol":"a","name":"Latin Small Letter A"},"symbolMod":{"symbol":"A","name":"Latin Capital Letter A"}},"32":{"row":"3","symbolDefault":{"symbol":"s","name":"Latin Small Letter S"},"symbolMod":{"symbol":"S","name":"Latin Capital Letter S"}},"33":{"row":"3","symbolDefault":{"symbol":"d","name":"Latin Small Letter D"},"symbolMod":{"symbol":"D","name":"Latin Capital Letter D"}},"34":{"row":"3","symbolDefault":{"symbol":"f","name":"Latin Small Letter F"},"symbolMod":{"symbol":"F","name":"Latin Capital Letter F"}},"35":{"row":"3","symbolDefault":{"symbol":"g","name":"Latin Small Letter G"},"symbolMod":{"symbol":"G","name":"Latin Capital Letter G"}},"36":{"row":"3","symbolDefault":{"symbol":"h","name":"Latin Small Letter H"},"symbolMod":{"symbol":"H","name":"Latin Capital Letter H"}},"37":{"row":"3","symbolDefault":{"symbol":"j","name":"Latin Small Letter J"},"symbolMod":{"symbol":"J","name":"Latin Capital Letter J"}},"38":{"row":"3","symbolDefault":{"symbol":"k","name":"Latin Small Letter K"},"symbolMod":{"symbol":"K","name":"Latin Capital Letter K"}},"39":{"row":"3","symbolDefault":{"symbol":"l","name":"Latin Small Letter L"},"symbolMod":{"symbol":"L","name":"Latin Capital Letter L"}},"40":{"row":"3","symbolDefault":{"symbol":";","name":"Semicolon"},"symbolMod":{"symbol":":","name":"Colon"}},"41":{"row":"3","symbolDefault":{"symbol":"&#39;","name":"Apostrophe"},"symbolMod":{"symbol":"&#34;","name":"Quotation Mark"}},"42":{"row":"3","symbolDefault":{"symbol":"Enter","name":"Enter key"},"symbolMod":{"symbol":"none","name":"none"}},"43":{"row":"4","symbolDefault":{"symbol":"Shift","name":"Left Shift key"},"symbolMod":{"symbol":"none","name":"none"}},"44":{"row":"4","symbolDefault":{"symbol":"z","name":"Latin Small Letter Z"},"symbolMod":{"symbol":"Z","name":"Latin Capital Letter Z"}},"45":{"row":"4","symbolDefault":{"symbol":"x","name":"Latin Small Letter X"},"symbolMod":{"symbol":"X","name":"Latin Capital Letter X"}},"46":{"row":"4","symbolDefault":{"symbol":"c","name":"Latin Small Letter C"},"symbolMod":{"symbol":"C","name":"Latin Capital Letter C"}},"47":{"row":"4","symbolDefault":{"symbol":"v","name":"Latin Small Letter V"},"symbolMod":{"symbol":"V","name":"Latin Capital Letter V"}},"48":{"row":"4","symbolDefault":{"symbol":"b","name":"Latin Small Letter B"},"symbolMod":{"symbol":"B","name":"Latin Capital Letter B"}},"49":{"row":"4","symbolDefault":{"symbol":"n","name":"Latin Small Letter N"},"symbolMod":{"symbol":"N","name":"Latin Capital Letter N"}},"50":{"row":"4","symbolDefault":{"symbol":"m","name":"Latin Small Letter M"},"symbolMod":{"symbol":"M","name":"Latin Capital Letter M"}},"51":{"row":"4","symbolDefault":{"symbol":",","name":"Comma"},"symbolMod":{"symbol":"<","name":"Less-Than Sign"}},"52":{"row":"4","symbolDefault":{"symbol":".","name":"Full Stop (Dot)"},"symbolMod":{"symbol":">","name":"Greater-Than Sign"}},"53":{"row":"4","symbolDefault":{"symbol":"&#47;","name":"Solidus"},"symbolMod":{"symbol":"?","name":"Question Mark"}},"54":{"row":"4","symbolDefault":{"symbol":"&#9650;","name":"Up Arrow key"},"symbolMod":{"symbol":"none","name":"none"}},"55":{"row":"4","symbolDefault":{"symbol":"Shift","name":"Right Shift key"},"symbolMod":{"symbol":"none","name":"none"}},"56":{"row":"5","symbolDefault":{"symbol":"Ctrl","name":"Left Ctrl key"},"symbolMod":{"symbol":"none","name":"none"}},"57":{"row":"5","symbolDefault":{"symbol":"Win","name":"Win key"},"symbolMod":{"symbol":"none","name":"none"}},"58":{"row":"5","symbolDefault":{"symbol":"Alt","name":"Left Alt key"},"symbolMod":{"symbol":"none","name":"none"}},"59":{"row":"5","symbolDefault":{"symbol":"Space","name":"Space key"},"symbolMod":{"symbol":"none","name":"none"}},"60":{"row":"5","symbolDefault":{"symbol":"Alt","name":"Right Alt key"},"symbolMod":{"symbol":"none","name":"none"}},"61":{"row":"5","symbolDefault":{"symbol":"&#9668;","name":"Left Arrow key"},"symbolMod":{"symbol":"none","name":"none"}},"62":{"row":"5","symbolDefault":{"symbol":"&#9660;","name":"Down Arrow key"},"symbolMod":{"symbol":"none","name":"none"}},"63":{"row":"5","symbolDefault":{"symbol":"&#9658;","name":"Right Arrow key"},"symbolMod":{"symbol":"none","name":"none"}},"64":{"row":"5","symbolDefault":{"symbol":"Ctrl","name":"Right Ctrl key"},"symbolMod":{"symbol":"none","name":"none"}}}}');

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4zODRmZmVmNC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBOztBQUUwRDs7QUFFMUQ7QUFDQTtBQUNBLGVBQWUsUUFBUTtBQUN2QixlQUFlLFFBQVE7QUFDdkI7QUFDQTs7QUFFQTtBQUNBLGVBQWUsUUFBUTtBQUN2QjtBQUNBLGVBQWUsUUFBUTtBQUN2Qjs7QUFFQTtBQUNBLGVBQWUsUUFBUTtBQUN2QixlQUFlLFFBQVE7QUFDdkI7QUFDQSxlQUFlLFFBQVE7QUFDdkIsZUFBZSxRQUFRO0FBQ3ZCO0FBQ0E7O0FBRUE7QUFDQSxlQUFlLFFBQVE7QUFDdkIsZUFBZSxRQUFRO0FBQ3ZCLGVBQWUsUUFBUTtBQUN2Qjs7QUFFQTtBQUNBLGVBQWUsUUFBUTtBQUN2QjtBQUNBLGVBQWUsUUFBUTtBQUN2QixlQUFlLFFBQVE7QUFDdkI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IseURBQVk7QUFDcEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLDJCQUEyQiw0QkFBNEI7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsWUFBWTtBQUNwQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNyTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFLRTs7Ozs7Ozs7Ozs7Ozs7OztBQ2pCRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUltQjs7QUFFbkI7QUFDQTtBQUNBO0FBQ2dFOztBQUVoRTtBQUNBOztBQUVBO0FBQ29DO0FBQ0k7O0FBRXhDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxvQ0FBb0MsZ0VBQXVCOztBQUUzRDtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdmlydHVhbC1rZXlib2FyZC8uL2Fzc2V0cy9zdHlsZXMvbm9ybWFsaXplLmNzcz9iZWExIiwid2VicGFjazovL3ZpcnR1YWwta2V5Ym9hcmQvLi9hc3NldHMvc3R5bGVzL3N0eWxlLmNzcz8yMzU4Iiwid2VicGFjazovL3ZpcnR1YWwta2V5Ym9hcmQvLi9zcmMvQmFzaWNTdHJ1Y3R1cmVHZW5lcmF0b3IuanMiLCJ3ZWJwYWNrOi8vdmlydHVhbC1rZXlib2FyZC8uL3NyYy9jb250ZW50LmpzIiwid2VicGFjazovL3ZpcnR1YWwta2V5Ym9hcmQvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gRVNMaW50IHJ1bGVzIHBlciBmaWxlIHN0YXJ0XG4vKiBlc2xpbnQtZGlzYWJsZSBuby1jb25zb2xlICovXG4vLyBFU0xpbnQgcnVsZXMgcGVyIGZpbGUgZW5kXG5cbmltcG9ydCBpbnNjcmlwdGlvbnMgZnJvbSAnLi4vYXNzZXRzL2pzL2luc2NyaXB0aW9ucy5qc29uJztcblxuLy8gPGVkaXRvci1mb2xkIGRlc2M9XCJLZXlzIE9iamVjdCBKU0RvY1wiPlxuLyoqXG4gKiBAdHlwZWRlZiAgIHtPYmplY3R9IGtleUluc2NyaXB0aW9ucyAgLSBPYmplY3QsIHBhcnNlZCBmcm9tIEpTT04gd2l0aCBpbmZvIGFib3V0IGtleXMuXG4gKiBAcHJvcGVydHkgIHtPYmplY3R9IGVuICAgICAgICAgICAgICAgLSBpbm5lciBPYmplY3Qgd2l0aCBpbmZvXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhYm91dCBrZXlzIGZvciBFbmdsaXNoIGtleWJvYXJkLlxuICovXG5cbi8qKlxuICogQHR5cGVkZWYgICB7T2JqZWN0fSBlbiAgICAgICAgICAgLSBpbm5lciBPYmplY3Qgd2l0aCBpbmZvXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFib3V0IGtleXMgZm9yIEVuZ2xpc2gga2V5Ym9hcmQuXG4gKiBAcHJvcGVydHkgIHtPYmplY3R9IGtleUJ5TnVtYmVyICAtIGlubmVyIE9iamVjdCB3aXRoIGluZm9ybWF0aW9uIGFib3V0IHNlcGFyYXRlIGtleS5cbiAqL1xuXG4vKipcbiAqIEB0eXBlZGVmICAge09iamVjdH0ga2V5QnlOdW1iZXIgICAgLSBpbm5lciBPYmplY3Qgd2l0aCBpbmZvcm1hdGlvbiBhYm91dCBzZXBhcmF0ZSBrZXkuXG4gKiBAcHJvcGVydHkgIHtTdHJpbmd9IHJvdyAgICAgICAgICAgIC0gZmllbGQgd2l0aCBpbmZvcm1hdGlvblxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFib3V0IGtleWJvYXJkIHJvdyBvZiBjdXJyZW50IGtleS5cbiAqIEBwcm9wZXJ0eSAge09iamVjdH0gc3ltYm9sRGVmYXVsdCAgLSBPYmplY3Qgd2l0aCBpbmZvcm1hdGlvbiBhYm91dCBzeW1ib2wgZm9yIGRlZmF1bHQgc3RhdGUuXG4gKiBAcHJvcGVydHkgIHtPYmplY3R9IHN5bWJvbE1vZCAgICAgIC0gT2JqZWN0IHdpdGggaW5mb3JtYXRpb24gYWJvdXQgc3ltYm9sXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIFNoaWZ0IG1vZGlmaWNhdGlvbiBzdGF0ZS5cbiAqL1xuXG4vKipcbiAqIEB0eXBlZGVmICAge09iamVjdH0gc3ltYm9sRGVmYXVsdCAgLSBPYmplY3Qgd2l0aCBpbmZvcm1hdGlvbiBhYm91dCBzeW1ib2wgZm9yIGRlZmF1bHQgc3RhdGUuXG4gKiBAcHJvcGVydHkgIHtTdHJpbmd9IHN5bWJvbCAgICAgICAgIC0gc3ltYm9sIG9yIEhUTUwgbW5lbW9uaWMuXG4gKiBAcHJvcGVydHkgIHtTdHJpbmd9IG5hbWUgICAgICAgICAgIC0gaHVtYW4tcmVhZGFibGUgbmFtZSBvZiBzeW1ib2wuXG4gKi9cblxuLyoqXG4gKiBAdHlwZWRlZiAgIHtPYmplY3R9IHN5bWJvbE1vZCAgICAgIC0gT2JqZWN0IHdpdGggaW5mb3JtYXRpb24gYWJvdXQgc3ltYm9sXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIFNoaWZ0IG1vZGlmaWNhdGlvbiBzdGF0ZS5cbiAqIEBwcm9wZXJ0eSAge1N0cmluZ30gc3ltYm9sICAgICAgICAgLSBzeW1ib2wgb3IgSFRNTCBtbmVtb25pYy5cbiAqIEBwcm9wZXJ0eSAge1N0cmluZ30gbmFtZSAgICAgICAgICAgLSBodW1hbi1yZWFkYWJsZSBuYW1lIG9mIHN5bWJvbC5cbiAqL1xuLy8gPC9lZGl0b3ItZm9sZCBkZXNjPVwiS2V5cyBPYmplY3QgSlNEb2NcIj5cblxuLyoqXG4gKiBCYXNpY1N0cnVjdHVyZUdlbmVyYXRvciBjbGFzcyBmb3IgZ2VuZXJhdGUgYmFzaWMgSFRNTCBFbGVtZW50cyBmb3IgQXBwLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCYXNpY1N0cnVjdHVyZUdlbmVyYXRvciB7XG4gIC8vIDxlZGl0b3ItZm9sZCBkZXNjPVwiVG9rZW5zXCI+XG4gIHJvb3RUb2tlbjtcbiAgLy8gPC9lZGl0b3ItZm9sZCBkZXNjPVwiVG9rZW5zXCI+XG5cbiAgLy8gPGVkaXRvci1mb2xkIGRlc2M9XCJFbGVtZW50c1wiPlxuICByb290O1xuXG4gIHJvb3RDb250YWluZXI7XG5cbiAgaGVhZGVyO1xuXG4gIG1haW47XG5cbiAgZm9vdGVyO1xuXG4gIGNvbnRhaW5lcjtcbiAgLy8gPC9lZGl0b3ItZm9sZCBkZXNjPVwiRWxlbWVudHNcIj5cblxuICBpbnNjcmlwdGlvbnM7XG5cbiAga2V5c0NvdW50O1xuXG4gIHZlcmJvc2VMdmw7XG5cbiAgY29uc3RydWN0b3Iocm9vdFRva2VuLCB2ZXJib3NlTHZsID0gMCkge1xuICAgIHRoaXMudmVyYm9zZUx2bCA9IHZlcmJvc2VMdmw7XG5cbiAgICB0aGlzLnJvb3RUb2tlbiA9IHJvb3RUb2tlbjtcbiAgICB0aGlzLnJvb3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHJvb3RUb2tlbik7XG5cbiAgICB0aGlzLnJvb3RDb250YWluZXIgPSBudWxsO1xuICAgIHRoaXMuaGVhZGVyID0gbnVsbDtcbiAgICB0aGlzLm1haW4gPSBudWxsO1xuICAgIHRoaXMuZm9vdGVyID0gbnVsbDtcblxuICAgIHRoaXMuY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGhpcy5jb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29udGFpbmVyJyk7XG5cbiAgICAvKipcbiAgICAgKiBPYmplY3QsIHBhcnNlZCBmcm9tIEpTT04gd2l0aCBpbmZvIGFib3V0IGtleXMuXG4gICAgICogQHR5cGUga2V5SW5zY3JpcHRpb25zXG4gICAgICovXG4gICAgdGhpcy5pbnNjcmlwdGlvbnMgPSBpbnNjcmlwdGlvbnM7XG4gICAgdGhpcy5rZXlzQ291bnQgPSBPYmplY3Qua2V5cyh0aGlzLmluc2NyaXB0aW9ucy5lbikubGVuZ3RoO1xuICB9XG5cbiAgLyoqXG4gICAqIEdlbmVyYXRlIGhlYWRlciBIVE1MIEVsZW1lbnQgYW5kIGl0cyBiYXNpYyBjb250ZW50LlxuICAgKi9cbiAgZ2VuZXJhdGVIZWFkZXIoKSB7XG4gICAgdGhpcy5oZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcbiAgICB0aGlzLmhlYWRlci5jbGFzc0xpc3QuYWRkKCdoZWFkZXInKTtcblxuICAgIGNvbnN0IGhlYWRpbmdIMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgaGVhZGluZ0gxLmlubmVyVGV4dCA9ICdWaXJ0dWFsIGtleWJvYXJkJztcbiAgICBoZWFkaW5nSDEuY2xhc3NMaXN0LmFkZCgnaGVhZGVyX19oZWFkaW5nJyk7XG5cbiAgICB0aGlzLmhlYWRlci5hcHBlbmRDaGlsZCh0aGlzLmNvbnRhaW5lci5jbG9uZU5vZGUodHJ1ZSkpO1xuICAgIHRoaXMuaGVhZGVyLmxhc3RFbGVtZW50Q2hpbGQuY2xhc3NMaXN0LmFkZCgnY29udGFpbmVyLS1oZWFkZXInKTtcbiAgICB0aGlzLmhlYWRlci5sYXN0RWxlbWVudENoaWxkLmFwcGVuZENoaWxkKGhlYWRpbmdIMSk7XG4gIH1cblxuICAvKipcbiAgICogR2VuZXJhdGUgbWFpbiBIVE1MIEVsZW1lbnQgYW5kIGl0cyBiYXNpYyBjb250ZW50LlxuICAgKi9cbiAgZ2VuZXJhdGVNYWluKCkge1xuICAgIHRoaXMubWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcbiAgICB0aGlzLm1haW4uY2xhc3NMaXN0LmFkZCgnbWFpbicpO1xuXG4gICAgY29uc3Qga2V5Ym9hcmRBbmREaXNwbGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAga2V5Ym9hcmRBbmREaXNwbGF5LmNsYXNzTGlzdC5hZGQoJ2tleWJvYXJkLWFuZC1kaXNwbGF5Jyk7XG4gICAgY29uc3QgZGlzcGxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gICAgZGlzcGxheS5jbGFzc0xpc3QuYWRkKCdrZXlib2FyZF9fZGlzcGxheScpO1xuICAgIGNvbnN0IGtleWJvYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAga2V5Ym9hcmQuY2xhc3NMaXN0LmFkZCgna2V5Ym9hcmRfX2tleXMtY29udGFpbmVyJyk7XG5cbiAgICBpZiAodGhpcy52ZXJib3NlTHZsID4gMCkge1xuICAgICAgY29uc29sZS5sb2coJ0tleXMgY291bnQ6JywgdGhpcy5rZXlzQ291bnQpO1xuICAgIH1cblxuICAgIGZvciAobGV0IGtleUluZGV4ID0gMTsga2V5SW5kZXggPD0gdGhpcy5rZXlzQ291bnQ7IGtleUluZGV4ICs9IDEpIHtcbiAgICAgIGNvbnN0IGtleSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAga2V5LmNsYXNzTGlzdC5hZGQoJ2tleXNfX2tleS1iYXNlJyk7XG4gICAgICBrZXkuaW5uZXJIVE1MID0gdGhpcy5pbnNjcmlwdGlvbnMuZW5ba2V5SW5kZXgudG9TdHJpbmcoMTApXS5zeW1ib2xEZWZhdWx0LnN5bWJvbDtcbiAgICAgIGlmICh0aGlzLmluc2NyaXB0aW9ucy5lbltrZXlJbmRleC50b1N0cmluZygxMCldLnN5bWJvbERlZmF1bHQuc3ltYm9sID09PSAnQmFja3NwYWNlJykge1xuICAgICAgICBrZXkuY2xhc3NMaXN0LmFkZCgna2V5LWJhc2UtLWJhY2tzcGFjZScpO1xuICAgICAgfVxuICAgICAga2V5Ym9hcmQuYXBwZW5kQ2hpbGQoa2V5KTtcbiAgICB9XG5cbiAgICBrZXlib2FyZEFuZERpc3BsYXkuYXBwZW5kQ2hpbGQoZGlzcGxheSk7XG4gICAga2V5Ym9hcmRBbmREaXNwbGF5LmFwcGVuZENoaWxkKGtleWJvYXJkKTtcbiAgICB0aGlzLm1haW4uYXBwZW5kQ2hpbGQodGhpcy5jb250YWluZXIuY2xvbmVOb2RlKHRydWUpKTtcbiAgICB0aGlzLm1haW4ubGFzdEVsZW1lbnRDaGlsZC5jbGFzc0xpc3QuYWRkKCdjb250YWluZXItLW1haW4nKTtcbiAgICB0aGlzLm1haW4ubGFzdEVsZW1lbnRDaGlsZC5hcHBlbmRDaGlsZChrZXlib2FyZEFuZERpc3BsYXkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdlbmVyYXRlIGZvb3RlciBIVE1MIEVsZW1lbnQgYW5kIGl0cyBiYXNpYyBjb250ZW50LlxuICAgKi9cbiAgZ2VuZXJhdGVGb290ZXIoKSB7XG4gICAgdGhpcy5mb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKTtcbiAgICB0aGlzLmZvb3Rlci5jbGFzc0xpc3QuYWRkKCdmb290ZXInKTtcbiAgICBjb25zdCBmb290ZXJQYXJhZ3JhcGhzID0gW107XG4gICAgZm9yIChsZXQgY291bnQgPSAwOyBjb3VudCA8PSAxOyBjb3VudCArPSAxKSB7XG4gICAgICBmb290ZXJQYXJhZ3JhcGhzLnB1c2goZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpKTtcbiAgICB9XG4gICAgZm9vdGVyUGFyYWdyYXBoc1swXS5pbm5lclRleHQgPSAn0JrQu9Cw0LLQuNCw0YLRg9GA0LAg0YHQvtC30LTQsNC90LAg0LTQu9GPINC+0L/QtdGA0LDRhtC40L7QvdC90L7QuSDRgdC40YHRgtC10LzRiyBXaW5kb3dzJztcbiAgICBmb290ZXJQYXJhZ3JhcGhzWzFdLmlubmVyVGV4dCA9ICfQmtC+0LzQsdC40L3QsNGG0LjRjyDQv9C10YDQtdC60LvRjtGH0LXQvdC40Y8g0Y/Qt9GL0LrQsDog0LvQtdCy0YvQtSBDdHJsICsgU2hpZnQnO1xuXG4gICAgdGhpcy5mb290ZXIuYXBwZW5kQ2hpbGQodGhpcy5jb250YWluZXIuY2xvbmVOb2RlKHRydWUpKTtcbiAgICB0aGlzLmZvb3Rlci5sYXN0RWxlbWVudENoaWxkLmNsYXNzTGlzdC5hZGQoJ2NvbnRhaW5lci0tZm9vdGVyJyk7XG5cbiAgICBmb290ZXJQYXJhZ3JhcGhzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgIHRoaXMuZm9vdGVyLmxhc3RFbGVtZW50Q2hpbGQuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogR2VuZXJhdGUgYWxsIGJhc2ljIEhUTUwgZWxlbWVudHMgZm9yIEFwcC5cbiAgICovXG4gIGdlbmVyYXRlQWxsKCkge1xuICAgIGlmICh0aGlzLnZlcmJvc2VMdmwgPiAwKSB7XG4gICAgICBjb25zb2xlLmxvZygnKioqKiBHZW5lcmF0aW5nIGJhc2ljIEhUTUwgbGF5b3V0Li4uICoqKionKTtcbiAgICB9XG5cbiAgICAvKiBGb3IgZGVidWcgKi9cbiAgICBjb25zdCB0ZXN0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRlc3RFbGVtZW50LnN0eWxlLndpZHRoID0gJzI1NnB4JztcbiAgICB0ZXN0RWxlbWVudC5zdHlsZS5oZWlnaHQgPSAnMjU2cHgnO1xuICAgIHRlc3RFbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdibHVlJztcblxuICAgIC8qIEFwcCByb290IGVsZW1lbnQgKi9cbiAgICB0aGlzLnJvb3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aGlzLnJvb3RDb250YWluZXIuY2xhc3NMaXN0LmFkZCgncm9vdC1jb250YWluZXInKTtcblxuICAgIC8qIEdlbmVyYXRlIGJhc2ljIGVsZW1lbnRzICovXG4gICAgdGhpcy5nZW5lcmF0ZUhlYWRlcigpO1xuICAgIHRoaXMuZ2VuZXJhdGVNYWluKCk7XG4gICAgdGhpcy5nZW5lcmF0ZUZvb3RlcigpO1xuXG4gICAgLyogQXBwZW5kIHRvIHJvb3RDb250YWluZXIgKi9cbiAgICB0aGlzLnJvb3RDb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5oZWFkZXIpO1xuICAgIHRoaXMucm9vdENvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLm1haW4pO1xuICAgIHRoaXMucm9vdENvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmZvb3Rlcik7XG4gIH1cblxuICBhcHBlbmRIVE1MRWxlbWVudHMoKSB7XG4gICAgLyogQXBwZW5kIHRvIERPTSAqL1xuICAgIHRoaXMucm9vdC5hcHBlbmRDaGlsZCh0aGlzLnJvb3RDb250YWluZXIpO1xuICB9XG59XG4iLCIvLyBFU0xpbnQgcnVsZXMgcGVyIGZpbGUgc3RhcnRcbi8qIGVzbGludC1kaXNhYmxlIHF1b3RlcyAqL1xuLyogICAgLSDRhdC+0YfRgyDQuNGB0L/QvtC70YzQt9C+0LLQsNGC0Ywg0LTQstC+0LnQvdGL0LUg0LrQsNCy0YvRh9C60Lgg0LTQu9GPINGB0YLRgNC+0LrQuCwg0LrQsNC6INCyIEMrKyAqL1xuLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L3ByZWZlci1kZWZhdWx0LWV4cG9ydCAqL1xuLy8gRVNMaW50IHJ1bGVzIHBlciBmaWxlIGVuZFxuXG4vKiogKioqKiAjIyBEZWNsYXJhdGlvbiBvZiBwaHJhc2UgY29udGVudCBpbiBvYmplY3QgKioqKlxuICogVE9ETzpcbiAqICAtIFtYXSBNb3ZlIHRvIGEgc2VwYXJhdGUgZmlsZT8uLiBJbXBvcnQgaXQgdG8gdGhpcyBtb2R1bGUuXG4gKiAqL1xuY29uc3QgcGhyYXNlID0ge1xuICBwbGFjZWhvbGRlcjogbnVsbCxcbn07XG5cbmV4cG9ydCB7XG4gIC8qIE9iamVjdHMgYW5kIHZhcnM6ICovXG4gIHBocmFzZSxcbn07XG4iLCIvLyBFU0xpbnQgcnVsZXMgcGVyIGZpbGUgc3RhcnRcbi8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnNvbGUgKi9cbi8vIEVTTGludCBydWxlcyBwZXIgZmlsZSBlbmRcblxuLyoqXG4gKiBVdGlsaXR5J3MgaW1wb3J0LlxuICovXG4vKiBFeGFtcGxlOiAqL1xuLy8gaW1wb3J0IHtcbi8vICAgLyogRnVuY3Rpb25zOiAqL1xuLy8gZ2V0UmFuZG9tSW50LFxuLy8gICBjb2xvckdlbmVyYXRlUmFuZG9tSGV4LFxuLy8gICBzaHVmZmxlRmlzaGVyWWF0ZXMsXG4vLyAgIGFkZEFsbEZpZWxkc0FzVGV4dE5vZGUsXG4vLyB9IGZyb20gXCIuL3V0aWxzXCI7XG5cbi8qKlxuICogQXBwIHBocmFzZSBjb250ZW50IGltcG9ydC5cbiAqL1xuaW1wb3J0IHtcbiAgLyogT2JqZWN0cyBhbmQgdmFyczogKi9cbiAgcGhyYXNlLFxufSBmcm9tICcuL2NvbnRlbnQnO1xuXG4vKipcbiAqIEJhc2ljIGxheW91dCBnZW5lcmF0b3IgaW1wb3J0LlxuICovXG5pbXBvcnQgQmFzaWNTdHJ1Y3R1cmVHZW5lcmF0b3IgZnJvbSAnLi9CYXNpY1N0cnVjdHVyZUdlbmVyYXRvcic7XG5cbi8qIEltcG9ydCBQaWNzICovXG4vLyBFeGFtcGxlOiBpbXBvcnQgYmlyZFBsYWNlaG9sZGVyIGZyb20gJy4uL2Fzc2V0cy9pbWFnZXMvcmF2ZW5fMDEucG5nJztcblxuLyogSW1wb3J0IHN0eWxlcyAqL1xuaW1wb3J0ICcuLi9hc3NldHMvc3R5bGVzL3N0eWxlLmNzcyc7XG5pbXBvcnQgJy4uL2Fzc2V0cy9zdHlsZXMvbm9ybWFsaXplLmNzcyc7XG5cbi8qIERlYnVnIGNvbnRyb2wuICovXG5jb25zdCBkZWJ1Z0hhcmRjb2RlID0gMTtcbi8qKlxuICogVE9ETzogZ2V0IGRlYnVnIGZsYWcgZnJvbSBzb21ld2hlcmUuXG4gKi9cbmNvbnN0IGRlYnVnRmxhZyA9IDE7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5uZWVkZWQtdGVybmFyeVxuY29uc3QgZGVidWcgPSBkZWJ1Z0hhcmRjb2RlID8gZGVidWdIYXJkY29kZSA6IGRlYnVnRmxhZztcblxuLyogQ29uc3RhbnRzIGFuZCB2YXJzIG9mIHN0YXRlcyBhbmQgb3RoZXIgdGhpbmdzLiAqL1xubGV0IGxhbmd1YWdlR2VuZXJhbCA9ICdlbic7XG5cbmNvbnN0IGJhc2ljU3RydWN0dXJlR2VuZXJhdG9yID0gbmV3IEJhc2ljU3RydWN0dXJlR2VuZXJhdG9yKCdib2R5JywgZGVidWcpO1xuXG5iYXNpY1N0cnVjdHVyZUdlbmVyYXRvci5nZW5lcmF0ZUFsbCgpO1xuYmFzaWNTdHJ1Y3R1cmVHZW5lcmF0b3IuYXBwZW5kSFRNTEVsZW1lbnRzKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
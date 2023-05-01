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
/* Import JSON with keys inscriptions and other keys info */


/**
 * TODO: rework JSON. Every button need one unique identifier. Maybe, event.code?
 *       (not deprecated event.keyCode or event.which!!!)
 *       After it, rework relevant class methods.
 * */

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

  /**
   * Keyboard keys count.
   */
  keysCount;

  /**
   * Verbose LVL for manage output to console.
   */
  verboseLvl;

  language;

  /**
   * Basic structure generator constructor.
   * @param rootToken   {String}  - Token of root element, in that we add new elements.
   * @param language    {String}  - Current App language.
   * @param verboseLvl  {number}  - verbose LVL for manage output to console.
   */
  constructor(rootToken, language, verboseLvl = 0) {
    this.verboseLvl = verboseLvl;

    this.language = language;

    this.rootToken = rootToken;
    this.root = document.querySelector(rootToken);

    /* Initialise fields for main structure elements. */
    this.rootContainer = null;
    this.header = null;
    this.main = null;
    this.footer = null;

    /* Create content container for every outer structure element. */
    this.container = document.createElement('div');
    this.container.classList.add('container');

    /**
     * Object, parsed from JSON with info about keys.
     * @type keyInscriptions
     */
    this.inscriptions = _assets_js_inscriptions_json__WEBPACK_IMPORTED_MODULE_0__;
    this.keysCount = Object.keys(this.inscriptions[this.language]).length;
  }

  /**
   * Generate header HTML Element and its basic content.
   */
  generateHeader() {
    /* Generate header */
    this.header = document.createElement('header');
    this.header.classList.add('header');

    /* Generate heading */
    const headingH1 = document.createElement('h1');
    headingH1.innerText = 'Virtual keyboard';
    headingH1.classList.add('header__heading');

    /* Append heading and container */
    this.header.appendChild(this.container.cloneNode(true));
    this.header.lastElementChild.classList.add('container--header');
    this.header.lastElementChild.appendChild(headingH1);
  }

  /**
   * Generate main HTML Element and its basic content.
   */
  generateMain() {
    /* Generate main */
    this.main = document.createElement('main');
    this.main.classList.add('main');

    /* Generate basic containers and display textarea */
    const keyboardAndDisplay = document.createElement('div');
    keyboardAndDisplay.classList.add('keyboard-and-display');
    const display = document.createElement('textarea');
    display.classList.add('keyboard__display');
    const keyboard = document.createElement('div');
    keyboard.classList.add('keyboard__keys-container');

    if (this.verboseLvl > 0) {
      // Console log with Keys count was here.
    }

    /* Generate keys, column-gaps and row-gaps, as grid elements. */
    for (let keyIndex = 1; keyIndex <= this.keysCount + (this.keysCount - 0); keyIndex += 1) {
      if (keyIndex % 2 === 0) {
        const keyNumberTmp = (keyIndex / 2).toString(10);
        /* Add key base. */
        const key = document.createElement('button');
        key.classList.add('keys__key-base');
        key.innerHTML = this.inscriptions[this.language][keyNumberTmp].symbolDefault.symbol;
        /* Add styles for keys with non-standard sizes. */
        switch ((this.inscriptions[this.language][keyNumberTmp].symbolDefault.symbol)) {
          case 'Backspace': {
            key.classList.add('key-base--backspace');
            break;
          }
          case 'Tab': {
            key.classList.add('key-base--tab');
            break;
          }
          case '&#92;': {
            key.classList.add('key-base--backslash');
            break;
          }
          case 'Caps Lock': {
            key.classList.add('key-base--capslock');
            break;
          }
          case 'Enter': {
            key.classList.add('key-base--enter');
            break;
          }
          case 'Shift': {
            if (this.inscriptions[this.language][keyNumberTmp].symbolDefault.name === 'Left Shift key') {
              key.classList.add('key-base--shift-left');
            }
            if (this.inscriptions[this.language][keyNumberTmp].symbolDefault.name === 'Right Shift key') {
              key.classList.add('key-base--shift-right');
            }
            break;
          }
          case 'Ctrl': {
            if (this.inscriptions[this.language][keyNumberTmp].symbolDefault.name === 'Left Ctrl key') {
              key.classList.add('key-base--ctrl-left');
            }
            if (this.inscriptions[this.language][keyNumberTmp].symbolDefault.name === 'Right Ctrl key') {
              key.classList.add('key-base--ctrl-right');
            }
            break;
          }
          case 'Win': {
            key.classList.add('key-base--win-left');
            break;
          }
          case 'Alt': {
            if (this.inscriptions[this.language][keyNumberTmp].symbolDefault.name === 'Left Alt key') {
              key.classList.add('key-base--alt-left');
            }
            if (this.inscriptions[this.language][keyNumberTmp].symbolDefault.name === 'Right Alt key') {
              key.classList.add('key-base--alt-right');
            }
            break;
          }
          case 'Space': {
            key.classList.add('key-base--space');
            break;
          }
          default: {
            break;
          }
        }
        keyboard.appendChild(key);
      } else if (
        (keyIndex !== 1)
        && (keyIndex !== 29)
        && (keyIndex !== 57)
        && (keyIndex !== 83)
        && (keyIndex !== 111)
      ) {
        /* Add column-gap, as div in grid. */
        const columnGapElement = document.createElement('div');
        columnGapElement.classList.add('keys__column-gap');
        keyboard.appendChild(columnGapElement);
      } else if (keyIndex !== 1) {
        /* Add row-gap, as div in grid. */
        const rowGapElement = document.createElement('div');
        rowGapElement.classList.add('keys__row-gap');
        keyboard.appendChild(rowGapElement);
      }
    }

    /* Append container, generated keyboard and display to main */
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
    /* Generate footer and paragraphs */
    this.footer = document.createElement('footer');
    this.footer.classList.add('footer');
    const footerParagraphs = [];
    for (let count = 0; count <= 1; count += 1) {
      footerParagraphs.push(document.createElement('p'));
    }
    footerParagraphs[0].innerText = 'Клавиатура создана для операционной системы Windows';
    footerParagraphs[1].innerText = 'Комбинация переключения языка: левые Ctrl + Shift';

    /* Append container and paragraphs */
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
      // Console log with message '**** Generating basic HTML layout... ****' was here.
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

/***/ "./src/KeyboardLogicManager.js":
/*!*************************************!*\
  !*** ./src/KeyboardLogicManager.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ KeyboardLogicManager)
/* harmony export */ });
/**
 * KeyboardLogicManager class for implement the logic of the virtual keyboard.
 */
class KeyboardLogicManager {
  // <editor-fold desc="Tokens">
  pageRootToken;

  keyboardToken;
  // </editor-fold desc="Tokens">

  // <editor-fold desc="Elements">
  pageRoot;

  keyboard;

  textField;
  // </editor-fold desc="Elements">

  // <editor-fold desc="Event Handlers Bounded to class context">
  keyboardEventHandlerBounded;

  virtualKeyboardEventHandlerBounded;
  // </editor-fold>

  /**
   * Verbose LVL for manage output to console.
   */
  verboseLvl;

  specialKeys;

  keysException;

  keysAlphabeticUpperCase;

  lastKeyEvent;

  textFieldChangeEvent;

  /**
   * Keyboard logic class constructor.
   * @param pageRootToken {String}  - token for App page root element.
   * @param keyboardToken {String}  - token for keyboard root element.
   * @param verboseLvl    {number}  - verbose LVL for manage output to console.
   */
  constructor(pageRootToken, keyboardToken, verboseLvl = 0) {
    this.verboseLvl = verboseLvl;

    this.pageRootToken = pageRootToken;
    this.pageRoot = document.querySelector(this.pageRootToken);

    this.keyboardToken = keyboardToken;
    this.keyboard = document.querySelector(this.keyboardToken);

    this.textField = this.keyboard.querySelector('.keyboard__display');

    this.specialKeys = [
      'Shift',
      'Caps Lock',
      'Ctrl',
      'Win',
      'Alt',
      'Tab',
    ];

    this.keysException = [
      'CapsLock',
      '\'',
      'Shift',
      'Delete',
      'Control',
      'Meta',
      'Alt',
      ' ',
      'ArrowUp',
      'ArrowDown',
      'ArrowLeft',
      'ArrowRight',
    ];

    this.keysAlphabeticUpperCase = [
      'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H',
      'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P',
      'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X',
      'Y', 'Z'];

    this.lastKeyEvent = null;

    /* Bind class context for listeners handlers, what defined as method of this class. */
    this.keyboardEventHandlerBounded = this.keyboardEventHandler.bind(this);

    this.virtualKeyboardEventHandlerBounded = this.virtualKeyboardEventHandler.bind(this);

    /* Make event for change text area */
    this.textFieldChangeEvent = new Event('change');
  }

  searchKeyAndActions(searchingText, callback, number = 0) {
    /* Find hitted key by XPath. */
    let pressedKey = null;
    if (number === 0) {
      pressedKey = document.evaluate(
        `//button[text() = "${searchingText}"]`,
        document,
        null,
        XPathResult.FIRST_ORDERED_NODE_TYPE,
        null,
      ).singleNodeValue;
    }
    if (number === 1) {
      pressedKey = document.evaluate(
        `//button[text() = "${searchingText}"]`,
        document,
        null,
        XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,
        null,
      );
      pressedKey = pressedKey.snapshotItem(number);
    }
    if (pressedKey) {
      callback(pressedKey, this.lastKeyEvent);
    } else if (this.verboseLvl > 0) {
      /* Console log with error message was here. */
    }
  }

  keyboardEventHandler(event) {
    if (this.verboseLvl > 0) {
      /* Console log with event.key info message was here. */
    }

    this.lastKeyEvent = event;

    /* Prevent default behaviour for buttons */
    event.preventDefault();

    function virtualKeyboardSimulateClickOn(key) {
      const clickSimulatedEvent = new MouseEvent(
        'click',
        {
          view: window,
          bubbles: true,
          cancelable: false,
        },
      );
      key.dispatchEvent(clickSimulatedEvent);
    }

    function changeKeyState(key, eventLocal) {
      /* Change visual */
      if (eventLocal.type === 'keydown') {
        key.classList.add('key-base--pressed');
        virtualKeyboardSimulateClickOn(key);
      } else if (eventLocal.type === 'keyup') {
        key.classList.remove('key-base--pressed');
      }
    }

    let lastKeyHit = event.key;
    if (!this.keysException.includes(lastKeyHit)) {
      if (this.keysAlphabeticUpperCase.includes(lastKeyHit)) {
        lastKeyHit = lastKeyHit.toLowerCase();
      }
      this.searchKeyAndActions(lastKeyHit, changeKeyState);
    } else if (this.keysException.includes(lastKeyHit)) {
      switch (event.key) {
        case 'CapsLock': {
          this.searchKeyAndActions('Caps Lock', changeKeyState);
          break;
        }
        case '\'': {
          this.searchKeyAndActions('\'', changeKeyState);
          break;
        }
        case 'Shift': {
          if (event.code === 'ShiftLeft') {
            this.searchKeyAndActions('Shift', changeKeyState);
          } else {
            this.searchKeyAndActions('Shift', changeKeyState, 1);
          }
          break;
        }
        case 'Delete': {
          this.searchKeyAndActions('Del', changeKeyState);
          break;
        }
        case 'Control': {
          if (event.code === 'ControlLeft') {
            this.searchKeyAndActions('Ctrl', changeKeyState);
          } else {
            this.searchKeyAndActions('Ctrl', changeKeyState, 1);
          }
          break;
        }
        case 'Meta': {
          this.searchKeyAndActions('Win', changeKeyState);
          break;
        }
        case 'Alt': {
          if (event.code === 'AltLeft') {
            this.searchKeyAndActions('Alt', changeKeyState);
          } else {
            this.searchKeyAndActions('Alt', changeKeyState, 1);
          }
          break;
        }
        case ' ': {
          this.searchKeyAndActions('Space', changeKeyState);
          break;
        }
        case 'ArrowUp': {
          this.searchKeyAndActions('▲', changeKeyState);
          break;
        }
        case 'ArrowDown': {
          this.searchKeyAndActions('▼', changeKeyState);
          break;
        }
        case 'ArrowLeft': {
          this.searchKeyAndActions('◄', changeKeyState);
          break;
        }
        case 'ArrowRight': {
          this.searchKeyAndActions('►', changeKeyState);
          break;
        }

        default: {
          break;
        }
      }
    }
  }

  deleteLastSymbol() {
    this.textField.value = this.textField.value.split('').slice(0, -1).join('');
    this.textField.dispatchEvent(this.textFieldChangeEvent);
  }

  deleteAll() {
    this.textField.value = '';
    this.textField.dispatchEvent(this.textFieldChangeEvent);
  }

  inputSymbol(symbol) {
    this.textField.value += symbol;
    this.textField.dispatchEvent(this.textFieldChangeEvent);
  }

  inputLineBreak() {
    this.textField.value += '\n';
    this.textField.dispatchEvent(this.textFieldChangeEvent);
  }

  inputSpace() {
    this.textField.value += ' ';
    this.textField.dispatchEvent(this.textFieldChangeEvent);
  }

  virtualKeyboardEventHandler(event) {
    const keyInscription = event.srcElement.innerText;

    if (!this.specialKeys.includes(keyInscription)) {
      switch (keyInscription) {
        case 'Backspace': {
          this.deleteLastSymbol();
          break;
        }
        case 'Del': {
          this.deleteAll();
          break;
        }
        case 'Space': {
          this.inputSpace();
          break;
        }
        case 'Enter': {
          this.inputLineBreak();
          break;
        }
        default: {
          this.inputSymbol(keyInscription);
          break;
        }
      }
    }
  }

  listenVirtualKeyboard() {
    document.querySelectorAll('.keys__key-base').forEach((element) => {
      element.addEventListener('click', this.virtualKeyboardEventHandlerBounded);
    });
  }

  listenPhysicalKeyboard() {
    document.addEventListener(
      'keydown',
      this.keyboardEventHandlerBounded,
    );

    document.addEventListener(
      'keyup',
      this.keyboardEventHandlerBounded,
    );
  }
}


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BasicStructureGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BasicStructureGenerator */ "./src/BasicStructureGenerator.js");
/* harmony import */ var _KeyboardLogicManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./KeyboardLogicManager */ "./src/KeyboardLogicManager.js");
/* harmony import */ var _assets_styles_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/styles/style.css */ "./assets/styles/style.css");
/* harmony import */ var _assets_styles_normalize_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/styles/normalize.css */ "./assets/styles/normalize.css");
/**
 * Basic layout generator class import.
 */


/**
 * Keyboard work logic class import.
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
const languageGeneral = 'en';

/* Onload work function: entry point for most code. */
function windowOnLoadWork() {
  /* Create basic structure generator instance. */
  const basicStructureGenerator = new _BasicStructureGenerator__WEBPACK_IMPORTED_MODULE_0__["default"](
    'body',
    languageGeneral,
    debug,
  );

  /* Generate and append generated elements to DOM. */
  basicStructureGenerator.generateAll();
  basicStructureGenerator.appendHTMLElements();

  /* Create keyboard work logic class instance.  */
  const keyboardManager = new _KeyboardLogicManager__WEBPACK_IMPORTED_MODULE_1__["default"](
    'body',
    '.keyboard-and-display',
    1,
  );

  keyboardManager.listenPhysicalKeyboard();
  keyboardManager.listenVirtualKeyboard();
}

/* Start onload work */
window.addEventListener('load', () => {
  windowOnLoadWork();
});


/***/ }),

/***/ "./assets/js/inscriptions.json":
/*!*************************************!*\
  !*** ./assets/js/inscriptions.json ***!
  \*************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"en":{"1":{"row":"1","symbolDefault":{"symbol":"&#96;","name":"Grave Accent"},"symbolMod":{"symbol":"&#126;","name":"Tilde"}},"2":{"row":"1","symbolDefault":{"symbol":"1","name":"Digit One"},"symbolMod":{"symbol":"!","name":"Exclamation Mark"}},"3":{"row":"1","symbolDefault":{"symbol":"2","name":"Digit Two"},"symbolMod":{"symbol":"&#64;","name":"Commercial At"}},"4":{"row":"1","symbolDefault":{"symbol":"3","name":"Digit Three"},"symbolMod":{"symbol":"&#35;","name":"Number Sign"}},"5":{"row":"1","symbolDefault":{"symbol":"4","name":"Digit Four"},"symbolMod":{"symbol":"&#36;","name":"Dollar Sign"}},"6":{"row":"1","symbolDefault":{"symbol":"5","name":"Digit Five"},"symbolMod":{"symbol":"&#37;","name":"Percent Sign"}},"7":{"row":"1","symbolDefault":{"symbol":"6","name":"Digit Six"},"symbolMod":{"symbol":"&#94;","name":"Circumflex Accent"}},"8":{"row":"1","symbolDefault":{"symbol":"7","name":"Digit Seven"},"symbolMod":{"symbol":"&#38;","name":"Ampersand"}},"9":{"row":"1","symbolDefault":{"symbol":"8","name":"Digit Eight"},"symbolMod":{"symbol":"&#42;","name":"Asterisk"}},"10":{"row":"1","symbolDefault":{"symbol":"9","name":"Digit Nine"},"symbolMod":{"symbol":"&#40;","name":"Left Parenthesis"}},"11":{"row":"1","symbolDefault":{"symbol":"0","name":"Digit Zero"},"symbolMod":{"symbol":"&#41;","name":"Right Parenthesis"}},"12":{"row":"1","symbolDefault":{"symbol":"-","name":"Hyphen-Minus"},"symbolMod":{"symbol":"_","name":"Low Line"}},"13":{"row":"1","symbolDefault":{"symbol":"=","name":"Equals Sign"},"symbolMod":{"symbol":"+","name":"Plus Sign"}},"14":{"row":"1","symbolDefault":{"symbol":"Backspace","name":"Backspace key"},"symbolMod":{"symbol":"none","name":"none"}},"15":{"row":"2","symbolDefault":{"symbol":"Tab","name":"Tab key"},"symbolMod":{"symbol":"none","name":"none"}},"16":{"row":"2","symbolDefault":{"symbol":"q","name":"Latin Small Letter Q"},"symbolMod":{"symbol":"Q","name":"Latin Capital Letter Q"}},"17":{"row":"2","symbolDefault":{"symbol":"w","name":"Latin Small Letter W"},"symbolMod":{"symbol":"W","name":"Latin Capital Letter W"}},"18":{"row":"2","symbolDefault":{"symbol":"e","name":"Latin Small Letter E"},"symbolMod":{"symbol":"E","name":"Latin Capital Letter E"}},"19":{"row":"2","symbolDefault":{"symbol":"r","name":"Latin Small Letter R"},"symbolMod":{"symbol":"R","name":"Latin Capital Letter R"}},"20":{"row":"2","symbolDefault":{"symbol":"t","name":"Latin Small Letter T"},"symbolMod":{"symbol":"T","name":"Latin Capital Letter T"}},"21":{"row":"2","symbolDefault":{"symbol":"y","name":"Latin Small Letter Y"},"symbolMod":{"symbol":"Y","name":"Latin Capital Letter Y"}},"22":{"row":"2","symbolDefault":{"symbol":"u","name":"Latin Small Letter U"},"symbolMod":{"symbol":"U","name":"Latin Capital Letter U"}},"23":{"row":"2","symbolDefault":{"symbol":"i","name":"Latin Small Letter I"},"symbolMod":{"symbol":"I","name":"Latin Capital Letter I"}},"24":{"row":"2","symbolDefault":{"symbol":"o","name":"Latin Small Letter O"},"symbolMod":{"symbol":"O","name":"Latin Capital Letter O"}},"25":{"row":"2","symbolDefault":{"symbol":"p","name":"Latin Small Letter P"},"symbolMod":{"symbol":"P","name":"Latin Capital Letter P"}},"26":{"row":"2","symbolDefault":{"symbol":"&#91;","name":"Left Square Bracket"},"symbolMod":{"symbol":"&#123;","name":"Left Curly Bracket"}},"27":{"row":"2","symbolDefault":{"symbol":"&#93;","name":"Right Square Bracket"},"symbolMod":{"symbol":"&#125;","name":"Right Curly Bracket"}},"28":{"row":"2","symbolDefault":{"symbol":"&#92;","name":"Reverse Solidus"},"symbolMod":{"symbol":"&#124;","name":"Vertical Line"}},"29":{"row":"3","symbolDefault":{"symbol":"Caps Lock","name":"Caps Lock key"},"symbolMod":{"symbol":"none","name":"none"}},"30":{"row":"3","symbolDefault":{"symbol":"a","name":"Latin Small Letter A"},"symbolMod":{"symbol":"A","name":"Latin Capital Letter A"}},"31":{"row":"3","symbolDefault":{"symbol":"s","name":"Latin Small Letter S"},"symbolMod":{"symbol":"S","name":"Latin Capital Letter S"}},"32":{"row":"3","symbolDefault":{"symbol":"d","name":"Latin Small Letter D"},"symbolMod":{"symbol":"D","name":"Latin Capital Letter D"}},"33":{"row":"3","symbolDefault":{"symbol":"f","name":"Latin Small Letter F"},"symbolMod":{"symbol":"F","name":"Latin Capital Letter F"}},"34":{"row":"3","symbolDefault":{"symbol":"g","name":"Latin Small Letter G"},"symbolMod":{"symbol":"G","name":"Latin Capital Letter G"}},"35":{"row":"3","symbolDefault":{"symbol":"h","name":"Latin Small Letter H"},"symbolMod":{"symbol":"H","name":"Latin Capital Letter H"}},"36":{"row":"3","symbolDefault":{"symbol":"j","name":"Latin Small Letter J"},"symbolMod":{"symbol":"J","name":"Latin Capital Letter J"}},"37":{"row":"3","symbolDefault":{"symbol":"k","name":"Latin Small Letter K"},"symbolMod":{"symbol":"K","name":"Latin Capital Letter K"}},"38":{"row":"3","symbolDefault":{"symbol":"l","name":"Latin Small Letter L"},"symbolMod":{"symbol":"L","name":"Latin Capital Letter L"}},"39":{"row":"3","symbolDefault":{"symbol":";","name":"Semicolon"},"symbolMod":{"symbol":":","name":"Colon"}},"40":{"row":"3","symbolDefault":{"symbol":"&#39;","name":"Apostrophe"},"symbolMod":{"symbol":"&#34;","name":"Quotation Mark"}},"41":{"row":"3","symbolDefault":{"symbol":"Enter","name":"Enter key"},"symbolMod":{"symbol":"none","name":"none"}},"42":{"row":"4","symbolDefault":{"symbol":"Shift","name":"Left Shift key"},"symbolMod":{"symbol":"none","name":"none"}},"43":{"row":"4","symbolDefault":{"symbol":"z","name":"Latin Small Letter Z"},"symbolMod":{"symbol":"Z","name":"Latin Capital Letter Z"}},"44":{"row":"4","symbolDefault":{"symbol":"x","name":"Latin Small Letter X"},"symbolMod":{"symbol":"X","name":"Latin Capital Letter X"}},"45":{"row":"4","symbolDefault":{"symbol":"c","name":"Latin Small Letter C"},"symbolMod":{"symbol":"C","name":"Latin Capital Letter C"}},"46":{"row":"4","symbolDefault":{"symbol":"v","name":"Latin Small Letter V"},"symbolMod":{"symbol":"V","name":"Latin Capital Letter V"}},"47":{"row":"4","symbolDefault":{"symbol":"b","name":"Latin Small Letter B"},"symbolMod":{"symbol":"B","name":"Latin Capital Letter B"}},"48":{"row":"4","symbolDefault":{"symbol":"n","name":"Latin Small Letter N"},"symbolMod":{"symbol":"N","name":"Latin Capital Letter N"}},"49":{"row":"4","symbolDefault":{"symbol":"m","name":"Latin Small Letter M"},"symbolMod":{"symbol":"M","name":"Latin Capital Letter M"}},"50":{"row":"4","symbolDefault":{"symbol":",","name":"Comma"},"symbolMod":{"symbol":"<","name":"Less-Than Sign"}},"51":{"row":"4","symbolDefault":{"symbol":".","name":"Full Stop (Dot)"},"symbolMod":{"symbol":">","name":"Greater-Than Sign"}},"52":{"row":"4","symbolDefault":{"symbol":"&#47;","name":"Solidus"},"symbolMod":{"symbol":"?","name":"Question Mark"}},"53":{"row":"4","symbolDefault":{"symbol":"Shift","name":"Right Shift key"},"symbolMod":{"symbol":"none","name":"none"}},"54":{"row":"4","symbolDefault":{"symbol":"&#9650;","name":"Up Arrow key"},"symbolMod":{"symbol":"none","name":"none"}},"55":{"row":"2","symbolDefault":{"symbol":"Del","name":"Delete key"},"symbolMod":{"symbol":"none","name":"none"}},"56":{"row":"5","symbolDefault":{"symbol":"Ctrl","name":"Left Ctrl key"},"symbolMod":{"symbol":"none","name":"none"}},"57":{"row":"5","symbolDefault":{"symbol":"Win","name":"Win key"},"symbolMod":{"symbol":"none","name":"none"}},"58":{"row":"5","symbolDefault":{"symbol":"Alt","name":"Left Alt key"},"symbolMod":{"symbol":"none","name":"none"}},"59":{"row":"5","symbolDefault":{"symbol":"Space","name":"Space key"},"symbolMod":{"symbol":"none","name":"none"}},"60":{"row":"5","symbolDefault":{"symbol":"Alt","name":"Right Alt key"},"symbolMod":{"symbol":"none","name":"none"}},"61":{"row":"5","symbolDefault":{"symbol":"Ctrl","name":"Right Ctrl key"},"symbolMod":{"symbol":"none","name":"none"}},"62":{"row":"5","symbolDefault":{"symbol":"&#9668;","name":"Left Arrow key"},"symbolMod":{"symbol":"none","name":"none"}},"63":{"row":"5","symbolDefault":{"symbol":"&#9660;","name":"Down Arrow key"},"symbolMod":{"symbol":"none","name":"none"}},"64":{"row":"5","symbolDefault":{"symbol":"&#9658;","name":"Right Arrow key"},"symbolMod":{"symbol":"none","name":"none"}}}}');

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi42NWU4NzQyYS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDMEQ7O0FBRTFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsUUFBUTtBQUN2QixlQUFlLFFBQVE7QUFDdkI7QUFDQTs7QUFFQTtBQUNBLGVBQWUsUUFBUTtBQUN2QjtBQUNBLGVBQWUsUUFBUTtBQUN2Qjs7QUFFQTtBQUNBLGVBQWUsUUFBUTtBQUN2QixlQUFlLFFBQVE7QUFDdkI7QUFDQSxlQUFlLFFBQVE7QUFDdkIsZUFBZSxRQUFRO0FBQ3ZCO0FBQ0E7O0FBRUE7QUFDQSxlQUFlLFFBQVE7QUFDdkIsZUFBZSxRQUFRO0FBQ3ZCLGVBQWUsUUFBUTtBQUN2Qjs7QUFFQTtBQUNBLGVBQWUsUUFBUTtBQUN2QjtBQUNBLGVBQWUsUUFBUTtBQUN2QixlQUFlLFFBQVE7QUFDdkI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLHlCQUF5QixTQUFTO0FBQ2xDLHlCQUF5QixTQUFTO0FBQ2xDLHlCQUF5QixTQUFTO0FBQ2xDO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHlEQUFZO0FBQ3BDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwyQkFBMkIsbURBQW1EO0FBQzlFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixZQUFZO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNoVEE7QUFDQTtBQUNBO0FBQ2U7QUFDZjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsMkJBQTJCLFNBQVM7QUFDcEMsMkJBQTJCLFNBQVM7QUFDcEMsMkJBQTJCLFNBQVM7QUFDcEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLGNBQWM7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixjQUFjO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2pUQTtBQUNBO0FBQ0E7QUFDZ0U7O0FBRWhFO0FBQ0E7QUFDQTtBQUMwRDs7QUFFMUQ7QUFDQTs7QUFFQTtBQUNvQztBQUNJOztBQUV4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLGdFQUF1QjtBQUM3RDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4QkFBOEIsNkRBQW9CO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdmlydHVhbC1rZXlib2FyZC8uL2Fzc2V0cy9zdHlsZXMvbm9ybWFsaXplLmNzcz9iZWExIiwid2VicGFjazovL3ZpcnR1YWwta2V5Ym9hcmQvLi9hc3NldHMvc3R5bGVzL3N0eWxlLmNzcz8yMzU4Iiwid2VicGFjazovL3ZpcnR1YWwta2V5Ym9hcmQvLi9zcmMvQmFzaWNTdHJ1Y3R1cmVHZW5lcmF0b3IuanMiLCJ3ZWJwYWNrOi8vdmlydHVhbC1rZXlib2FyZC8uL3NyYy9LZXlib2FyZExvZ2ljTWFuYWdlci5qcyIsIndlYnBhY2s6Ly92aXJ0dWFsLWtleWJvYXJkLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8qIEltcG9ydCBKU09OIHdpdGgga2V5cyBpbnNjcmlwdGlvbnMgYW5kIG90aGVyIGtleXMgaW5mbyAqL1xuaW1wb3J0IGluc2NyaXB0aW9ucyBmcm9tICcuLi9hc3NldHMvanMvaW5zY3JpcHRpb25zLmpzb24nO1xuXG4vKipcbiAqIFRPRE86IHJld29yayBKU09OLiBFdmVyeSBidXR0b24gbmVlZCBvbmUgdW5pcXVlIGlkZW50aWZpZXIuIE1heWJlLCBldmVudC5jb2RlP1xuICogICAgICAgKG5vdCBkZXByZWNhdGVkIGV2ZW50LmtleUNvZGUgb3IgZXZlbnQud2hpY2ghISEpXG4gKiAgICAgICBBZnRlciBpdCwgcmV3b3JrIHJlbGV2YW50IGNsYXNzIG1ldGhvZHMuXG4gKiAqL1xuXG4vLyA8ZWRpdG9yLWZvbGQgZGVzYz1cIktleXMgT2JqZWN0IEpTRG9jXCI+XG4vKipcbiAqIEB0eXBlZGVmICAge09iamVjdH0ga2V5SW5zY3JpcHRpb25zICAtIE9iamVjdCwgcGFyc2VkIGZyb20gSlNPTiB3aXRoIGluZm8gYWJvdXQga2V5cy5cbiAqIEBwcm9wZXJ0eSAge09iamVjdH0gZW4gICAgICAgICAgICAgICAtIGlubmVyIE9iamVjdCB3aXRoIGluZm9cbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFib3V0IGtleXMgZm9yIEVuZ2xpc2gga2V5Ym9hcmQuXG4gKi9cblxuLyoqXG4gKiBAdHlwZWRlZiAgIHtPYmplY3R9IGVuICAgICAgICAgICAtIGlubmVyIE9iamVjdCB3aXRoIGluZm9cbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWJvdXQga2V5cyBmb3IgRW5nbGlzaCBrZXlib2FyZC5cbiAqIEBwcm9wZXJ0eSAge09iamVjdH0ga2V5QnlOdW1iZXIgIC0gaW5uZXIgT2JqZWN0IHdpdGggaW5mb3JtYXRpb24gYWJvdXQgc2VwYXJhdGUga2V5LlxuICovXG5cbi8qKlxuICogQHR5cGVkZWYgICB7T2JqZWN0fSBrZXlCeU51bWJlciAgICAtIGlubmVyIE9iamVjdCB3aXRoIGluZm9ybWF0aW9uIGFib3V0IHNlcGFyYXRlIGtleS5cbiAqIEBwcm9wZXJ0eSAge1N0cmluZ30gcm93ICAgICAgICAgICAgLSBmaWVsZCB3aXRoIGluZm9ybWF0aW9uXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWJvdXQga2V5Ym9hcmQgcm93IG9mIGN1cnJlbnQga2V5LlxuICogQHByb3BlcnR5ICB7T2JqZWN0fSBzeW1ib2xEZWZhdWx0ICAtIE9iamVjdCB3aXRoIGluZm9ybWF0aW9uIGFib3V0IHN5bWJvbCBmb3IgZGVmYXVsdCBzdGF0ZS5cbiAqIEBwcm9wZXJ0eSAge09iamVjdH0gc3ltYm9sTW9kICAgICAgLSBPYmplY3Qgd2l0aCBpbmZvcm1hdGlvbiBhYm91dCBzeW1ib2xcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgU2hpZnQgbW9kaWZpY2F0aW9uIHN0YXRlLlxuICovXG5cbi8qKlxuICogQHR5cGVkZWYgICB7T2JqZWN0fSBzeW1ib2xEZWZhdWx0ICAtIE9iamVjdCB3aXRoIGluZm9ybWF0aW9uIGFib3V0IHN5bWJvbCBmb3IgZGVmYXVsdCBzdGF0ZS5cbiAqIEBwcm9wZXJ0eSAge1N0cmluZ30gc3ltYm9sICAgICAgICAgLSBzeW1ib2wgb3IgSFRNTCBtbmVtb25pYy5cbiAqIEBwcm9wZXJ0eSAge1N0cmluZ30gbmFtZSAgICAgICAgICAgLSBodW1hbi1yZWFkYWJsZSBuYW1lIG9mIHN5bWJvbC5cbiAqL1xuXG4vKipcbiAqIEB0eXBlZGVmICAge09iamVjdH0gc3ltYm9sTW9kICAgICAgLSBPYmplY3Qgd2l0aCBpbmZvcm1hdGlvbiBhYm91dCBzeW1ib2xcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgU2hpZnQgbW9kaWZpY2F0aW9uIHN0YXRlLlxuICogQHByb3BlcnR5ICB7U3RyaW5nfSBzeW1ib2wgICAgICAgICAtIHN5bWJvbCBvciBIVE1MIG1uZW1vbmljLlxuICogQHByb3BlcnR5ICB7U3RyaW5nfSBuYW1lICAgICAgICAgICAtIGh1bWFuLXJlYWRhYmxlIG5hbWUgb2Ygc3ltYm9sLlxuICovXG4vLyA8L2VkaXRvci1mb2xkIGRlc2M9XCJLZXlzIE9iamVjdCBKU0RvY1wiPlxuXG4vKipcbiAqIEJhc2ljU3RydWN0dXJlR2VuZXJhdG9yIGNsYXNzIGZvciBnZW5lcmF0ZSBiYXNpYyBIVE1MIEVsZW1lbnRzIGZvciBBcHAuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhc2ljU3RydWN0dXJlR2VuZXJhdG9yIHtcbiAgLy8gPGVkaXRvci1mb2xkIGRlc2M9XCJUb2tlbnNcIj5cbiAgcm9vdFRva2VuO1xuICAvLyA8L2VkaXRvci1mb2xkIGRlc2M9XCJUb2tlbnNcIj5cblxuICAvLyA8ZWRpdG9yLWZvbGQgZGVzYz1cIkVsZW1lbnRzXCI+XG4gIHJvb3Q7XG5cbiAgcm9vdENvbnRhaW5lcjtcblxuICBoZWFkZXI7XG5cbiAgbWFpbjtcblxuICBmb290ZXI7XG5cbiAgY29udGFpbmVyO1xuICAvLyA8L2VkaXRvci1mb2xkIGRlc2M9XCJFbGVtZW50c1wiPlxuXG4gIGluc2NyaXB0aW9ucztcblxuICAvKipcbiAgICogS2V5Ym9hcmQga2V5cyBjb3VudC5cbiAgICovXG4gIGtleXNDb3VudDtcblxuICAvKipcbiAgICogVmVyYm9zZSBMVkwgZm9yIG1hbmFnZSBvdXRwdXQgdG8gY29uc29sZS5cbiAgICovXG4gIHZlcmJvc2VMdmw7XG5cbiAgbGFuZ3VhZ2U7XG5cbiAgLyoqXG4gICAqIEJhc2ljIHN0cnVjdHVyZSBnZW5lcmF0b3IgY29uc3RydWN0b3IuXG4gICAqIEBwYXJhbSByb290VG9rZW4gICB7U3RyaW5nfSAgLSBUb2tlbiBvZiByb290IGVsZW1lbnQsIGluIHRoYXQgd2UgYWRkIG5ldyBlbGVtZW50cy5cbiAgICogQHBhcmFtIGxhbmd1YWdlICAgIHtTdHJpbmd9ICAtIEN1cnJlbnQgQXBwIGxhbmd1YWdlLlxuICAgKiBAcGFyYW0gdmVyYm9zZUx2bCAge251bWJlcn0gIC0gdmVyYm9zZSBMVkwgZm9yIG1hbmFnZSBvdXRwdXQgdG8gY29uc29sZS5cbiAgICovXG4gIGNvbnN0cnVjdG9yKHJvb3RUb2tlbiwgbGFuZ3VhZ2UsIHZlcmJvc2VMdmwgPSAwKSB7XG4gICAgdGhpcy52ZXJib3NlTHZsID0gdmVyYm9zZUx2bDtcblxuICAgIHRoaXMubGFuZ3VhZ2UgPSBsYW5ndWFnZTtcblxuICAgIHRoaXMucm9vdFRva2VuID0gcm9vdFRva2VuO1xuICAgIHRoaXMucm9vdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Iocm9vdFRva2VuKTtcblxuICAgIC8qIEluaXRpYWxpc2UgZmllbGRzIGZvciBtYWluIHN0cnVjdHVyZSBlbGVtZW50cy4gKi9cbiAgICB0aGlzLnJvb3RDb250YWluZXIgPSBudWxsO1xuICAgIHRoaXMuaGVhZGVyID0gbnVsbDtcbiAgICB0aGlzLm1haW4gPSBudWxsO1xuICAgIHRoaXMuZm9vdGVyID0gbnVsbDtcblxuICAgIC8qIENyZWF0ZSBjb250ZW50IGNvbnRhaW5lciBmb3IgZXZlcnkgb3V0ZXIgc3RydWN0dXJlIGVsZW1lbnQuICovXG4gICAgdGhpcy5jb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aGlzLmNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb250YWluZXInKTtcblxuICAgIC8qKlxuICAgICAqIE9iamVjdCwgcGFyc2VkIGZyb20gSlNPTiB3aXRoIGluZm8gYWJvdXQga2V5cy5cbiAgICAgKiBAdHlwZSBrZXlJbnNjcmlwdGlvbnNcbiAgICAgKi9cbiAgICB0aGlzLmluc2NyaXB0aW9ucyA9IGluc2NyaXB0aW9ucztcbiAgICB0aGlzLmtleXNDb3VudCA9IE9iamVjdC5rZXlzKHRoaXMuaW5zY3JpcHRpb25zW3RoaXMubGFuZ3VhZ2VdKS5sZW5ndGg7XG4gIH1cblxuICAvKipcbiAgICogR2VuZXJhdGUgaGVhZGVyIEhUTUwgRWxlbWVudCBhbmQgaXRzIGJhc2ljIGNvbnRlbnQuXG4gICAqL1xuICBnZW5lcmF0ZUhlYWRlcigpIHtcbiAgICAvKiBHZW5lcmF0ZSBoZWFkZXIgKi9cbiAgICB0aGlzLmhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xuICAgIHRoaXMuaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2hlYWRlcicpO1xuXG4gICAgLyogR2VuZXJhdGUgaGVhZGluZyAqL1xuICAgIGNvbnN0IGhlYWRpbmdIMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgaGVhZGluZ0gxLmlubmVyVGV4dCA9ICdWaXJ0dWFsIGtleWJvYXJkJztcbiAgICBoZWFkaW5nSDEuY2xhc3NMaXN0LmFkZCgnaGVhZGVyX19oZWFkaW5nJyk7XG5cbiAgICAvKiBBcHBlbmQgaGVhZGluZyBhbmQgY29udGFpbmVyICovXG4gICAgdGhpcy5oZWFkZXIuYXBwZW5kQ2hpbGQodGhpcy5jb250YWluZXIuY2xvbmVOb2RlKHRydWUpKTtcbiAgICB0aGlzLmhlYWRlci5sYXN0RWxlbWVudENoaWxkLmNsYXNzTGlzdC5hZGQoJ2NvbnRhaW5lci0taGVhZGVyJyk7XG4gICAgdGhpcy5oZWFkZXIubGFzdEVsZW1lbnRDaGlsZC5hcHBlbmRDaGlsZChoZWFkaW5nSDEpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdlbmVyYXRlIG1haW4gSFRNTCBFbGVtZW50IGFuZCBpdHMgYmFzaWMgY29udGVudC5cbiAgICovXG4gIGdlbmVyYXRlTWFpbigpIHtcbiAgICAvKiBHZW5lcmF0ZSBtYWluICovXG4gICAgdGhpcy5tYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xuICAgIHRoaXMubWFpbi5jbGFzc0xpc3QuYWRkKCdtYWluJyk7XG5cbiAgICAvKiBHZW5lcmF0ZSBiYXNpYyBjb250YWluZXJzIGFuZCBkaXNwbGF5IHRleHRhcmVhICovXG4gICAgY29uc3Qga2V5Ym9hcmRBbmREaXNwbGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAga2V5Ym9hcmRBbmREaXNwbGF5LmNsYXNzTGlzdC5hZGQoJ2tleWJvYXJkLWFuZC1kaXNwbGF5Jyk7XG4gICAgY29uc3QgZGlzcGxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gICAgZGlzcGxheS5jbGFzc0xpc3QuYWRkKCdrZXlib2FyZF9fZGlzcGxheScpO1xuICAgIGNvbnN0IGtleWJvYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAga2V5Ym9hcmQuY2xhc3NMaXN0LmFkZCgna2V5Ym9hcmRfX2tleXMtY29udGFpbmVyJyk7XG5cbiAgICBpZiAodGhpcy52ZXJib3NlTHZsID4gMCkge1xuICAgICAgLy8gQ29uc29sZSBsb2cgd2l0aCBLZXlzIGNvdW50IHdhcyBoZXJlLlxuICAgIH1cblxuICAgIC8qIEdlbmVyYXRlIGtleXMsIGNvbHVtbi1nYXBzIGFuZCByb3ctZ2FwcywgYXMgZ3JpZCBlbGVtZW50cy4gKi9cbiAgICBmb3IgKGxldCBrZXlJbmRleCA9IDE7IGtleUluZGV4IDw9IHRoaXMua2V5c0NvdW50ICsgKHRoaXMua2V5c0NvdW50IC0gMCk7IGtleUluZGV4ICs9IDEpIHtcbiAgICAgIGlmIChrZXlJbmRleCAlIDIgPT09IDApIHtcbiAgICAgICAgY29uc3Qga2V5TnVtYmVyVG1wID0gKGtleUluZGV4IC8gMikudG9TdHJpbmcoMTApO1xuICAgICAgICAvKiBBZGQga2V5IGJhc2UuICovXG4gICAgICAgIGNvbnN0IGtleSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBrZXkuY2xhc3NMaXN0LmFkZCgna2V5c19fa2V5LWJhc2UnKTtcbiAgICAgICAga2V5LmlubmVySFRNTCA9IHRoaXMuaW5zY3JpcHRpb25zW3RoaXMubGFuZ3VhZ2VdW2tleU51bWJlclRtcF0uc3ltYm9sRGVmYXVsdC5zeW1ib2w7XG4gICAgICAgIC8qIEFkZCBzdHlsZXMgZm9yIGtleXMgd2l0aCBub24tc3RhbmRhcmQgc2l6ZXMuICovXG4gICAgICAgIHN3aXRjaCAoKHRoaXMuaW5zY3JpcHRpb25zW3RoaXMubGFuZ3VhZ2VdW2tleU51bWJlclRtcF0uc3ltYm9sRGVmYXVsdC5zeW1ib2wpKSB7XG4gICAgICAgICAgY2FzZSAnQmFja3NwYWNlJzoge1xuICAgICAgICAgICAga2V5LmNsYXNzTGlzdC5hZGQoJ2tleS1iYXNlLS1iYWNrc3BhY2UnKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjYXNlICdUYWInOiB7XG4gICAgICAgICAgICBrZXkuY2xhc3NMaXN0LmFkZCgna2V5LWJhc2UtLXRhYicpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICAgIGNhc2UgJyYjOTI7Jzoge1xuICAgICAgICAgICAga2V5LmNsYXNzTGlzdC5hZGQoJ2tleS1iYXNlLS1iYWNrc2xhc2gnKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjYXNlICdDYXBzIExvY2snOiB7XG4gICAgICAgICAgICBrZXkuY2xhc3NMaXN0LmFkZCgna2V5LWJhc2UtLWNhcHNsb2NrJyk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgICAgY2FzZSAnRW50ZXInOiB7XG4gICAgICAgICAgICBrZXkuY2xhc3NMaXN0LmFkZCgna2V5LWJhc2UtLWVudGVyJyk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgICAgY2FzZSAnU2hpZnQnOiB7XG4gICAgICAgICAgICBpZiAodGhpcy5pbnNjcmlwdGlvbnNbdGhpcy5sYW5ndWFnZV1ba2V5TnVtYmVyVG1wXS5zeW1ib2xEZWZhdWx0Lm5hbWUgPT09ICdMZWZ0IFNoaWZ0IGtleScpIHtcbiAgICAgICAgICAgICAga2V5LmNsYXNzTGlzdC5hZGQoJ2tleS1iYXNlLS1zaGlmdC1sZWZ0Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5pbnNjcmlwdGlvbnNbdGhpcy5sYW5ndWFnZV1ba2V5TnVtYmVyVG1wXS5zeW1ib2xEZWZhdWx0Lm5hbWUgPT09ICdSaWdodCBTaGlmdCBrZXknKSB7XG4gICAgICAgICAgICAgIGtleS5jbGFzc0xpc3QuYWRkKCdrZXktYmFzZS0tc2hpZnQtcmlnaHQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjYXNlICdDdHJsJzoge1xuICAgICAgICAgICAgaWYgKHRoaXMuaW5zY3JpcHRpb25zW3RoaXMubGFuZ3VhZ2VdW2tleU51bWJlclRtcF0uc3ltYm9sRGVmYXVsdC5uYW1lID09PSAnTGVmdCBDdHJsIGtleScpIHtcbiAgICAgICAgICAgICAga2V5LmNsYXNzTGlzdC5hZGQoJ2tleS1iYXNlLS1jdHJsLWxlZnQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLmluc2NyaXB0aW9uc1t0aGlzLmxhbmd1YWdlXVtrZXlOdW1iZXJUbXBdLnN5bWJvbERlZmF1bHQubmFtZSA9PT0gJ1JpZ2h0IEN0cmwga2V5Jykge1xuICAgICAgICAgICAgICBrZXkuY2xhc3NMaXN0LmFkZCgna2V5LWJhc2UtLWN0cmwtcmlnaHQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjYXNlICdXaW4nOiB7XG4gICAgICAgICAgICBrZXkuY2xhc3NMaXN0LmFkZCgna2V5LWJhc2UtLXdpbi1sZWZ0Jyk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgICAgY2FzZSAnQWx0Jzoge1xuICAgICAgICAgICAgaWYgKHRoaXMuaW5zY3JpcHRpb25zW3RoaXMubGFuZ3VhZ2VdW2tleU51bWJlclRtcF0uc3ltYm9sRGVmYXVsdC5uYW1lID09PSAnTGVmdCBBbHQga2V5Jykge1xuICAgICAgICAgICAgICBrZXkuY2xhc3NMaXN0LmFkZCgna2V5LWJhc2UtLWFsdC1sZWZ0Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5pbnNjcmlwdGlvbnNbdGhpcy5sYW5ndWFnZV1ba2V5TnVtYmVyVG1wXS5zeW1ib2xEZWZhdWx0Lm5hbWUgPT09ICdSaWdodCBBbHQga2V5Jykge1xuICAgICAgICAgICAgICBrZXkuY2xhc3NMaXN0LmFkZCgna2V5LWJhc2UtLWFsdC1yaWdodCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICAgIGNhc2UgJ1NwYWNlJzoge1xuICAgICAgICAgICAga2V5LmNsYXNzTGlzdC5hZGQoJ2tleS1iYXNlLS1zcGFjZScpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBrZXlib2FyZC5hcHBlbmRDaGlsZChrZXkpO1xuICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgKGtleUluZGV4ICE9PSAxKVxuICAgICAgICAmJiAoa2V5SW5kZXggIT09IDI5KVxuICAgICAgICAmJiAoa2V5SW5kZXggIT09IDU3KVxuICAgICAgICAmJiAoa2V5SW5kZXggIT09IDgzKVxuICAgICAgICAmJiAoa2V5SW5kZXggIT09IDExMSlcbiAgICAgICkge1xuICAgICAgICAvKiBBZGQgY29sdW1uLWdhcCwgYXMgZGl2IGluIGdyaWQuICovXG4gICAgICAgIGNvbnN0IGNvbHVtbkdhcEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29sdW1uR2FwRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdrZXlzX19jb2x1bW4tZ2FwJyk7XG4gICAgICAgIGtleWJvYXJkLmFwcGVuZENoaWxkKGNvbHVtbkdhcEVsZW1lbnQpO1xuICAgICAgfSBlbHNlIGlmIChrZXlJbmRleCAhPT0gMSkge1xuICAgICAgICAvKiBBZGQgcm93LWdhcCwgYXMgZGl2IGluIGdyaWQuICovXG4gICAgICAgIGNvbnN0IHJvd0dhcEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgcm93R2FwRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdrZXlzX19yb3ctZ2FwJyk7XG4gICAgICAgIGtleWJvYXJkLmFwcGVuZENoaWxkKHJvd0dhcEVsZW1lbnQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qIEFwcGVuZCBjb250YWluZXIsIGdlbmVyYXRlZCBrZXlib2FyZCBhbmQgZGlzcGxheSB0byBtYWluICovXG4gICAga2V5Ym9hcmRBbmREaXNwbGF5LmFwcGVuZENoaWxkKGRpc3BsYXkpO1xuICAgIGtleWJvYXJkQW5kRGlzcGxheS5hcHBlbmRDaGlsZChrZXlib2FyZCk7XG4gICAgdGhpcy5tYWluLmFwcGVuZENoaWxkKHRoaXMuY29udGFpbmVyLmNsb25lTm9kZSh0cnVlKSk7XG4gICAgdGhpcy5tYWluLmxhc3RFbGVtZW50Q2hpbGQuY2xhc3NMaXN0LmFkZCgnY29udGFpbmVyLS1tYWluJyk7XG4gICAgdGhpcy5tYWluLmxhc3RFbGVtZW50Q2hpbGQuYXBwZW5kQ2hpbGQoa2V5Ym9hcmRBbmREaXNwbGF5KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZW5lcmF0ZSBmb290ZXIgSFRNTCBFbGVtZW50IGFuZCBpdHMgYmFzaWMgY29udGVudC5cbiAgICovXG4gIGdlbmVyYXRlRm9vdGVyKCkge1xuICAgIC8qIEdlbmVyYXRlIGZvb3RlciBhbmQgcGFyYWdyYXBocyAqL1xuICAgIHRoaXMuZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJyk7XG4gICAgdGhpcy5mb290ZXIuY2xhc3NMaXN0LmFkZCgnZm9vdGVyJyk7XG4gICAgY29uc3QgZm9vdGVyUGFyYWdyYXBocyA9IFtdO1xuICAgIGZvciAobGV0IGNvdW50ID0gMDsgY291bnQgPD0gMTsgY291bnQgKz0gMSkge1xuICAgICAgZm9vdGVyUGFyYWdyYXBocy5wdXNoKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKSk7XG4gICAgfVxuICAgIGZvb3RlclBhcmFncmFwaHNbMF0uaW5uZXJUZXh0ID0gJ9Ca0LvQsNCy0LjQsNGC0YPRgNCwINGB0L7Qt9C00LDQvdCwINC00LvRjyDQvtC/0LXRgNCw0YbQuNC+0L3QvdC+0Lkg0YHQuNGB0YLQtdC80YsgV2luZG93cyc7XG4gICAgZm9vdGVyUGFyYWdyYXBoc1sxXS5pbm5lclRleHQgPSAn0JrQvtC80LHQuNC90LDRhtC40Y8g0L/QtdGA0LXQutC70Y7Rh9C10L3QuNGPINGP0LfRi9C60LA6INC70LXQstGL0LUgQ3RybCArIFNoaWZ0JztcblxuICAgIC8qIEFwcGVuZCBjb250YWluZXIgYW5kIHBhcmFncmFwaHMgKi9cbiAgICB0aGlzLmZvb3Rlci5hcHBlbmRDaGlsZCh0aGlzLmNvbnRhaW5lci5jbG9uZU5vZGUodHJ1ZSkpO1xuICAgIHRoaXMuZm9vdGVyLmxhc3RFbGVtZW50Q2hpbGQuY2xhc3NMaXN0LmFkZCgnY29udGFpbmVyLS1mb290ZXInKTtcbiAgICBmb290ZXJQYXJhZ3JhcGhzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgIHRoaXMuZm9vdGVyLmxhc3RFbGVtZW50Q2hpbGQuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogR2VuZXJhdGUgYWxsIGJhc2ljIEhUTUwgZWxlbWVudHMgZm9yIEFwcC5cbiAgICovXG4gIGdlbmVyYXRlQWxsKCkge1xuICAgIGlmICh0aGlzLnZlcmJvc2VMdmwgPiAwKSB7XG4gICAgICAvLyBDb25zb2xlIGxvZyB3aXRoIG1lc3NhZ2UgJyoqKiogR2VuZXJhdGluZyBiYXNpYyBIVE1MIGxheW91dC4uLiAqKioqJyB3YXMgaGVyZS5cbiAgICB9XG5cbiAgICAvKiBGb3IgZGVidWcgKi9cbiAgICBjb25zdCB0ZXN0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRlc3RFbGVtZW50LnN0eWxlLndpZHRoID0gJzI1NnB4JztcbiAgICB0ZXN0RWxlbWVudC5zdHlsZS5oZWlnaHQgPSAnMjU2cHgnO1xuICAgIHRlc3RFbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdibHVlJztcblxuICAgIC8qIEFwcCByb290IGVsZW1lbnQgKi9cbiAgICB0aGlzLnJvb3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aGlzLnJvb3RDb250YWluZXIuY2xhc3NMaXN0LmFkZCgncm9vdC1jb250YWluZXInKTtcblxuICAgIC8qIEdlbmVyYXRlIGJhc2ljIGVsZW1lbnRzICovXG4gICAgdGhpcy5nZW5lcmF0ZUhlYWRlcigpO1xuICAgIHRoaXMuZ2VuZXJhdGVNYWluKCk7XG4gICAgdGhpcy5nZW5lcmF0ZUZvb3RlcigpO1xuXG4gICAgLyogQXBwZW5kIHRvIHJvb3RDb250YWluZXIgKi9cbiAgICB0aGlzLnJvb3RDb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5oZWFkZXIpO1xuICAgIHRoaXMucm9vdENvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLm1haW4pO1xuICAgIHRoaXMucm9vdENvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmZvb3Rlcik7XG4gIH1cblxuICBhcHBlbmRIVE1MRWxlbWVudHMoKSB7XG4gICAgLyogQXBwZW5kIHRvIERPTSAqL1xuICAgIHRoaXMucm9vdC5hcHBlbmRDaGlsZCh0aGlzLnJvb3RDb250YWluZXIpO1xuICB9XG59XG4iLCIvKipcbiAqIEtleWJvYXJkTG9naWNNYW5hZ2VyIGNsYXNzIGZvciBpbXBsZW1lbnQgdGhlIGxvZ2ljIG9mIHRoZSB2aXJ0dWFsIGtleWJvYXJkLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBLZXlib2FyZExvZ2ljTWFuYWdlciB7XG4gIC8vIDxlZGl0b3ItZm9sZCBkZXNjPVwiVG9rZW5zXCI+XG4gIHBhZ2VSb290VG9rZW47XG5cbiAga2V5Ym9hcmRUb2tlbjtcbiAgLy8gPC9lZGl0b3ItZm9sZCBkZXNjPVwiVG9rZW5zXCI+XG5cbiAgLy8gPGVkaXRvci1mb2xkIGRlc2M9XCJFbGVtZW50c1wiPlxuICBwYWdlUm9vdDtcblxuICBrZXlib2FyZDtcblxuICB0ZXh0RmllbGQ7XG4gIC8vIDwvZWRpdG9yLWZvbGQgZGVzYz1cIkVsZW1lbnRzXCI+XG5cbiAgLy8gPGVkaXRvci1mb2xkIGRlc2M9XCJFdmVudCBIYW5kbGVycyBCb3VuZGVkIHRvIGNsYXNzIGNvbnRleHRcIj5cbiAga2V5Ym9hcmRFdmVudEhhbmRsZXJCb3VuZGVkO1xuXG4gIHZpcnR1YWxLZXlib2FyZEV2ZW50SGFuZGxlckJvdW5kZWQ7XG4gIC8vIDwvZWRpdG9yLWZvbGQ+XG5cbiAgLyoqXG4gICAqIFZlcmJvc2UgTFZMIGZvciBtYW5hZ2Ugb3V0cHV0IHRvIGNvbnNvbGUuXG4gICAqL1xuICB2ZXJib3NlTHZsO1xuXG4gIHNwZWNpYWxLZXlzO1xuXG4gIGtleXNFeGNlcHRpb247XG5cbiAga2V5c0FscGhhYmV0aWNVcHBlckNhc2U7XG5cbiAgbGFzdEtleUV2ZW50O1xuXG4gIHRleHRGaWVsZENoYW5nZUV2ZW50O1xuXG4gIC8qKlxuICAgKiBLZXlib2FyZCBsb2dpYyBjbGFzcyBjb25zdHJ1Y3Rvci5cbiAgICogQHBhcmFtIHBhZ2VSb290VG9rZW4ge1N0cmluZ30gIC0gdG9rZW4gZm9yIEFwcCBwYWdlIHJvb3QgZWxlbWVudC5cbiAgICogQHBhcmFtIGtleWJvYXJkVG9rZW4ge1N0cmluZ30gIC0gdG9rZW4gZm9yIGtleWJvYXJkIHJvb3QgZWxlbWVudC5cbiAgICogQHBhcmFtIHZlcmJvc2VMdmwgICAge251bWJlcn0gIC0gdmVyYm9zZSBMVkwgZm9yIG1hbmFnZSBvdXRwdXQgdG8gY29uc29sZS5cbiAgICovXG4gIGNvbnN0cnVjdG9yKHBhZ2VSb290VG9rZW4sIGtleWJvYXJkVG9rZW4sIHZlcmJvc2VMdmwgPSAwKSB7XG4gICAgdGhpcy52ZXJib3NlTHZsID0gdmVyYm9zZUx2bDtcblxuICAgIHRoaXMucGFnZVJvb3RUb2tlbiA9IHBhZ2VSb290VG9rZW47XG4gICAgdGhpcy5wYWdlUm9vdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5wYWdlUm9vdFRva2VuKTtcblxuICAgIHRoaXMua2V5Ym9hcmRUb2tlbiA9IGtleWJvYXJkVG9rZW47XG4gICAgdGhpcy5rZXlib2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5rZXlib2FyZFRva2VuKTtcblxuICAgIHRoaXMudGV4dEZpZWxkID0gdGhpcy5rZXlib2FyZC5xdWVyeVNlbGVjdG9yKCcua2V5Ym9hcmRfX2Rpc3BsYXknKTtcblxuICAgIHRoaXMuc3BlY2lhbEtleXMgPSBbXG4gICAgICAnU2hpZnQnLFxuICAgICAgJ0NhcHMgTG9jaycsXG4gICAgICAnQ3RybCcsXG4gICAgICAnV2luJyxcbiAgICAgICdBbHQnLFxuICAgICAgJ1RhYicsXG4gICAgXTtcblxuICAgIHRoaXMua2V5c0V4Y2VwdGlvbiA9IFtcbiAgICAgICdDYXBzTG9jaycsXG4gICAgICAnXFwnJyxcbiAgICAgICdTaGlmdCcsXG4gICAgICAnRGVsZXRlJyxcbiAgICAgICdDb250cm9sJyxcbiAgICAgICdNZXRhJyxcbiAgICAgICdBbHQnLFxuICAgICAgJyAnLFxuICAgICAgJ0Fycm93VXAnLFxuICAgICAgJ0Fycm93RG93bicsXG4gICAgICAnQXJyb3dMZWZ0JyxcbiAgICAgICdBcnJvd1JpZ2h0JyxcbiAgICBdO1xuXG4gICAgdGhpcy5rZXlzQWxwaGFiZXRpY1VwcGVyQ2FzZSA9IFtcbiAgICAgICdBJywgJ0InLCAnQycsICdEJywgJ0UnLCAnRicsICdHJywgJ0gnLFxuICAgICAgJ0knLCAnSicsICdLJywgJ0wnLCAnTScsICdOJywgJ08nLCAnUCcsXG4gICAgICAnUScsICdSJywgJ1MnLCAnVCcsICdVJywgJ1YnLCAnVycsICdYJyxcbiAgICAgICdZJywgJ1onXTtcblxuICAgIHRoaXMubGFzdEtleUV2ZW50ID0gbnVsbDtcblxuICAgIC8qIEJpbmQgY2xhc3MgY29udGV4dCBmb3IgbGlzdGVuZXJzIGhhbmRsZXJzLCB3aGF0IGRlZmluZWQgYXMgbWV0aG9kIG9mIHRoaXMgY2xhc3MuICovXG4gICAgdGhpcy5rZXlib2FyZEV2ZW50SGFuZGxlckJvdW5kZWQgPSB0aGlzLmtleWJvYXJkRXZlbnRIYW5kbGVyLmJpbmQodGhpcyk7XG5cbiAgICB0aGlzLnZpcnR1YWxLZXlib2FyZEV2ZW50SGFuZGxlckJvdW5kZWQgPSB0aGlzLnZpcnR1YWxLZXlib2FyZEV2ZW50SGFuZGxlci5iaW5kKHRoaXMpO1xuXG4gICAgLyogTWFrZSBldmVudCBmb3IgY2hhbmdlIHRleHQgYXJlYSAqL1xuICAgIHRoaXMudGV4dEZpZWxkQ2hhbmdlRXZlbnQgPSBuZXcgRXZlbnQoJ2NoYW5nZScpO1xuICB9XG5cbiAgc2VhcmNoS2V5QW5kQWN0aW9ucyhzZWFyY2hpbmdUZXh0LCBjYWxsYmFjaywgbnVtYmVyID0gMCkge1xuICAgIC8qIEZpbmQgaGl0dGVkIGtleSBieSBYUGF0aC4gKi9cbiAgICBsZXQgcHJlc3NlZEtleSA9IG51bGw7XG4gICAgaWYgKG51bWJlciA9PT0gMCkge1xuICAgICAgcHJlc3NlZEtleSA9IGRvY3VtZW50LmV2YWx1YXRlKFxuICAgICAgICBgLy9idXR0b25bdGV4dCgpID0gXCIke3NlYXJjaGluZ1RleHR9XCJdYCxcbiAgICAgICAgZG9jdW1lbnQsXG4gICAgICAgIG51bGwsXG4gICAgICAgIFhQYXRoUmVzdWx0LkZJUlNUX09SREVSRURfTk9ERV9UWVBFLFxuICAgICAgICBudWxsLFxuICAgICAgKS5zaW5nbGVOb2RlVmFsdWU7XG4gICAgfVxuICAgIGlmIChudW1iZXIgPT09IDEpIHtcbiAgICAgIHByZXNzZWRLZXkgPSBkb2N1bWVudC5ldmFsdWF0ZShcbiAgICAgICAgYC8vYnV0dG9uW3RleHQoKSA9IFwiJHtzZWFyY2hpbmdUZXh0fVwiXWAsXG4gICAgICAgIGRvY3VtZW50LFxuICAgICAgICBudWxsLFxuICAgICAgICBYUGF0aFJlc3VsdC5PUkRFUkVEX05PREVfU05BUFNIT1RfVFlQRSxcbiAgICAgICAgbnVsbCxcbiAgICAgICk7XG4gICAgICBwcmVzc2VkS2V5ID0gcHJlc3NlZEtleS5zbmFwc2hvdEl0ZW0obnVtYmVyKTtcbiAgICB9XG4gICAgaWYgKHByZXNzZWRLZXkpIHtcbiAgICAgIGNhbGxiYWNrKHByZXNzZWRLZXksIHRoaXMubGFzdEtleUV2ZW50KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMudmVyYm9zZUx2bCA+IDApIHtcbiAgICAgIC8qIENvbnNvbGUgbG9nIHdpdGggZXJyb3IgbWVzc2FnZSB3YXMgaGVyZS4gKi9cbiAgICB9XG4gIH1cblxuICBrZXlib2FyZEV2ZW50SGFuZGxlcihldmVudCkge1xuICAgIGlmICh0aGlzLnZlcmJvc2VMdmwgPiAwKSB7XG4gICAgICAvKiBDb25zb2xlIGxvZyB3aXRoIGV2ZW50LmtleSBpbmZvIG1lc3NhZ2Ugd2FzIGhlcmUuICovXG4gICAgfVxuXG4gICAgdGhpcy5sYXN0S2V5RXZlbnQgPSBldmVudDtcblxuICAgIC8qIFByZXZlbnQgZGVmYXVsdCBiZWhhdmlvdXIgZm9yIGJ1dHRvbnMgKi9cbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgZnVuY3Rpb24gdmlydHVhbEtleWJvYXJkU2ltdWxhdGVDbGlja09uKGtleSkge1xuICAgICAgY29uc3QgY2xpY2tTaW11bGF0ZWRFdmVudCA9IG5ldyBNb3VzZUV2ZW50KFxuICAgICAgICAnY2xpY2snLFxuICAgICAgICB7XG4gICAgICAgICAgdmlldzogd2luZG93LFxuICAgICAgICAgIGJ1YmJsZXM6IHRydWUsXG4gICAgICAgICAgY2FuY2VsYWJsZTogZmFsc2UsXG4gICAgICAgIH0sXG4gICAgICApO1xuICAgICAga2V5LmRpc3BhdGNoRXZlbnQoY2xpY2tTaW11bGF0ZWRFdmVudCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2hhbmdlS2V5U3RhdGUoa2V5LCBldmVudExvY2FsKSB7XG4gICAgICAvKiBDaGFuZ2UgdmlzdWFsICovXG4gICAgICBpZiAoZXZlbnRMb2NhbC50eXBlID09PSAna2V5ZG93bicpIHtcbiAgICAgICAga2V5LmNsYXNzTGlzdC5hZGQoJ2tleS1iYXNlLS1wcmVzc2VkJyk7XG4gICAgICAgIHZpcnR1YWxLZXlib2FyZFNpbXVsYXRlQ2xpY2tPbihrZXkpO1xuICAgICAgfSBlbHNlIGlmIChldmVudExvY2FsLnR5cGUgPT09ICdrZXl1cCcpIHtcbiAgICAgICAga2V5LmNsYXNzTGlzdC5yZW1vdmUoJ2tleS1iYXNlLS1wcmVzc2VkJyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGV0IGxhc3RLZXlIaXQgPSBldmVudC5rZXk7XG4gICAgaWYgKCF0aGlzLmtleXNFeGNlcHRpb24uaW5jbHVkZXMobGFzdEtleUhpdCkpIHtcbiAgICAgIGlmICh0aGlzLmtleXNBbHBoYWJldGljVXBwZXJDYXNlLmluY2x1ZGVzKGxhc3RLZXlIaXQpKSB7XG4gICAgICAgIGxhc3RLZXlIaXQgPSBsYXN0S2V5SGl0LnRvTG93ZXJDYXNlKCk7XG4gICAgICB9XG4gICAgICB0aGlzLnNlYXJjaEtleUFuZEFjdGlvbnMobGFzdEtleUhpdCwgY2hhbmdlS2V5U3RhdGUpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5rZXlzRXhjZXB0aW9uLmluY2x1ZGVzKGxhc3RLZXlIaXQpKSB7XG4gICAgICBzd2l0Y2ggKGV2ZW50LmtleSkge1xuICAgICAgICBjYXNlICdDYXBzTG9jayc6IHtcbiAgICAgICAgICB0aGlzLnNlYXJjaEtleUFuZEFjdGlvbnMoJ0NhcHMgTG9jaycsIGNoYW5nZUtleVN0YXRlKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBjYXNlICdcXCcnOiB7XG4gICAgICAgICAgdGhpcy5zZWFyY2hLZXlBbmRBY3Rpb25zKCdcXCcnLCBjaGFuZ2VLZXlTdGF0ZSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSAnU2hpZnQnOiB7XG4gICAgICAgICAgaWYgKGV2ZW50LmNvZGUgPT09ICdTaGlmdExlZnQnKSB7XG4gICAgICAgICAgICB0aGlzLnNlYXJjaEtleUFuZEFjdGlvbnMoJ1NoaWZ0JywgY2hhbmdlS2V5U3RhdGUpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNlYXJjaEtleUFuZEFjdGlvbnMoJ1NoaWZ0JywgY2hhbmdlS2V5U3RhdGUsIDEpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBjYXNlICdEZWxldGUnOiB7XG4gICAgICAgICAgdGhpcy5zZWFyY2hLZXlBbmRBY3Rpb25zKCdEZWwnLCBjaGFuZ2VLZXlTdGF0ZSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSAnQ29udHJvbCc6IHtcbiAgICAgICAgICBpZiAoZXZlbnQuY29kZSA9PT0gJ0NvbnRyb2xMZWZ0Jykge1xuICAgICAgICAgICAgdGhpcy5zZWFyY2hLZXlBbmRBY3Rpb25zKCdDdHJsJywgY2hhbmdlS2V5U3RhdGUpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNlYXJjaEtleUFuZEFjdGlvbnMoJ0N0cmwnLCBjaGFuZ2VLZXlTdGF0ZSwgMSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGNhc2UgJ01ldGEnOiB7XG4gICAgICAgICAgdGhpcy5zZWFyY2hLZXlBbmRBY3Rpb25zKCdXaW4nLCBjaGFuZ2VLZXlTdGF0ZSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSAnQWx0Jzoge1xuICAgICAgICAgIGlmIChldmVudC5jb2RlID09PSAnQWx0TGVmdCcpIHtcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoS2V5QW5kQWN0aW9ucygnQWx0JywgY2hhbmdlS2V5U3RhdGUpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNlYXJjaEtleUFuZEFjdGlvbnMoJ0FsdCcsIGNoYW5nZUtleVN0YXRlLCAxKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSAnICc6IHtcbiAgICAgICAgICB0aGlzLnNlYXJjaEtleUFuZEFjdGlvbnMoJ1NwYWNlJywgY2hhbmdlS2V5U3RhdGUpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGNhc2UgJ0Fycm93VXAnOiB7XG4gICAgICAgICAgdGhpcy5zZWFyY2hLZXlBbmRBY3Rpb25zKCfilrInLCBjaGFuZ2VLZXlTdGF0ZSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSAnQXJyb3dEb3duJzoge1xuICAgICAgICAgIHRoaXMuc2VhcmNoS2V5QW5kQWN0aW9ucygn4pa8JywgY2hhbmdlS2V5U3RhdGUpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGNhc2UgJ0Fycm93TGVmdCc6IHtcbiAgICAgICAgICB0aGlzLnNlYXJjaEtleUFuZEFjdGlvbnMoJ+KXhCcsIGNoYW5nZUtleVN0YXRlKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBjYXNlICdBcnJvd1JpZ2h0Jzoge1xuICAgICAgICAgIHRoaXMuc2VhcmNoS2V5QW5kQWN0aW9ucygn4pa6JywgY2hhbmdlS2V5U3RhdGUpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgZGVmYXVsdDoge1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZGVsZXRlTGFzdFN5bWJvbCgpIHtcbiAgICB0aGlzLnRleHRGaWVsZC52YWx1ZSA9IHRoaXMudGV4dEZpZWxkLnZhbHVlLnNwbGl0KCcnKS5zbGljZSgwLCAtMSkuam9pbignJyk7XG4gICAgdGhpcy50ZXh0RmllbGQuZGlzcGF0Y2hFdmVudCh0aGlzLnRleHRGaWVsZENoYW5nZUV2ZW50KTtcbiAgfVxuXG4gIGRlbGV0ZUFsbCgpIHtcbiAgICB0aGlzLnRleHRGaWVsZC52YWx1ZSA9ICcnO1xuICAgIHRoaXMudGV4dEZpZWxkLmRpc3BhdGNoRXZlbnQodGhpcy50ZXh0RmllbGRDaGFuZ2VFdmVudCk7XG4gIH1cblxuICBpbnB1dFN5bWJvbChzeW1ib2wpIHtcbiAgICB0aGlzLnRleHRGaWVsZC52YWx1ZSArPSBzeW1ib2w7XG4gICAgdGhpcy50ZXh0RmllbGQuZGlzcGF0Y2hFdmVudCh0aGlzLnRleHRGaWVsZENoYW5nZUV2ZW50KTtcbiAgfVxuXG4gIGlucHV0TGluZUJyZWFrKCkge1xuICAgIHRoaXMudGV4dEZpZWxkLnZhbHVlICs9ICdcXG4nO1xuICAgIHRoaXMudGV4dEZpZWxkLmRpc3BhdGNoRXZlbnQodGhpcy50ZXh0RmllbGRDaGFuZ2VFdmVudCk7XG4gIH1cblxuICBpbnB1dFNwYWNlKCkge1xuICAgIHRoaXMudGV4dEZpZWxkLnZhbHVlICs9ICcgJztcbiAgICB0aGlzLnRleHRGaWVsZC5kaXNwYXRjaEV2ZW50KHRoaXMudGV4dEZpZWxkQ2hhbmdlRXZlbnQpO1xuICB9XG5cbiAgdmlydHVhbEtleWJvYXJkRXZlbnRIYW5kbGVyKGV2ZW50KSB7XG4gICAgY29uc3Qga2V5SW5zY3JpcHRpb24gPSBldmVudC5zcmNFbGVtZW50LmlubmVyVGV4dDtcblxuICAgIGlmICghdGhpcy5zcGVjaWFsS2V5cy5pbmNsdWRlcyhrZXlJbnNjcmlwdGlvbikpIHtcbiAgICAgIHN3aXRjaCAoa2V5SW5zY3JpcHRpb24pIHtcbiAgICAgICAgY2FzZSAnQmFja3NwYWNlJzoge1xuICAgICAgICAgIHRoaXMuZGVsZXRlTGFzdFN5bWJvbCgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGNhc2UgJ0RlbCc6IHtcbiAgICAgICAgICB0aGlzLmRlbGV0ZUFsbCgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGNhc2UgJ1NwYWNlJzoge1xuICAgICAgICAgIHRoaXMuaW5wdXRTcGFjZSgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGNhc2UgJ0VudGVyJzoge1xuICAgICAgICAgIHRoaXMuaW5wdXRMaW5lQnJlYWsoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBkZWZhdWx0OiB7XG4gICAgICAgICAgdGhpcy5pbnB1dFN5bWJvbChrZXlJbnNjcmlwdGlvbik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBsaXN0ZW5WaXJ0dWFsS2V5Ym9hcmQoKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmtleXNfX2tleS1iYXNlJykuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMudmlydHVhbEtleWJvYXJkRXZlbnRIYW5kbGVyQm91bmRlZCk7XG4gICAgfSk7XG4gIH1cblxuICBsaXN0ZW5QaHlzaWNhbEtleWJvYXJkKCkge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAna2V5ZG93bicsXG4gICAgICB0aGlzLmtleWJvYXJkRXZlbnRIYW5kbGVyQm91bmRlZCxcbiAgICApO1xuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICdrZXl1cCcsXG4gICAgICB0aGlzLmtleWJvYXJkRXZlbnRIYW5kbGVyQm91bmRlZCxcbiAgICApO1xuICB9XG59XG4iLCIvKipcbiAqIEJhc2ljIGxheW91dCBnZW5lcmF0b3IgY2xhc3MgaW1wb3J0LlxuICovXG5pbXBvcnQgQmFzaWNTdHJ1Y3R1cmVHZW5lcmF0b3IgZnJvbSAnLi9CYXNpY1N0cnVjdHVyZUdlbmVyYXRvcic7XG5cbi8qKlxuICogS2V5Ym9hcmQgd29yayBsb2dpYyBjbGFzcyBpbXBvcnQuXG4gKi9cbmltcG9ydCBLZXlib2FyZExvZ2ljTWFuYWdlciBmcm9tICcuL0tleWJvYXJkTG9naWNNYW5hZ2VyJztcblxuLyogSW1wb3J0IFBpY3MgKi9cbi8vIEV4YW1wbGU6IGltcG9ydCBiaXJkUGxhY2Vob2xkZXIgZnJvbSAnLi4vYXNzZXRzL2ltYWdlcy9yYXZlbl8wMS5wbmcnO1xuXG4vKiBJbXBvcnQgc3R5bGVzICovXG5pbXBvcnQgJy4uL2Fzc2V0cy9zdHlsZXMvc3R5bGUuY3NzJztcbmltcG9ydCAnLi4vYXNzZXRzL3N0eWxlcy9ub3JtYWxpemUuY3NzJztcblxuLyogRGVidWcgY29udHJvbC4gKi9cbmNvbnN0IGRlYnVnSGFyZGNvZGUgPSAxO1xuLyoqXG4gKiBUT0RPOiBnZXQgZGVidWcgZmxhZyBmcm9tIHNvbWV3aGVyZS5cbiAqL1xuY29uc3QgZGVidWdGbGFnID0gMTtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bm5lZWRlZC10ZXJuYXJ5XG5jb25zdCBkZWJ1ZyA9IGRlYnVnSGFyZGNvZGUgPyBkZWJ1Z0hhcmRjb2RlIDogZGVidWdGbGFnO1xuXG4vKiBDb25zdGFudHMgYW5kIHZhcnMgb2Ygc3RhdGVzIGFuZCBvdGhlciB0aGluZ3MuICovXG5jb25zdCBsYW5ndWFnZUdlbmVyYWwgPSAnZW4nO1xuXG4vKiBPbmxvYWQgd29yayBmdW5jdGlvbjogZW50cnkgcG9pbnQgZm9yIG1vc3QgY29kZS4gKi9cbmZ1bmN0aW9uIHdpbmRvd09uTG9hZFdvcmsoKSB7XG4gIC8qIENyZWF0ZSBiYXNpYyBzdHJ1Y3R1cmUgZ2VuZXJhdG9yIGluc3RhbmNlLiAqL1xuICBjb25zdCBiYXNpY1N0cnVjdHVyZUdlbmVyYXRvciA9IG5ldyBCYXNpY1N0cnVjdHVyZUdlbmVyYXRvcihcbiAgICAnYm9keScsXG4gICAgbGFuZ3VhZ2VHZW5lcmFsLFxuICAgIGRlYnVnLFxuICApO1xuXG4gIC8qIEdlbmVyYXRlIGFuZCBhcHBlbmQgZ2VuZXJhdGVkIGVsZW1lbnRzIHRvIERPTS4gKi9cbiAgYmFzaWNTdHJ1Y3R1cmVHZW5lcmF0b3IuZ2VuZXJhdGVBbGwoKTtcbiAgYmFzaWNTdHJ1Y3R1cmVHZW5lcmF0b3IuYXBwZW5kSFRNTEVsZW1lbnRzKCk7XG5cbiAgLyogQ3JlYXRlIGtleWJvYXJkIHdvcmsgbG9naWMgY2xhc3MgaW5zdGFuY2UuICAqL1xuICBjb25zdCBrZXlib2FyZE1hbmFnZXIgPSBuZXcgS2V5Ym9hcmRMb2dpY01hbmFnZXIoXG4gICAgJ2JvZHknLFxuICAgICcua2V5Ym9hcmQtYW5kLWRpc3BsYXknLFxuICAgIDEsXG4gICk7XG5cbiAga2V5Ym9hcmRNYW5hZ2VyLmxpc3RlblBoeXNpY2FsS2V5Ym9hcmQoKTtcbiAga2V5Ym9hcmRNYW5hZ2VyLmxpc3RlblZpcnR1YWxLZXlib2FyZCgpO1xufVxuXG4vKiBTdGFydCBvbmxvYWQgd29yayAqL1xud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XG4gIHdpbmRvd09uTG9hZFdvcmsoKTtcbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
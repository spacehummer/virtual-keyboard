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
 * @property  {String} eventCode      - key event.code.
 * @property  {String} row            - field with information
 *                                      about keyboard row of current key.
 * @property  {Object} symbolDefault  - Object with information about symbol for default state.
 * @property  {Object} symbolShiftMod - Object with information about symbol
 *                                      for Shift modification state.
 * @property  {Object} symbolCapsMod  - Object with information about symbol
 *                                      for Shift modification state.
 * @property  {Object} symbolCapsShiftMod - Object with information about symbol
 *                                          for Shift modification state.
 */

/**
 * @typedef   {Object} symbolDefault  - Object with information about symbol for default state.
 * @property  {String} symbol         - symbol.
 * @property  {String} mnemonicHTML   - HTML mnemonic.
 * @property  {String} name           - human-readable name of symbol.
 */

/**
 * @typedef   {Object} symbolShiftMod - Object with information about symbol
 *                                      for Shift modification state.
 * @property  {String} symbol         - symbol.
 * @property  {String} mnemonicHTML   - HTML mnemonic.
 * @property  {String} name           - human-readable name of symbol.
 */

/**
 * @typedef   {Object} symbolCapsMod  - Object with information about symbol
 *                                      for Shift modification state.
 * @property  {String} symbol         - symbol.
 * @property  {String} mnemonicHTML   - HTML mnemonic.
 * @property  {String} name           - human-readable name of symbol.
 */

/**
 * @typedef   {Object} symbolCapsShiftMod  - Object with information about symbol
 *                                           for Shift modification state.
 * @property  {String} symbol         - symbol.
 * @property  {String} mnemonicHTML   - HTML mnemonic.
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

  keyboard;
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

    /* Initialize keyboard */
    this.keyboard = null;

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

  getInscriptionForKey(elementForInscription, key, symbolMod, lang) {
    const elementForInscriptionLocal = elementForInscription;
    switch (symbolMod) {
      case 'symbolDefault': {
        elementForInscriptionLocal.innerHTML = this.inscriptions[lang][key]
          .symbolDefault.symbol;
        break;
      }
      case 'symbolShiftMod': {
        elementForInscriptionLocal.innerHTML = this.inscriptions[lang][key]
          .symbolShiftMod.symbol !== 'none'
          ? this.inscriptions[lang][key].symbolShiftMod.symbol
          : this.inscriptions[lang][key].symbolDefault.symbol;
        break;
      }
      case 'symbolCapsMod': {
        elementForInscriptionLocal.innerHTML = this.inscriptions[lang][key]
          .symbolCapsMod.symbol !== 'none'
          ? this.inscriptions[lang][key].symbolCapsMod.symbol
          : this.inscriptions[lang][key].symbolDefault.symbol;
        break;
      }
      case 'symbolCapsShiftMod': {
        elementForInscriptionLocal.innerHTML = this.inscriptions[lang][key]
          .symbolCapsShiftMod.symbol !== 'none'
          ? this.inscriptions[lang][key].symbolCapsShiftMod.symbol
          : this.inscriptions[lang][key].symbolDefault.symbol;
        break;
      }
      default: {
        break;
      }
    }
  }

  generateKeyLayouts(keyLayoutLanguage, keyNumberLocal) {
    const keyLayoutsCurrentLang = document.createElement('span');
    keyLayoutsCurrentLang.classList.add(`key-base__${keyLayoutLanguage}-keys`);

    const layoutArr = [
      document.createElement('span'),
      document.createElement('span'),
      document.createElement('span'),
      document.createElement('span'),
    ];
    layoutArr.forEach((element, index) => {
      const elementLocal = element;
      elementLocal.classList.add(`${keyLayoutLanguage}-keys__key-layout`);
      switch (index) {
        case 0: {
          elementLocal.classList.add('key-layout--default');
          this.getInscriptionForKey(
            elementLocal,
            keyNumberLocal,
            'symbolDefault',
            keyLayoutLanguage,
          );
          break;
        }
        case 1: {
          elementLocal.classList.add('key-layout--shift-mod');
          elementLocal.classList.add('key-layout--hidden');
          this.getInscriptionForKey(
            elementLocal,
            keyNumberLocal,
            'symbolShiftMod',
            keyLayoutLanguage,
          );
          break;
        }
        case 2: {
          elementLocal.classList.add('key-layout--caps-mod');
          elementLocal.classList.add('key-layout--hidden');
          this.getInscriptionForKey(
            elementLocal,
            keyNumberLocal,
            'symbolCapsMod',
            keyLayoutLanguage,
          );
          break;
        }
        case 3: {
          elementLocal.classList.add('key-layout--caps-and-shift-mod');
          elementLocal.classList.add('key-layout--hidden');
          this.getInscriptionForKey(
            elementLocal,
            keyNumberLocal,
            'symbolCapsShiftMod',
            keyLayoutLanguage,
          );
          break;
        }
        default: {
          break;
        }
      }
      keyLayoutsCurrentLang.appendChild(elementLocal);
    });
    if (this.verboseLvl > 1) {
      /* Console log with keyLayoutsCurrentLang was here */
    }
    return keyLayoutsCurrentLang;
  }

  /**
   * Generate keys for keyboard with layouts for mods
   * and keyboard different language layouts.
   */
  generateKeys() {
    /* Generate keys, column-gaps and row-gaps, as grid elements. */
    for (let keyIndex = 1; keyIndex <= this.keysCount + (this.keysCount - 0); keyIndex += 1) {
      if (keyIndex % 2 === 0) {
        const keyNumberTmp = (keyIndex / 2).toString(10);
        /* Add key base. */
        const key = document.createElement('button');
        key.classList.add('keys__key-base');
        key.setAttribute(
          'data-event-code',
          this.inscriptions[this.language][keyNumberTmp].eventCode,
        );

        key.appendChild(this.generateKeyLayouts('en', keyNumberTmp));
        key.appendChild(this.generateKeyLayouts('ru', keyNumberTmp));
        key.lastElementChild.classList.add('ru-keys--hidden');

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
          case '\\': {
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
        this.keyboard.appendChild(key);
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
        this.keyboard.appendChild(columnGapElement);
      } else if (keyIndex !== 1) {
        /* Add row-gap, as div in grid. */
        const rowGapElement = document.createElement('div');
        rowGapElement.classList.add('keys__row-gap');
        this.keyboard.appendChild(rowGapElement);
      }
    }
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
    this.keyboard = document.createElement('div');
    this.keyboard.classList.add('keyboard__keys-container');

    if (this.verboseLvl > 0) {
      // Console log with Keys count was here.
    }

    this.generateKeys();

    /* Append container, generated keyboard and display to main */
    keyboardAndDisplay.appendChild(display);
    keyboardAndDisplay.appendChild(this.keyboard);
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

/***/ "./src/ElementClassObserver.js":
/*!*************************************!*\
  !*** ./src/ElementClassObserver.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ElementClassObserver)
/* harmony export */ });
class ElementClassObserver {
  targetElement;

  classToWatch;

  classAddedCallback;

  classRemovedCallback;

  observer;

  lastClassState;

  constructor(targetElement, classToWatch, classAddedCallback, classRemovedCallback) {
    this.targetElement = targetElement;
    this.classToWatch = classToWatch;
    this.classAddedCallback = classAddedCallback;
    this.classRemovedCallback = classRemovedCallback;
    this.observer = null;
    this.lastClassState = targetElement.classList.contains(this.classToWatch);
  }

  init() {
    this.observer = new MutationObserver(this.mutationCallbackFn);
  }

  mutationCallbackFn = (mutationsList) => {
    mutationsList.forEach((mutation) => {
      if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
        const currentClassState = mutation.target.classList.contains(this.classToWatch);
        if (this.lastClassState !== currentClassState) {
          this.lastClassState = currentClassState;
          if (currentClassState) {
            this.classAddedCallback();
          } else {
            this.classRemovedCallback();
          }
        }
      }
    });
  };

  observe() {
    this.observer.observe(this.targetElement, { attributes: true });
  }

  stop() {
    this.observer.disconnect();
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
/* harmony import */ var _ElementClassObserver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ElementClassObserver */ "./src/ElementClassObserver.js");


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

  keys;
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

  keyControlLeft;

  keyShift;

  keyCaps;

  capsState;

  controlLeftState;

  shiftState;

  languageAlternateState;

  languageAlternateCallCounter;

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

    this.keys = [...document.querySelectorAll('.keys__key-base')];

    this.keyControlLeft = document.querySelector('[data-event-code="ControlLeft"]');
    this.keyShift = document.querySelector('[data-event-code="ShiftLeft"]');
    this.keyCaps = document.querySelector('[data-event-code="CapsLock"]');

    this.controlLeftState = false;
    this.shiftState = false;
    this.capsState = false;

    this.languageAlternateState = false;
    this.languageAlternateCallCounter = 0;
  }

  searchKeyByDataAtrAndActions(dataEventCode, callback, number = 0) {
    /* Find hitted key by XPath. */
    let pressedKey = null;
    if (number === 0) {
      pressedKey = document.querySelector(`[data-event-code="${dataEventCode}"]`);
    }
    if (number === 1) {
      pressedKey = document.querySelectorAll(`[data-event-code="${dataEventCode}"]`);
      [, pressedKey] = pressedKey;
    }
    if (pressedKey) {
      callback(pressedKey, this.lastKeyEvent);
    } else if (this.verboseLvl > 0) {
      /* Console log with error message was here. */
    }
  }

  keyboardEventHandler(event) {
    if (this.verboseLvl > 0) {
      /* Console log with '---- Key event:' and event info message was here. */
    }

    const eventCodeExceptions = [
      'MetaLeft',
      'MetaRight',
      'AltGraph',
    ];

    /* Get current key event into class field */
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

    function disableKeyState(key, eventLocal) {
      /* Change visual */
      if (eventLocal.type === 'keydown') {
        key.classList.add('key-base--unpressed-lock');
        virtualKeyboardSimulateClickOn(key);
      } else if (eventLocal.type === 'keyup') {
        key.classList.remove('key-base--unpressed-lock');
      }
    }

    const lastKeyHitByCode = event.code;
    const lastKeyHitByKey = event.key;

    if (lastKeyHitByKey === 'AltGraph') {
      this.searchKeyByDataAtrAndActions('ControlLeft', disableKeyState);
      this.searchKeyByDataAtrAndActions('AltRight', changeKeyState);
    } else if (!eventCodeExceptions.includes(lastKeyHitByCode)) {
      this.searchKeyByDataAtrAndActions(lastKeyHitByCode, changeKeyState);
    } else if
    (
      lastKeyHitByCode === 'MetaLeft'
      || lastKeyHitByCode === 'MetaRight'
    ) {
      this.searchKeyByDataAtrAndActions('MetaLeft', changeKeyState);
    }
  }

  deleteLastSymbol() {
    this.textField.value = this.textField.value.split('').slice(0, -1).join('');
    this.textField.dispatchEvent(this.textFieldChangeEvent);
  }

  deleteSymbolBeforeCaret() {
    if (this.textField.selectionStart || this.textField.selectionStart === '0') {
      const startPos = this.textField.selectionStart;
      const endPos = this.textField.selectionEnd;
      this.textField.value = this.textField.value.substring(0, startPos - 1)
        + this.textField.value.substring(endPos, this.textField.value.length);
      this.textField.selectionStart = startPos - 1;
      this.textField.selectionEnd = startPos - 1;
    }
    this.textField.focus();
    this.textField.blur();
  }

  deleteSymbolAfterCaret() {
    if (this.textField.selectionStart || this.textField.selectionStart === '0') {
      const startPos = this.textField.selectionStart;
      const endPos = this.textField.selectionEnd;
      this.textField.value = this.textField.value.substring(0, startPos)
        + this.textField.value.substring(endPos + 1, this.textField.value.length);
      this.textField.selectionStart = startPos;
      this.textField.selectionEnd = startPos;
    }
    this.textField.focus();
    this.textField.blur();
  }

  deleteAll() {
    this.textField.value = '';
    this.textField.dispatchEvent(this.textFieldChangeEvent);
  }

  inputSymbol(symbol) {
    if (this.textField.selectionStart || this.textField.selectionStart === '0') {
      const startPos = this.textField.selectionStart;
      const endPos = this.textField.selectionEnd;
      this.textField.value = this.textField.value.substring(0, startPos)
        + symbol
        + this.textField.value.substring(endPos, this.textField.value.length);
      this.textField.selectionStart = startPos + symbol.length;
      this.textField.selectionEnd = startPos + symbol.length;
    } else {
      this.textField.value += symbol;
    }

    this.textField.dispatchEvent(this.textFieldChangeEvent);
  }

  inputLineBreak() {
    this.inputSymbol('\n');
  }

  inputSpace() {
    this.inputSymbol(' ');
  }

  inputTab() {
    this.inputSymbol('\u0009');
  }

  virtualKeyboardEventHandler(event) {
    const keyInscription = event.srcElement.innerText;

    if (!this.specialKeys.includes(keyInscription)) {
      switch (keyInscription) {
        case 'Backspace': {
          this.deleteSymbolBeforeCaret();
          break;
        }
        case 'Del': {
          this.deleteSymbolAfterCaret();
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
        case 'Tab': {
          this.inputTab();
          break;
        }
        default: {
          this.inputSymbol(keyInscription);
          break;
        }
      }
    }
  }

  /* TODO: We need use event.code instead event.key!
   * */

  changeModLayout() {
    const keys = [...document.querySelectorAll('.keys__key-base')];
    if ((this.capsState === false) && (this.shiftState === false)) {
      keys.forEach((key) => {
        key.querySelectorAll('.key-layout--default')[0].classList
          .remove('key-layout--hidden');
        key.querySelectorAll('.key-layout--shift-mod')[0].classList
          .add('key-layout--hidden');
        key.querySelectorAll('.key-layout--caps-mod')[0].classList
          .add('key-layout--hidden');
        key.querySelectorAll('.key-layout--caps-and-shift-mod')[0].classList
          .add('key-layout--hidden');
        key.querySelectorAll('.key-layout--default')[1].classList
          .remove('key-layout--hidden');
        key.querySelectorAll('.key-layout--shift-mod')[1].classList
          .add('key-layout--hidden');
        key.querySelectorAll('.key-layout--caps-mod')[1].classList
          .add('key-layout--hidden');
        key.querySelectorAll('.key-layout--caps-and-shift-mod')[1].classList
          .add('key-layout--hidden');
      });
    } else if ((this.capsState === false) && (this.shiftState === true)) {
      keys.forEach((key) => {
        key.querySelectorAll('.key-layout--default')[0].classList
          .add('key-layout--hidden');
        key.querySelectorAll('.key-layout--shift-mod')[0].classList
          .remove('key-layout--hidden');
        key.querySelectorAll('.key-layout--caps-mod')[0].classList
          .add('key-layout--hidden');
        key.querySelectorAll('.key-layout--caps-and-shift-mod')[0].classList
          .add('key-layout--hidden');
        key.querySelectorAll('.key-layout--default')[1].classList
          .add('key-layout--hidden');
        key.querySelectorAll('.key-layout--shift-mod')[1].classList
          .remove('key-layout--hidden');
        key.querySelectorAll('.key-layout--caps-mod')[1].classList
          .add('key-layout--hidden');
        key.querySelectorAll('.key-layout--caps-and-shift-mod')[1].classList
          .add('key-layout--hidden');
      });
    } else if ((this.capsState === true) && (this.shiftState === false)) {
      keys.forEach((key) => {
        key.querySelectorAll('.key-layout--default')[0].classList
          .add('key-layout--hidden');
        key.querySelectorAll('.key-layout--shift-mod')[0].classList
          .add('key-layout--hidden');
        key.querySelectorAll('.key-layout--caps-mod')[0].classList
          .remove('key-layout--hidden');
        key.querySelectorAll('.key-layout--caps-and-shift-mod')[0].classList
          .add('key-layout--hidden');
        key.querySelectorAll('.key-layout--default')[1].classList
          .add('key-layout--hidden');
        key.querySelectorAll('.key-layout--shift-mod')[1].classList
          .add('key-layout--hidden');
        key.querySelectorAll('.key-layout--caps-mod')[1].classList
          .remove('key-layout--hidden');
        key.querySelectorAll('.key-layout--caps-and-shift-mod')[1].classList
          .add('key-layout--hidden');
      });
    } else if ((this.capsState === true) && (this.shiftState === true)) {
      keys.forEach((key) => {
        key.querySelectorAll('.key-layout--default')[0].classList
          .add('key-layout--hidden');
        key.querySelectorAll('.key-layout--shift-mod')[0].classList
          .add('key-layout--hidden');
        key.querySelectorAll('.key-layout--caps-mod')[0].classList
          .add('key-layout--hidden');
        key.querySelectorAll('.key-layout--caps-and-shift-mod')[0].classList
          .remove('key-layout--hidden');
        key.querySelectorAll('.key-layout--default')[1].classList
          .add('key-layout--hidden');
        key.querySelectorAll('.key-layout--shift-mod')[1].classList
          .add('key-layout--hidden');
        key.querySelectorAll('.key-layout--caps-mod')[1].classList
          .add('key-layout--hidden');
        key.querySelectorAll('.key-layout--caps-and-shift-mod')[1].classList
          .remove('key-layout--hidden');
      });
    }
  }

  changeLanguageLayout() {
    if (this.languageAlternateState === false) {
      this.keys.forEach((key) => {
        key.querySelector('.key-base__en-keys').classList
          .add('en-keys--hidden');
        key.querySelector('.key-base__ru-keys').classList
          .remove('ru-keys--hidden');
      });
      this.languageAlternateState = true;
      localStorage.setItem('spacehummerVirtualKeyboardLanguageAlternateState', 'true');
    } else {
      this.keys.forEach((key) => {
        key.querySelector('.key-base__en-keys').classList
          .remove('en-keys--hidden');
        key.querySelector('.key-base__ru-keys').classList
          .add('ru-keys--hidden');
      });
      this.languageAlternateState = false;
      localStorage.setItem('spacehummerVirtualKeyboardLanguageAlternateState', 'false');
    }
  }

  setLanguageLayoutAfterLoading() {
    if (localStorage.getItem('spacehummerVirtualKeyboardLanguageAlternateState') === 'true') {
      this.changeLanguageLayout();
    }
  }

  modStateManager(signal) {
    switch (signal) {
      case 'caps': {
        if (this.capsState === false) {
          this.capsState = true;
          this.changeModLayout();
          if (this.verboseLvl > 1) {
            /* Console log with '---- Caps mod on!' was here. */
          }
          this.keyCaps.classList.add('key-base--hold');
        } else if (this.capsState === true) {
          this.capsState = false;
          this.changeModLayout();
          if (this.verboseLvl > 1) {
            /* Console log with '---- Caps mod off!' was here. */
          }
          this.keyCaps.classList.remove('key-base--hold');
        }
        break;
      }
      case 'shift': {
        if (this.shiftState === false) {
          this.shiftState = true;
          this.changeModLayout();
          if (this.verboseLvl > 1) {
            /* Console log with '---- Shift mod on!' was here. */
          }
          this.keyShift.classList.add('key-base--hold');
        } else if (this.shiftState === true) {
          this.shiftState = false;
          this.changeModLayout();
          if (this.verboseLvl > 1) {
            /* Console log with '---- Shift mod off!' was here. */
          }
          this.keyShift.classList.remove('key-base--hold');
        }
        break;
      }
      case 'controlLeft': {
        if (this.controlLeftState === false) {
          this.controlLeftState = true;
        } else if (this.controlLeftState === true) {
          this.controlLeftState = false;
        }
        break;
      }
      default: {
        break;
      }
    }

    if (
      (this.shiftState === true)
      && (this.controlLeftState === true)
      && (this.languageAlternateCallCounter < 1)
    ) {
      this.changeLanguageLayout();
    }
  }

  observeControlLeftState() {
    const onShiftModWork = () => {
      this.modStateManager('controlLeft');
    };

    const onUnShiftModWork = () => {
      this.modStateManager('controlLeft');
    };

    const controlLeftObserver = new _ElementClassObserver__WEBPACK_IMPORTED_MODULE_0__["default"](
      this.keyControlLeft,
      'key-base--pressed',
      onShiftModWork,
      onUnShiftModWork,
    );

    controlLeftObserver.init();
    controlLeftObserver.observe();
  }

  observeShiftState() {
    const onShiftModWork = () => {
      this.modStateManager('shift');
    };

    const onUnShiftModWork = () => {
      this.modStateManager('shift');
    };

    const shiftObserver = new _ElementClassObserver__WEBPACK_IMPORTED_MODULE_0__["default"](
      this.keyShift,
      'key-base--pressed',
      onShiftModWork,
      onUnShiftModWork,
    );

    shiftObserver.init();
    shiftObserver.observe();
  }

  observeCapsState() {
    const onCapsModWork = () => {
      this.modStateManager('caps');
    };

    const onUnCapsModWork = () => {
    };

    const capsObserver = new _ElementClassObserver__WEBPACK_IMPORTED_MODULE_0__["default"](
      this.keyCaps,
      'key-base--pressed',
      onCapsModWork,
      onUnCapsModWork,
    );

    capsObserver.init();
    capsObserver.observe();
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
const debugHardcode = 2;
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
    debug,
  );

  keyboardManager.setLanguageLayoutAfterLoading();
  keyboardManager.listenPhysicalKeyboard();
  keyboardManager.listenVirtualKeyboard();
  keyboardManager.observeControlLeftState();
  keyboardManager.observeShiftState();
  keyboardManager.observeCapsState();
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

module.exports = JSON.parse('{"en":{"1":{"eventCode":"Backquote","row":"1","symbolDefault":{"symbol":"`","mnemonicHTML":"&#96;","name":"Grave Accent"},"symbolShiftMod":{"symbol":"~","mnemonicHTML":"&#96;","name":"Tilde"},"symbolCapsMod":{"symbol":"`","mnemonicHTML":"&#96;","name":"Grave Accent"},"symbolCapsShiftMod":{"symbol":"~","mnemonicHTML":"&#96;","name":"Tilde"}},"2":{"eventCode":"Digit1","row":"1","symbolDefault":{"symbol":"1","name":"Digit One"},"symbolShiftMod":{"symbol":"!","name":"Exclamation Mark"},"symbolCapsMod":{"symbol":"1","name":"Digit One"},"symbolCapsShiftMod":{"symbol":"!","name":"Exclamation Mark"}},"3":{"eventCode":"Digit2","row":"1","symbolDefault":{"symbol":"2","name":"Digit Two"},"symbolShiftMod":{"symbol":"@","mnemonicHTML":"&#96;","name":"Commercial At"},"symbolCapsMod":{"symbol":"2","name":"Digit Two"},"symbolCapsShiftMod":{"symbol":"@","mnemonicHTML":"&#96;","name":"Commercial At"}},"4":{"eventCode":"Digit3","row":"1","symbolDefault":{"symbol":"3","name":"Digit Three"},"symbolShiftMod":{"symbol":"#","mnemonicHTML":"&#35;","name":"Number Sign"},"symbolCapsMod":{"symbol":"3","name":"Digit Three"},"symbolCapsShiftMod":{"symbol":"#","mnemonicHTML":"&#35;","name":"Number Sign"}},"5":{"eventCode":"Digit4","row":"1","symbolDefault":{"symbol":"4","name":"Digit Four"},"symbolShiftMod":{"symbol":"@","mnemonicHTML":"&#96;","name":"Dollar Sign"},"symbolCapsMod":{"symbol":"4","name":"Digit Four"},"symbolCapsShiftMod":{"symbol":"@","mnemonicHTML":"&#96;","name":"Dollar Sign"}},"6":{"eventCode":"Digit5","row":"1","symbolDefault":{"symbol":"5","name":"Digit Five"},"symbolShiftMod":{"symbol":"%","mnemonicHTML":"&#96;","name":"Percent Sign"},"symbolCapsMod":{"symbol":"5","name":"Digit Five"},"symbolCapsShiftMod":{"symbol":"%","mnemonicHTML":"&#96;","name":"Percent Sign"}},"7":{"eventCode":"Digit6","row":"1","symbolDefault":{"symbol":"6","name":"Digit Six"},"symbolShiftMod":{"symbol":"^","mnemonicHTML":"&#96;","name":"Circumflex Accent"},"symbolCapsMod":{"symbol":"6","name":"Digit Six"},"symbolCapsShiftMod":{"symbol":"^","mnemonicHTML":"&#96;","name":"Circumflex Accent"}},"8":{"eventCode":"Digit7","row":"1","symbolDefault":{"symbol":"7","name":"Digit Seven"},"symbolShiftMod":{"symbol":"&","mnemonicHTML":"&#96;","name":"Ampersand"},"symbolCapsMod":{"symbol":"7","name":"Digit Seven"},"symbolCapsShiftMod":{"symbol":"&","mnemonicHTML":"&#96;","name":"Ampersand"}},"9":{"eventCode":"Digit8","row":"1","symbolDefault":{"symbol":"8","name":"Digit Eight"},"symbolShiftMod":{"symbol":"*","mnemonicHTML":"&#96;","name":"Asterisk"},"symbolCapsMod":{"symbol":"8","name":"Digit Eight"},"symbolCapsShiftMod":{"symbol":"*","mnemonicHTML":"&#96;","name":"Asterisk"}},"10":{"eventCode":"Digit9","row":"1","symbolDefault":{"symbol":"9","name":"Digit Nine"},"symbolShiftMod":{"symbol":"(","mnemonicHTML":"&#40;","name":"Left Parenthesis"},"symbolCapsMod":{"symbol":"9","name":"Digit Nine"},"symbolCapsShiftMod":{"symbol":"(","mnemonicHTML":"&#40;","name":"Left Parenthesis"}},"11":{"eventCode":"Digit0","row":"1","symbolDefault":{"symbol":"0","name":"Digit Zero"},"symbolShiftMod":{"symbol":")","mnemonicHTML":"&#96;","name":"Right Parenthesis"},"symbolCapsMod":{"symbol":"0","name":"Digit Zero"},"symbolCapsShiftMod":{"symbol":")","mnemonicHTML":"&#96;","name":"Right Parenthesis"}},"12":{"eventCode":"Minus","row":"1","symbolDefault":{"symbol":"-","name":"Hyphen-Minus"},"symbolShiftMod":{"symbol":"_","name":"Low Line"},"symbolCapsMod":{"symbol":"-","name":"Hyphen-Minus"},"symbolCapsShiftMod":{"symbol":"_","name":"Low Line"}},"13":{"eventCode":"Equal","row":"1","symbolDefault":{"symbol":"=","name":"Equals Sign"},"symbolShiftMod":{"symbol":"+","name":"Plus Sign"},"symbolCapsMod":{"symbol":"=","name":"Equals Sign"},"symbolCapsShiftMod":{"symbol":"+","name":"Plus Sign"}},"14":{"eventCode":"Backspace","row":"1","symbolDefault":{"symbol":"Backspace","name":"Backspace key"},"symbolShiftMod":{"symbol":"none","name":"none"},"symbolCapsMod":{"symbol":"none","name":"none"},"symbolCapsShiftMod":{"symbol":"none","name":"none"}},"15":{"eventCode":"Tab","row":"2","symbolDefault":{"symbol":"Tab","name":"Tab key"},"symbolShiftMod":{"symbol":"none","name":"none"},"symbolCapsMod":{"symbol":"none","name":"none"},"symbolCapsShiftMod":{"symbol":"none","name":"none"}},"16":{"eventCode":"KeyQ","row":"2","symbolDefault":{"symbol":"q","name":"Latin Small Letter Q"},"symbolShiftMod":{"symbol":"Q","name":"Latin Capital Letter Q"},"symbolCapsMod":{"symbol":"Q","name":"Latin Capital Letter Q"},"symbolCapsShiftMod":{"symbol":"q","name":"Latin Small Letter Q"}},"17":{"eventCode":"KeyW","row":"2","symbolDefault":{"symbol":"w","name":"Latin Small Letter W"},"symbolShiftMod":{"symbol":"W","name":"Latin Capital Letter W"},"symbolCapsMod":{"symbol":"W","name":"Latin Capital Letter W"},"symbolCapsShiftMod":{"symbol":"w","name":"Latin Small Letter W"}},"18":{"eventCode":"KeyE","row":"2","symbolDefault":{"symbol":"e","name":"Latin Small Letter E"},"symbolShiftMod":{"symbol":"E","name":"Latin Capital Letter E"},"symbolCapsMod":{"symbol":"E","name":"Latin Capital Letter E"},"symbolCapsShiftMod":{"symbol":"e","name":"Latin Small Letter E"}},"19":{"eventCode":"KeyR","row":"2","symbolDefault":{"symbol":"r","name":"Latin Small Letter R"},"symbolShiftMod":{"symbol":"R","name":"Latin Capital Letter R"},"symbolCapsMod":{"symbol":"R","name":"Latin Capital Letter R"},"symbolCapsShiftMod":{"symbol":"r","name":"Latin Small Letter R"}},"20":{"eventCode":"KeyT","row":"2","symbolDefault":{"symbol":"t","name":"Latin Small Letter T"},"symbolShiftMod":{"symbol":"T","name":"Latin Capital Letter T"},"symbolCapsMod":{"symbol":"T","name":"Latin Capital Letter T"},"symbolCapsShiftMod":{"symbol":"t","name":"Latin Small Letter T"}},"21":{"eventCode":"KeyY","row":"2","symbolDefault":{"symbol":"y","name":"Latin Small Letter Y"},"symbolShiftMod":{"symbol":"Y","name":"Latin Capital Letter Y"},"symbolCapsMod":{"symbol":"Y","name":"Latin Capital Letter Y"},"symbolCapsShiftMod":{"symbol":"y","name":"Latin Small Letter Y"}},"22":{"eventCode":"KeyU","row":"2","symbolDefault":{"symbol":"u","name":"Latin Small Letter U"},"symbolShiftMod":{"symbol":"U","name":"Latin Capital Letter U"},"symbolCapsMod":{"symbol":"U","name":"Latin Capital Letter U"},"symbolCapsShiftMod":{"symbol":"u","name":"Latin Small Letter U"}},"23":{"eventCode":"KeyI","row":"2","symbolDefault":{"symbol":"i","name":"Latin Small Letter I"},"symbolShiftMod":{"symbol":"I","name":"Latin Capital Letter I"},"symbolCapsMod":{"symbol":"I","name":"Latin Capital Letter I"},"symbolCapsShiftMod":{"symbol":"i","name":"Latin Small Letter I"}},"24":{"eventCode":"KeyO","row":"2","symbolDefault":{"symbol":"o","name":"Latin Small Letter O"},"symbolShiftMod":{"symbol":"O","name":"Latin Capital Letter O"},"symbolCapsMod":{"symbol":"O","name":"Latin Capital Letter O"},"symbolCapsShiftMod":{"symbol":"o","name":"Latin Small Letter O"}},"25":{"eventCode":"KeyP","row":"2","symbolDefault":{"symbol":"p","name":"Latin Small Letter P"},"symbolShiftMod":{"symbol":"P","name":"Latin Capital Letter P"},"symbolCapsMod":{"symbol":"P","name":"Latin Capital Letter P"},"symbolCapsShiftMod":{"symbol":"p","name":"Latin Small Letter P"}},"26":{"eventCode":"BracketLeft","row":"2","symbolDefault":{"symbol":"[","mnemonicHTML":"&#91;","name":"Left Square Bracket"},"symbolShiftMod":{"symbol":"{","mnemonicHTML":"&#123;","name":"Left Curly Bracket"},"symbolCapsMod":{"symbol":"[","mnemonicHTML":"&#91;","name":"Left Square Bracket"},"symbolCapsShiftMod":{"symbol":"{","mnemonicHTML":"&#123;","name":"Left Curly Bracket"}},"27":{"eventCode":"BracketRight","row":"2","symbolDefault":{"symbol":"]","mnemonicHTML":"&#93;","name":"Right Square Bracket"},"symbolShiftMod":{"symbol":"}","mnemonicHTML":"&#125;","name":"Right Curly Bracket"},"symbolCapsMod":{"symbol":"]","mnemonicHTML":"&#93;","name":"Right Square Bracket"},"symbolCapsShiftMod":{"symbol":"}","mnemonicHTML":"&#125;","name":"Right Curly Bracket"}},"28":{"eventCode":"Backslash","row":"2","symbolDefault":{"symbol":"\\\\","mnemonicHTML":"&#92;","name":"Reverse Solidus"},"symbolShiftMod":{"symbol":"|","mnemonicHTML":"&#124;","name":"Vertical Line"},"symbolCapsMod":{"symbol":"\\\\","mnemonicHTML":"&#92;","name":"Reverse Solidus"},"symbolCapsShiftMod":{"symbol":"|","mnemonicHTML":"&#124;","name":"Vertical Line"}},"29":{"eventCode":"CapsLock","row":"3","symbolDefault":{"symbol":"Caps Lock","name":"Caps Lock key"},"symbolShiftMod":{"symbol":"none","name":"none"},"symbolCapsMod":{"symbol":"none","name":"none"},"symbolCapsShiftMod":{"symbol":"none","name":"none"}},"30":{"eventCode":"KeyA","row":"3","symbolDefault":{"symbol":"a","name":"Latin Small Letter A"},"symbolShiftMod":{"symbol":"A","name":"Latin Capital Letter A"},"symbolCapsMod":{"symbol":"A","name":"Latin Capital Letter A"},"symbolCapsShiftMod":{"symbol":"a","name":"Latin Small Letter A"}},"31":{"eventCode":"KeyS","row":"3","symbolDefault":{"symbol":"s","name":"Latin Small Letter S"},"symbolShiftMod":{"symbol":"S","name":"Latin Capital Letter S"},"symbolCapsMod":{"symbol":"S","name":"Latin Capital Letter S"},"symbolCapsShiftMod":{"symbol":"s","name":"Latin Small Letter S"}},"32":{"eventCode":"KeyD","row":"3","symbolDefault":{"symbol":"d","name":"Latin Small Letter D"},"symbolShiftMod":{"symbol":"D","name":"Latin Capital Letter D"},"symbolCapsMod":{"symbol":"D","name":"Latin Capital Letter D"},"symbolCapsShiftMod":{"symbol":"d","name":"Latin Small Letter D"}},"33":{"eventCode":"KeyF","row":"3","symbolDefault":{"symbol":"f","name":"Latin Small Letter F"},"symbolShiftMod":{"symbol":"F","name":"Latin Capital Letter F"},"symbolCapsMod":{"symbol":"F","name":"Latin Capital Letter F"},"symbolCapsShiftMod":{"symbol":"f","name":"Latin Small Letter F"}},"34":{"eventCode":"KeyG","row":"3","symbolDefault":{"symbol":"g","name":"Latin Small Letter G"},"symbolShiftMod":{"symbol":"G","name":"Latin Capital Letter G"},"symbolCapsMod":{"symbol":"G","name":"Latin Capital Letter G"},"symbolCapsShiftMod":{"symbol":"g","name":"Latin Small Letter G"}},"35":{"eventCode":"KeyH","row":"3","symbolDefault":{"symbol":"h","name":"Latin Small Letter H"},"symbolShiftMod":{"symbol":"H","name":"Latin Capital Letter H"},"symbolCapsMod":{"symbol":"H","name":"Latin Capital Letter H"},"symbolCapsShiftMod":{"symbol":"h","name":"Latin Small Letter H"}},"36":{"eventCode":"KeyJ","row":"3","symbolDefault":{"symbol":"j","name":"Latin Small Letter J"},"symbolShiftMod":{"symbol":"J","name":"Latin Capital Letter J"},"symbolCapsMod":{"symbol":"J","name":"Latin Capital Letter J"},"symbolCapsShiftMod":{"symbol":"j","name":"Latin Small Letter J"}},"37":{"eventCode":"KeyK","row":"3","symbolDefault":{"symbol":"k","name":"Latin Small Letter K"},"symbolShiftMod":{"symbol":"K","name":"Latin Capital Letter K"},"symbolCapsMod":{"symbol":"K","name":"Latin Capital Letter K"},"symbolCapsShiftMod":{"symbol":"k","name":"Latin Small Letter K"}},"38":{"eventCode":"KeyL","row":"3","symbolDefault":{"symbol":"l","name":"Latin Small Letter L"},"symbolShiftMod":{"symbol":"L","name":"Latin Capital Letter L"},"symbolCapsMod":{"symbol":"L","name":"Latin Capital Letter L"},"symbolCapsShiftMod":{"symbol":"l","name":"Latin Small Letter L"}},"39":{"eventCode":"Semicolon","row":"3","symbolDefault":{"symbol":";","name":"Semicolon"},"symbolShiftMod":{"symbol":":","name":"Colon"},"symbolCapsMod":{"symbol":";","name":"Semicolon"},"symbolCapsShiftMod":{"symbol":":","name":"Colon"}},"40":{"eventCode":"Quote","row":"3","symbolDefault":{"symbol":"\'","mnemonicHTML":"&#39;","name":"Apostrophe"},"symbolShiftMod":{"symbol":"\\"","mnemonicHTML":"&#34;","name":"Quotation Mark"},"symbolCapsMod":{"symbol":"\'","mnemonicHTML":"&#39;","name":"Apostrophe"},"symbolCapsShiftMod":{"symbol":"\\"","mnemonicHTML":"&#34;","name":"Quotation Mark"}},"41":{"eventCode":"Enter","row":"3","symbolDefault":{"symbol":"Enter","name":"Enter key"},"symbolShiftMod":{"symbol":"none","name":"none"},"symbolCapsMod":{"symbol":"none","name":"none"},"symbolCapsShiftMod":{"symbol":"none","name":"none"}},"42":{"eventCode":"ShiftLeft","row":"4","symbolDefault":{"symbol":"Shift","name":"Left Shift key"},"symbolShiftMod":{"symbol":"none","name":"none"},"symbolCapsMod":{"symbol":"none","name":"none"},"symbolCapsShiftMod":{"symbol":"none","name":"none"}},"43":{"eventCode":"KeyZ","row":"4","symbolDefault":{"symbol":"z","name":"Latin Small Letter Z"},"symbolShiftMod":{"symbol":"Z","name":"Latin Capital Letter Z"},"symbolCapsMod":{"symbol":"Z","name":"Latin Capital Letter Z"},"symbolCapsShiftMod":{"symbol":"z","name":"Latin Small Letter Z"}},"44":{"eventCode":"KeyX","row":"4","symbolDefault":{"symbol":"x","name":"Latin Small Letter X"},"symbolShiftMod":{"symbol":"X","name":"Latin Capital Letter X"},"symbolCapsMod":{"symbol":"X","name":"Latin Capital Letter X"},"symbolCapsShiftMod":{"symbol":"x","name":"Latin Small Letter X"}},"45":{"eventCode":"KeyC","row":"4","symbolDefault":{"symbol":"c","name":"Latin Small Letter C"},"symbolShiftMod":{"symbol":"C","name":"Latin Capital Letter C"},"symbolCapsMod":{"symbol":"C","name":"Latin Capital Letter C"},"symbolCapsShiftMod":{"symbol":"c","name":"Latin Small Letter C"}},"46":{"eventCode":"KeyV","row":"4","symbolDefault":{"symbol":"v","name":"Latin Small Letter V"},"symbolShiftMod":{"symbol":"V","name":"Latin Capital Letter V"},"symbolCapsMod":{"symbol":"V","name":"Latin Capital Letter V"},"symbolCapsShiftMod":{"symbol":"v","name":"Latin Small Letter V"}},"47":{"eventCode":"KeyB","row":"4","symbolDefault":{"symbol":"b","name":"Latin Small Letter B"},"symbolShiftMod":{"symbol":"B","name":"Latin Capital Letter B"},"symbolCapsMod":{"symbol":"B","name":"Latin Capital Letter B"},"symbolCapsShiftMod":{"symbol":"b","name":"Latin Small Letter B"}},"48":{"eventCode":"KeyN","row":"4","symbolDefault":{"symbol":"n","name":"Latin Small Letter N"},"symbolShiftMod":{"symbol":"N","name":"Latin Capital Letter N"},"symbolCapsMod":{"symbol":"N","name":"Latin Capital Letter N"},"symbolCapsShiftMod":{"symbol":"n","name":"Latin Small Letter N"}},"49":{"eventCode":"KeyM","row":"4","symbolDefault":{"symbol":"m","name":"Latin Small Letter M"},"symbolShiftMod":{"symbol":"M","name":"Latin Capital Letter M"},"symbolCapsMod":{"symbol":"M","name":"Latin Capital Letter M"},"symbolCapsShiftMod":{"symbol":"m","name":"Latin Small Letter M"}},"50":{"eventCode":"Comma","row":"4","symbolDefault":{"symbol":",","name":"Comma"},"symbolShiftMod":{"symbol":"<","name":"Less-Than Sign"},"symbolCapsMod":{"symbol":",","name":"Comma"},"symbolCapsShiftMod":{"symbol":"<","name":"Less-Than Sign"}},"51":{"eventCode":"Period","row":"4","symbolDefault":{"symbol":".","name":"Full Stop (Dot)"},"symbolShiftMod":{"symbol":">","name":"Greater-Than Sign"},"symbolCapsMod":{"symbol":".","name":"Full Stop (Dot)"},"symbolCapsShiftMod":{"symbol":">","name":"Greater-Than Sign"}},"52":{"eventCode":"Slash","row":"4","symbolDefault":{"symbol":"/","mnemonicHTML":"&#47;","name":"Solidus"},"symbolShiftMod":{"symbol":"?","name":"Question Mark"},"symbolCapsMod":{"symbol":"/","mnemonicHTML":"&#47;","name":"Solidus"},"symbolCapsShiftMod":{"symbol":"?","name":"Question Mark"}},"53":{"eventCode":"ShiftRight","row":"4","symbolDefault":{"symbol":"Shift","name":"Right Shift key"},"symbolShiftMod":{"symbol":"none","name":"none"},"symbolCapsMod":{"symbol":"none","name":"none"},"symbolCapsShiftMod":{"symbol":"none","name":"none"}},"54":{"eventCode":"ArrowUp","row":"4","symbolDefault":{"symbol":"&#9650;","name":"Up Arrow key"},"symbolShiftMod":{"symbol":"none","name":"none"},"symbolCapsMod":{"symbol":"none","name":"none"},"symbolCapsShiftMod":{"symbol":"none","name":"none"}},"55":{"eventCode":"Delete","row":"4","symbolDefault":{"symbol":"Del","name":"Delete key"},"symbolShiftMod":{"symbol":"none","name":"none"},"symbolCapsMod":{"symbol":"none","name":"none"},"symbolCapsShiftMod":{"symbol":"none","name":"none"}},"56":{"eventCode":"ControlLeft","row":"5","symbolDefault":{"symbol":"Ctrl","name":"Left Ctrl key"},"symbolShiftMod":{"symbol":"none","name":"none"},"symbolCapsMod":{"symbol":"none","name":"none"},"symbolCapsShiftMod":{"symbol":"none","name":"none"}},"57":{"eventCode":"MetaLeft","row":"5","symbolDefault":{"symbol":"Win","name":"Win key"},"symbolShiftMod":{"symbol":"none","name":"none"},"symbolCapsMod":{"symbol":"none","name":"none"},"symbolCapsShiftMod":{"symbol":"none","name":"none"}},"58":{"eventCode":"AltLeft","row":"5","symbolDefault":{"symbol":"Alt","name":"Left Alt key"},"symbolShiftMod":{"symbol":"none","name":"none"},"symbolCapsMod":{"symbol":"none","name":"none"},"symbolCapsShiftMod":{"symbol":"none","name":"none"}},"59":{"eventCode":"Space","row":"5","symbolDefault":{"symbol":"Space","name":"Space key"},"symbolShiftMod":{"symbol":"none","name":"none"},"symbolCapsMod":{"symbol":"none","name":"none"},"symbolCapsShiftMod":{"symbol":"none","name":"none"}},"60":{"eventCode":"AltRight","row":"5","symbolDefault":{"symbol":"Alt","name":"Right Alt key"},"symbolShiftMod":{"symbol":"none","name":"none"},"symbolCapsMod":{"symbol":"none","name":"none"},"symbolCapsShiftMod":{"symbol":"none","name":"none"}},"61":{"eventCode":"ControlRight","row":"5","symbolDefault":{"symbol":"Ctrl","name":"Right Ctrl key"},"symbolShiftMod":{"symbol":"none","name":"none"},"symbolCapsMod":{"symbol":"none","name":"none"},"symbolCapsShiftMod":{"symbol":"none","name":"none"}},"62":{"eventCode":"ArrowLeft","row":"5","symbolDefault":{"symbol":"&#9668;","name":"Left Arrow key"},"symbolShiftMod":{"symbol":"none","name":"none"},"symbolCapsMod":{"symbol":"none","name":"none"},"symbolCapsShiftMod":{"symbol":"none","name":"none"}},"63":{"eventCode":"ArrowDown","row":"5","symbolDefault":{"symbol":"&#9660;","name":"Down Arrow key"},"symbolShiftMod":{"symbol":"none","name":"none"},"symbolCapsMod":{"symbol":"none","name":"none"},"symbolCapsShiftMod":{"symbol":"none","name":"none"}},"64":{"eventCode":"ArrowRight","row":"5","symbolDefault":{"symbol":"&#9658;","name":"Right Arrow key"},"symbolShiftMod":{"symbol":"none","name":"none"},"symbolCapsMod":{"symbol":"none","name":"none"},"symbolCapsShiftMod":{"symbol":"none","name":"none"}}},"ru":{"1":{"eventCode":"Backquote","row":"1","symbolDefault":{"symbol":"ё","name":""},"symbolShiftMod":{"symbol":"Ё","name":""},"symbolCapsMod":{"symbol":"Ё","name":""},"symbolCapsShiftMod":{"symbol":"ё","name":""}},"2":{"eventCode":"Digit1","row":"1","symbolDefault":{"symbol":"1","name":"Digit One"},"symbolShiftMod":{"symbol":"!","name":"Exclamation Mark"},"symbolCapsMod":{"symbol":"1","name":"Digit One"},"symbolCapsShiftMod":{"symbol":"!","name":"Exclamation Mark"}},"3":{"eventCode":"Digit2","row":"1","symbolDefault":{"symbol":"2","name":"Digit Two"},"symbolShiftMod":{"symbol":"\\"","name":"Commercial At"},"symbolCapsMod":{"symbol":"2","name":"Digit Two"},"symbolCapsShiftMod":{"symbol":"\\"","name":"Commercial At"}},"4":{"eventCode":"Digit3","row":"1","symbolDefault":{"symbol":"3","name":"Digit Three"},"symbolShiftMod":{"symbol":"№","name":""},"symbolCapsMod":{"symbol":"3","name":"Digit Three"},"symbolCapsShiftMod":{"symbol":"№","name":""}},"5":{"eventCode":"Digit4","row":"1","symbolDefault":{"symbol":"4","name":"Digit Four"},"symbolShiftMod":{"symbol":";","name":""},"symbolCapsMod":{"symbol":"4","name":"Digit Four"},"symbolCapsShiftMod":{"symbol":";","name":""}},"6":{"eventCode":"Digit5","row":"1","symbolDefault":{"symbol":"5","name":"Digit Five"},"symbolShiftMod":{"symbol":"%","mnemonicHTML":"&#96;","name":"Percent Sign"},"symbolCapsMod":{"symbol":"5","name":"Digit Five"},"symbolCapsShiftMod":{"symbol":"%","mnemonicHTML":"&#96;","name":"Percent Sign"}},"7":{"eventCode":"Digit6","row":"1","symbolDefault":{"symbol":"6","name":"Digit Six"},"symbolShiftMod":{"symbol":":","name":""},"symbolCapsMod":{"symbol":"6","name":"Digit Six"},"symbolCapsShiftMod":{"symbol":":","name":""}},"8":{"eventCode":"Digit7","row":"1","symbolDefault":{"symbol":"7","name":"Digit Seven"},"symbolShiftMod":{"symbol":"?","name":""},"symbolCapsMod":{"symbol":"7","name":"Digit Seven"},"symbolCapsShiftMod":{"symbol":"?","name":""}},"9":{"eventCode":"Digit8","row":"1","symbolDefault":{"symbol":"8","name":"Digit Eight"},"symbolShiftMod":{"symbol":"*","mnemonicHTML":"&#96;","name":"Asterisk"},"symbolCapsMod":{"symbol":"8","name":"Digit Eight"},"symbolCapsShiftMod":{"symbol":"*","mnemonicHTML":"&#96;","name":"Asterisk"}},"10":{"eventCode":"Digit9","row":"1","symbolDefault":{"symbol":"9","name":"Digit Nine"},"symbolShiftMod":{"symbol":"(","mnemonicHTML":"&#40;","name":"Left Parenthesis"},"symbolCapsMod":{"symbol":"9","name":"Digit Nine"},"symbolCapsShiftMod":{"symbol":"(","mnemonicHTML":"&#40;","name":"Left Parenthesis"}},"11":{"eventCode":"Digit0","row":"1","symbolDefault":{"symbol":"0","name":"Digit Zero"},"symbolShiftMod":{"symbol":")","mnemonicHTML":"&#96;","name":"Right Parenthesis"},"symbolCapsMod":{"symbol":"0","name":"Digit Zero"},"symbolCapsShiftMod":{"symbol":")","mnemonicHTML":"&#96;","name":"Right Parenthesis"}},"12":{"eventCode":"Minus","row":"1","symbolDefault":{"symbol":"-","name":"Hyphen-Minus"},"symbolShiftMod":{"symbol":"_","name":"Low Line"},"symbolCapsMod":{"symbol":"-","name":"Hyphen-Minus"},"symbolCapsShiftMod":{"symbol":"_","name":"Low Line"}},"13":{"eventCode":"Equal","row":"1","symbolDefault":{"symbol":"=","name":"Equals Sign"},"symbolShiftMod":{"symbol":"+","name":"Plus Sign"},"symbolCapsMod":{"symbol":"=","name":"Equals Sign"},"symbolCapsShiftMod":{"symbol":"+","name":"Plus Sign"}},"14":{"eventCode":"Backspace","row":"1","symbolDefault":{"symbol":"Backspace","name":"Backspace key"},"symbolShiftMod":{"symbol":"none","name":"none"},"symbolCapsMod":{"symbol":"none","name":"none"},"symbolCapsShiftMod":{"symbol":"none","name":"none"}},"15":{"eventCode":"Tab","row":"2","symbolDefault":{"symbol":"Tab","name":"Tab key"},"symbolShiftMod":{"symbol":"none","name":"none"},"symbolCapsMod":{"symbol":"none","name":"none"},"symbolCapsShiftMod":{"symbol":"none","name":"none"}},"16":{"eventCode":"KeyQ","row":"2","symbolDefault":{"symbol":"й","name":""},"symbolShiftMod":{"symbol":"Й","name":""},"symbolCapsMod":{"symbol":"Й","name":""},"symbolCapsShiftMod":{"symbol":"й","name":""}},"17":{"eventCode":"KeyW","row":"2","symbolDefault":{"symbol":"ц","name":""},"symbolShiftMod":{"symbol":"Ц","name":""},"symbolCapsMod":{"symbol":"Ц","name":""},"symbolCapsShiftMod":{"symbol":"ц","name":""}},"18":{"eventCode":"KeyE","row":"2","symbolDefault":{"symbol":"у","name":""},"symbolShiftMod":{"symbol":"У","name":""},"symbolCapsMod":{"symbol":"У","name":""},"symbolCapsShiftMod":{"symbol":"у","name":""}},"19":{"eventCode":"KeyR","row":"2","symbolDefault":{"symbol":"к","name":""},"symbolShiftMod":{"symbol":"К","name":""},"symbolCapsMod":{"symbol":"К","name":""},"symbolCapsShiftMod":{"symbol":"к","name":""}},"20":{"eventCode":"KeyT","row":"2","symbolDefault":{"symbol":"е","name":""},"symbolShiftMod":{"symbol":"Е","name":""},"symbolCapsMod":{"symbol":"Е","name":""},"symbolCapsShiftMod":{"symbol":"е","name":""}},"21":{"eventCode":"KeyY","row":"2","symbolDefault":{"symbol":"н","name":""},"symbolShiftMod":{"symbol":"Н","name":""},"symbolCapsMod":{"symbol":"Н","name":""},"symbolCapsShiftMod":{"symbol":"н","name":""}},"22":{"eventCode":"KeyU","row":"2","symbolDefault":{"symbol":"г","name":""},"symbolShiftMod":{"symbol":"Г","name":""},"symbolCapsMod":{"symbol":"Г","name":""},"symbolCapsShiftMod":{"symbol":"г","name":""}},"23":{"eventCode":"KeyI","row":"2","symbolDefault":{"symbol":"ш","name":""},"symbolShiftMod":{"symbol":"Ш","name":""},"symbolCapsMod":{"symbol":"Ш","name":""},"symbolCapsShiftMod":{"symbol":"ш","name":""}},"24":{"eventCode":"KeyO","row":"2","symbolDefault":{"symbol":"щ","name":""},"symbolShiftMod":{"symbol":"Щ","name":""},"symbolCapsMod":{"symbol":"Щ","name":""},"symbolCapsShiftMod":{"symbol":"щ","name":""}},"25":{"eventCode":"KeyP","row":"2","symbolDefault":{"symbol":"з","name":""},"symbolShiftMod":{"symbol":"З","name":""},"symbolCapsMod":{"symbol":"З","name":""},"symbolCapsShiftMod":{"symbol":"з","name":""}},"26":{"eventCode":"BracketLeft","row":"2","symbolDefault":{"symbol":"х","name":""},"symbolShiftMod":{"symbol":"Х","name":""},"symbolCapsMod":{"symbol":"Х","name":""},"symbolCapsShiftMod":{"symbol":"х","name":""}},"27":{"eventCode":"BracketRight","row":"2","symbolDefault":{"symbol":"ъ","name":""},"symbolShiftMod":{"symbol":"Ъ","name":""},"symbolCapsMod":{"symbol":"Ъ","name":""},"symbolCapsShiftMod":{"symbol":"ъ","name":""}},"28":{"eventCode":"Backslash","row":"2","symbolDefault":{"symbol":"\\\\","mnemonicHTML":"&#92;","name":"Reverse Solidus"},"symbolShiftMod":{"symbol":"/","name":""},"symbolCapsMod":{"symbol":"\\\\","mnemonicHTML":"&#92;","name":"Reverse Solidus"},"symbolCapsShiftMod":{"symbol":"/","name":""}},"29":{"eventCode":"CapsLock","row":"3","symbolDefault":{"symbol":"Caps Lock","name":"Caps Lock key"},"symbolShiftMod":{"symbol":"none","name":"none"},"symbolCapsMod":{"symbol":"none","name":"none"},"symbolCapsShiftMod":{"symbol":"none","name":"none"}},"30":{"eventCode":"KeyA","row":"3","symbolDefault":{"symbol":"ф","name":""},"symbolShiftMod":{"symbol":"Ф","name":""},"symbolCapsMod":{"symbol":"Ф","name":""},"symbolCapsShiftMod":{"symbol":"ф","name":""}},"31":{"eventCode":"KeyS","row":"3","symbolDefault":{"symbol":"ы","name":""},"symbolShiftMod":{"symbol":"Ы","name":""},"symbolCapsMod":{"symbol":"Ы","name":""},"symbolCapsShiftMod":{"symbol":"ы","name":""}},"32":{"eventCode":"KeyD","row":"3","symbolDefault":{"symbol":"в","name":""},"symbolShiftMod":{"symbol":"В","name":""},"symbolCapsMod":{"symbol":"В","name":""},"symbolCapsShiftMod":{"symbol":"в","name":""}},"33":{"eventCode":"KeyF","row":"3","symbolDefault":{"symbol":"а","name":""},"symbolShiftMod":{"symbol":"А","name":""},"symbolCapsMod":{"symbol":"А","name":""},"symbolCapsShiftMod":{"symbol":"а","name":""}},"34":{"eventCode":"KeyG","row":"3","symbolDefault":{"symbol":"п","name":""},"symbolShiftMod":{"symbol":"П","name":""},"symbolCapsMod":{"symbol":"П","name":""},"symbolCapsShiftMod":{"symbol":"п","name":""}},"35":{"eventCode":"KeyH","row":"3","symbolDefault":{"symbol":"р","name":""},"symbolShiftMod":{"symbol":"Р","name":""},"symbolCapsMod":{"symbol":"Р","name":""},"symbolCapsShiftMod":{"symbol":"р","name":""}},"36":{"eventCode":"KeyJ","row":"3","symbolDefault":{"symbol":"о","name":""},"symbolShiftMod":{"symbol":"О","name":""},"symbolCapsMod":{"symbol":"О","name":""},"symbolCapsShiftMod":{"symbol":"о","name":""}},"37":{"eventCode":"KeyK","row":"3","symbolDefault":{"symbol":"л","name":""},"symbolShiftMod":{"symbol":"Л","name":""},"symbolCapsMod":{"symbol":"Л","name":""},"symbolCapsShiftMod":{"symbol":"л","name":""}},"38":{"eventCode":"KeyL","row":"3","symbolDefault":{"symbol":"д","name":""},"symbolShiftMod":{"symbol":"Д","name":""},"symbolCapsMod":{"symbol":"Д","name":""},"symbolCapsShiftMod":{"symbol":"д","name":""}},"39":{"eventCode":"Semicolon","row":"3","symbolDefault":{"symbol":"ж","name":""},"symbolShiftMod":{"symbol":"Ж","name":""},"symbolCapsMod":{"symbol":"Ж","name":""},"symbolCapsShiftMod":{"symbol":"ж","name":""}},"40":{"eventCode":"Quote","row":"3","symbolDefault":{"symbol":"э","name":""},"symbolShiftMod":{"symbol":"Э","name":""},"symbolCapsMod":{"symbol":"Э","name":""},"symbolCapsShiftMod":{"symbol":"э","name":""}},"41":{"eventCode":"Enter","row":"3","symbolDefault":{"symbol":"Enter","name":"Enter key"},"symbolShiftMod":{"symbol":"none","name":"none"},"symbolCapsMod":{"symbol":"none","name":"none"},"symbolCapsShiftMod":{"symbol":"none","name":"none"}},"42":{"eventCode":"ShiftLeft","row":"4","symbolDefault":{"symbol":"Shift","name":"Left Shift key"},"symbolShiftMod":{"symbol":"none","name":"none"},"symbolCapsMod":{"symbol":"none","name":"none"},"symbolCapsShiftMod":{"symbol":"none","name":"none"}},"43":{"eventCode":"KeyZ","row":"4","symbolDefault":{"symbol":"я","name":""},"symbolShiftMod":{"symbol":"Я","name":""},"symbolCapsMod":{"symbol":"Я","name":""},"symbolCapsShiftMod":{"symbol":"я","name":""}},"44":{"eventCode":"KeyX","row":"4","symbolDefault":{"symbol":"ч","name":""},"symbolShiftMod":{"symbol":"Ч","name":""},"symbolCapsMod":{"symbol":"Ч","name":""},"symbolCapsShiftMod":{"symbol":"ч","name":""}},"45":{"eventCode":"KeyC","row":"4","symbolDefault":{"symbol":"с","name":""},"symbolShiftMod":{"symbol":"С","name":""},"symbolCapsMod":{"symbol":"С","name":""},"symbolCapsShiftMod":{"symbol":"с","name":""}},"46":{"eventCode":"KeyV","row":"4","symbolDefault":{"symbol":"м","name":""},"symbolShiftMod":{"symbol":"М","name":""},"symbolCapsMod":{"symbol":"М","name":""},"symbolCapsShiftMod":{"symbol":"м","name":""}},"47":{"eventCode":"KeyB","row":"4","symbolDefault":{"symbol":"и","name":""},"symbolShiftMod":{"symbol":"И","name":""},"symbolCapsMod":{"symbol":"И","name":""},"symbolCapsShiftMod":{"symbol":"и","name":""}},"48":{"eventCode":"KeyN","row":"4","symbolDefault":{"symbol":"т","name":""},"symbolShiftMod":{"symbol":"Т","name":""},"symbolCapsMod":{"symbol":"Т","name":""},"symbolCapsShiftMod":{"symbol":"т","name":""}},"49":{"eventCode":"KeyM","row":"4","symbolDefault":{"symbol":"ь","name":""},"symbolShiftMod":{"symbol":"Ь","name":""},"symbolCapsMod":{"symbol":"Ь","name":""},"symbolCapsShiftMod":{"symbol":"ь","name":""}},"50":{"eventCode":"Comma","row":"4","symbolDefault":{"symbol":"б","name":""},"symbolShiftMod":{"symbol":"Б","name":""},"symbolCapsMod":{"symbol":"Б","name":""},"symbolCapsShiftMod":{"symbol":"б","name":""}},"51":{"eventCode":"Period","row":"4","symbolDefault":{"symbol":"ю","name":""},"symbolShiftMod":{"symbol":"Ю","name":""},"symbolCapsMod":{"symbol":"Ю","name":""},"symbolCapsShiftMod":{"symbol":"ю","name":""}},"52":{"eventCode":"Slash","row":"4","symbolDefault":{"symbol":".","name":""},"symbolShiftMod":{"symbol":",","name":""},"symbolCapsMod":{"symbol":".","name":""},"symbolCapsShiftMod":{"symbol":",","name":""}},"53":{"eventCode":"ShiftRight","row":"4","symbolDefault":{"symbol":"Shift","name":"Right Shift key"},"symbolShiftMod":{"symbol":"none","name":"none"},"symbolCapsMod":{"symbol":"none","name":"none"},"symbolCapsShiftMod":{"symbol":"none","name":"none"}},"54":{"eventCode":"ArrowUp","row":"4","symbolDefault":{"symbol":"&#9650;","name":"Up Arrow key"},"symbolShiftMod":{"symbol":"none","name":"none"},"symbolCapsMod":{"symbol":"none","name":"none"},"symbolCapsShiftMod":{"symbol":"none","name":"none"}},"55":{"eventCode":"Delete","row":"4","symbolDefault":{"symbol":"Del","name":"Delete key"},"symbolShiftMod":{"symbol":"none","name":"none"},"symbolCapsMod":{"symbol":"none","name":"none"},"symbolCapsShiftMod":{"symbol":"none","name":"none"}},"56":{"eventCode":"ControlLeft","row":"5","symbolDefault":{"symbol":"Ctrl","name":"Left Ctrl key"},"symbolShiftMod":{"symbol":"none","name":"none"},"symbolCapsMod":{"symbol":"none","name":"none"},"symbolCapsShiftMod":{"symbol":"none","name":"none"}},"57":{"eventCode":"MetaLeft","row":"5","symbolDefault":{"symbol":"Win","name":"Win key"},"symbolShiftMod":{"symbol":"none","name":"none"},"symbolCapsMod":{"symbol":"none","name":"none"},"symbolCapsShiftMod":{"symbol":"none","name":"none"}},"58":{"eventCode":"AltLeft","row":"5","symbolDefault":{"symbol":"Alt","name":"Left Alt key"},"symbolShiftMod":{"symbol":"none","name":"none"},"symbolCapsMod":{"symbol":"none","name":"none"},"symbolCapsShiftMod":{"symbol":"none","name":"none"}},"59":{"eventCode":"Space","row":"5","symbolDefault":{"symbol":"Space","name":"Space key"},"symbolShiftMod":{"symbol":"none","name":"none"},"symbolCapsMod":{"symbol":"none","name":"none"},"symbolCapsShiftMod":{"symbol":"none","name":"none"}},"60":{"eventCode":"AltRight","row":"5","symbolDefault":{"symbol":"Alt","name":"Right Alt key"},"symbolShiftMod":{"symbol":"none","name":"none"},"symbolCapsMod":{"symbol":"none","name":"none"},"symbolCapsShiftMod":{"symbol":"none","name":"none"}},"61":{"eventCode":"ControlRight","row":"5","symbolDefault":{"symbol":"Ctrl","name":"Right Ctrl key"},"symbolShiftMod":{"symbol":"none","name":"none"},"symbolCapsMod":{"symbol":"none","name":"none"},"symbolCapsShiftMod":{"symbol":"none","name":"none"}},"62":{"eventCode":"ArrowLeft","row":"5","symbolDefault":{"symbol":"&#9668;","name":"Left Arrow key"},"symbolShiftMod":{"symbol":"none","name":"none"},"symbolCapsMod":{"symbol":"none","name":"none"},"symbolCapsShiftMod":{"symbol":"none","name":"none"}},"63":{"eventCode":"ArrowDown","row":"5","symbolDefault":{"symbol":"&#9660;","name":"Down Arrow key"},"symbolShiftMod":{"symbol":"none","name":"none"},"symbolCapsMod":{"symbol":"none","name":"none"},"symbolCapsShiftMod":{"symbol":"none","name":"none"}},"64":{"eventCode":"ArrowRight","row":"5","symbolDefault":{"symbol":"&#9658;","name":"Right Arrow key"},"symbolShiftMod":{"symbol":"none","name":"none"},"symbolCapsMod":{"symbol":"none","name":"none"},"symbolCapsShiftMod":{"symbol":"none","name":"none"}}}}');

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5jZWEyMTliMC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDMEQ7O0FBRTFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsUUFBUTtBQUN2QixlQUFlLFFBQVE7QUFDdkI7QUFDQTs7QUFFQTtBQUNBLGVBQWUsUUFBUTtBQUN2QjtBQUNBLGVBQWUsUUFBUTtBQUN2Qjs7QUFFQTtBQUNBLGVBQWUsUUFBUTtBQUN2QixlQUFlLFFBQVE7QUFDdkIsZUFBZSxRQUFRO0FBQ3ZCO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCLGVBQWUsUUFBUTtBQUN2QjtBQUNBLGVBQWUsUUFBUTtBQUN2QjtBQUNBLGVBQWUsUUFBUTtBQUN2QjtBQUNBOztBQUVBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCLGVBQWUsUUFBUTtBQUN2QixlQUFlLFFBQVE7QUFDdkIsZUFBZSxRQUFRO0FBQ3ZCOztBQUVBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCLGVBQWUsUUFBUTtBQUN2QixlQUFlLFFBQVE7QUFDdkI7O0FBRUE7QUFDQSxlQUFlLFFBQVE7QUFDdkI7QUFDQSxlQUFlLFFBQVE7QUFDdkIsZUFBZSxRQUFRO0FBQ3ZCLGVBQWUsUUFBUTtBQUN2Qjs7QUFFQTtBQUNBLGVBQWUsUUFBUTtBQUN2QjtBQUNBLGVBQWUsUUFBUTtBQUN2QixlQUFlLFFBQVE7QUFDdkIsZUFBZSxRQUFRO0FBQ3ZCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ2U7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSx5QkFBeUIsU0FBUztBQUNsQyx5QkFBeUIsU0FBUztBQUNsQyx5QkFBeUIsU0FBUztBQUNsQztBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHlEQUFZO0FBQ3BDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EscURBQXFELGtCQUFrQjs7QUFFdkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxrQkFBa0I7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsbURBQW1EO0FBQzlFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixZQUFZO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNwY2U7QUFDZjs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0EsZ0RBQWdELGtCQUFrQjtBQUNsRTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2pEMEQ7O0FBRTFEO0FBQ0E7QUFDQTtBQUNlO0FBQ2Y7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLDJCQUEyQixTQUFTO0FBQ3BDLDJCQUEyQixTQUFTO0FBQ3BDLDJCQUEyQixTQUFTO0FBQ3BDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtEQUErRCxjQUFjO0FBQzdFO0FBQ0E7QUFDQSxrRUFBa0UsY0FBYztBQUNoRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxvQ0FBb0MsNkRBQW9CO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSw4QkFBOEIsNkRBQW9CO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsNkJBQTZCLDZEQUFvQjtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3aUJBO0FBQ0E7QUFDQTtBQUNnRTs7QUFFaEU7QUFDQTtBQUNBO0FBQzBEOztBQUUxRDtBQUNBOztBQUVBO0FBQ29DO0FBQ0k7O0FBRXhDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0MsZ0VBQXVCO0FBQzdEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhCQUE4Qiw2REFBb0I7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3ZpcnR1YWwta2V5Ym9hcmQvLi9hc3NldHMvc3R5bGVzL25vcm1hbGl6ZS5jc3M/YmVhMSIsIndlYnBhY2s6Ly92aXJ0dWFsLWtleWJvYXJkLy4vYXNzZXRzL3N0eWxlcy9zdHlsZS5jc3M/MjM1OCIsIndlYnBhY2s6Ly92aXJ0dWFsLWtleWJvYXJkLy4vc3JjL0Jhc2ljU3RydWN0dXJlR2VuZXJhdG9yLmpzIiwid2VicGFjazovL3ZpcnR1YWwta2V5Ym9hcmQvLi9zcmMvRWxlbWVudENsYXNzT2JzZXJ2ZXIuanMiLCJ3ZWJwYWNrOi8vdmlydHVhbC1rZXlib2FyZC8uL3NyYy9LZXlib2FyZExvZ2ljTWFuYWdlci5qcyIsIndlYnBhY2s6Ly92aXJ0dWFsLWtleWJvYXJkLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8qIEltcG9ydCBKU09OIHdpdGgga2V5cyBpbnNjcmlwdGlvbnMgYW5kIG90aGVyIGtleXMgaW5mbyAqL1xuaW1wb3J0IGluc2NyaXB0aW9ucyBmcm9tICcuLi9hc3NldHMvanMvaW5zY3JpcHRpb25zLmpzb24nO1xuXG4vKipcbiAqIFRPRE86IHJld29yayBKU09OLiBFdmVyeSBidXR0b24gbmVlZCBvbmUgdW5pcXVlIGlkZW50aWZpZXIuIE1heWJlLCBldmVudC5jb2RlP1xuICogICAgICAgKG5vdCBkZXByZWNhdGVkIGV2ZW50LmtleUNvZGUgb3IgZXZlbnQud2hpY2ghISEpXG4gKiAgICAgICBBZnRlciBpdCwgcmV3b3JrIHJlbGV2YW50IGNsYXNzIG1ldGhvZHMuXG4gKiAqL1xuXG4vLyA8ZWRpdG9yLWZvbGQgZGVzYz1cIktleXMgT2JqZWN0IEpTRG9jXCI+XG4vKipcbiAqIEB0eXBlZGVmICAge09iamVjdH0ga2V5SW5zY3JpcHRpb25zICAtIE9iamVjdCwgcGFyc2VkIGZyb20gSlNPTiB3aXRoIGluZm8gYWJvdXQga2V5cy5cbiAqIEBwcm9wZXJ0eSAge09iamVjdH0gZW4gICAgICAgICAgICAgICAtIGlubmVyIE9iamVjdCB3aXRoIGluZm9cbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFib3V0IGtleXMgZm9yIEVuZ2xpc2gga2V5Ym9hcmQuXG4gKi9cblxuLyoqXG4gKiBAdHlwZWRlZiAgIHtPYmplY3R9IGVuICAgICAgICAgICAtIGlubmVyIE9iamVjdCB3aXRoIGluZm9cbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWJvdXQga2V5cyBmb3IgRW5nbGlzaCBrZXlib2FyZC5cbiAqIEBwcm9wZXJ0eSAge09iamVjdH0ga2V5QnlOdW1iZXIgIC0gaW5uZXIgT2JqZWN0IHdpdGggaW5mb3JtYXRpb24gYWJvdXQgc2VwYXJhdGUga2V5LlxuICovXG5cbi8qKlxuICogQHR5cGVkZWYgICB7T2JqZWN0fSBrZXlCeU51bWJlciAgICAtIGlubmVyIE9iamVjdCB3aXRoIGluZm9ybWF0aW9uIGFib3V0IHNlcGFyYXRlIGtleS5cbiAqIEBwcm9wZXJ0eSAge1N0cmluZ30gZXZlbnRDb2RlICAgICAgLSBrZXkgZXZlbnQuY29kZS5cbiAqIEBwcm9wZXJ0eSAge1N0cmluZ30gcm93ICAgICAgICAgICAgLSBmaWVsZCB3aXRoIGluZm9ybWF0aW9uXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWJvdXQga2V5Ym9hcmQgcm93IG9mIGN1cnJlbnQga2V5LlxuICogQHByb3BlcnR5ICB7T2JqZWN0fSBzeW1ib2xEZWZhdWx0ICAtIE9iamVjdCB3aXRoIGluZm9ybWF0aW9uIGFib3V0IHN5bWJvbCBmb3IgZGVmYXVsdCBzdGF0ZS5cbiAqIEBwcm9wZXJ0eSAge09iamVjdH0gc3ltYm9sU2hpZnRNb2QgLSBPYmplY3Qgd2l0aCBpbmZvcm1hdGlvbiBhYm91dCBzeW1ib2xcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgU2hpZnQgbW9kaWZpY2F0aW9uIHN0YXRlLlxuICogQHByb3BlcnR5ICB7T2JqZWN0fSBzeW1ib2xDYXBzTW9kICAtIE9iamVjdCB3aXRoIGluZm9ybWF0aW9uIGFib3V0IHN5bWJvbFxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciBTaGlmdCBtb2RpZmljYXRpb24gc3RhdGUuXG4gKiBAcHJvcGVydHkgIHtPYmplY3R9IHN5bWJvbENhcHNTaGlmdE1vZCAtIE9iamVjdCB3aXRoIGluZm9ybWF0aW9uIGFib3V0IHN5bWJvbFxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgU2hpZnQgbW9kaWZpY2F0aW9uIHN0YXRlLlxuICovXG5cbi8qKlxuICogQHR5cGVkZWYgICB7T2JqZWN0fSBzeW1ib2xEZWZhdWx0ICAtIE9iamVjdCB3aXRoIGluZm9ybWF0aW9uIGFib3V0IHN5bWJvbCBmb3IgZGVmYXVsdCBzdGF0ZS5cbiAqIEBwcm9wZXJ0eSAge1N0cmluZ30gc3ltYm9sICAgICAgICAgLSBzeW1ib2wuXG4gKiBAcHJvcGVydHkgIHtTdHJpbmd9IG1uZW1vbmljSFRNTCAgIC0gSFRNTCBtbmVtb25pYy5cbiAqIEBwcm9wZXJ0eSAge1N0cmluZ30gbmFtZSAgICAgICAgICAgLSBodW1hbi1yZWFkYWJsZSBuYW1lIG9mIHN5bWJvbC5cbiAqL1xuXG4vKipcbiAqIEB0eXBlZGVmICAge09iamVjdH0gc3ltYm9sU2hpZnRNb2QgLSBPYmplY3Qgd2l0aCBpbmZvcm1hdGlvbiBhYm91dCBzeW1ib2xcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgU2hpZnQgbW9kaWZpY2F0aW9uIHN0YXRlLlxuICogQHByb3BlcnR5ICB7U3RyaW5nfSBzeW1ib2wgICAgICAgICAtIHN5bWJvbC5cbiAqIEBwcm9wZXJ0eSAge1N0cmluZ30gbW5lbW9uaWNIVE1MICAgLSBIVE1MIG1uZW1vbmljLlxuICogQHByb3BlcnR5ICB7U3RyaW5nfSBuYW1lICAgICAgICAgICAtIGh1bWFuLXJlYWRhYmxlIG5hbWUgb2Ygc3ltYm9sLlxuICovXG5cbi8qKlxuICogQHR5cGVkZWYgICB7T2JqZWN0fSBzeW1ib2xDYXBzTW9kICAtIE9iamVjdCB3aXRoIGluZm9ybWF0aW9uIGFib3V0IHN5bWJvbFxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciBTaGlmdCBtb2RpZmljYXRpb24gc3RhdGUuXG4gKiBAcHJvcGVydHkgIHtTdHJpbmd9IHN5bWJvbCAgICAgICAgIC0gc3ltYm9sLlxuICogQHByb3BlcnR5ICB7U3RyaW5nfSBtbmVtb25pY0hUTUwgICAtIEhUTUwgbW5lbW9uaWMuXG4gKiBAcHJvcGVydHkgIHtTdHJpbmd9IG5hbWUgICAgICAgICAgIC0gaHVtYW4tcmVhZGFibGUgbmFtZSBvZiBzeW1ib2wuXG4gKi9cblxuLyoqXG4gKiBAdHlwZWRlZiAgIHtPYmplY3R9IHN5bWJvbENhcHNTaGlmdE1vZCAgLSBPYmplY3Qgd2l0aCBpbmZvcm1hdGlvbiBhYm91dCBzeW1ib2xcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciBTaGlmdCBtb2RpZmljYXRpb24gc3RhdGUuXG4gKiBAcHJvcGVydHkgIHtTdHJpbmd9IHN5bWJvbCAgICAgICAgIC0gc3ltYm9sLlxuICogQHByb3BlcnR5ICB7U3RyaW5nfSBtbmVtb25pY0hUTUwgICAtIEhUTUwgbW5lbW9uaWMuXG4gKiBAcHJvcGVydHkgIHtTdHJpbmd9IG5hbWUgICAgICAgICAgIC0gaHVtYW4tcmVhZGFibGUgbmFtZSBvZiBzeW1ib2wuXG4gKi9cbi8vIDwvZWRpdG9yLWZvbGQgZGVzYz1cIktleXMgT2JqZWN0IEpTRG9jXCI+XG5cbi8qKlxuICogQmFzaWNTdHJ1Y3R1cmVHZW5lcmF0b3IgY2xhc3MgZm9yIGdlbmVyYXRlIGJhc2ljIEhUTUwgRWxlbWVudHMgZm9yIEFwcC5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFzaWNTdHJ1Y3R1cmVHZW5lcmF0b3Ige1xuICAvLyA8ZWRpdG9yLWZvbGQgZGVzYz1cIlRva2Vuc1wiPlxuICByb290VG9rZW47XG4gIC8vIDwvZWRpdG9yLWZvbGQgZGVzYz1cIlRva2Vuc1wiPlxuXG4gIC8vIDxlZGl0b3ItZm9sZCBkZXNjPVwiRWxlbWVudHNcIj5cbiAgcm9vdDtcblxuICByb290Q29udGFpbmVyO1xuXG4gIGhlYWRlcjtcblxuICBtYWluO1xuXG4gIGZvb3RlcjtcblxuICBjb250YWluZXI7XG5cbiAga2V5Ym9hcmQ7XG4gIC8vIDwvZWRpdG9yLWZvbGQgZGVzYz1cIkVsZW1lbnRzXCI+XG5cbiAgaW5zY3JpcHRpb25zO1xuXG4gIC8qKlxuICAgKiBLZXlib2FyZCBrZXlzIGNvdW50LlxuICAgKi9cbiAga2V5c0NvdW50O1xuXG4gIC8qKlxuICAgKiBWZXJib3NlIExWTCBmb3IgbWFuYWdlIG91dHB1dCB0byBjb25zb2xlLlxuICAgKi9cbiAgdmVyYm9zZUx2bDtcblxuICBsYW5ndWFnZTtcblxuICAvKipcbiAgICogQmFzaWMgc3RydWN0dXJlIGdlbmVyYXRvciBjb25zdHJ1Y3Rvci5cbiAgICogQHBhcmFtIHJvb3RUb2tlbiAgIHtTdHJpbmd9ICAtIFRva2VuIG9mIHJvb3QgZWxlbWVudCwgaW4gdGhhdCB3ZSBhZGQgbmV3IGVsZW1lbnRzLlxuICAgKiBAcGFyYW0gbGFuZ3VhZ2UgICAge1N0cmluZ30gIC0gQ3VycmVudCBBcHAgbGFuZ3VhZ2UuXG4gICAqIEBwYXJhbSB2ZXJib3NlTHZsICB7bnVtYmVyfSAgLSB2ZXJib3NlIExWTCBmb3IgbWFuYWdlIG91dHB1dCB0byBjb25zb2xlLlxuICAgKi9cbiAgY29uc3RydWN0b3Iocm9vdFRva2VuLCBsYW5ndWFnZSwgdmVyYm9zZUx2bCA9IDApIHtcbiAgICB0aGlzLnZlcmJvc2VMdmwgPSB2ZXJib3NlTHZsO1xuXG4gICAgdGhpcy5sYW5ndWFnZSA9IGxhbmd1YWdlO1xuXG4gICAgdGhpcy5yb290VG9rZW4gPSByb290VG9rZW47XG4gICAgdGhpcy5yb290ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihyb290VG9rZW4pO1xuXG4gICAgLyogSW5pdGlhbGlzZSBmaWVsZHMgZm9yIG1haW4gc3RydWN0dXJlIGVsZW1lbnRzLiAqL1xuICAgIHRoaXMucm9vdENvbnRhaW5lciA9IG51bGw7XG4gICAgdGhpcy5oZWFkZXIgPSBudWxsO1xuICAgIHRoaXMubWFpbiA9IG51bGw7XG4gICAgdGhpcy5mb290ZXIgPSBudWxsO1xuXG4gICAgLyogQ3JlYXRlIGNvbnRlbnQgY29udGFpbmVyIGZvciBldmVyeSBvdXRlciBzdHJ1Y3R1cmUgZWxlbWVudC4gKi9cbiAgICB0aGlzLmNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRoaXMuY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvbnRhaW5lcicpO1xuXG4gICAgLyogSW5pdGlhbGl6ZSBrZXlib2FyZCAqL1xuICAgIHRoaXMua2V5Ym9hcmQgPSBudWxsO1xuXG4gICAgLyoqXG4gICAgICogT2JqZWN0LCBwYXJzZWQgZnJvbSBKU09OIHdpdGggaW5mbyBhYm91dCBrZXlzLlxuICAgICAqIEB0eXBlIGtleUluc2NyaXB0aW9uc1xuICAgICAqL1xuICAgIHRoaXMuaW5zY3JpcHRpb25zID0gaW5zY3JpcHRpb25zO1xuICAgIHRoaXMua2V5c0NvdW50ID0gT2JqZWN0LmtleXModGhpcy5pbnNjcmlwdGlvbnNbdGhpcy5sYW5ndWFnZV0pLmxlbmd0aDtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZW5lcmF0ZSBoZWFkZXIgSFRNTCBFbGVtZW50IGFuZCBpdHMgYmFzaWMgY29udGVudC5cbiAgICovXG4gIGdlbmVyYXRlSGVhZGVyKCkge1xuICAgIC8qIEdlbmVyYXRlIGhlYWRlciAqL1xuICAgIHRoaXMuaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XG4gICAgdGhpcy5oZWFkZXIuY2xhc3NMaXN0LmFkZCgnaGVhZGVyJyk7XG5cbiAgICAvKiBHZW5lcmF0ZSBoZWFkaW5nICovXG4gICAgY29uc3QgaGVhZGluZ0gxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICBoZWFkaW5nSDEuaW5uZXJUZXh0ID0gJ1ZpcnR1YWwga2V5Ym9hcmQnO1xuICAgIGhlYWRpbmdIMS5jbGFzc0xpc3QuYWRkKCdoZWFkZXJfX2hlYWRpbmcnKTtcblxuICAgIC8qIEFwcGVuZCBoZWFkaW5nIGFuZCBjb250YWluZXIgKi9cbiAgICB0aGlzLmhlYWRlci5hcHBlbmRDaGlsZCh0aGlzLmNvbnRhaW5lci5jbG9uZU5vZGUodHJ1ZSkpO1xuICAgIHRoaXMuaGVhZGVyLmxhc3RFbGVtZW50Q2hpbGQuY2xhc3NMaXN0LmFkZCgnY29udGFpbmVyLS1oZWFkZXInKTtcbiAgICB0aGlzLmhlYWRlci5sYXN0RWxlbWVudENoaWxkLmFwcGVuZENoaWxkKGhlYWRpbmdIMSk7XG4gIH1cblxuICBnZXRJbnNjcmlwdGlvbkZvcktleShlbGVtZW50Rm9ySW5zY3JpcHRpb24sIGtleSwgc3ltYm9sTW9kLCBsYW5nKSB7XG4gICAgY29uc3QgZWxlbWVudEZvckluc2NyaXB0aW9uTG9jYWwgPSBlbGVtZW50Rm9ySW5zY3JpcHRpb247XG4gICAgc3dpdGNoIChzeW1ib2xNb2QpIHtcbiAgICAgIGNhc2UgJ3N5bWJvbERlZmF1bHQnOiB7XG4gICAgICAgIGVsZW1lbnRGb3JJbnNjcmlwdGlvbkxvY2FsLmlubmVySFRNTCA9IHRoaXMuaW5zY3JpcHRpb25zW2xhbmddW2tleV1cbiAgICAgICAgICAuc3ltYm9sRGVmYXVsdC5zeW1ib2w7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSAnc3ltYm9sU2hpZnRNb2QnOiB7XG4gICAgICAgIGVsZW1lbnRGb3JJbnNjcmlwdGlvbkxvY2FsLmlubmVySFRNTCA9IHRoaXMuaW5zY3JpcHRpb25zW2xhbmddW2tleV1cbiAgICAgICAgICAuc3ltYm9sU2hpZnRNb2Quc3ltYm9sICE9PSAnbm9uZSdcbiAgICAgICAgICA/IHRoaXMuaW5zY3JpcHRpb25zW2xhbmddW2tleV0uc3ltYm9sU2hpZnRNb2Quc3ltYm9sXG4gICAgICAgICAgOiB0aGlzLmluc2NyaXB0aW9uc1tsYW5nXVtrZXldLnN5bWJvbERlZmF1bHQuc3ltYm9sO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgJ3N5bWJvbENhcHNNb2QnOiB7XG4gICAgICAgIGVsZW1lbnRGb3JJbnNjcmlwdGlvbkxvY2FsLmlubmVySFRNTCA9IHRoaXMuaW5zY3JpcHRpb25zW2xhbmddW2tleV1cbiAgICAgICAgICAuc3ltYm9sQ2Fwc01vZC5zeW1ib2wgIT09ICdub25lJ1xuICAgICAgICAgID8gdGhpcy5pbnNjcmlwdGlvbnNbbGFuZ11ba2V5XS5zeW1ib2xDYXBzTW9kLnN5bWJvbFxuICAgICAgICAgIDogdGhpcy5pbnNjcmlwdGlvbnNbbGFuZ11ba2V5XS5zeW1ib2xEZWZhdWx0LnN5bWJvbDtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlICdzeW1ib2xDYXBzU2hpZnRNb2QnOiB7XG4gICAgICAgIGVsZW1lbnRGb3JJbnNjcmlwdGlvbkxvY2FsLmlubmVySFRNTCA9IHRoaXMuaW5zY3JpcHRpb25zW2xhbmddW2tleV1cbiAgICAgICAgICAuc3ltYm9sQ2Fwc1NoaWZ0TW9kLnN5bWJvbCAhPT0gJ25vbmUnXG4gICAgICAgICAgPyB0aGlzLmluc2NyaXB0aW9uc1tsYW5nXVtrZXldLnN5bWJvbENhcHNTaGlmdE1vZC5zeW1ib2xcbiAgICAgICAgICA6IHRoaXMuaW5zY3JpcHRpb25zW2xhbmddW2tleV0uc3ltYm9sRGVmYXVsdC5zeW1ib2w7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgZGVmYXVsdDoge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBnZW5lcmF0ZUtleUxheW91dHMoa2V5TGF5b3V0TGFuZ3VhZ2UsIGtleU51bWJlckxvY2FsKSB7XG4gICAgY29uc3Qga2V5TGF5b3V0c0N1cnJlbnRMYW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIGtleUxheW91dHNDdXJyZW50TGFuZy5jbGFzc0xpc3QuYWRkKGBrZXktYmFzZV9fJHtrZXlMYXlvdXRMYW5ndWFnZX0ta2V5c2ApO1xuXG4gICAgY29uc3QgbGF5b3V0QXJyID0gW1xuICAgICAgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpLFxuICAgICAgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpLFxuICAgICAgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpLFxuICAgICAgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpLFxuICAgIF07XG4gICAgbGF5b3V0QXJyLmZvckVhY2goKGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCBlbGVtZW50TG9jYWwgPSBlbGVtZW50O1xuICAgICAgZWxlbWVudExvY2FsLmNsYXNzTGlzdC5hZGQoYCR7a2V5TGF5b3V0TGFuZ3VhZ2V9LWtleXNfX2tleS1sYXlvdXRgKTtcbiAgICAgIHN3aXRjaCAoaW5kZXgpIHtcbiAgICAgICAgY2FzZSAwOiB7XG4gICAgICAgICAgZWxlbWVudExvY2FsLmNsYXNzTGlzdC5hZGQoJ2tleS1sYXlvdXQtLWRlZmF1bHQnKTtcbiAgICAgICAgICB0aGlzLmdldEluc2NyaXB0aW9uRm9yS2V5KFxuICAgICAgICAgICAgZWxlbWVudExvY2FsLFxuICAgICAgICAgICAga2V5TnVtYmVyTG9jYWwsXG4gICAgICAgICAgICAnc3ltYm9sRGVmYXVsdCcsXG4gICAgICAgICAgICBrZXlMYXlvdXRMYW5ndWFnZSxcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGNhc2UgMToge1xuICAgICAgICAgIGVsZW1lbnRMb2NhbC5jbGFzc0xpc3QuYWRkKCdrZXktbGF5b3V0LS1zaGlmdC1tb2QnKTtcbiAgICAgICAgICBlbGVtZW50TG9jYWwuY2xhc3NMaXN0LmFkZCgna2V5LWxheW91dC0taGlkZGVuJyk7XG4gICAgICAgICAgdGhpcy5nZXRJbnNjcmlwdGlvbkZvcktleShcbiAgICAgICAgICAgIGVsZW1lbnRMb2NhbCxcbiAgICAgICAgICAgIGtleU51bWJlckxvY2FsLFxuICAgICAgICAgICAgJ3N5bWJvbFNoaWZ0TW9kJyxcbiAgICAgICAgICAgIGtleUxheW91dExhbmd1YWdlLFxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSAyOiB7XG4gICAgICAgICAgZWxlbWVudExvY2FsLmNsYXNzTGlzdC5hZGQoJ2tleS1sYXlvdXQtLWNhcHMtbW9kJyk7XG4gICAgICAgICAgZWxlbWVudExvY2FsLmNsYXNzTGlzdC5hZGQoJ2tleS1sYXlvdXQtLWhpZGRlbicpO1xuICAgICAgICAgIHRoaXMuZ2V0SW5zY3JpcHRpb25Gb3JLZXkoXG4gICAgICAgICAgICBlbGVtZW50TG9jYWwsXG4gICAgICAgICAgICBrZXlOdW1iZXJMb2NhbCxcbiAgICAgICAgICAgICdzeW1ib2xDYXBzTW9kJyxcbiAgICAgICAgICAgIGtleUxheW91dExhbmd1YWdlLFxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSAzOiB7XG4gICAgICAgICAgZWxlbWVudExvY2FsLmNsYXNzTGlzdC5hZGQoJ2tleS1sYXlvdXQtLWNhcHMtYW5kLXNoaWZ0LW1vZCcpO1xuICAgICAgICAgIGVsZW1lbnRMb2NhbC5jbGFzc0xpc3QuYWRkKCdrZXktbGF5b3V0LS1oaWRkZW4nKTtcbiAgICAgICAgICB0aGlzLmdldEluc2NyaXB0aW9uRm9yS2V5KFxuICAgICAgICAgICAgZWxlbWVudExvY2FsLFxuICAgICAgICAgICAga2V5TnVtYmVyTG9jYWwsXG4gICAgICAgICAgICAnc3ltYm9sQ2Fwc1NoaWZ0TW9kJyxcbiAgICAgICAgICAgIGtleUxheW91dExhbmd1YWdlLFxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgZGVmYXVsdDoge1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBrZXlMYXlvdXRzQ3VycmVudExhbmcuYXBwZW5kQ2hpbGQoZWxlbWVudExvY2FsKTtcbiAgICB9KTtcbiAgICBpZiAodGhpcy52ZXJib3NlTHZsID4gMSkge1xuICAgICAgLyogQ29uc29sZSBsb2cgd2l0aCBrZXlMYXlvdXRzQ3VycmVudExhbmcgd2FzIGhlcmUgKi9cbiAgICB9XG4gICAgcmV0dXJuIGtleUxheW91dHNDdXJyZW50TGFuZztcbiAgfVxuXG4gIC8qKlxuICAgKiBHZW5lcmF0ZSBrZXlzIGZvciBrZXlib2FyZCB3aXRoIGxheW91dHMgZm9yIG1vZHNcbiAgICogYW5kIGtleWJvYXJkIGRpZmZlcmVudCBsYW5ndWFnZSBsYXlvdXRzLlxuICAgKi9cbiAgZ2VuZXJhdGVLZXlzKCkge1xuICAgIC8qIEdlbmVyYXRlIGtleXMsIGNvbHVtbi1nYXBzIGFuZCByb3ctZ2FwcywgYXMgZ3JpZCBlbGVtZW50cy4gKi9cbiAgICBmb3IgKGxldCBrZXlJbmRleCA9IDE7IGtleUluZGV4IDw9IHRoaXMua2V5c0NvdW50ICsgKHRoaXMua2V5c0NvdW50IC0gMCk7IGtleUluZGV4ICs9IDEpIHtcbiAgICAgIGlmIChrZXlJbmRleCAlIDIgPT09IDApIHtcbiAgICAgICAgY29uc3Qga2V5TnVtYmVyVG1wID0gKGtleUluZGV4IC8gMikudG9TdHJpbmcoMTApO1xuICAgICAgICAvKiBBZGQga2V5IGJhc2UuICovXG4gICAgICAgIGNvbnN0IGtleSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBrZXkuY2xhc3NMaXN0LmFkZCgna2V5c19fa2V5LWJhc2UnKTtcbiAgICAgICAga2V5LnNldEF0dHJpYnV0ZShcbiAgICAgICAgICAnZGF0YS1ldmVudC1jb2RlJyxcbiAgICAgICAgICB0aGlzLmluc2NyaXB0aW9uc1t0aGlzLmxhbmd1YWdlXVtrZXlOdW1iZXJUbXBdLmV2ZW50Q29kZSxcbiAgICAgICAgKTtcblxuICAgICAgICBrZXkuYXBwZW5kQ2hpbGQodGhpcy5nZW5lcmF0ZUtleUxheW91dHMoJ2VuJywga2V5TnVtYmVyVG1wKSk7XG4gICAgICAgIGtleS5hcHBlbmRDaGlsZCh0aGlzLmdlbmVyYXRlS2V5TGF5b3V0cygncnUnLCBrZXlOdW1iZXJUbXApKTtcbiAgICAgICAga2V5Lmxhc3RFbGVtZW50Q2hpbGQuY2xhc3NMaXN0LmFkZCgncnUta2V5cy0taGlkZGVuJyk7XG5cbiAgICAgICAgLyogQWRkIHN0eWxlcyBmb3Iga2V5cyB3aXRoIG5vbi1zdGFuZGFyZCBzaXplcy4gKi9cbiAgICAgICAgc3dpdGNoICgodGhpcy5pbnNjcmlwdGlvbnNbdGhpcy5sYW5ndWFnZV1ba2V5TnVtYmVyVG1wXS5zeW1ib2xEZWZhdWx0LnN5bWJvbCkpIHtcbiAgICAgICAgICBjYXNlICdCYWNrc3BhY2UnOiB7XG4gICAgICAgICAgICBrZXkuY2xhc3NMaXN0LmFkZCgna2V5LWJhc2UtLWJhY2tzcGFjZScpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICAgIGNhc2UgJ1RhYic6IHtcbiAgICAgICAgICAgIGtleS5jbGFzc0xpc3QuYWRkKCdrZXktYmFzZS0tdGFiJyk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgICAgY2FzZSAnXFxcXCc6IHtcbiAgICAgICAgICAgIGtleS5jbGFzc0xpc3QuYWRkKCdrZXktYmFzZS0tYmFja3NsYXNoJyk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgICAgY2FzZSAnQ2FwcyBMb2NrJzoge1xuICAgICAgICAgICAga2V5LmNsYXNzTGlzdC5hZGQoJ2tleS1iYXNlLS1jYXBzbG9jaycpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICAgIGNhc2UgJ0VudGVyJzoge1xuICAgICAgICAgICAga2V5LmNsYXNzTGlzdC5hZGQoJ2tleS1iYXNlLS1lbnRlcicpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICAgIGNhc2UgJ1NoaWZ0Jzoge1xuICAgICAgICAgICAgaWYgKHRoaXMuaW5zY3JpcHRpb25zW3RoaXMubGFuZ3VhZ2VdW2tleU51bWJlclRtcF0uc3ltYm9sRGVmYXVsdC5uYW1lID09PSAnTGVmdCBTaGlmdCBrZXknKSB7XG4gICAgICAgICAgICAgIGtleS5jbGFzc0xpc3QuYWRkKCdrZXktYmFzZS0tc2hpZnQtbGVmdCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuaW5zY3JpcHRpb25zW3RoaXMubGFuZ3VhZ2VdW2tleU51bWJlclRtcF0uc3ltYm9sRGVmYXVsdC5uYW1lID09PSAnUmlnaHQgU2hpZnQga2V5Jykge1xuICAgICAgICAgICAgICBrZXkuY2xhc3NMaXN0LmFkZCgna2V5LWJhc2UtLXNoaWZ0LXJpZ2h0Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgICAgY2FzZSAnQ3RybCc6IHtcbiAgICAgICAgICAgIGlmICh0aGlzLmluc2NyaXB0aW9uc1t0aGlzLmxhbmd1YWdlXVtrZXlOdW1iZXJUbXBdLnN5bWJvbERlZmF1bHQubmFtZSA9PT0gJ0xlZnQgQ3RybCBrZXknKSB7XG4gICAgICAgICAgICAgIGtleS5jbGFzc0xpc3QuYWRkKCdrZXktYmFzZS0tY3RybC1sZWZ0Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5pbnNjcmlwdGlvbnNbdGhpcy5sYW5ndWFnZV1ba2V5TnVtYmVyVG1wXS5zeW1ib2xEZWZhdWx0Lm5hbWUgPT09ICdSaWdodCBDdHJsIGtleScpIHtcbiAgICAgICAgICAgICAga2V5LmNsYXNzTGlzdC5hZGQoJ2tleS1iYXNlLS1jdHJsLXJpZ2h0Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgICAgY2FzZSAnV2luJzoge1xuICAgICAgICAgICAga2V5LmNsYXNzTGlzdC5hZGQoJ2tleS1iYXNlLS13aW4tbGVmdCcpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICAgIGNhc2UgJ0FsdCc6IHtcbiAgICAgICAgICAgIGlmICh0aGlzLmluc2NyaXB0aW9uc1t0aGlzLmxhbmd1YWdlXVtrZXlOdW1iZXJUbXBdLnN5bWJvbERlZmF1bHQubmFtZSA9PT0gJ0xlZnQgQWx0IGtleScpIHtcbiAgICAgICAgICAgICAga2V5LmNsYXNzTGlzdC5hZGQoJ2tleS1iYXNlLS1hbHQtbGVmdCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuaW5zY3JpcHRpb25zW3RoaXMubGFuZ3VhZ2VdW2tleU51bWJlclRtcF0uc3ltYm9sRGVmYXVsdC5uYW1lID09PSAnUmlnaHQgQWx0IGtleScpIHtcbiAgICAgICAgICAgICAga2V5LmNsYXNzTGlzdC5hZGQoJ2tleS1iYXNlLS1hbHQtcmlnaHQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjYXNlICdTcGFjZSc6IHtcbiAgICAgICAgICAgIGtleS5jbGFzc0xpc3QuYWRkKCdrZXktYmFzZS0tc3BhY2UnKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgICBkZWZhdWx0OiB7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5rZXlib2FyZC5hcHBlbmRDaGlsZChrZXkpO1xuICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgKGtleUluZGV4ICE9PSAxKVxuICAgICAgICAmJiAoa2V5SW5kZXggIT09IDI5KVxuICAgICAgICAmJiAoa2V5SW5kZXggIT09IDU3KVxuICAgICAgICAmJiAoa2V5SW5kZXggIT09IDgzKVxuICAgICAgICAmJiAoa2V5SW5kZXggIT09IDExMSlcbiAgICAgICkge1xuICAgICAgICAvKiBBZGQgY29sdW1uLWdhcCwgYXMgZGl2IGluIGdyaWQuICovXG4gICAgICAgIGNvbnN0IGNvbHVtbkdhcEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29sdW1uR2FwRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdrZXlzX19jb2x1bW4tZ2FwJyk7XG4gICAgICAgIHRoaXMua2V5Ym9hcmQuYXBwZW5kQ2hpbGQoY29sdW1uR2FwRWxlbWVudCk7XG4gICAgICB9IGVsc2UgaWYgKGtleUluZGV4ICE9PSAxKSB7XG4gICAgICAgIC8qIEFkZCByb3ctZ2FwLCBhcyBkaXYgaW4gZ3JpZC4gKi9cbiAgICAgICAgY29uc3Qgcm93R2FwRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICByb3dHYXBFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2tleXNfX3Jvdy1nYXAnKTtcbiAgICAgICAgdGhpcy5rZXlib2FyZC5hcHBlbmRDaGlsZChyb3dHYXBFbGVtZW50KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogR2VuZXJhdGUgbWFpbiBIVE1MIEVsZW1lbnQgYW5kIGl0cyBiYXNpYyBjb250ZW50LlxuICAgKi9cbiAgZ2VuZXJhdGVNYWluKCkge1xuICAgIC8qIEdlbmVyYXRlIG1haW4gKi9cbiAgICB0aGlzLm1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XG4gICAgdGhpcy5tYWluLmNsYXNzTGlzdC5hZGQoJ21haW4nKTtcblxuICAgIC8qIEdlbmVyYXRlIGJhc2ljIGNvbnRhaW5lcnMgYW5kIGRpc3BsYXkgdGV4dGFyZWEgKi9cbiAgICBjb25zdCBrZXlib2FyZEFuZERpc3BsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBrZXlib2FyZEFuZERpc3BsYXkuY2xhc3NMaXN0LmFkZCgna2V5Ym9hcmQtYW5kLWRpc3BsYXknKTtcbiAgICBjb25zdCBkaXNwbGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgICBkaXNwbGF5LmNsYXNzTGlzdC5hZGQoJ2tleWJvYXJkX19kaXNwbGF5Jyk7XG4gICAgdGhpcy5rZXlib2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRoaXMua2V5Ym9hcmQuY2xhc3NMaXN0LmFkZCgna2V5Ym9hcmRfX2tleXMtY29udGFpbmVyJyk7XG5cbiAgICBpZiAodGhpcy52ZXJib3NlTHZsID4gMCkge1xuICAgICAgLy8gQ29uc29sZSBsb2cgd2l0aCBLZXlzIGNvdW50IHdhcyBoZXJlLlxuICAgIH1cblxuICAgIHRoaXMuZ2VuZXJhdGVLZXlzKCk7XG5cbiAgICAvKiBBcHBlbmQgY29udGFpbmVyLCBnZW5lcmF0ZWQga2V5Ym9hcmQgYW5kIGRpc3BsYXkgdG8gbWFpbiAqL1xuICAgIGtleWJvYXJkQW5kRGlzcGxheS5hcHBlbmRDaGlsZChkaXNwbGF5KTtcbiAgICBrZXlib2FyZEFuZERpc3BsYXkuYXBwZW5kQ2hpbGQodGhpcy5rZXlib2FyZCk7XG4gICAgdGhpcy5tYWluLmFwcGVuZENoaWxkKHRoaXMuY29udGFpbmVyLmNsb25lTm9kZSh0cnVlKSk7XG4gICAgdGhpcy5tYWluLmxhc3RFbGVtZW50Q2hpbGQuY2xhc3NMaXN0LmFkZCgnY29udGFpbmVyLS1tYWluJyk7XG4gICAgdGhpcy5tYWluLmxhc3RFbGVtZW50Q2hpbGQuYXBwZW5kQ2hpbGQoa2V5Ym9hcmRBbmREaXNwbGF5KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZW5lcmF0ZSBmb290ZXIgSFRNTCBFbGVtZW50IGFuZCBpdHMgYmFzaWMgY29udGVudC5cbiAgICovXG4gIGdlbmVyYXRlRm9vdGVyKCkge1xuICAgIC8qIEdlbmVyYXRlIGZvb3RlciBhbmQgcGFyYWdyYXBocyAqL1xuICAgIHRoaXMuZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJyk7XG4gICAgdGhpcy5mb290ZXIuY2xhc3NMaXN0LmFkZCgnZm9vdGVyJyk7XG4gICAgY29uc3QgZm9vdGVyUGFyYWdyYXBocyA9IFtdO1xuICAgIGZvciAobGV0IGNvdW50ID0gMDsgY291bnQgPD0gMTsgY291bnQgKz0gMSkge1xuICAgICAgZm9vdGVyUGFyYWdyYXBocy5wdXNoKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKSk7XG4gICAgfVxuICAgIGZvb3RlclBhcmFncmFwaHNbMF0uaW5uZXJUZXh0ID0gJ9Ca0LvQsNCy0LjQsNGC0YPRgNCwINGB0L7Qt9C00LDQvdCwINC00LvRjyDQvtC/0LXRgNCw0YbQuNC+0L3QvdC+0Lkg0YHQuNGB0YLQtdC80YsgV2luZG93cyc7XG4gICAgZm9vdGVyUGFyYWdyYXBoc1sxXS5pbm5lclRleHQgPSAn0JrQvtC80LHQuNC90LDRhtC40Y8g0L/QtdGA0LXQutC70Y7Rh9C10L3QuNGPINGP0LfRi9C60LA6INC70LXQstGL0LUgQ3RybCArIFNoaWZ0JztcblxuICAgIC8qIEFwcGVuZCBjb250YWluZXIgYW5kIHBhcmFncmFwaHMgKi9cbiAgICB0aGlzLmZvb3Rlci5hcHBlbmRDaGlsZCh0aGlzLmNvbnRhaW5lci5jbG9uZU5vZGUodHJ1ZSkpO1xuICAgIHRoaXMuZm9vdGVyLmxhc3RFbGVtZW50Q2hpbGQuY2xhc3NMaXN0LmFkZCgnY29udGFpbmVyLS1mb290ZXInKTtcbiAgICBmb290ZXJQYXJhZ3JhcGhzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgIHRoaXMuZm9vdGVyLmxhc3RFbGVtZW50Q2hpbGQuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogR2VuZXJhdGUgYWxsIGJhc2ljIEhUTUwgZWxlbWVudHMgZm9yIEFwcC5cbiAgICovXG4gIGdlbmVyYXRlQWxsKCkge1xuICAgIGlmICh0aGlzLnZlcmJvc2VMdmwgPiAwKSB7XG4gICAgICAvLyBDb25zb2xlIGxvZyB3aXRoIG1lc3NhZ2UgJyoqKiogR2VuZXJhdGluZyBiYXNpYyBIVE1MIGxheW91dC4uLiAqKioqJyB3YXMgaGVyZS5cbiAgICB9XG5cbiAgICAvKiBGb3IgZGVidWcgKi9cbiAgICBjb25zdCB0ZXN0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRlc3RFbGVtZW50LnN0eWxlLndpZHRoID0gJzI1NnB4JztcbiAgICB0ZXN0RWxlbWVudC5zdHlsZS5oZWlnaHQgPSAnMjU2cHgnO1xuICAgIHRlc3RFbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdibHVlJztcblxuICAgIC8qIEFwcCByb290IGVsZW1lbnQgKi9cbiAgICB0aGlzLnJvb3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aGlzLnJvb3RDb250YWluZXIuY2xhc3NMaXN0LmFkZCgncm9vdC1jb250YWluZXInKTtcblxuICAgIC8qIEdlbmVyYXRlIGJhc2ljIGVsZW1lbnRzICovXG4gICAgdGhpcy5nZW5lcmF0ZUhlYWRlcigpO1xuICAgIHRoaXMuZ2VuZXJhdGVNYWluKCk7XG4gICAgdGhpcy5nZW5lcmF0ZUZvb3RlcigpO1xuXG4gICAgLyogQXBwZW5kIHRvIHJvb3RDb250YWluZXIgKi9cbiAgICB0aGlzLnJvb3RDb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5oZWFkZXIpO1xuICAgIHRoaXMucm9vdENvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLm1haW4pO1xuICAgIHRoaXMucm9vdENvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmZvb3Rlcik7XG4gIH1cblxuICBhcHBlbmRIVE1MRWxlbWVudHMoKSB7XG4gICAgLyogQXBwZW5kIHRvIERPTSAqL1xuICAgIHRoaXMucm9vdC5hcHBlbmRDaGlsZCh0aGlzLnJvb3RDb250YWluZXIpO1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBFbGVtZW50Q2xhc3NPYnNlcnZlciB7XG4gIHRhcmdldEVsZW1lbnQ7XG5cbiAgY2xhc3NUb1dhdGNoO1xuXG4gIGNsYXNzQWRkZWRDYWxsYmFjaztcblxuICBjbGFzc1JlbW92ZWRDYWxsYmFjaztcblxuICBvYnNlcnZlcjtcblxuICBsYXN0Q2xhc3NTdGF0ZTtcblxuICBjb25zdHJ1Y3Rvcih0YXJnZXRFbGVtZW50LCBjbGFzc1RvV2F0Y2gsIGNsYXNzQWRkZWRDYWxsYmFjaywgY2xhc3NSZW1vdmVkQ2FsbGJhY2spIHtcbiAgICB0aGlzLnRhcmdldEVsZW1lbnQgPSB0YXJnZXRFbGVtZW50O1xuICAgIHRoaXMuY2xhc3NUb1dhdGNoID0gY2xhc3NUb1dhdGNoO1xuICAgIHRoaXMuY2xhc3NBZGRlZENhbGxiYWNrID0gY2xhc3NBZGRlZENhbGxiYWNrO1xuICAgIHRoaXMuY2xhc3NSZW1vdmVkQ2FsbGJhY2sgPSBjbGFzc1JlbW92ZWRDYWxsYmFjaztcbiAgICB0aGlzLm9ic2VydmVyID0gbnVsbDtcbiAgICB0aGlzLmxhc3RDbGFzc1N0YXRlID0gdGFyZ2V0RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnModGhpcy5jbGFzc1RvV2F0Y2gpO1xuICB9XG5cbiAgaW5pdCgpIHtcbiAgICB0aGlzLm9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIodGhpcy5tdXRhdGlvbkNhbGxiYWNrRm4pO1xuICB9XG5cbiAgbXV0YXRpb25DYWxsYmFja0ZuID0gKG11dGF0aW9uc0xpc3QpID0+IHtcbiAgICBtdXRhdGlvbnNMaXN0LmZvckVhY2goKG11dGF0aW9uKSA9PiB7XG4gICAgICBpZiAobXV0YXRpb24udHlwZSA9PT0gJ2F0dHJpYnV0ZXMnICYmIG11dGF0aW9uLmF0dHJpYnV0ZU5hbWUgPT09ICdjbGFzcycpIHtcbiAgICAgICAgY29uc3QgY3VycmVudENsYXNzU3RhdGUgPSBtdXRhdGlvbi50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKHRoaXMuY2xhc3NUb1dhdGNoKTtcbiAgICAgICAgaWYgKHRoaXMubGFzdENsYXNzU3RhdGUgIT09IGN1cnJlbnRDbGFzc1N0YXRlKSB7XG4gICAgICAgICAgdGhpcy5sYXN0Q2xhc3NTdGF0ZSA9IGN1cnJlbnRDbGFzc1N0YXRlO1xuICAgICAgICAgIGlmIChjdXJyZW50Q2xhc3NTdGF0ZSkge1xuICAgICAgICAgICAgdGhpcy5jbGFzc0FkZGVkQ2FsbGJhY2soKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jbGFzc1JlbW92ZWRDYWxsYmFjaygpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIG9ic2VydmUoKSB7XG4gICAgdGhpcy5vYnNlcnZlci5vYnNlcnZlKHRoaXMudGFyZ2V0RWxlbWVudCwgeyBhdHRyaWJ1dGVzOiB0cnVlIH0pO1xuICB9XG5cbiAgc3RvcCgpIHtcbiAgICB0aGlzLm9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgfVxufVxuIiwiaW1wb3J0IEVsZW1lbnRDbGFzc09ic2VydmVyIGZyb20gJy4vRWxlbWVudENsYXNzT2JzZXJ2ZXInO1xuXG4vKipcbiAqIEtleWJvYXJkTG9naWNNYW5hZ2VyIGNsYXNzIGZvciBpbXBsZW1lbnQgdGhlIGxvZ2ljIG9mIHRoZSB2aXJ0dWFsIGtleWJvYXJkLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBLZXlib2FyZExvZ2ljTWFuYWdlciB7XG4gIC8vIDxlZGl0b3ItZm9sZCBkZXNjPVwiVG9rZW5zXCI+XG4gIHBhZ2VSb290VG9rZW47XG5cbiAga2V5Ym9hcmRUb2tlbjtcbiAgLy8gPC9lZGl0b3ItZm9sZCBkZXNjPVwiVG9rZW5zXCI+XG5cbiAgLy8gPGVkaXRvci1mb2xkIGRlc2M9XCJFbGVtZW50c1wiPlxuICBwYWdlUm9vdDtcblxuICBrZXlib2FyZDtcblxuICB0ZXh0RmllbGQ7XG5cbiAga2V5cztcbiAgLy8gPC9lZGl0b3ItZm9sZCBkZXNjPVwiRWxlbWVudHNcIj5cblxuICAvLyA8ZWRpdG9yLWZvbGQgZGVzYz1cIkV2ZW50IEhhbmRsZXJzIEJvdW5kZWQgdG8gY2xhc3MgY29udGV4dFwiPlxuICBrZXlib2FyZEV2ZW50SGFuZGxlckJvdW5kZWQ7XG5cbiAgdmlydHVhbEtleWJvYXJkRXZlbnRIYW5kbGVyQm91bmRlZDtcbiAgLy8gPC9lZGl0b3ItZm9sZD5cblxuICAvKipcbiAgICogVmVyYm9zZSBMVkwgZm9yIG1hbmFnZSBvdXRwdXQgdG8gY29uc29sZS5cbiAgICovXG4gIHZlcmJvc2VMdmw7XG5cbiAgc3BlY2lhbEtleXM7XG5cbiAga2V5c0V4Y2VwdGlvbjtcblxuICBrZXlzQWxwaGFiZXRpY1VwcGVyQ2FzZTtcblxuICBsYXN0S2V5RXZlbnQ7XG5cbiAgdGV4dEZpZWxkQ2hhbmdlRXZlbnQ7XG5cbiAga2V5Q29udHJvbExlZnQ7XG5cbiAga2V5U2hpZnQ7XG5cbiAga2V5Q2FwcztcblxuICBjYXBzU3RhdGU7XG5cbiAgY29udHJvbExlZnRTdGF0ZTtcblxuICBzaGlmdFN0YXRlO1xuXG4gIGxhbmd1YWdlQWx0ZXJuYXRlU3RhdGU7XG5cbiAgbGFuZ3VhZ2VBbHRlcm5hdGVDYWxsQ291bnRlcjtcblxuICAvKipcbiAgICogS2V5Ym9hcmQgbG9naWMgY2xhc3MgY29uc3RydWN0b3IuXG4gICAqIEBwYXJhbSBwYWdlUm9vdFRva2VuIHtTdHJpbmd9ICAtIHRva2VuIGZvciBBcHAgcGFnZSByb290IGVsZW1lbnQuXG4gICAqIEBwYXJhbSBrZXlib2FyZFRva2VuIHtTdHJpbmd9ICAtIHRva2VuIGZvciBrZXlib2FyZCByb290IGVsZW1lbnQuXG4gICAqIEBwYXJhbSB2ZXJib3NlTHZsICAgIHtudW1iZXJ9ICAtIHZlcmJvc2UgTFZMIGZvciBtYW5hZ2Ugb3V0cHV0IHRvIGNvbnNvbGUuXG4gICAqL1xuICBjb25zdHJ1Y3RvcihwYWdlUm9vdFRva2VuLCBrZXlib2FyZFRva2VuLCB2ZXJib3NlTHZsID0gMCkge1xuICAgIHRoaXMudmVyYm9zZUx2bCA9IHZlcmJvc2VMdmw7XG5cbiAgICB0aGlzLnBhZ2VSb290VG9rZW4gPSBwYWdlUm9vdFRva2VuO1xuICAgIHRoaXMucGFnZVJvb3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMucGFnZVJvb3RUb2tlbik7XG5cbiAgICB0aGlzLmtleWJvYXJkVG9rZW4gPSBrZXlib2FyZFRva2VuO1xuICAgIHRoaXMua2V5Ym9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMua2V5Ym9hcmRUb2tlbik7XG5cbiAgICB0aGlzLnRleHRGaWVsZCA9IHRoaXMua2V5Ym9hcmQucXVlcnlTZWxlY3RvcignLmtleWJvYXJkX19kaXNwbGF5Jyk7XG5cbiAgICB0aGlzLnNwZWNpYWxLZXlzID0gW1xuICAgICAgJ1NoaWZ0JyxcbiAgICAgICdDYXBzIExvY2snLFxuICAgICAgJ0N0cmwnLFxuICAgICAgJ1dpbicsXG4gICAgICAnQWx0JyxcbiAgICBdO1xuXG4gICAgdGhpcy5rZXlzRXhjZXB0aW9uID0gW1xuICAgICAgJ0NhcHNMb2NrJyxcbiAgICAgICdcXCcnLFxuICAgICAgJ1NoaWZ0JyxcbiAgICAgICdEZWxldGUnLFxuICAgICAgJ0NvbnRyb2wnLFxuICAgICAgJ01ldGEnLFxuICAgICAgJ0FsdCcsXG4gICAgICAnICcsXG4gICAgICAnQXJyb3dVcCcsXG4gICAgICAnQXJyb3dEb3duJyxcbiAgICAgICdBcnJvd0xlZnQnLFxuICAgICAgJ0Fycm93UmlnaHQnLFxuICAgIF07XG5cbiAgICB0aGlzLmtleXNBbHBoYWJldGljVXBwZXJDYXNlID0gW1xuICAgICAgJ0EnLCAnQicsICdDJywgJ0QnLCAnRScsICdGJywgJ0cnLCAnSCcsXG4gICAgICAnSScsICdKJywgJ0snLCAnTCcsICdNJywgJ04nLCAnTycsICdQJyxcbiAgICAgICdRJywgJ1InLCAnUycsICdUJywgJ1UnLCAnVicsICdXJywgJ1gnLFxuICAgICAgJ1knLCAnWiddO1xuXG4gICAgdGhpcy5sYXN0S2V5RXZlbnQgPSBudWxsO1xuXG4gICAgLyogQmluZCBjbGFzcyBjb250ZXh0IGZvciBsaXN0ZW5lcnMgaGFuZGxlcnMsIHdoYXQgZGVmaW5lZCBhcyBtZXRob2Qgb2YgdGhpcyBjbGFzcy4gKi9cbiAgICB0aGlzLmtleWJvYXJkRXZlbnRIYW5kbGVyQm91bmRlZCA9IHRoaXMua2V5Ym9hcmRFdmVudEhhbmRsZXIuYmluZCh0aGlzKTtcblxuICAgIHRoaXMudmlydHVhbEtleWJvYXJkRXZlbnRIYW5kbGVyQm91bmRlZCA9IHRoaXMudmlydHVhbEtleWJvYXJkRXZlbnRIYW5kbGVyLmJpbmQodGhpcyk7XG5cbiAgICAvKiBNYWtlIGV2ZW50IGZvciBjaGFuZ2UgdGV4dCBhcmVhICovXG4gICAgdGhpcy50ZXh0RmllbGRDaGFuZ2VFdmVudCA9IG5ldyBFdmVudCgnY2hhbmdlJyk7XG5cbiAgICB0aGlzLmtleXMgPSBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmtleXNfX2tleS1iYXNlJyldO1xuXG4gICAgdGhpcy5rZXlDb250cm9sTGVmdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWV2ZW50LWNvZGU9XCJDb250cm9sTGVmdFwiXScpO1xuICAgIHRoaXMua2V5U2hpZnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1ldmVudC1jb2RlPVwiU2hpZnRMZWZ0XCJdJyk7XG4gICAgdGhpcy5rZXlDYXBzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtZXZlbnQtY29kZT1cIkNhcHNMb2NrXCJdJyk7XG5cbiAgICB0aGlzLmNvbnRyb2xMZWZ0U3RhdGUgPSBmYWxzZTtcbiAgICB0aGlzLnNoaWZ0U3RhdGUgPSBmYWxzZTtcbiAgICB0aGlzLmNhcHNTdGF0ZSA9IGZhbHNlO1xuXG4gICAgdGhpcy5sYW5ndWFnZUFsdGVybmF0ZVN0YXRlID0gZmFsc2U7XG4gICAgdGhpcy5sYW5ndWFnZUFsdGVybmF0ZUNhbGxDb3VudGVyID0gMDtcbiAgfVxuXG4gIHNlYXJjaEtleUJ5RGF0YUF0ckFuZEFjdGlvbnMoZGF0YUV2ZW50Q29kZSwgY2FsbGJhY2ssIG51bWJlciA9IDApIHtcbiAgICAvKiBGaW5kIGhpdHRlZCBrZXkgYnkgWFBhdGguICovXG4gICAgbGV0IHByZXNzZWRLZXkgPSBudWxsO1xuICAgIGlmIChudW1iZXIgPT09IDApIHtcbiAgICAgIHByZXNzZWRLZXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1ldmVudC1jb2RlPVwiJHtkYXRhRXZlbnRDb2RlfVwiXWApO1xuICAgIH1cbiAgICBpZiAobnVtYmVyID09PSAxKSB7XG4gICAgICBwcmVzc2VkS2V5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgW2RhdGEtZXZlbnQtY29kZT1cIiR7ZGF0YUV2ZW50Q29kZX1cIl1gKTtcbiAgICAgIFssIHByZXNzZWRLZXldID0gcHJlc3NlZEtleTtcbiAgICB9XG4gICAgaWYgKHByZXNzZWRLZXkpIHtcbiAgICAgIGNhbGxiYWNrKHByZXNzZWRLZXksIHRoaXMubGFzdEtleUV2ZW50KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMudmVyYm9zZUx2bCA+IDApIHtcbiAgICAgIC8qIENvbnNvbGUgbG9nIHdpdGggZXJyb3IgbWVzc2FnZSB3YXMgaGVyZS4gKi9cbiAgICB9XG4gIH1cblxuICBrZXlib2FyZEV2ZW50SGFuZGxlcihldmVudCkge1xuICAgIGlmICh0aGlzLnZlcmJvc2VMdmwgPiAwKSB7XG4gICAgICAvKiBDb25zb2xlIGxvZyB3aXRoICctLS0tIEtleSBldmVudDonIGFuZCBldmVudCBpbmZvIG1lc3NhZ2Ugd2FzIGhlcmUuICovXG4gICAgfVxuXG4gICAgY29uc3QgZXZlbnRDb2RlRXhjZXB0aW9ucyA9IFtcbiAgICAgICdNZXRhTGVmdCcsXG4gICAgICAnTWV0YVJpZ2h0JyxcbiAgICAgICdBbHRHcmFwaCcsXG4gICAgXTtcblxuICAgIC8qIEdldCBjdXJyZW50IGtleSBldmVudCBpbnRvIGNsYXNzIGZpZWxkICovXG4gICAgdGhpcy5sYXN0S2V5RXZlbnQgPSBldmVudDtcblxuICAgIC8qIFByZXZlbnQgZGVmYXVsdCBiZWhhdmlvdXIgZm9yIGJ1dHRvbnMgKi9cbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgZnVuY3Rpb24gdmlydHVhbEtleWJvYXJkU2ltdWxhdGVDbGlja09uKGtleSkge1xuICAgICAgY29uc3QgY2xpY2tTaW11bGF0ZWRFdmVudCA9IG5ldyBNb3VzZUV2ZW50KFxuICAgICAgICAnY2xpY2snLFxuICAgICAgICB7XG4gICAgICAgICAgdmlldzogd2luZG93LFxuICAgICAgICAgIGJ1YmJsZXM6IHRydWUsXG4gICAgICAgICAgY2FuY2VsYWJsZTogZmFsc2UsXG4gICAgICAgIH0sXG4gICAgICApO1xuICAgICAga2V5LmRpc3BhdGNoRXZlbnQoY2xpY2tTaW11bGF0ZWRFdmVudCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2hhbmdlS2V5U3RhdGUoa2V5LCBldmVudExvY2FsKSB7XG4gICAgICAvKiBDaGFuZ2UgdmlzdWFsICovXG4gICAgICBpZiAoZXZlbnRMb2NhbC50eXBlID09PSAna2V5ZG93bicpIHtcbiAgICAgICAga2V5LmNsYXNzTGlzdC5hZGQoJ2tleS1iYXNlLS1wcmVzc2VkJyk7XG4gICAgICAgIHZpcnR1YWxLZXlib2FyZFNpbXVsYXRlQ2xpY2tPbihrZXkpO1xuICAgICAgfSBlbHNlIGlmIChldmVudExvY2FsLnR5cGUgPT09ICdrZXl1cCcpIHtcbiAgICAgICAga2V5LmNsYXNzTGlzdC5yZW1vdmUoJ2tleS1iYXNlLS1wcmVzc2VkJyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGlzYWJsZUtleVN0YXRlKGtleSwgZXZlbnRMb2NhbCkge1xuICAgICAgLyogQ2hhbmdlIHZpc3VhbCAqL1xuICAgICAgaWYgKGV2ZW50TG9jYWwudHlwZSA9PT0gJ2tleWRvd24nKSB7XG4gICAgICAgIGtleS5jbGFzc0xpc3QuYWRkKCdrZXktYmFzZS0tdW5wcmVzc2VkLWxvY2snKTtcbiAgICAgICAgdmlydHVhbEtleWJvYXJkU2ltdWxhdGVDbGlja09uKGtleSk7XG4gICAgICB9IGVsc2UgaWYgKGV2ZW50TG9jYWwudHlwZSA9PT0gJ2tleXVwJykge1xuICAgICAgICBrZXkuY2xhc3NMaXN0LnJlbW92ZSgna2V5LWJhc2UtLXVucHJlc3NlZC1sb2NrJyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgbGFzdEtleUhpdEJ5Q29kZSA9IGV2ZW50LmNvZGU7XG4gICAgY29uc3QgbGFzdEtleUhpdEJ5S2V5ID0gZXZlbnQua2V5O1xuXG4gICAgaWYgKGxhc3RLZXlIaXRCeUtleSA9PT0gJ0FsdEdyYXBoJykge1xuICAgICAgdGhpcy5zZWFyY2hLZXlCeURhdGFBdHJBbmRBY3Rpb25zKCdDb250cm9sTGVmdCcsIGRpc2FibGVLZXlTdGF0ZSk7XG4gICAgICB0aGlzLnNlYXJjaEtleUJ5RGF0YUF0ckFuZEFjdGlvbnMoJ0FsdFJpZ2h0JywgY2hhbmdlS2V5U3RhdGUpO1xuICAgIH0gZWxzZSBpZiAoIWV2ZW50Q29kZUV4Y2VwdGlvbnMuaW5jbHVkZXMobGFzdEtleUhpdEJ5Q29kZSkpIHtcbiAgICAgIHRoaXMuc2VhcmNoS2V5QnlEYXRhQXRyQW5kQWN0aW9ucyhsYXN0S2V5SGl0QnlDb2RlLCBjaGFuZ2VLZXlTdGF0ZSk7XG4gICAgfSBlbHNlIGlmXG4gICAgKFxuICAgICAgbGFzdEtleUhpdEJ5Q29kZSA9PT0gJ01ldGFMZWZ0J1xuICAgICAgfHwgbGFzdEtleUhpdEJ5Q29kZSA9PT0gJ01ldGFSaWdodCdcbiAgICApIHtcbiAgICAgIHRoaXMuc2VhcmNoS2V5QnlEYXRhQXRyQW5kQWN0aW9ucygnTWV0YUxlZnQnLCBjaGFuZ2VLZXlTdGF0ZSk7XG4gICAgfVxuICB9XG5cbiAgZGVsZXRlTGFzdFN5bWJvbCgpIHtcbiAgICB0aGlzLnRleHRGaWVsZC52YWx1ZSA9IHRoaXMudGV4dEZpZWxkLnZhbHVlLnNwbGl0KCcnKS5zbGljZSgwLCAtMSkuam9pbignJyk7XG4gICAgdGhpcy50ZXh0RmllbGQuZGlzcGF0Y2hFdmVudCh0aGlzLnRleHRGaWVsZENoYW5nZUV2ZW50KTtcbiAgfVxuXG4gIGRlbGV0ZVN5bWJvbEJlZm9yZUNhcmV0KCkge1xuICAgIGlmICh0aGlzLnRleHRGaWVsZC5zZWxlY3Rpb25TdGFydCB8fCB0aGlzLnRleHRGaWVsZC5zZWxlY3Rpb25TdGFydCA9PT0gJzAnKSB7XG4gICAgICBjb25zdCBzdGFydFBvcyA9IHRoaXMudGV4dEZpZWxkLnNlbGVjdGlvblN0YXJ0O1xuICAgICAgY29uc3QgZW5kUG9zID0gdGhpcy50ZXh0RmllbGQuc2VsZWN0aW9uRW5kO1xuICAgICAgdGhpcy50ZXh0RmllbGQudmFsdWUgPSB0aGlzLnRleHRGaWVsZC52YWx1ZS5zdWJzdHJpbmcoMCwgc3RhcnRQb3MgLSAxKVxuICAgICAgICArIHRoaXMudGV4dEZpZWxkLnZhbHVlLnN1YnN0cmluZyhlbmRQb3MsIHRoaXMudGV4dEZpZWxkLnZhbHVlLmxlbmd0aCk7XG4gICAgICB0aGlzLnRleHRGaWVsZC5zZWxlY3Rpb25TdGFydCA9IHN0YXJ0UG9zIC0gMTtcbiAgICAgIHRoaXMudGV4dEZpZWxkLnNlbGVjdGlvbkVuZCA9IHN0YXJ0UG9zIC0gMTtcbiAgICB9XG4gICAgdGhpcy50ZXh0RmllbGQuZm9jdXMoKTtcbiAgICB0aGlzLnRleHRGaWVsZC5ibHVyKCk7XG4gIH1cblxuICBkZWxldGVTeW1ib2xBZnRlckNhcmV0KCkge1xuICAgIGlmICh0aGlzLnRleHRGaWVsZC5zZWxlY3Rpb25TdGFydCB8fCB0aGlzLnRleHRGaWVsZC5zZWxlY3Rpb25TdGFydCA9PT0gJzAnKSB7XG4gICAgICBjb25zdCBzdGFydFBvcyA9IHRoaXMudGV4dEZpZWxkLnNlbGVjdGlvblN0YXJ0O1xuICAgICAgY29uc3QgZW5kUG9zID0gdGhpcy50ZXh0RmllbGQuc2VsZWN0aW9uRW5kO1xuICAgICAgdGhpcy50ZXh0RmllbGQudmFsdWUgPSB0aGlzLnRleHRGaWVsZC52YWx1ZS5zdWJzdHJpbmcoMCwgc3RhcnRQb3MpXG4gICAgICAgICsgdGhpcy50ZXh0RmllbGQudmFsdWUuc3Vic3RyaW5nKGVuZFBvcyArIDEsIHRoaXMudGV4dEZpZWxkLnZhbHVlLmxlbmd0aCk7XG4gICAgICB0aGlzLnRleHRGaWVsZC5zZWxlY3Rpb25TdGFydCA9IHN0YXJ0UG9zO1xuICAgICAgdGhpcy50ZXh0RmllbGQuc2VsZWN0aW9uRW5kID0gc3RhcnRQb3M7XG4gICAgfVxuICAgIHRoaXMudGV4dEZpZWxkLmZvY3VzKCk7XG4gICAgdGhpcy50ZXh0RmllbGQuYmx1cigpO1xuICB9XG5cbiAgZGVsZXRlQWxsKCkge1xuICAgIHRoaXMudGV4dEZpZWxkLnZhbHVlID0gJyc7XG4gICAgdGhpcy50ZXh0RmllbGQuZGlzcGF0Y2hFdmVudCh0aGlzLnRleHRGaWVsZENoYW5nZUV2ZW50KTtcbiAgfVxuXG4gIGlucHV0U3ltYm9sKHN5bWJvbCkge1xuICAgIGlmICh0aGlzLnRleHRGaWVsZC5zZWxlY3Rpb25TdGFydCB8fCB0aGlzLnRleHRGaWVsZC5zZWxlY3Rpb25TdGFydCA9PT0gJzAnKSB7XG4gICAgICBjb25zdCBzdGFydFBvcyA9IHRoaXMudGV4dEZpZWxkLnNlbGVjdGlvblN0YXJ0O1xuICAgICAgY29uc3QgZW5kUG9zID0gdGhpcy50ZXh0RmllbGQuc2VsZWN0aW9uRW5kO1xuICAgICAgdGhpcy50ZXh0RmllbGQudmFsdWUgPSB0aGlzLnRleHRGaWVsZC52YWx1ZS5zdWJzdHJpbmcoMCwgc3RhcnRQb3MpXG4gICAgICAgICsgc3ltYm9sXG4gICAgICAgICsgdGhpcy50ZXh0RmllbGQudmFsdWUuc3Vic3RyaW5nKGVuZFBvcywgdGhpcy50ZXh0RmllbGQudmFsdWUubGVuZ3RoKTtcbiAgICAgIHRoaXMudGV4dEZpZWxkLnNlbGVjdGlvblN0YXJ0ID0gc3RhcnRQb3MgKyBzeW1ib2wubGVuZ3RoO1xuICAgICAgdGhpcy50ZXh0RmllbGQuc2VsZWN0aW9uRW5kID0gc3RhcnRQb3MgKyBzeW1ib2wubGVuZ3RoO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnRleHRGaWVsZC52YWx1ZSArPSBzeW1ib2w7XG4gICAgfVxuXG4gICAgdGhpcy50ZXh0RmllbGQuZGlzcGF0Y2hFdmVudCh0aGlzLnRleHRGaWVsZENoYW5nZUV2ZW50KTtcbiAgfVxuXG4gIGlucHV0TGluZUJyZWFrKCkge1xuICAgIHRoaXMuaW5wdXRTeW1ib2woJ1xcbicpO1xuICB9XG5cbiAgaW5wdXRTcGFjZSgpIHtcbiAgICB0aGlzLmlucHV0U3ltYm9sKCcgJyk7XG4gIH1cblxuICBpbnB1dFRhYigpIHtcbiAgICB0aGlzLmlucHV0U3ltYm9sKCdcXHUwMDA5Jyk7XG4gIH1cblxuICB2aXJ0dWFsS2V5Ym9hcmRFdmVudEhhbmRsZXIoZXZlbnQpIHtcbiAgICBjb25zdCBrZXlJbnNjcmlwdGlvbiA9IGV2ZW50LnNyY0VsZW1lbnQuaW5uZXJUZXh0O1xuXG4gICAgaWYgKCF0aGlzLnNwZWNpYWxLZXlzLmluY2x1ZGVzKGtleUluc2NyaXB0aW9uKSkge1xuICAgICAgc3dpdGNoIChrZXlJbnNjcmlwdGlvbikge1xuICAgICAgICBjYXNlICdCYWNrc3BhY2UnOiB7XG4gICAgICAgICAgdGhpcy5kZWxldGVTeW1ib2xCZWZvcmVDYXJldCgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGNhc2UgJ0RlbCc6IHtcbiAgICAgICAgICB0aGlzLmRlbGV0ZVN5bWJvbEFmdGVyQ2FyZXQoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBjYXNlICdTcGFjZSc6IHtcbiAgICAgICAgICB0aGlzLmlucHV0U3BhY2UoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBjYXNlICdFbnRlcic6IHtcbiAgICAgICAgICB0aGlzLmlucHV0TGluZUJyZWFrKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSAnVGFiJzoge1xuICAgICAgICAgIHRoaXMuaW5wdXRUYWIoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBkZWZhdWx0OiB7XG4gICAgICAgICAgdGhpcy5pbnB1dFN5bWJvbChrZXlJbnNjcmlwdGlvbik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKiBUT0RPOiBXZSBuZWVkIHVzZSBldmVudC5jb2RlIGluc3RlYWQgZXZlbnQua2V5IVxuICAgKiAqL1xuXG4gIGNoYW5nZU1vZExheW91dCgpIHtcbiAgICBjb25zdCBrZXlzID0gWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5rZXlzX19rZXktYmFzZScpXTtcbiAgICBpZiAoKHRoaXMuY2Fwc1N0YXRlID09PSBmYWxzZSkgJiYgKHRoaXMuc2hpZnRTdGF0ZSA9PT0gZmFsc2UpKSB7XG4gICAgICBrZXlzLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBrZXkucXVlcnlTZWxlY3RvckFsbCgnLmtleS1sYXlvdXQtLWRlZmF1bHQnKVswXS5jbGFzc0xpc3RcbiAgICAgICAgICAucmVtb3ZlKCdrZXktbGF5b3V0LS1oaWRkZW4nKTtcbiAgICAgICAga2V5LnF1ZXJ5U2VsZWN0b3JBbGwoJy5rZXktbGF5b3V0LS1zaGlmdC1tb2QnKVswXS5jbGFzc0xpc3RcbiAgICAgICAgICAuYWRkKCdrZXktbGF5b3V0LS1oaWRkZW4nKTtcbiAgICAgICAga2V5LnF1ZXJ5U2VsZWN0b3JBbGwoJy5rZXktbGF5b3V0LS1jYXBzLW1vZCcpWzBdLmNsYXNzTGlzdFxuICAgICAgICAgIC5hZGQoJ2tleS1sYXlvdXQtLWhpZGRlbicpO1xuICAgICAgICBrZXkucXVlcnlTZWxlY3RvckFsbCgnLmtleS1sYXlvdXQtLWNhcHMtYW5kLXNoaWZ0LW1vZCcpWzBdLmNsYXNzTGlzdFxuICAgICAgICAgIC5hZGQoJ2tleS1sYXlvdXQtLWhpZGRlbicpO1xuICAgICAgICBrZXkucXVlcnlTZWxlY3RvckFsbCgnLmtleS1sYXlvdXQtLWRlZmF1bHQnKVsxXS5jbGFzc0xpc3RcbiAgICAgICAgICAucmVtb3ZlKCdrZXktbGF5b3V0LS1oaWRkZW4nKTtcbiAgICAgICAga2V5LnF1ZXJ5U2VsZWN0b3JBbGwoJy5rZXktbGF5b3V0LS1zaGlmdC1tb2QnKVsxXS5jbGFzc0xpc3RcbiAgICAgICAgICAuYWRkKCdrZXktbGF5b3V0LS1oaWRkZW4nKTtcbiAgICAgICAga2V5LnF1ZXJ5U2VsZWN0b3JBbGwoJy5rZXktbGF5b3V0LS1jYXBzLW1vZCcpWzFdLmNsYXNzTGlzdFxuICAgICAgICAgIC5hZGQoJ2tleS1sYXlvdXQtLWhpZGRlbicpO1xuICAgICAgICBrZXkucXVlcnlTZWxlY3RvckFsbCgnLmtleS1sYXlvdXQtLWNhcHMtYW5kLXNoaWZ0LW1vZCcpWzFdLmNsYXNzTGlzdFxuICAgICAgICAgIC5hZGQoJ2tleS1sYXlvdXQtLWhpZGRlbicpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmICgodGhpcy5jYXBzU3RhdGUgPT09IGZhbHNlKSAmJiAodGhpcy5zaGlmdFN0YXRlID09PSB0cnVlKSkge1xuICAgICAga2V5cy5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAga2V5LnF1ZXJ5U2VsZWN0b3JBbGwoJy5rZXktbGF5b3V0LS1kZWZhdWx0JylbMF0uY2xhc3NMaXN0XG4gICAgICAgICAgLmFkZCgna2V5LWxheW91dC0taGlkZGVuJyk7XG4gICAgICAgIGtleS5xdWVyeVNlbGVjdG9yQWxsKCcua2V5LWxheW91dC0tc2hpZnQtbW9kJylbMF0uY2xhc3NMaXN0XG4gICAgICAgICAgLnJlbW92ZSgna2V5LWxheW91dC0taGlkZGVuJyk7XG4gICAgICAgIGtleS5xdWVyeVNlbGVjdG9yQWxsKCcua2V5LWxheW91dC0tY2Fwcy1tb2QnKVswXS5jbGFzc0xpc3RcbiAgICAgICAgICAuYWRkKCdrZXktbGF5b3V0LS1oaWRkZW4nKTtcbiAgICAgICAga2V5LnF1ZXJ5U2VsZWN0b3JBbGwoJy5rZXktbGF5b3V0LS1jYXBzLWFuZC1zaGlmdC1tb2QnKVswXS5jbGFzc0xpc3RcbiAgICAgICAgICAuYWRkKCdrZXktbGF5b3V0LS1oaWRkZW4nKTtcbiAgICAgICAga2V5LnF1ZXJ5U2VsZWN0b3JBbGwoJy5rZXktbGF5b3V0LS1kZWZhdWx0JylbMV0uY2xhc3NMaXN0XG4gICAgICAgICAgLmFkZCgna2V5LWxheW91dC0taGlkZGVuJyk7XG4gICAgICAgIGtleS5xdWVyeVNlbGVjdG9yQWxsKCcua2V5LWxheW91dC0tc2hpZnQtbW9kJylbMV0uY2xhc3NMaXN0XG4gICAgICAgICAgLnJlbW92ZSgna2V5LWxheW91dC0taGlkZGVuJyk7XG4gICAgICAgIGtleS5xdWVyeVNlbGVjdG9yQWxsKCcua2V5LWxheW91dC0tY2Fwcy1tb2QnKVsxXS5jbGFzc0xpc3RcbiAgICAgICAgICAuYWRkKCdrZXktbGF5b3V0LS1oaWRkZW4nKTtcbiAgICAgICAga2V5LnF1ZXJ5U2VsZWN0b3JBbGwoJy5rZXktbGF5b3V0LS1jYXBzLWFuZC1zaGlmdC1tb2QnKVsxXS5jbGFzc0xpc3RcbiAgICAgICAgICAuYWRkKCdrZXktbGF5b3V0LS1oaWRkZW4nKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAoKHRoaXMuY2Fwc1N0YXRlID09PSB0cnVlKSAmJiAodGhpcy5zaGlmdFN0YXRlID09PSBmYWxzZSkpIHtcbiAgICAgIGtleXMuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGtleS5xdWVyeVNlbGVjdG9yQWxsKCcua2V5LWxheW91dC0tZGVmYXVsdCcpWzBdLmNsYXNzTGlzdFxuICAgICAgICAgIC5hZGQoJ2tleS1sYXlvdXQtLWhpZGRlbicpO1xuICAgICAgICBrZXkucXVlcnlTZWxlY3RvckFsbCgnLmtleS1sYXlvdXQtLXNoaWZ0LW1vZCcpWzBdLmNsYXNzTGlzdFxuICAgICAgICAgIC5hZGQoJ2tleS1sYXlvdXQtLWhpZGRlbicpO1xuICAgICAgICBrZXkucXVlcnlTZWxlY3RvckFsbCgnLmtleS1sYXlvdXQtLWNhcHMtbW9kJylbMF0uY2xhc3NMaXN0XG4gICAgICAgICAgLnJlbW92ZSgna2V5LWxheW91dC0taGlkZGVuJyk7XG4gICAgICAgIGtleS5xdWVyeVNlbGVjdG9yQWxsKCcua2V5LWxheW91dC0tY2Fwcy1hbmQtc2hpZnQtbW9kJylbMF0uY2xhc3NMaXN0XG4gICAgICAgICAgLmFkZCgna2V5LWxheW91dC0taGlkZGVuJyk7XG4gICAgICAgIGtleS5xdWVyeVNlbGVjdG9yQWxsKCcua2V5LWxheW91dC0tZGVmYXVsdCcpWzFdLmNsYXNzTGlzdFxuICAgICAgICAgIC5hZGQoJ2tleS1sYXlvdXQtLWhpZGRlbicpO1xuICAgICAgICBrZXkucXVlcnlTZWxlY3RvckFsbCgnLmtleS1sYXlvdXQtLXNoaWZ0LW1vZCcpWzFdLmNsYXNzTGlzdFxuICAgICAgICAgIC5hZGQoJ2tleS1sYXlvdXQtLWhpZGRlbicpO1xuICAgICAgICBrZXkucXVlcnlTZWxlY3RvckFsbCgnLmtleS1sYXlvdXQtLWNhcHMtbW9kJylbMV0uY2xhc3NMaXN0XG4gICAgICAgICAgLnJlbW92ZSgna2V5LWxheW91dC0taGlkZGVuJyk7XG4gICAgICAgIGtleS5xdWVyeVNlbGVjdG9yQWxsKCcua2V5LWxheW91dC0tY2Fwcy1hbmQtc2hpZnQtbW9kJylbMV0uY2xhc3NMaXN0XG4gICAgICAgICAgLmFkZCgna2V5LWxheW91dC0taGlkZGVuJyk7XG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKCh0aGlzLmNhcHNTdGF0ZSA9PT0gdHJ1ZSkgJiYgKHRoaXMuc2hpZnRTdGF0ZSA9PT0gdHJ1ZSkpIHtcbiAgICAgIGtleXMuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGtleS5xdWVyeVNlbGVjdG9yQWxsKCcua2V5LWxheW91dC0tZGVmYXVsdCcpWzBdLmNsYXNzTGlzdFxuICAgICAgICAgIC5hZGQoJ2tleS1sYXlvdXQtLWhpZGRlbicpO1xuICAgICAgICBrZXkucXVlcnlTZWxlY3RvckFsbCgnLmtleS1sYXlvdXQtLXNoaWZ0LW1vZCcpWzBdLmNsYXNzTGlzdFxuICAgICAgICAgIC5hZGQoJ2tleS1sYXlvdXQtLWhpZGRlbicpO1xuICAgICAgICBrZXkucXVlcnlTZWxlY3RvckFsbCgnLmtleS1sYXlvdXQtLWNhcHMtbW9kJylbMF0uY2xhc3NMaXN0XG4gICAgICAgICAgLmFkZCgna2V5LWxheW91dC0taGlkZGVuJyk7XG4gICAgICAgIGtleS5xdWVyeVNlbGVjdG9yQWxsKCcua2V5LWxheW91dC0tY2Fwcy1hbmQtc2hpZnQtbW9kJylbMF0uY2xhc3NMaXN0XG4gICAgICAgICAgLnJlbW92ZSgna2V5LWxheW91dC0taGlkZGVuJyk7XG4gICAgICAgIGtleS5xdWVyeVNlbGVjdG9yQWxsKCcua2V5LWxheW91dC0tZGVmYXVsdCcpWzFdLmNsYXNzTGlzdFxuICAgICAgICAgIC5hZGQoJ2tleS1sYXlvdXQtLWhpZGRlbicpO1xuICAgICAgICBrZXkucXVlcnlTZWxlY3RvckFsbCgnLmtleS1sYXlvdXQtLXNoaWZ0LW1vZCcpWzFdLmNsYXNzTGlzdFxuICAgICAgICAgIC5hZGQoJ2tleS1sYXlvdXQtLWhpZGRlbicpO1xuICAgICAgICBrZXkucXVlcnlTZWxlY3RvckFsbCgnLmtleS1sYXlvdXQtLWNhcHMtbW9kJylbMV0uY2xhc3NMaXN0XG4gICAgICAgICAgLmFkZCgna2V5LWxheW91dC0taGlkZGVuJyk7XG4gICAgICAgIGtleS5xdWVyeVNlbGVjdG9yQWxsKCcua2V5LWxheW91dC0tY2Fwcy1hbmQtc2hpZnQtbW9kJylbMV0uY2xhc3NMaXN0XG4gICAgICAgICAgLnJlbW92ZSgna2V5LWxheW91dC0taGlkZGVuJyk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBjaGFuZ2VMYW5ndWFnZUxheW91dCgpIHtcbiAgICBpZiAodGhpcy5sYW5ndWFnZUFsdGVybmF0ZVN0YXRlID09PSBmYWxzZSkge1xuICAgICAgdGhpcy5rZXlzLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBrZXkucXVlcnlTZWxlY3RvcignLmtleS1iYXNlX19lbi1rZXlzJykuY2xhc3NMaXN0XG4gICAgICAgICAgLmFkZCgnZW4ta2V5cy0taGlkZGVuJyk7XG4gICAgICAgIGtleS5xdWVyeVNlbGVjdG9yKCcua2V5LWJhc2VfX3J1LWtleXMnKS5jbGFzc0xpc3RcbiAgICAgICAgICAucmVtb3ZlKCdydS1rZXlzLS1oaWRkZW4nKTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5sYW5ndWFnZUFsdGVybmF0ZVN0YXRlID0gdHJ1ZTtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdzcGFjZWh1bW1lclZpcnR1YWxLZXlib2FyZExhbmd1YWdlQWx0ZXJuYXRlU3RhdGUnLCAndHJ1ZScpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmtleXMuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGtleS5xdWVyeVNlbGVjdG9yKCcua2V5LWJhc2VfX2VuLWtleXMnKS5jbGFzc0xpc3RcbiAgICAgICAgICAucmVtb3ZlKCdlbi1rZXlzLS1oaWRkZW4nKTtcbiAgICAgICAga2V5LnF1ZXJ5U2VsZWN0b3IoJy5rZXktYmFzZV9fcnUta2V5cycpLmNsYXNzTGlzdFxuICAgICAgICAgIC5hZGQoJ3J1LWtleXMtLWhpZGRlbicpO1xuICAgICAgfSk7XG4gICAgICB0aGlzLmxhbmd1YWdlQWx0ZXJuYXRlU3RhdGUgPSBmYWxzZTtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdzcGFjZWh1bW1lclZpcnR1YWxLZXlib2FyZExhbmd1YWdlQWx0ZXJuYXRlU3RhdGUnLCAnZmFsc2UnKTtcbiAgICB9XG4gIH1cblxuICBzZXRMYW5ndWFnZUxheW91dEFmdGVyTG9hZGluZygpIHtcbiAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3NwYWNlaHVtbWVyVmlydHVhbEtleWJvYXJkTGFuZ3VhZ2VBbHRlcm5hdGVTdGF0ZScpID09PSAndHJ1ZScpIHtcbiAgICAgIHRoaXMuY2hhbmdlTGFuZ3VhZ2VMYXlvdXQoKTtcbiAgICB9XG4gIH1cblxuICBtb2RTdGF0ZU1hbmFnZXIoc2lnbmFsKSB7XG4gICAgc3dpdGNoIChzaWduYWwpIHtcbiAgICAgIGNhc2UgJ2NhcHMnOiB7XG4gICAgICAgIGlmICh0aGlzLmNhcHNTdGF0ZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICB0aGlzLmNhcHNTdGF0ZSA9IHRydWU7XG4gICAgICAgICAgdGhpcy5jaGFuZ2VNb2RMYXlvdXQoKTtcbiAgICAgICAgICBpZiAodGhpcy52ZXJib3NlTHZsID4gMSkge1xuICAgICAgICAgICAgLyogQ29uc29sZSBsb2cgd2l0aCAnLS0tLSBDYXBzIG1vZCBvbiEnIHdhcyBoZXJlLiAqL1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLmtleUNhcHMuY2xhc3NMaXN0LmFkZCgna2V5LWJhc2UtLWhvbGQnKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmNhcHNTdGF0ZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgIHRoaXMuY2Fwc1N0YXRlID0gZmFsc2U7XG4gICAgICAgICAgdGhpcy5jaGFuZ2VNb2RMYXlvdXQoKTtcbiAgICAgICAgICBpZiAodGhpcy52ZXJib3NlTHZsID4gMSkge1xuICAgICAgICAgICAgLyogQ29uc29sZSBsb2cgd2l0aCAnLS0tLSBDYXBzIG1vZCBvZmYhJyB3YXMgaGVyZS4gKi9cbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5rZXlDYXBzLmNsYXNzTGlzdC5yZW1vdmUoJ2tleS1iYXNlLS1ob2xkJyk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlICdzaGlmdCc6IHtcbiAgICAgICAgaWYgKHRoaXMuc2hpZnRTdGF0ZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICB0aGlzLnNoaWZ0U3RhdGUgPSB0cnVlO1xuICAgICAgICAgIHRoaXMuY2hhbmdlTW9kTGF5b3V0KCk7XG4gICAgICAgICAgaWYgKHRoaXMudmVyYm9zZUx2bCA+IDEpIHtcbiAgICAgICAgICAgIC8qIENvbnNvbGUgbG9nIHdpdGggJy0tLS0gU2hpZnQgbW9kIG9uIScgd2FzIGhlcmUuICovXG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMua2V5U2hpZnQuY2xhc3NMaXN0LmFkZCgna2V5LWJhc2UtLWhvbGQnKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnNoaWZ0U3RhdGUgPT09IHRydWUpIHtcbiAgICAgICAgICB0aGlzLnNoaWZ0U3RhdGUgPSBmYWxzZTtcbiAgICAgICAgICB0aGlzLmNoYW5nZU1vZExheW91dCgpO1xuICAgICAgICAgIGlmICh0aGlzLnZlcmJvc2VMdmwgPiAxKSB7XG4gICAgICAgICAgICAvKiBDb25zb2xlIGxvZyB3aXRoICctLS0tIFNoaWZ0IG1vZCBvZmYhJyB3YXMgaGVyZS4gKi9cbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5rZXlTaGlmdC5jbGFzc0xpc3QucmVtb3ZlKCdrZXktYmFzZS0taG9sZCcpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSAnY29udHJvbExlZnQnOiB7XG4gICAgICAgIGlmICh0aGlzLmNvbnRyb2xMZWZ0U3RhdGUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgdGhpcy5jb250cm9sTGVmdFN0YXRlID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmNvbnRyb2xMZWZ0U3RhdGUgPT09IHRydWUpIHtcbiAgICAgICAgICB0aGlzLmNvbnRyb2xMZWZ0U3RhdGUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKFxuICAgICAgKHRoaXMuc2hpZnRTdGF0ZSA9PT0gdHJ1ZSlcbiAgICAgICYmICh0aGlzLmNvbnRyb2xMZWZ0U3RhdGUgPT09IHRydWUpXG4gICAgICAmJiAodGhpcy5sYW5ndWFnZUFsdGVybmF0ZUNhbGxDb3VudGVyIDwgMSlcbiAgICApIHtcbiAgICAgIHRoaXMuY2hhbmdlTGFuZ3VhZ2VMYXlvdXQoKTtcbiAgICB9XG4gIH1cblxuICBvYnNlcnZlQ29udHJvbExlZnRTdGF0ZSgpIHtcbiAgICBjb25zdCBvblNoaWZ0TW9kV29yayA9ICgpID0+IHtcbiAgICAgIHRoaXMubW9kU3RhdGVNYW5hZ2VyKCdjb250cm9sTGVmdCcpO1xuICAgIH07XG5cbiAgICBjb25zdCBvblVuU2hpZnRNb2RXb3JrID0gKCkgPT4ge1xuICAgICAgdGhpcy5tb2RTdGF0ZU1hbmFnZXIoJ2NvbnRyb2xMZWZ0Jyk7XG4gICAgfTtcblxuICAgIGNvbnN0IGNvbnRyb2xMZWZ0T2JzZXJ2ZXIgPSBuZXcgRWxlbWVudENsYXNzT2JzZXJ2ZXIoXG4gICAgICB0aGlzLmtleUNvbnRyb2xMZWZ0LFxuICAgICAgJ2tleS1iYXNlLS1wcmVzc2VkJyxcbiAgICAgIG9uU2hpZnRNb2RXb3JrLFxuICAgICAgb25VblNoaWZ0TW9kV29yayxcbiAgICApO1xuXG4gICAgY29udHJvbExlZnRPYnNlcnZlci5pbml0KCk7XG4gICAgY29udHJvbExlZnRPYnNlcnZlci5vYnNlcnZlKCk7XG4gIH1cblxuICBvYnNlcnZlU2hpZnRTdGF0ZSgpIHtcbiAgICBjb25zdCBvblNoaWZ0TW9kV29yayA9ICgpID0+IHtcbiAgICAgIHRoaXMubW9kU3RhdGVNYW5hZ2VyKCdzaGlmdCcpO1xuICAgIH07XG5cbiAgICBjb25zdCBvblVuU2hpZnRNb2RXb3JrID0gKCkgPT4ge1xuICAgICAgdGhpcy5tb2RTdGF0ZU1hbmFnZXIoJ3NoaWZ0Jyk7XG4gICAgfTtcblxuICAgIGNvbnN0IHNoaWZ0T2JzZXJ2ZXIgPSBuZXcgRWxlbWVudENsYXNzT2JzZXJ2ZXIoXG4gICAgICB0aGlzLmtleVNoaWZ0LFxuICAgICAgJ2tleS1iYXNlLS1wcmVzc2VkJyxcbiAgICAgIG9uU2hpZnRNb2RXb3JrLFxuICAgICAgb25VblNoaWZ0TW9kV29yayxcbiAgICApO1xuXG4gICAgc2hpZnRPYnNlcnZlci5pbml0KCk7XG4gICAgc2hpZnRPYnNlcnZlci5vYnNlcnZlKCk7XG4gIH1cblxuICBvYnNlcnZlQ2Fwc1N0YXRlKCkge1xuICAgIGNvbnN0IG9uQ2Fwc01vZFdvcmsgPSAoKSA9PiB7XG4gICAgICB0aGlzLm1vZFN0YXRlTWFuYWdlcignY2FwcycpO1xuICAgIH07XG5cbiAgICBjb25zdCBvblVuQ2Fwc01vZFdvcmsgPSAoKSA9PiB7XG4gICAgfTtcblxuICAgIGNvbnN0IGNhcHNPYnNlcnZlciA9IG5ldyBFbGVtZW50Q2xhc3NPYnNlcnZlcihcbiAgICAgIHRoaXMua2V5Q2FwcyxcbiAgICAgICdrZXktYmFzZS0tcHJlc3NlZCcsXG4gICAgICBvbkNhcHNNb2RXb3JrLFxuICAgICAgb25VbkNhcHNNb2RXb3JrLFxuICAgICk7XG5cbiAgICBjYXBzT2JzZXJ2ZXIuaW5pdCgpO1xuICAgIGNhcHNPYnNlcnZlci5vYnNlcnZlKCk7XG4gIH1cblxuICBsaXN0ZW5WaXJ0dWFsS2V5Ym9hcmQoKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmtleXNfX2tleS1iYXNlJykuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMudmlydHVhbEtleWJvYXJkRXZlbnRIYW5kbGVyQm91bmRlZCk7XG4gICAgfSk7XG4gIH1cblxuICBsaXN0ZW5QaHlzaWNhbEtleWJvYXJkKCkge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAna2V5ZG93bicsXG4gICAgICB0aGlzLmtleWJvYXJkRXZlbnRIYW5kbGVyQm91bmRlZCxcbiAgICApO1xuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICdrZXl1cCcsXG4gICAgICB0aGlzLmtleWJvYXJkRXZlbnRIYW5kbGVyQm91bmRlZCxcbiAgICApO1xuICB9XG59XG4iLCIvKipcbiAqIEJhc2ljIGxheW91dCBnZW5lcmF0b3IgY2xhc3MgaW1wb3J0LlxuICovXG5pbXBvcnQgQmFzaWNTdHJ1Y3R1cmVHZW5lcmF0b3IgZnJvbSAnLi9CYXNpY1N0cnVjdHVyZUdlbmVyYXRvcic7XG5cbi8qKlxuICogS2V5Ym9hcmQgd29yayBsb2dpYyBjbGFzcyBpbXBvcnQuXG4gKi9cbmltcG9ydCBLZXlib2FyZExvZ2ljTWFuYWdlciBmcm9tICcuL0tleWJvYXJkTG9naWNNYW5hZ2VyJztcblxuLyogSW1wb3J0IFBpY3MgKi9cbi8vIEV4YW1wbGU6IGltcG9ydCBiaXJkUGxhY2Vob2xkZXIgZnJvbSAnLi4vYXNzZXRzL2ltYWdlcy9yYXZlbl8wMS5wbmcnO1xuXG4vKiBJbXBvcnQgc3R5bGVzICovXG5pbXBvcnQgJy4uL2Fzc2V0cy9zdHlsZXMvc3R5bGUuY3NzJztcbmltcG9ydCAnLi4vYXNzZXRzL3N0eWxlcy9ub3JtYWxpemUuY3NzJztcblxuLyogRGVidWcgY29udHJvbC4gKi9cbmNvbnN0IGRlYnVnSGFyZGNvZGUgPSAyO1xuLyoqXG4gKiBUT0RPOiBnZXQgZGVidWcgZmxhZyBmcm9tIHNvbWV3aGVyZS5cbiAqL1xuY29uc3QgZGVidWdGbGFnID0gMTtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bm5lZWRlZC10ZXJuYXJ5XG5jb25zdCBkZWJ1ZyA9IGRlYnVnSGFyZGNvZGUgPyBkZWJ1Z0hhcmRjb2RlIDogZGVidWdGbGFnO1xuXG4vKiBDb25zdGFudHMgYW5kIHZhcnMgb2Ygc3RhdGVzIGFuZCBvdGhlciB0aGluZ3MuICovXG5jb25zdCBsYW5ndWFnZUdlbmVyYWwgPSAnZW4nO1xuXG4vKiBPbmxvYWQgd29yayBmdW5jdGlvbjogZW50cnkgcG9pbnQgZm9yIG1vc3QgY29kZS4gKi9cbmZ1bmN0aW9uIHdpbmRvd09uTG9hZFdvcmsoKSB7XG4gIC8qIENyZWF0ZSBiYXNpYyBzdHJ1Y3R1cmUgZ2VuZXJhdG9yIGluc3RhbmNlLiAqL1xuICBjb25zdCBiYXNpY1N0cnVjdHVyZUdlbmVyYXRvciA9IG5ldyBCYXNpY1N0cnVjdHVyZUdlbmVyYXRvcihcbiAgICAnYm9keScsXG4gICAgbGFuZ3VhZ2VHZW5lcmFsLFxuICAgIGRlYnVnLFxuICApO1xuXG4gIC8qIEdlbmVyYXRlIGFuZCBhcHBlbmQgZ2VuZXJhdGVkIGVsZW1lbnRzIHRvIERPTS4gKi9cbiAgYmFzaWNTdHJ1Y3R1cmVHZW5lcmF0b3IuZ2VuZXJhdGVBbGwoKTtcbiAgYmFzaWNTdHJ1Y3R1cmVHZW5lcmF0b3IuYXBwZW5kSFRNTEVsZW1lbnRzKCk7XG5cbiAgLyogQ3JlYXRlIGtleWJvYXJkIHdvcmsgbG9naWMgY2xhc3MgaW5zdGFuY2UuICAqL1xuICBjb25zdCBrZXlib2FyZE1hbmFnZXIgPSBuZXcgS2V5Ym9hcmRMb2dpY01hbmFnZXIoXG4gICAgJ2JvZHknLFxuICAgICcua2V5Ym9hcmQtYW5kLWRpc3BsYXknLFxuICAgIGRlYnVnLFxuICApO1xuXG4gIGtleWJvYXJkTWFuYWdlci5zZXRMYW5ndWFnZUxheW91dEFmdGVyTG9hZGluZygpO1xuICBrZXlib2FyZE1hbmFnZXIubGlzdGVuUGh5c2ljYWxLZXlib2FyZCgpO1xuICBrZXlib2FyZE1hbmFnZXIubGlzdGVuVmlydHVhbEtleWJvYXJkKCk7XG4gIGtleWJvYXJkTWFuYWdlci5vYnNlcnZlQ29udHJvbExlZnRTdGF0ZSgpO1xuICBrZXlib2FyZE1hbmFnZXIub2JzZXJ2ZVNoaWZ0U3RhdGUoKTtcbiAga2V5Ym9hcmRNYW5hZ2VyLm9ic2VydmVDYXBzU3RhdGUoKTtcbn1cblxuLyogU3RhcnQgb25sb2FkIHdvcmsgKi9cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xuICB3aW5kb3dPbkxvYWRXb3JrKCk7XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
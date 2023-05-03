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
        case 'Caps Lock': {
          this.keyCaps.classList.add('key-base--pressed');
          setTimeout(() => {
            this.keyCaps.classList.remove('key-base--pressed');
          }, 100);
          break;
        }
        case 'Shift': {
          if (!this.lastKeyEvent || (this.lastKeyEvent.key !== 'Shift')) {
            this.keyShift.classList.add('key-base--pressed');
            setTimeout(() => {
              this.keyShift.classList.remove('key-base--pressed');
            }, 100);
          }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5jMWQ1ZjUxOC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDMEQ7O0FBRTFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsUUFBUTtBQUN2QixlQUFlLFFBQVE7QUFDdkI7QUFDQTs7QUFFQTtBQUNBLGVBQWUsUUFBUTtBQUN2QjtBQUNBLGVBQWUsUUFBUTtBQUN2Qjs7QUFFQTtBQUNBLGVBQWUsUUFBUTtBQUN2QixlQUFlLFFBQVE7QUFDdkIsZUFBZSxRQUFRO0FBQ3ZCO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCLGVBQWUsUUFBUTtBQUN2QjtBQUNBLGVBQWUsUUFBUTtBQUN2QjtBQUNBLGVBQWUsUUFBUTtBQUN2QjtBQUNBOztBQUVBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCLGVBQWUsUUFBUTtBQUN2QixlQUFlLFFBQVE7QUFDdkIsZUFBZSxRQUFRO0FBQ3ZCOztBQUVBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCLGVBQWUsUUFBUTtBQUN2QixlQUFlLFFBQVE7QUFDdkI7O0FBRUE7QUFDQSxlQUFlLFFBQVE7QUFDdkI7QUFDQSxlQUFlLFFBQVE7QUFDdkIsZUFBZSxRQUFRO0FBQ3ZCLGVBQWUsUUFBUTtBQUN2Qjs7QUFFQTtBQUNBLGVBQWUsUUFBUTtBQUN2QjtBQUNBLGVBQWUsUUFBUTtBQUN2QixlQUFlLFFBQVE7QUFDdkIsZUFBZSxRQUFRO0FBQ3ZCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ2U7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSx5QkFBeUIsU0FBUztBQUNsQyx5QkFBeUIsU0FBUztBQUNsQyx5QkFBeUIsU0FBUztBQUNsQztBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHlEQUFZO0FBQ3BDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EscURBQXFELGtCQUFrQjs7QUFFdkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxrQkFBa0I7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsbURBQW1EO0FBQzlFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixZQUFZO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNwY2U7QUFDZjs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0EsZ0RBQWdELGtCQUFrQjtBQUNsRTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2pEMEQ7O0FBRTFEO0FBQ0E7QUFDQTtBQUNlO0FBQ2Y7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLDJCQUEyQixTQUFTO0FBQ3BDLDJCQUEyQixTQUFTO0FBQ3BDLDJCQUEyQixTQUFTO0FBQ3BDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0RBQStELGNBQWM7QUFDN0U7QUFDQTtBQUNBLGtFQUFrRSxjQUFjO0FBQ2hGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLG9DQUFvQyw2REFBb0I7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLDhCQUE4Qiw2REFBb0I7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSw2QkFBNkIsNkRBQW9CO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQzNqQkE7QUFDQTtBQUNBO0FBQ2dFOztBQUVoRTtBQUNBO0FBQ0E7QUFDMEQ7O0FBRTFEO0FBQ0E7O0FBRUE7QUFDb0M7QUFDSTs7QUFFeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQyxnRUFBdUI7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOEJBQThCLDZEQUFvQjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdmlydHVhbC1rZXlib2FyZC8uL2Fzc2V0cy9zdHlsZXMvbm9ybWFsaXplLmNzcz9iZWExIiwid2VicGFjazovL3ZpcnR1YWwta2V5Ym9hcmQvLi9hc3NldHMvc3R5bGVzL3N0eWxlLmNzcz8yMzU4Iiwid2VicGFjazovL3ZpcnR1YWwta2V5Ym9hcmQvLi9zcmMvQmFzaWNTdHJ1Y3R1cmVHZW5lcmF0b3IuanMiLCJ3ZWJwYWNrOi8vdmlydHVhbC1rZXlib2FyZC8uL3NyYy9FbGVtZW50Q2xhc3NPYnNlcnZlci5qcyIsIndlYnBhY2s6Ly92aXJ0dWFsLWtleWJvYXJkLy4vc3JjL0tleWJvYXJkTG9naWNNYW5hZ2VyLmpzIiwid2VicGFjazovL3ZpcnR1YWwta2V5Ym9hcmQvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLyogSW1wb3J0IEpTT04gd2l0aCBrZXlzIGluc2NyaXB0aW9ucyBhbmQgb3RoZXIga2V5cyBpbmZvICovXG5pbXBvcnQgaW5zY3JpcHRpb25zIGZyb20gJy4uL2Fzc2V0cy9qcy9pbnNjcmlwdGlvbnMuanNvbic7XG5cbi8qKlxuICogVE9ETzogcmV3b3JrIEpTT04uIEV2ZXJ5IGJ1dHRvbiBuZWVkIG9uZSB1bmlxdWUgaWRlbnRpZmllci4gTWF5YmUsIGV2ZW50LmNvZGU/XG4gKiAgICAgICAobm90IGRlcHJlY2F0ZWQgZXZlbnQua2V5Q29kZSBvciBldmVudC53aGljaCEhISlcbiAqICAgICAgIEFmdGVyIGl0LCByZXdvcmsgcmVsZXZhbnQgY2xhc3MgbWV0aG9kcy5cbiAqICovXG5cbi8vIDxlZGl0b3ItZm9sZCBkZXNjPVwiS2V5cyBPYmplY3QgSlNEb2NcIj5cbi8qKlxuICogQHR5cGVkZWYgICB7T2JqZWN0fSBrZXlJbnNjcmlwdGlvbnMgIC0gT2JqZWN0LCBwYXJzZWQgZnJvbSBKU09OIHdpdGggaW5mbyBhYm91dCBrZXlzLlxuICogQHByb3BlcnR5ICB7T2JqZWN0fSBlbiAgICAgICAgICAgICAgIC0gaW5uZXIgT2JqZWN0IHdpdGggaW5mb1xuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWJvdXQga2V5cyBmb3IgRW5nbGlzaCBrZXlib2FyZC5cbiAqL1xuXG4vKipcbiAqIEB0eXBlZGVmICAge09iamVjdH0gZW4gICAgICAgICAgIC0gaW5uZXIgT2JqZWN0IHdpdGggaW5mb1xuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhYm91dCBrZXlzIGZvciBFbmdsaXNoIGtleWJvYXJkLlxuICogQHByb3BlcnR5ICB7T2JqZWN0fSBrZXlCeU51bWJlciAgLSBpbm5lciBPYmplY3Qgd2l0aCBpbmZvcm1hdGlvbiBhYm91dCBzZXBhcmF0ZSBrZXkuXG4gKi9cblxuLyoqXG4gKiBAdHlwZWRlZiAgIHtPYmplY3R9IGtleUJ5TnVtYmVyICAgIC0gaW5uZXIgT2JqZWN0IHdpdGggaW5mb3JtYXRpb24gYWJvdXQgc2VwYXJhdGUga2V5LlxuICogQHByb3BlcnR5ICB7U3RyaW5nfSBldmVudENvZGUgICAgICAtIGtleSBldmVudC5jb2RlLlxuICogQHByb3BlcnR5ICB7U3RyaW5nfSByb3cgICAgICAgICAgICAtIGZpZWxkIHdpdGggaW5mb3JtYXRpb25cbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhYm91dCBrZXlib2FyZCByb3cgb2YgY3VycmVudCBrZXkuXG4gKiBAcHJvcGVydHkgIHtPYmplY3R9IHN5bWJvbERlZmF1bHQgIC0gT2JqZWN0IHdpdGggaW5mb3JtYXRpb24gYWJvdXQgc3ltYm9sIGZvciBkZWZhdWx0IHN0YXRlLlxuICogQHByb3BlcnR5ICB7T2JqZWN0fSBzeW1ib2xTaGlmdE1vZCAtIE9iamVjdCB3aXRoIGluZm9ybWF0aW9uIGFib3V0IHN5bWJvbFxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciBTaGlmdCBtb2RpZmljYXRpb24gc3RhdGUuXG4gKiBAcHJvcGVydHkgIHtPYmplY3R9IHN5bWJvbENhcHNNb2QgIC0gT2JqZWN0IHdpdGggaW5mb3JtYXRpb24gYWJvdXQgc3ltYm9sXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIFNoaWZ0IG1vZGlmaWNhdGlvbiBzdGF0ZS5cbiAqIEBwcm9wZXJ0eSAge09iamVjdH0gc3ltYm9sQ2Fwc1NoaWZ0TW9kIC0gT2JqZWN0IHdpdGggaW5mb3JtYXRpb24gYWJvdXQgc3ltYm9sXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciBTaGlmdCBtb2RpZmljYXRpb24gc3RhdGUuXG4gKi9cblxuLyoqXG4gKiBAdHlwZWRlZiAgIHtPYmplY3R9IHN5bWJvbERlZmF1bHQgIC0gT2JqZWN0IHdpdGggaW5mb3JtYXRpb24gYWJvdXQgc3ltYm9sIGZvciBkZWZhdWx0IHN0YXRlLlxuICogQHByb3BlcnR5ICB7U3RyaW5nfSBzeW1ib2wgICAgICAgICAtIHN5bWJvbC5cbiAqIEBwcm9wZXJ0eSAge1N0cmluZ30gbW5lbW9uaWNIVE1MICAgLSBIVE1MIG1uZW1vbmljLlxuICogQHByb3BlcnR5ICB7U3RyaW5nfSBuYW1lICAgICAgICAgICAtIGh1bWFuLXJlYWRhYmxlIG5hbWUgb2Ygc3ltYm9sLlxuICovXG5cbi8qKlxuICogQHR5cGVkZWYgICB7T2JqZWN0fSBzeW1ib2xTaGlmdE1vZCAtIE9iamVjdCB3aXRoIGluZm9ybWF0aW9uIGFib3V0IHN5bWJvbFxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciBTaGlmdCBtb2RpZmljYXRpb24gc3RhdGUuXG4gKiBAcHJvcGVydHkgIHtTdHJpbmd9IHN5bWJvbCAgICAgICAgIC0gc3ltYm9sLlxuICogQHByb3BlcnR5ICB7U3RyaW5nfSBtbmVtb25pY0hUTUwgICAtIEhUTUwgbW5lbW9uaWMuXG4gKiBAcHJvcGVydHkgIHtTdHJpbmd9IG5hbWUgICAgICAgICAgIC0gaHVtYW4tcmVhZGFibGUgbmFtZSBvZiBzeW1ib2wuXG4gKi9cblxuLyoqXG4gKiBAdHlwZWRlZiAgIHtPYmplY3R9IHN5bWJvbENhcHNNb2QgIC0gT2JqZWN0IHdpdGggaW5mb3JtYXRpb24gYWJvdXQgc3ltYm9sXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIFNoaWZ0IG1vZGlmaWNhdGlvbiBzdGF0ZS5cbiAqIEBwcm9wZXJ0eSAge1N0cmluZ30gc3ltYm9sICAgICAgICAgLSBzeW1ib2wuXG4gKiBAcHJvcGVydHkgIHtTdHJpbmd9IG1uZW1vbmljSFRNTCAgIC0gSFRNTCBtbmVtb25pYy5cbiAqIEBwcm9wZXJ0eSAge1N0cmluZ30gbmFtZSAgICAgICAgICAgLSBodW1hbi1yZWFkYWJsZSBuYW1lIG9mIHN5bWJvbC5cbiAqL1xuXG4vKipcbiAqIEB0eXBlZGVmICAge09iamVjdH0gc3ltYm9sQ2Fwc1NoaWZ0TW9kICAtIE9iamVjdCB3aXRoIGluZm9ybWF0aW9uIGFib3V0IHN5bWJvbFxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIFNoaWZ0IG1vZGlmaWNhdGlvbiBzdGF0ZS5cbiAqIEBwcm9wZXJ0eSAge1N0cmluZ30gc3ltYm9sICAgICAgICAgLSBzeW1ib2wuXG4gKiBAcHJvcGVydHkgIHtTdHJpbmd9IG1uZW1vbmljSFRNTCAgIC0gSFRNTCBtbmVtb25pYy5cbiAqIEBwcm9wZXJ0eSAge1N0cmluZ30gbmFtZSAgICAgICAgICAgLSBodW1hbi1yZWFkYWJsZSBuYW1lIG9mIHN5bWJvbC5cbiAqL1xuLy8gPC9lZGl0b3ItZm9sZCBkZXNjPVwiS2V5cyBPYmplY3QgSlNEb2NcIj5cblxuLyoqXG4gKiBCYXNpY1N0cnVjdHVyZUdlbmVyYXRvciBjbGFzcyBmb3IgZ2VuZXJhdGUgYmFzaWMgSFRNTCBFbGVtZW50cyBmb3IgQXBwLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCYXNpY1N0cnVjdHVyZUdlbmVyYXRvciB7XG4gIC8vIDxlZGl0b3ItZm9sZCBkZXNjPVwiVG9rZW5zXCI+XG4gIHJvb3RUb2tlbjtcbiAgLy8gPC9lZGl0b3ItZm9sZCBkZXNjPVwiVG9rZW5zXCI+XG5cbiAgLy8gPGVkaXRvci1mb2xkIGRlc2M9XCJFbGVtZW50c1wiPlxuICByb290O1xuXG4gIHJvb3RDb250YWluZXI7XG5cbiAgaGVhZGVyO1xuXG4gIG1haW47XG5cbiAgZm9vdGVyO1xuXG4gIGNvbnRhaW5lcjtcblxuICBrZXlib2FyZDtcbiAgLy8gPC9lZGl0b3ItZm9sZCBkZXNjPVwiRWxlbWVudHNcIj5cblxuICBpbnNjcmlwdGlvbnM7XG5cbiAgLyoqXG4gICAqIEtleWJvYXJkIGtleXMgY291bnQuXG4gICAqL1xuICBrZXlzQ291bnQ7XG5cbiAgLyoqXG4gICAqIFZlcmJvc2UgTFZMIGZvciBtYW5hZ2Ugb3V0cHV0IHRvIGNvbnNvbGUuXG4gICAqL1xuICB2ZXJib3NlTHZsO1xuXG4gIGxhbmd1YWdlO1xuXG4gIC8qKlxuICAgKiBCYXNpYyBzdHJ1Y3R1cmUgZ2VuZXJhdG9yIGNvbnN0cnVjdG9yLlxuICAgKiBAcGFyYW0gcm9vdFRva2VuICAge1N0cmluZ30gIC0gVG9rZW4gb2Ygcm9vdCBlbGVtZW50LCBpbiB0aGF0IHdlIGFkZCBuZXcgZWxlbWVudHMuXG4gICAqIEBwYXJhbSBsYW5ndWFnZSAgICB7U3RyaW5nfSAgLSBDdXJyZW50IEFwcCBsYW5ndWFnZS5cbiAgICogQHBhcmFtIHZlcmJvc2VMdmwgIHtudW1iZXJ9ICAtIHZlcmJvc2UgTFZMIGZvciBtYW5hZ2Ugb3V0cHV0IHRvIGNvbnNvbGUuXG4gICAqL1xuICBjb25zdHJ1Y3Rvcihyb290VG9rZW4sIGxhbmd1YWdlLCB2ZXJib3NlTHZsID0gMCkge1xuICAgIHRoaXMudmVyYm9zZUx2bCA9IHZlcmJvc2VMdmw7XG5cbiAgICB0aGlzLmxhbmd1YWdlID0gbGFuZ3VhZ2U7XG5cbiAgICB0aGlzLnJvb3RUb2tlbiA9IHJvb3RUb2tlbjtcbiAgICB0aGlzLnJvb3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHJvb3RUb2tlbik7XG5cbiAgICAvKiBJbml0aWFsaXNlIGZpZWxkcyBmb3IgbWFpbiBzdHJ1Y3R1cmUgZWxlbWVudHMuICovXG4gICAgdGhpcy5yb290Q29udGFpbmVyID0gbnVsbDtcbiAgICB0aGlzLmhlYWRlciA9IG51bGw7XG4gICAgdGhpcy5tYWluID0gbnVsbDtcbiAgICB0aGlzLmZvb3RlciA9IG51bGw7XG5cbiAgICAvKiBDcmVhdGUgY29udGVudCBjb250YWluZXIgZm9yIGV2ZXJ5IG91dGVyIHN0cnVjdHVyZSBlbGVtZW50LiAqL1xuICAgIHRoaXMuY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGhpcy5jb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29udGFpbmVyJyk7XG5cbiAgICAvKiBJbml0aWFsaXplIGtleWJvYXJkICovXG4gICAgdGhpcy5rZXlib2FyZCA9IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBPYmplY3QsIHBhcnNlZCBmcm9tIEpTT04gd2l0aCBpbmZvIGFib3V0IGtleXMuXG4gICAgICogQHR5cGUga2V5SW5zY3JpcHRpb25zXG4gICAgICovXG4gICAgdGhpcy5pbnNjcmlwdGlvbnMgPSBpbnNjcmlwdGlvbnM7XG4gICAgdGhpcy5rZXlzQ291bnQgPSBPYmplY3Qua2V5cyh0aGlzLmluc2NyaXB0aW9uc1t0aGlzLmxhbmd1YWdlXSkubGVuZ3RoO1xuICB9XG5cbiAgLyoqXG4gICAqIEdlbmVyYXRlIGhlYWRlciBIVE1MIEVsZW1lbnQgYW5kIGl0cyBiYXNpYyBjb250ZW50LlxuICAgKi9cbiAgZ2VuZXJhdGVIZWFkZXIoKSB7XG4gICAgLyogR2VuZXJhdGUgaGVhZGVyICovXG4gICAgdGhpcy5oZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcbiAgICB0aGlzLmhlYWRlci5jbGFzc0xpc3QuYWRkKCdoZWFkZXInKTtcblxuICAgIC8qIEdlbmVyYXRlIGhlYWRpbmcgKi9cbiAgICBjb25zdCBoZWFkaW5nSDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIGhlYWRpbmdIMS5pbm5lclRleHQgPSAnVmlydHVhbCBrZXlib2FyZCc7XG4gICAgaGVhZGluZ0gxLmNsYXNzTGlzdC5hZGQoJ2hlYWRlcl9faGVhZGluZycpO1xuXG4gICAgLyogQXBwZW5kIGhlYWRpbmcgYW5kIGNvbnRhaW5lciAqL1xuICAgIHRoaXMuaGVhZGVyLmFwcGVuZENoaWxkKHRoaXMuY29udGFpbmVyLmNsb25lTm9kZSh0cnVlKSk7XG4gICAgdGhpcy5oZWFkZXIubGFzdEVsZW1lbnRDaGlsZC5jbGFzc0xpc3QuYWRkKCdjb250YWluZXItLWhlYWRlcicpO1xuICAgIHRoaXMuaGVhZGVyLmxhc3RFbGVtZW50Q2hpbGQuYXBwZW5kQ2hpbGQoaGVhZGluZ0gxKTtcbiAgfVxuXG4gIGdldEluc2NyaXB0aW9uRm9yS2V5KGVsZW1lbnRGb3JJbnNjcmlwdGlvbiwga2V5LCBzeW1ib2xNb2QsIGxhbmcpIHtcbiAgICBjb25zdCBlbGVtZW50Rm9ySW5zY3JpcHRpb25Mb2NhbCA9IGVsZW1lbnRGb3JJbnNjcmlwdGlvbjtcbiAgICBzd2l0Y2ggKHN5bWJvbE1vZCkge1xuICAgICAgY2FzZSAnc3ltYm9sRGVmYXVsdCc6IHtcbiAgICAgICAgZWxlbWVudEZvckluc2NyaXB0aW9uTG9jYWwuaW5uZXJIVE1MID0gdGhpcy5pbnNjcmlwdGlvbnNbbGFuZ11ba2V5XVxuICAgICAgICAgIC5zeW1ib2xEZWZhdWx0LnN5bWJvbDtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlICdzeW1ib2xTaGlmdE1vZCc6IHtcbiAgICAgICAgZWxlbWVudEZvckluc2NyaXB0aW9uTG9jYWwuaW5uZXJIVE1MID0gdGhpcy5pbnNjcmlwdGlvbnNbbGFuZ11ba2V5XVxuICAgICAgICAgIC5zeW1ib2xTaGlmdE1vZC5zeW1ib2wgIT09ICdub25lJ1xuICAgICAgICAgID8gdGhpcy5pbnNjcmlwdGlvbnNbbGFuZ11ba2V5XS5zeW1ib2xTaGlmdE1vZC5zeW1ib2xcbiAgICAgICAgICA6IHRoaXMuaW5zY3JpcHRpb25zW2xhbmddW2tleV0uc3ltYm9sRGVmYXVsdC5zeW1ib2w7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSAnc3ltYm9sQ2Fwc01vZCc6IHtcbiAgICAgICAgZWxlbWVudEZvckluc2NyaXB0aW9uTG9jYWwuaW5uZXJIVE1MID0gdGhpcy5pbnNjcmlwdGlvbnNbbGFuZ11ba2V5XVxuICAgICAgICAgIC5zeW1ib2xDYXBzTW9kLnN5bWJvbCAhPT0gJ25vbmUnXG4gICAgICAgICAgPyB0aGlzLmluc2NyaXB0aW9uc1tsYW5nXVtrZXldLnN5bWJvbENhcHNNb2Quc3ltYm9sXG4gICAgICAgICAgOiB0aGlzLmluc2NyaXB0aW9uc1tsYW5nXVtrZXldLnN5bWJvbERlZmF1bHQuc3ltYm9sO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgJ3N5bWJvbENhcHNTaGlmdE1vZCc6IHtcbiAgICAgICAgZWxlbWVudEZvckluc2NyaXB0aW9uTG9jYWwuaW5uZXJIVE1MID0gdGhpcy5pbnNjcmlwdGlvbnNbbGFuZ11ba2V5XVxuICAgICAgICAgIC5zeW1ib2xDYXBzU2hpZnRNb2Quc3ltYm9sICE9PSAnbm9uZSdcbiAgICAgICAgICA/IHRoaXMuaW5zY3JpcHRpb25zW2xhbmddW2tleV0uc3ltYm9sQ2Fwc1NoaWZ0TW9kLnN5bWJvbFxuICAgICAgICAgIDogdGhpcy5pbnNjcmlwdGlvbnNbbGFuZ11ba2V5XS5zeW1ib2xEZWZhdWx0LnN5bWJvbDtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBkZWZhdWx0OiB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGdlbmVyYXRlS2V5TGF5b3V0cyhrZXlMYXlvdXRMYW5ndWFnZSwga2V5TnVtYmVyTG9jYWwpIHtcbiAgICBjb25zdCBrZXlMYXlvdXRzQ3VycmVudExhbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAga2V5TGF5b3V0c0N1cnJlbnRMYW5nLmNsYXNzTGlzdC5hZGQoYGtleS1iYXNlX18ke2tleUxheW91dExhbmd1YWdlfS1rZXlzYCk7XG5cbiAgICBjb25zdCBsYXlvdXRBcnIgPSBbXG4gICAgICBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyksXG4gICAgICBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyksXG4gICAgICBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyksXG4gICAgICBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyksXG4gICAgXTtcbiAgICBsYXlvdXRBcnIuZm9yRWFjaCgoZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IGVsZW1lbnRMb2NhbCA9IGVsZW1lbnQ7XG4gICAgICBlbGVtZW50TG9jYWwuY2xhc3NMaXN0LmFkZChgJHtrZXlMYXlvdXRMYW5ndWFnZX0ta2V5c19fa2V5LWxheW91dGApO1xuICAgICAgc3dpdGNoIChpbmRleCkge1xuICAgICAgICBjYXNlIDA6IHtcbiAgICAgICAgICBlbGVtZW50TG9jYWwuY2xhc3NMaXN0LmFkZCgna2V5LWxheW91dC0tZGVmYXVsdCcpO1xuICAgICAgICAgIHRoaXMuZ2V0SW5zY3JpcHRpb25Gb3JLZXkoXG4gICAgICAgICAgICBlbGVtZW50TG9jYWwsXG4gICAgICAgICAgICBrZXlOdW1iZXJMb2NhbCxcbiAgICAgICAgICAgICdzeW1ib2xEZWZhdWx0JyxcbiAgICAgICAgICAgIGtleUxheW91dExhbmd1YWdlLFxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSAxOiB7XG4gICAgICAgICAgZWxlbWVudExvY2FsLmNsYXNzTGlzdC5hZGQoJ2tleS1sYXlvdXQtLXNoaWZ0LW1vZCcpO1xuICAgICAgICAgIGVsZW1lbnRMb2NhbC5jbGFzc0xpc3QuYWRkKCdrZXktbGF5b3V0LS1oaWRkZW4nKTtcbiAgICAgICAgICB0aGlzLmdldEluc2NyaXB0aW9uRm9yS2V5KFxuICAgICAgICAgICAgZWxlbWVudExvY2FsLFxuICAgICAgICAgICAga2V5TnVtYmVyTG9jYWwsXG4gICAgICAgICAgICAnc3ltYm9sU2hpZnRNb2QnLFxuICAgICAgICAgICAga2V5TGF5b3V0TGFuZ3VhZ2UsXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBjYXNlIDI6IHtcbiAgICAgICAgICBlbGVtZW50TG9jYWwuY2xhc3NMaXN0LmFkZCgna2V5LWxheW91dC0tY2Fwcy1tb2QnKTtcbiAgICAgICAgICBlbGVtZW50TG9jYWwuY2xhc3NMaXN0LmFkZCgna2V5LWxheW91dC0taGlkZGVuJyk7XG4gICAgICAgICAgdGhpcy5nZXRJbnNjcmlwdGlvbkZvcktleShcbiAgICAgICAgICAgIGVsZW1lbnRMb2NhbCxcbiAgICAgICAgICAgIGtleU51bWJlckxvY2FsLFxuICAgICAgICAgICAgJ3N5bWJvbENhcHNNb2QnLFxuICAgICAgICAgICAga2V5TGF5b3V0TGFuZ3VhZ2UsXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBjYXNlIDM6IHtcbiAgICAgICAgICBlbGVtZW50TG9jYWwuY2xhc3NMaXN0LmFkZCgna2V5LWxheW91dC0tY2Fwcy1hbmQtc2hpZnQtbW9kJyk7XG4gICAgICAgICAgZWxlbWVudExvY2FsLmNsYXNzTGlzdC5hZGQoJ2tleS1sYXlvdXQtLWhpZGRlbicpO1xuICAgICAgICAgIHRoaXMuZ2V0SW5zY3JpcHRpb25Gb3JLZXkoXG4gICAgICAgICAgICBlbGVtZW50TG9jYWwsXG4gICAgICAgICAgICBrZXlOdW1iZXJMb2NhbCxcbiAgICAgICAgICAgICdzeW1ib2xDYXBzU2hpZnRNb2QnLFxuICAgICAgICAgICAga2V5TGF5b3V0TGFuZ3VhZ2UsXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBkZWZhdWx0OiB7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGtleUxheW91dHNDdXJyZW50TGFuZy5hcHBlbmRDaGlsZChlbGVtZW50TG9jYWwpO1xuICAgIH0pO1xuICAgIGlmICh0aGlzLnZlcmJvc2VMdmwgPiAxKSB7XG4gICAgICAvKiBDb25zb2xlIGxvZyB3aXRoIGtleUxheW91dHNDdXJyZW50TGFuZyB3YXMgaGVyZSAqL1xuICAgIH1cbiAgICByZXR1cm4ga2V5TGF5b3V0c0N1cnJlbnRMYW5nO1xuICB9XG5cbiAgLyoqXG4gICAqIEdlbmVyYXRlIGtleXMgZm9yIGtleWJvYXJkIHdpdGggbGF5b3V0cyBmb3IgbW9kc1xuICAgKiBhbmQga2V5Ym9hcmQgZGlmZmVyZW50IGxhbmd1YWdlIGxheW91dHMuXG4gICAqL1xuICBnZW5lcmF0ZUtleXMoKSB7XG4gICAgLyogR2VuZXJhdGUga2V5cywgY29sdW1uLWdhcHMgYW5kIHJvdy1nYXBzLCBhcyBncmlkIGVsZW1lbnRzLiAqL1xuICAgIGZvciAobGV0IGtleUluZGV4ID0gMTsga2V5SW5kZXggPD0gdGhpcy5rZXlzQ291bnQgKyAodGhpcy5rZXlzQ291bnQgLSAwKTsga2V5SW5kZXggKz0gMSkge1xuICAgICAgaWYgKGtleUluZGV4ICUgMiA9PT0gMCkge1xuICAgICAgICBjb25zdCBrZXlOdW1iZXJUbXAgPSAoa2V5SW5kZXggLyAyKS50b1N0cmluZygxMCk7XG4gICAgICAgIC8qIEFkZCBrZXkgYmFzZS4gKi9cbiAgICAgICAgY29uc3Qga2V5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGtleS5jbGFzc0xpc3QuYWRkKCdrZXlzX19rZXktYmFzZScpO1xuICAgICAgICBrZXkuc2V0QXR0cmlidXRlKFxuICAgICAgICAgICdkYXRhLWV2ZW50LWNvZGUnLFxuICAgICAgICAgIHRoaXMuaW5zY3JpcHRpb25zW3RoaXMubGFuZ3VhZ2VdW2tleU51bWJlclRtcF0uZXZlbnRDb2RlLFxuICAgICAgICApO1xuXG4gICAgICAgIGtleS5hcHBlbmRDaGlsZCh0aGlzLmdlbmVyYXRlS2V5TGF5b3V0cygnZW4nLCBrZXlOdW1iZXJUbXApKTtcbiAgICAgICAga2V5LmFwcGVuZENoaWxkKHRoaXMuZ2VuZXJhdGVLZXlMYXlvdXRzKCdydScsIGtleU51bWJlclRtcCkpO1xuICAgICAgICBrZXkubGFzdEVsZW1lbnRDaGlsZC5jbGFzc0xpc3QuYWRkKCdydS1rZXlzLS1oaWRkZW4nKTtcblxuICAgICAgICAvKiBBZGQgc3R5bGVzIGZvciBrZXlzIHdpdGggbm9uLXN0YW5kYXJkIHNpemVzLiAqL1xuICAgICAgICBzd2l0Y2ggKCh0aGlzLmluc2NyaXB0aW9uc1t0aGlzLmxhbmd1YWdlXVtrZXlOdW1iZXJUbXBdLnN5bWJvbERlZmF1bHQuc3ltYm9sKSkge1xuICAgICAgICAgIGNhc2UgJ0JhY2tzcGFjZSc6IHtcbiAgICAgICAgICAgIGtleS5jbGFzc0xpc3QuYWRkKCdrZXktYmFzZS0tYmFja3NwYWNlJyk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgICAgY2FzZSAnVGFiJzoge1xuICAgICAgICAgICAga2V5LmNsYXNzTGlzdC5hZGQoJ2tleS1iYXNlLS10YWInKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjYXNlICdcXFxcJzoge1xuICAgICAgICAgICAga2V5LmNsYXNzTGlzdC5hZGQoJ2tleS1iYXNlLS1iYWNrc2xhc2gnKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjYXNlICdDYXBzIExvY2snOiB7XG4gICAgICAgICAgICBrZXkuY2xhc3NMaXN0LmFkZCgna2V5LWJhc2UtLWNhcHNsb2NrJyk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgICAgY2FzZSAnRW50ZXInOiB7XG4gICAgICAgICAgICBrZXkuY2xhc3NMaXN0LmFkZCgna2V5LWJhc2UtLWVudGVyJyk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgICAgY2FzZSAnU2hpZnQnOiB7XG4gICAgICAgICAgICBpZiAodGhpcy5pbnNjcmlwdGlvbnNbdGhpcy5sYW5ndWFnZV1ba2V5TnVtYmVyVG1wXS5zeW1ib2xEZWZhdWx0Lm5hbWUgPT09ICdMZWZ0IFNoaWZ0IGtleScpIHtcbiAgICAgICAgICAgICAga2V5LmNsYXNzTGlzdC5hZGQoJ2tleS1iYXNlLS1zaGlmdC1sZWZ0Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5pbnNjcmlwdGlvbnNbdGhpcy5sYW5ndWFnZV1ba2V5TnVtYmVyVG1wXS5zeW1ib2xEZWZhdWx0Lm5hbWUgPT09ICdSaWdodCBTaGlmdCBrZXknKSB7XG4gICAgICAgICAgICAgIGtleS5jbGFzc0xpc3QuYWRkKCdrZXktYmFzZS0tc2hpZnQtcmlnaHQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjYXNlICdDdHJsJzoge1xuICAgICAgICAgICAgaWYgKHRoaXMuaW5zY3JpcHRpb25zW3RoaXMubGFuZ3VhZ2VdW2tleU51bWJlclRtcF0uc3ltYm9sRGVmYXVsdC5uYW1lID09PSAnTGVmdCBDdHJsIGtleScpIHtcbiAgICAgICAgICAgICAga2V5LmNsYXNzTGlzdC5hZGQoJ2tleS1iYXNlLS1jdHJsLWxlZnQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLmluc2NyaXB0aW9uc1t0aGlzLmxhbmd1YWdlXVtrZXlOdW1iZXJUbXBdLnN5bWJvbERlZmF1bHQubmFtZSA9PT0gJ1JpZ2h0IEN0cmwga2V5Jykge1xuICAgICAgICAgICAgICBrZXkuY2xhc3NMaXN0LmFkZCgna2V5LWJhc2UtLWN0cmwtcmlnaHQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjYXNlICdXaW4nOiB7XG4gICAgICAgICAgICBrZXkuY2xhc3NMaXN0LmFkZCgna2V5LWJhc2UtLXdpbi1sZWZ0Jyk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgICAgY2FzZSAnQWx0Jzoge1xuICAgICAgICAgICAgaWYgKHRoaXMuaW5zY3JpcHRpb25zW3RoaXMubGFuZ3VhZ2VdW2tleU51bWJlclRtcF0uc3ltYm9sRGVmYXVsdC5uYW1lID09PSAnTGVmdCBBbHQga2V5Jykge1xuICAgICAgICAgICAgICBrZXkuY2xhc3NMaXN0LmFkZCgna2V5LWJhc2UtLWFsdC1sZWZ0Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5pbnNjcmlwdGlvbnNbdGhpcy5sYW5ndWFnZV1ba2V5TnVtYmVyVG1wXS5zeW1ib2xEZWZhdWx0Lm5hbWUgPT09ICdSaWdodCBBbHQga2V5Jykge1xuICAgICAgICAgICAgICBrZXkuY2xhc3NMaXN0LmFkZCgna2V5LWJhc2UtLWFsdC1yaWdodCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICAgIGNhc2UgJ1NwYWNlJzoge1xuICAgICAgICAgICAga2V5LmNsYXNzTGlzdC5hZGQoJ2tleS1iYXNlLS1zcGFjZScpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmtleWJvYXJkLmFwcGVuZENoaWxkKGtleSk7XG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAoa2V5SW5kZXggIT09IDEpXG4gICAgICAgICYmIChrZXlJbmRleCAhPT0gMjkpXG4gICAgICAgICYmIChrZXlJbmRleCAhPT0gNTcpXG4gICAgICAgICYmIChrZXlJbmRleCAhPT0gODMpXG4gICAgICAgICYmIChrZXlJbmRleCAhPT0gMTExKVxuICAgICAgKSB7XG4gICAgICAgIC8qIEFkZCBjb2x1bW4tZ2FwLCBhcyBkaXYgaW4gZ3JpZC4gKi9cbiAgICAgICAgY29uc3QgY29sdW1uR2FwRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb2x1bW5HYXBFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2tleXNfX2NvbHVtbi1nYXAnKTtcbiAgICAgICAgdGhpcy5rZXlib2FyZC5hcHBlbmRDaGlsZChjb2x1bW5HYXBFbGVtZW50KTtcbiAgICAgIH0gZWxzZSBpZiAoa2V5SW5kZXggIT09IDEpIHtcbiAgICAgICAgLyogQWRkIHJvdy1nYXAsIGFzIGRpdiBpbiBncmlkLiAqL1xuICAgICAgICBjb25zdCByb3dHYXBFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHJvd0dhcEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgna2V5c19fcm93LWdhcCcpO1xuICAgICAgICB0aGlzLmtleWJvYXJkLmFwcGVuZENoaWxkKHJvd0dhcEVsZW1lbnQpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBHZW5lcmF0ZSBtYWluIEhUTUwgRWxlbWVudCBhbmQgaXRzIGJhc2ljIGNvbnRlbnQuXG4gICAqL1xuICBnZW5lcmF0ZU1haW4oKSB7XG4gICAgLyogR2VuZXJhdGUgbWFpbiAqL1xuICAgIHRoaXMubWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcbiAgICB0aGlzLm1haW4uY2xhc3NMaXN0LmFkZCgnbWFpbicpO1xuXG4gICAgLyogR2VuZXJhdGUgYmFzaWMgY29udGFpbmVycyBhbmQgZGlzcGxheSB0ZXh0YXJlYSAqL1xuICAgIGNvbnN0IGtleWJvYXJkQW5kRGlzcGxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGtleWJvYXJkQW5kRGlzcGxheS5jbGFzc0xpc3QuYWRkKCdrZXlib2FyZC1hbmQtZGlzcGxheScpO1xuICAgIGNvbnN0IGRpc3BsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICAgIGRpc3BsYXkuY2xhc3NMaXN0LmFkZCgna2V5Ym9hcmRfX2Rpc3BsYXknKTtcbiAgICB0aGlzLmtleWJvYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGhpcy5rZXlib2FyZC5jbGFzc0xpc3QuYWRkKCdrZXlib2FyZF9fa2V5cy1jb250YWluZXInKTtcblxuICAgIGlmICh0aGlzLnZlcmJvc2VMdmwgPiAwKSB7XG4gICAgICAvLyBDb25zb2xlIGxvZyB3aXRoIEtleXMgY291bnQgd2FzIGhlcmUuXG4gICAgfVxuXG4gICAgdGhpcy5nZW5lcmF0ZUtleXMoKTtcblxuICAgIC8qIEFwcGVuZCBjb250YWluZXIsIGdlbmVyYXRlZCBrZXlib2FyZCBhbmQgZGlzcGxheSB0byBtYWluICovXG4gICAga2V5Ym9hcmRBbmREaXNwbGF5LmFwcGVuZENoaWxkKGRpc3BsYXkpO1xuICAgIGtleWJvYXJkQW5kRGlzcGxheS5hcHBlbmRDaGlsZCh0aGlzLmtleWJvYXJkKTtcbiAgICB0aGlzLm1haW4uYXBwZW5kQ2hpbGQodGhpcy5jb250YWluZXIuY2xvbmVOb2RlKHRydWUpKTtcbiAgICB0aGlzLm1haW4ubGFzdEVsZW1lbnRDaGlsZC5jbGFzc0xpc3QuYWRkKCdjb250YWluZXItLW1haW4nKTtcbiAgICB0aGlzLm1haW4ubGFzdEVsZW1lbnRDaGlsZC5hcHBlbmRDaGlsZChrZXlib2FyZEFuZERpc3BsYXkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdlbmVyYXRlIGZvb3RlciBIVE1MIEVsZW1lbnQgYW5kIGl0cyBiYXNpYyBjb250ZW50LlxuICAgKi9cbiAgZ2VuZXJhdGVGb290ZXIoKSB7XG4gICAgLyogR2VuZXJhdGUgZm9vdGVyIGFuZCBwYXJhZ3JhcGhzICovXG4gICAgdGhpcy5mb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKTtcbiAgICB0aGlzLmZvb3Rlci5jbGFzc0xpc3QuYWRkKCdmb290ZXInKTtcbiAgICBjb25zdCBmb290ZXJQYXJhZ3JhcGhzID0gW107XG4gICAgZm9yIChsZXQgY291bnQgPSAwOyBjb3VudCA8PSAxOyBjb3VudCArPSAxKSB7XG4gICAgICBmb290ZXJQYXJhZ3JhcGhzLnB1c2goZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpKTtcbiAgICB9XG4gICAgZm9vdGVyUGFyYWdyYXBoc1swXS5pbm5lclRleHQgPSAn0JrQu9Cw0LLQuNCw0YLRg9GA0LAg0YHQvtC30LTQsNC90LAg0LTQu9GPINC+0L/QtdGA0LDRhtC40L7QvdC90L7QuSDRgdC40YHRgtC10LzRiyBXaW5kb3dzJztcbiAgICBmb290ZXJQYXJhZ3JhcGhzWzFdLmlubmVyVGV4dCA9ICfQmtC+0LzQsdC40L3QsNGG0LjRjyDQv9C10YDQtdC60LvRjtGH0LXQvdC40Y8g0Y/Qt9GL0LrQsDog0LvQtdCy0YvQtSBDdHJsICsgU2hpZnQnO1xuXG4gICAgLyogQXBwZW5kIGNvbnRhaW5lciBhbmQgcGFyYWdyYXBocyAqL1xuICAgIHRoaXMuZm9vdGVyLmFwcGVuZENoaWxkKHRoaXMuY29udGFpbmVyLmNsb25lTm9kZSh0cnVlKSk7XG4gICAgdGhpcy5mb290ZXIubGFzdEVsZW1lbnRDaGlsZC5jbGFzc0xpc3QuYWRkKCdjb250YWluZXItLWZvb3RlcicpO1xuICAgIGZvb3RlclBhcmFncmFwaHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgdGhpcy5mb290ZXIubGFzdEVsZW1lbnRDaGlsZC5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZW5lcmF0ZSBhbGwgYmFzaWMgSFRNTCBlbGVtZW50cyBmb3IgQXBwLlxuICAgKi9cbiAgZ2VuZXJhdGVBbGwoKSB7XG4gICAgaWYgKHRoaXMudmVyYm9zZUx2bCA+IDApIHtcbiAgICAgIC8vIENvbnNvbGUgbG9nIHdpdGggbWVzc2FnZSAnKioqKiBHZW5lcmF0aW5nIGJhc2ljIEhUTUwgbGF5b3V0Li4uICoqKionIHdhcyBoZXJlLlxuICAgIH1cblxuICAgIC8qIEZvciBkZWJ1ZyAqL1xuICAgIGNvbnN0IHRlc3RFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGVzdEVsZW1lbnQuc3R5bGUud2lkdGggPSAnMjU2cHgnO1xuICAgIHRlc3RFbGVtZW50LnN0eWxlLmhlaWdodCA9ICcyNTZweCc7XG4gICAgdGVzdEVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ2JsdWUnO1xuXG4gICAgLyogQXBwIHJvb3QgZWxlbWVudCAqL1xuICAgIHRoaXMucm9vdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRoaXMucm9vdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdyb290LWNvbnRhaW5lcicpO1xuXG4gICAgLyogR2VuZXJhdGUgYmFzaWMgZWxlbWVudHMgKi9cbiAgICB0aGlzLmdlbmVyYXRlSGVhZGVyKCk7XG4gICAgdGhpcy5nZW5lcmF0ZU1haW4oKTtcbiAgICB0aGlzLmdlbmVyYXRlRm9vdGVyKCk7XG5cbiAgICAvKiBBcHBlbmQgdG8gcm9vdENvbnRhaW5lciAqL1xuICAgIHRoaXMucm9vdENvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmhlYWRlcik7XG4gICAgdGhpcy5yb290Q29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMubWFpbik7XG4gICAgdGhpcy5yb290Q29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuZm9vdGVyKTtcbiAgfVxuXG4gIGFwcGVuZEhUTUxFbGVtZW50cygpIHtcbiAgICAvKiBBcHBlbmQgdG8gRE9NICovXG4gICAgdGhpcy5yb290LmFwcGVuZENoaWxkKHRoaXMucm9vdENvbnRhaW5lcik7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEVsZW1lbnRDbGFzc09ic2VydmVyIHtcbiAgdGFyZ2V0RWxlbWVudDtcblxuICBjbGFzc1RvV2F0Y2g7XG5cbiAgY2xhc3NBZGRlZENhbGxiYWNrO1xuXG4gIGNsYXNzUmVtb3ZlZENhbGxiYWNrO1xuXG4gIG9ic2VydmVyO1xuXG4gIGxhc3RDbGFzc1N0YXRlO1xuXG4gIGNvbnN0cnVjdG9yKHRhcmdldEVsZW1lbnQsIGNsYXNzVG9XYXRjaCwgY2xhc3NBZGRlZENhbGxiYWNrLCBjbGFzc1JlbW92ZWRDYWxsYmFjaykge1xuICAgIHRoaXMudGFyZ2V0RWxlbWVudCA9IHRhcmdldEVsZW1lbnQ7XG4gICAgdGhpcy5jbGFzc1RvV2F0Y2ggPSBjbGFzc1RvV2F0Y2g7XG4gICAgdGhpcy5jbGFzc0FkZGVkQ2FsbGJhY2sgPSBjbGFzc0FkZGVkQ2FsbGJhY2s7XG4gICAgdGhpcy5jbGFzc1JlbW92ZWRDYWxsYmFjayA9IGNsYXNzUmVtb3ZlZENhbGxiYWNrO1xuICAgIHRoaXMub2JzZXJ2ZXIgPSBudWxsO1xuICAgIHRoaXMubGFzdENsYXNzU3RhdGUgPSB0YXJnZXRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyh0aGlzLmNsYXNzVG9XYXRjaCk7XG4gIH1cblxuICBpbml0KCkge1xuICAgIHRoaXMub2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcih0aGlzLm11dGF0aW9uQ2FsbGJhY2tGbik7XG4gIH1cblxuICBtdXRhdGlvbkNhbGxiYWNrRm4gPSAobXV0YXRpb25zTGlzdCkgPT4ge1xuICAgIG11dGF0aW9uc0xpc3QuZm9yRWFjaCgobXV0YXRpb24pID0+IHtcbiAgICAgIGlmIChtdXRhdGlvbi50eXBlID09PSAnYXR0cmlidXRlcycgJiYgbXV0YXRpb24uYXR0cmlidXRlTmFtZSA9PT0gJ2NsYXNzJykge1xuICAgICAgICBjb25zdCBjdXJyZW50Q2xhc3NTdGF0ZSA9IG11dGF0aW9uLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnModGhpcy5jbGFzc1RvV2F0Y2gpO1xuICAgICAgICBpZiAodGhpcy5sYXN0Q2xhc3NTdGF0ZSAhPT0gY3VycmVudENsYXNzU3RhdGUpIHtcbiAgICAgICAgICB0aGlzLmxhc3RDbGFzc1N0YXRlID0gY3VycmVudENsYXNzU3RhdGU7XG4gICAgICAgICAgaWYgKGN1cnJlbnRDbGFzc1N0YXRlKSB7XG4gICAgICAgICAgICB0aGlzLmNsYXNzQWRkZWRDYWxsYmFjaygpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmNsYXNzUmVtb3ZlZENhbGxiYWNrKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgb2JzZXJ2ZSgpIHtcbiAgICB0aGlzLm9ic2VydmVyLm9ic2VydmUodGhpcy50YXJnZXRFbGVtZW50LCB7IGF0dHJpYnV0ZXM6IHRydWUgfSk7XG4gIH1cblxuICBzdG9wKCkge1xuICAgIHRoaXMub2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICB9XG59XG4iLCJpbXBvcnQgRWxlbWVudENsYXNzT2JzZXJ2ZXIgZnJvbSAnLi9FbGVtZW50Q2xhc3NPYnNlcnZlcic7XG5cbi8qKlxuICogS2V5Ym9hcmRMb2dpY01hbmFnZXIgY2xhc3MgZm9yIGltcGxlbWVudCB0aGUgbG9naWMgb2YgdGhlIHZpcnR1YWwga2V5Ym9hcmQuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEtleWJvYXJkTG9naWNNYW5hZ2VyIHtcbiAgLy8gPGVkaXRvci1mb2xkIGRlc2M9XCJUb2tlbnNcIj5cbiAgcGFnZVJvb3RUb2tlbjtcblxuICBrZXlib2FyZFRva2VuO1xuICAvLyA8L2VkaXRvci1mb2xkIGRlc2M9XCJUb2tlbnNcIj5cblxuICAvLyA8ZWRpdG9yLWZvbGQgZGVzYz1cIkVsZW1lbnRzXCI+XG4gIHBhZ2VSb290O1xuXG4gIGtleWJvYXJkO1xuXG4gIHRleHRGaWVsZDtcblxuICBrZXlzO1xuICAvLyA8L2VkaXRvci1mb2xkIGRlc2M9XCJFbGVtZW50c1wiPlxuXG4gIC8vIDxlZGl0b3ItZm9sZCBkZXNjPVwiRXZlbnQgSGFuZGxlcnMgQm91bmRlZCB0byBjbGFzcyBjb250ZXh0XCI+XG4gIGtleWJvYXJkRXZlbnRIYW5kbGVyQm91bmRlZDtcblxuICB2aXJ0dWFsS2V5Ym9hcmRFdmVudEhhbmRsZXJCb3VuZGVkO1xuICAvLyA8L2VkaXRvci1mb2xkPlxuXG4gIC8qKlxuICAgKiBWZXJib3NlIExWTCBmb3IgbWFuYWdlIG91dHB1dCB0byBjb25zb2xlLlxuICAgKi9cbiAgdmVyYm9zZUx2bDtcblxuICBzcGVjaWFsS2V5cztcblxuICBrZXlzRXhjZXB0aW9uO1xuXG4gIGtleXNBbHBoYWJldGljVXBwZXJDYXNlO1xuXG4gIGxhc3RLZXlFdmVudDtcblxuICB0ZXh0RmllbGRDaGFuZ2VFdmVudDtcblxuICBrZXlDb250cm9sTGVmdDtcblxuICBrZXlTaGlmdDtcblxuICBrZXlDYXBzO1xuXG4gIGNhcHNTdGF0ZTtcblxuICBjb250cm9sTGVmdFN0YXRlO1xuXG4gIHNoaWZ0U3RhdGU7XG5cbiAgbGFuZ3VhZ2VBbHRlcm5hdGVTdGF0ZTtcblxuICBsYW5ndWFnZUFsdGVybmF0ZUNhbGxDb3VudGVyO1xuXG4gIC8qKlxuICAgKiBLZXlib2FyZCBsb2dpYyBjbGFzcyBjb25zdHJ1Y3Rvci5cbiAgICogQHBhcmFtIHBhZ2VSb290VG9rZW4ge1N0cmluZ30gIC0gdG9rZW4gZm9yIEFwcCBwYWdlIHJvb3QgZWxlbWVudC5cbiAgICogQHBhcmFtIGtleWJvYXJkVG9rZW4ge1N0cmluZ30gIC0gdG9rZW4gZm9yIGtleWJvYXJkIHJvb3QgZWxlbWVudC5cbiAgICogQHBhcmFtIHZlcmJvc2VMdmwgICAge251bWJlcn0gIC0gdmVyYm9zZSBMVkwgZm9yIG1hbmFnZSBvdXRwdXQgdG8gY29uc29sZS5cbiAgICovXG4gIGNvbnN0cnVjdG9yKHBhZ2VSb290VG9rZW4sIGtleWJvYXJkVG9rZW4sIHZlcmJvc2VMdmwgPSAwKSB7XG4gICAgdGhpcy52ZXJib3NlTHZsID0gdmVyYm9zZUx2bDtcblxuICAgIHRoaXMucGFnZVJvb3RUb2tlbiA9IHBhZ2VSb290VG9rZW47XG4gICAgdGhpcy5wYWdlUm9vdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5wYWdlUm9vdFRva2VuKTtcblxuICAgIHRoaXMua2V5Ym9hcmRUb2tlbiA9IGtleWJvYXJkVG9rZW47XG4gICAgdGhpcy5rZXlib2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5rZXlib2FyZFRva2VuKTtcblxuICAgIHRoaXMudGV4dEZpZWxkID0gdGhpcy5rZXlib2FyZC5xdWVyeVNlbGVjdG9yKCcua2V5Ym9hcmRfX2Rpc3BsYXknKTtcblxuICAgIHRoaXMuc3BlY2lhbEtleXMgPSBbXG4gICAgICAnQ3RybCcsXG4gICAgICAnV2luJyxcbiAgICAgICdBbHQnLFxuICAgIF07XG5cbiAgICB0aGlzLmtleXNFeGNlcHRpb24gPSBbXG4gICAgICAnQ2Fwc0xvY2snLFxuICAgICAgJ1xcJycsXG4gICAgICAnU2hpZnQnLFxuICAgICAgJ0RlbGV0ZScsXG4gICAgICAnQ29udHJvbCcsXG4gICAgICAnTWV0YScsXG4gICAgICAnQWx0JyxcbiAgICAgICcgJyxcbiAgICAgICdBcnJvd1VwJyxcbiAgICAgICdBcnJvd0Rvd24nLFxuICAgICAgJ0Fycm93TGVmdCcsXG4gICAgICAnQXJyb3dSaWdodCcsXG4gICAgXTtcblxuICAgIHRoaXMua2V5c0FscGhhYmV0aWNVcHBlckNhc2UgPSBbXG4gICAgICAnQScsICdCJywgJ0MnLCAnRCcsICdFJywgJ0YnLCAnRycsICdIJyxcbiAgICAgICdJJywgJ0onLCAnSycsICdMJywgJ00nLCAnTicsICdPJywgJ1AnLFxuICAgICAgJ1EnLCAnUicsICdTJywgJ1QnLCAnVScsICdWJywgJ1cnLCAnWCcsXG4gICAgICAnWScsICdaJ107XG5cbiAgICB0aGlzLmxhc3RLZXlFdmVudCA9IG51bGw7XG5cbiAgICAvKiBCaW5kIGNsYXNzIGNvbnRleHQgZm9yIGxpc3RlbmVycyBoYW5kbGVycywgd2hhdCBkZWZpbmVkIGFzIG1ldGhvZCBvZiB0aGlzIGNsYXNzLiAqL1xuICAgIHRoaXMua2V5Ym9hcmRFdmVudEhhbmRsZXJCb3VuZGVkID0gdGhpcy5rZXlib2FyZEV2ZW50SGFuZGxlci5iaW5kKHRoaXMpO1xuXG4gICAgdGhpcy52aXJ0dWFsS2V5Ym9hcmRFdmVudEhhbmRsZXJCb3VuZGVkID0gdGhpcy52aXJ0dWFsS2V5Ym9hcmRFdmVudEhhbmRsZXIuYmluZCh0aGlzKTtcblxuICAgIC8qIE1ha2UgZXZlbnQgZm9yIGNoYW5nZSB0ZXh0IGFyZWEgKi9cbiAgICB0aGlzLnRleHRGaWVsZENoYW5nZUV2ZW50ID0gbmV3IEV2ZW50KCdjaGFuZ2UnKTtcblxuICAgIHRoaXMua2V5cyA9IFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcua2V5c19fa2V5LWJhc2UnKV07XG5cbiAgICB0aGlzLmtleUNvbnRyb2xMZWZ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtZXZlbnQtY29kZT1cIkNvbnRyb2xMZWZ0XCJdJyk7XG4gICAgdGhpcy5rZXlTaGlmdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWV2ZW50LWNvZGU9XCJTaGlmdExlZnRcIl0nKTtcbiAgICB0aGlzLmtleUNhcHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1ldmVudC1jb2RlPVwiQ2Fwc0xvY2tcIl0nKTtcblxuICAgIHRoaXMuY29udHJvbExlZnRTdGF0ZSA9IGZhbHNlO1xuICAgIHRoaXMuc2hpZnRTdGF0ZSA9IGZhbHNlO1xuICAgIHRoaXMuY2Fwc1N0YXRlID0gZmFsc2U7XG5cbiAgICB0aGlzLmxhbmd1YWdlQWx0ZXJuYXRlU3RhdGUgPSBmYWxzZTtcbiAgICB0aGlzLmxhbmd1YWdlQWx0ZXJuYXRlQ2FsbENvdW50ZXIgPSAwO1xuICB9XG5cbiAgc2VhcmNoS2V5QnlEYXRhQXRyQW5kQWN0aW9ucyhkYXRhRXZlbnRDb2RlLCBjYWxsYmFjaywgbnVtYmVyID0gMCkge1xuICAgIC8qIEZpbmQgaGl0dGVkIGtleSBieSBYUGF0aC4gKi9cbiAgICBsZXQgcHJlc3NlZEtleSA9IG51bGw7XG4gICAgaWYgKG51bWJlciA9PT0gMCkge1xuICAgICAgcHJlc3NlZEtleSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWV2ZW50LWNvZGU9XCIke2RhdGFFdmVudENvZGV9XCJdYCk7XG4gICAgfVxuICAgIGlmIChudW1iZXIgPT09IDEpIHtcbiAgICAgIHByZXNzZWRLZXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGBbZGF0YS1ldmVudC1jb2RlPVwiJHtkYXRhRXZlbnRDb2RlfVwiXWApO1xuICAgICAgWywgcHJlc3NlZEtleV0gPSBwcmVzc2VkS2V5O1xuICAgIH1cbiAgICBpZiAocHJlc3NlZEtleSkge1xuICAgICAgY2FsbGJhY2socHJlc3NlZEtleSwgdGhpcy5sYXN0S2V5RXZlbnQpO1xuICAgIH0gZWxzZSBpZiAodGhpcy52ZXJib3NlTHZsID4gMCkge1xuICAgICAgLyogQ29uc29sZSBsb2cgd2l0aCBlcnJvciBtZXNzYWdlIHdhcyBoZXJlLiAqL1xuICAgIH1cbiAgfVxuXG4gIGtleWJvYXJkRXZlbnRIYW5kbGVyKGV2ZW50KSB7XG4gICAgaWYgKHRoaXMudmVyYm9zZUx2bCA+IDApIHtcbiAgICAgIC8qIENvbnNvbGUgbG9nIHdpdGggJy0tLS0gS2V5IGV2ZW50OicgYW5kIGV2ZW50IGluZm8gbWVzc2FnZSB3YXMgaGVyZS4gKi9cbiAgICB9XG5cbiAgICBjb25zdCBldmVudENvZGVFeGNlcHRpb25zID0gW1xuICAgICAgJ01ldGFMZWZ0JyxcbiAgICAgICdNZXRhUmlnaHQnLFxuICAgICAgJ0FsdEdyYXBoJyxcbiAgICBdO1xuXG4gICAgLyogR2V0IGN1cnJlbnQga2V5IGV2ZW50IGludG8gY2xhc3MgZmllbGQgKi9cbiAgICB0aGlzLmxhc3RLZXlFdmVudCA9IGV2ZW50O1xuXG4gICAgLyogUHJldmVudCBkZWZhdWx0IGJlaGF2aW91ciBmb3IgYnV0dG9ucyAqL1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBmdW5jdGlvbiB2aXJ0dWFsS2V5Ym9hcmRTaW11bGF0ZUNsaWNrT24oa2V5KSB7XG4gICAgICBjb25zdCBjbGlja1NpbXVsYXRlZEV2ZW50ID0gbmV3IE1vdXNlRXZlbnQoXG4gICAgICAgICdjbGljaycsXG4gICAgICAgIHtcbiAgICAgICAgICB2aWV3OiB3aW5kb3csXG4gICAgICAgICAgYnViYmxlczogdHJ1ZSxcbiAgICAgICAgICBjYW5jZWxhYmxlOiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICAgICk7XG4gICAgICBrZXkuZGlzcGF0Y2hFdmVudChjbGlja1NpbXVsYXRlZEV2ZW50KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjaGFuZ2VLZXlTdGF0ZShrZXksIGV2ZW50TG9jYWwpIHtcbiAgICAgIC8qIENoYW5nZSB2aXN1YWwgKi9cbiAgICAgIGlmIChldmVudExvY2FsLnR5cGUgPT09ICdrZXlkb3duJykge1xuICAgICAgICBrZXkuY2xhc3NMaXN0LmFkZCgna2V5LWJhc2UtLXByZXNzZWQnKTtcbiAgICAgICAgdmlydHVhbEtleWJvYXJkU2ltdWxhdGVDbGlja09uKGtleSk7XG4gICAgICB9IGVsc2UgaWYgKGV2ZW50TG9jYWwudHlwZSA9PT0gJ2tleXVwJykge1xuICAgICAgICBrZXkuY2xhc3NMaXN0LnJlbW92ZSgna2V5LWJhc2UtLXByZXNzZWQnKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkaXNhYmxlS2V5U3RhdGUoa2V5LCBldmVudExvY2FsKSB7XG4gICAgICAvKiBDaGFuZ2UgdmlzdWFsICovXG4gICAgICBpZiAoZXZlbnRMb2NhbC50eXBlID09PSAna2V5ZG93bicpIHtcbiAgICAgICAga2V5LmNsYXNzTGlzdC5hZGQoJ2tleS1iYXNlLS11bnByZXNzZWQtbG9jaycpO1xuICAgICAgICB2aXJ0dWFsS2V5Ym9hcmRTaW11bGF0ZUNsaWNrT24oa2V5KTtcbiAgICAgIH0gZWxzZSBpZiAoZXZlbnRMb2NhbC50eXBlID09PSAna2V5dXAnKSB7XG4gICAgICAgIGtleS5jbGFzc0xpc3QucmVtb3ZlKCdrZXktYmFzZS0tdW5wcmVzc2VkLWxvY2snKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBsYXN0S2V5SGl0QnlDb2RlID0gZXZlbnQuY29kZTtcbiAgICBjb25zdCBsYXN0S2V5SGl0QnlLZXkgPSBldmVudC5rZXk7XG5cbiAgICBpZiAobGFzdEtleUhpdEJ5S2V5ID09PSAnQWx0R3JhcGgnKSB7XG4gICAgICB0aGlzLnNlYXJjaEtleUJ5RGF0YUF0ckFuZEFjdGlvbnMoJ0NvbnRyb2xMZWZ0JywgZGlzYWJsZUtleVN0YXRlKTtcbiAgICAgIHRoaXMuc2VhcmNoS2V5QnlEYXRhQXRyQW5kQWN0aW9ucygnQWx0UmlnaHQnLCBjaGFuZ2VLZXlTdGF0ZSk7XG4gICAgfSBlbHNlIGlmICghZXZlbnRDb2RlRXhjZXB0aW9ucy5pbmNsdWRlcyhsYXN0S2V5SGl0QnlDb2RlKSkge1xuICAgICAgdGhpcy5zZWFyY2hLZXlCeURhdGFBdHJBbmRBY3Rpb25zKGxhc3RLZXlIaXRCeUNvZGUsIGNoYW5nZUtleVN0YXRlKTtcbiAgICB9IGVsc2UgaWZcbiAgICAoXG4gICAgICBsYXN0S2V5SGl0QnlDb2RlID09PSAnTWV0YUxlZnQnXG4gICAgICB8fCBsYXN0S2V5SGl0QnlDb2RlID09PSAnTWV0YVJpZ2h0J1xuICAgICkge1xuICAgICAgdGhpcy5zZWFyY2hLZXlCeURhdGFBdHJBbmRBY3Rpb25zKCdNZXRhTGVmdCcsIGNoYW5nZUtleVN0YXRlKTtcbiAgICB9XG4gIH1cblxuICBkZWxldGVMYXN0U3ltYm9sKCkge1xuICAgIHRoaXMudGV4dEZpZWxkLnZhbHVlID0gdGhpcy50ZXh0RmllbGQudmFsdWUuc3BsaXQoJycpLnNsaWNlKDAsIC0xKS5qb2luKCcnKTtcbiAgICB0aGlzLnRleHRGaWVsZC5kaXNwYXRjaEV2ZW50KHRoaXMudGV4dEZpZWxkQ2hhbmdlRXZlbnQpO1xuICB9XG5cbiAgZGVsZXRlU3ltYm9sQmVmb3JlQ2FyZXQoKSB7XG4gICAgaWYgKHRoaXMudGV4dEZpZWxkLnNlbGVjdGlvblN0YXJ0IHx8IHRoaXMudGV4dEZpZWxkLnNlbGVjdGlvblN0YXJ0ID09PSAnMCcpIHtcbiAgICAgIGNvbnN0IHN0YXJ0UG9zID0gdGhpcy50ZXh0RmllbGQuc2VsZWN0aW9uU3RhcnQ7XG4gICAgICBjb25zdCBlbmRQb3MgPSB0aGlzLnRleHRGaWVsZC5zZWxlY3Rpb25FbmQ7XG4gICAgICB0aGlzLnRleHRGaWVsZC52YWx1ZSA9IHRoaXMudGV4dEZpZWxkLnZhbHVlLnN1YnN0cmluZygwLCBzdGFydFBvcyAtIDEpXG4gICAgICAgICsgdGhpcy50ZXh0RmllbGQudmFsdWUuc3Vic3RyaW5nKGVuZFBvcywgdGhpcy50ZXh0RmllbGQudmFsdWUubGVuZ3RoKTtcbiAgICAgIHRoaXMudGV4dEZpZWxkLnNlbGVjdGlvblN0YXJ0ID0gc3RhcnRQb3MgLSAxO1xuICAgICAgdGhpcy50ZXh0RmllbGQuc2VsZWN0aW9uRW5kID0gc3RhcnRQb3MgLSAxO1xuICAgIH1cbiAgICB0aGlzLnRleHRGaWVsZC5mb2N1cygpO1xuICAgIHRoaXMudGV4dEZpZWxkLmJsdXIoKTtcbiAgfVxuXG4gIGRlbGV0ZVN5bWJvbEFmdGVyQ2FyZXQoKSB7XG4gICAgaWYgKHRoaXMudGV4dEZpZWxkLnNlbGVjdGlvblN0YXJ0IHx8IHRoaXMudGV4dEZpZWxkLnNlbGVjdGlvblN0YXJ0ID09PSAnMCcpIHtcbiAgICAgIGNvbnN0IHN0YXJ0UG9zID0gdGhpcy50ZXh0RmllbGQuc2VsZWN0aW9uU3RhcnQ7XG4gICAgICBjb25zdCBlbmRQb3MgPSB0aGlzLnRleHRGaWVsZC5zZWxlY3Rpb25FbmQ7XG4gICAgICB0aGlzLnRleHRGaWVsZC52YWx1ZSA9IHRoaXMudGV4dEZpZWxkLnZhbHVlLnN1YnN0cmluZygwLCBzdGFydFBvcylcbiAgICAgICAgKyB0aGlzLnRleHRGaWVsZC52YWx1ZS5zdWJzdHJpbmcoZW5kUG9zICsgMSwgdGhpcy50ZXh0RmllbGQudmFsdWUubGVuZ3RoKTtcbiAgICAgIHRoaXMudGV4dEZpZWxkLnNlbGVjdGlvblN0YXJ0ID0gc3RhcnRQb3M7XG4gICAgICB0aGlzLnRleHRGaWVsZC5zZWxlY3Rpb25FbmQgPSBzdGFydFBvcztcbiAgICB9XG4gICAgdGhpcy50ZXh0RmllbGQuZm9jdXMoKTtcbiAgICB0aGlzLnRleHRGaWVsZC5ibHVyKCk7XG4gIH1cblxuICBkZWxldGVBbGwoKSB7XG4gICAgdGhpcy50ZXh0RmllbGQudmFsdWUgPSAnJztcbiAgICB0aGlzLnRleHRGaWVsZC5kaXNwYXRjaEV2ZW50KHRoaXMudGV4dEZpZWxkQ2hhbmdlRXZlbnQpO1xuICB9XG5cbiAgaW5wdXRTeW1ib2woc3ltYm9sKSB7XG4gICAgaWYgKHRoaXMudGV4dEZpZWxkLnNlbGVjdGlvblN0YXJ0IHx8IHRoaXMudGV4dEZpZWxkLnNlbGVjdGlvblN0YXJ0ID09PSAnMCcpIHtcbiAgICAgIGNvbnN0IHN0YXJ0UG9zID0gdGhpcy50ZXh0RmllbGQuc2VsZWN0aW9uU3RhcnQ7XG4gICAgICBjb25zdCBlbmRQb3MgPSB0aGlzLnRleHRGaWVsZC5zZWxlY3Rpb25FbmQ7XG4gICAgICB0aGlzLnRleHRGaWVsZC52YWx1ZSA9IHRoaXMudGV4dEZpZWxkLnZhbHVlLnN1YnN0cmluZygwLCBzdGFydFBvcylcbiAgICAgICAgKyBzeW1ib2xcbiAgICAgICAgKyB0aGlzLnRleHRGaWVsZC52YWx1ZS5zdWJzdHJpbmcoZW5kUG9zLCB0aGlzLnRleHRGaWVsZC52YWx1ZS5sZW5ndGgpO1xuICAgICAgdGhpcy50ZXh0RmllbGQuc2VsZWN0aW9uU3RhcnQgPSBzdGFydFBvcyArIHN5bWJvbC5sZW5ndGg7XG4gICAgICB0aGlzLnRleHRGaWVsZC5zZWxlY3Rpb25FbmQgPSBzdGFydFBvcyArIHN5bWJvbC5sZW5ndGg7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudGV4dEZpZWxkLnZhbHVlICs9IHN5bWJvbDtcbiAgICB9XG5cbiAgICB0aGlzLnRleHRGaWVsZC5kaXNwYXRjaEV2ZW50KHRoaXMudGV4dEZpZWxkQ2hhbmdlRXZlbnQpO1xuICB9XG5cbiAgaW5wdXRMaW5lQnJlYWsoKSB7XG4gICAgdGhpcy5pbnB1dFN5bWJvbCgnXFxuJyk7XG4gIH1cblxuICBpbnB1dFNwYWNlKCkge1xuICAgIHRoaXMuaW5wdXRTeW1ib2woJyAnKTtcbiAgfVxuXG4gIGlucHV0VGFiKCkge1xuICAgIHRoaXMuaW5wdXRTeW1ib2woJ1xcdTAwMDknKTtcbiAgfVxuXG4gIHZpcnR1YWxLZXlib2FyZEV2ZW50SGFuZGxlcihldmVudCkge1xuICAgIGNvbnN0IGtleUluc2NyaXB0aW9uID0gZXZlbnQuc3JjRWxlbWVudC5pbm5lclRleHQ7XG5cbiAgICBpZiAoIXRoaXMuc3BlY2lhbEtleXMuaW5jbHVkZXMoa2V5SW5zY3JpcHRpb24pKSB7XG4gICAgICBzd2l0Y2ggKGtleUluc2NyaXB0aW9uKSB7XG4gICAgICAgIGNhc2UgJ0JhY2tzcGFjZSc6IHtcbiAgICAgICAgICB0aGlzLmRlbGV0ZVN5bWJvbEJlZm9yZUNhcmV0KCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSAnRGVsJzoge1xuICAgICAgICAgIHRoaXMuZGVsZXRlU3ltYm9sQWZ0ZXJDYXJldCgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGNhc2UgJ1NwYWNlJzoge1xuICAgICAgICAgIHRoaXMuaW5wdXRTcGFjZSgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGNhc2UgJ0VudGVyJzoge1xuICAgICAgICAgIHRoaXMuaW5wdXRMaW5lQnJlYWsoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBjYXNlICdUYWInOiB7XG4gICAgICAgICAgdGhpcy5pbnB1dFRhYigpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGNhc2UgJ0NhcHMgTG9jayc6IHtcbiAgICAgICAgICB0aGlzLmtleUNhcHMuY2xhc3NMaXN0LmFkZCgna2V5LWJhc2UtLXByZXNzZWQnKTtcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMua2V5Q2Fwcy5jbGFzc0xpc3QucmVtb3ZlKCdrZXktYmFzZS0tcHJlc3NlZCcpO1xuICAgICAgICAgIH0sIDEwMCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSAnU2hpZnQnOiB7XG4gICAgICAgICAgaWYgKCF0aGlzLmxhc3RLZXlFdmVudCB8fCAodGhpcy5sYXN0S2V5RXZlbnQua2V5ICE9PSAnU2hpZnQnKSkge1xuICAgICAgICAgICAgdGhpcy5rZXlTaGlmdC5jbGFzc0xpc3QuYWRkKCdrZXktYmFzZS0tcHJlc3NlZCcpO1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMua2V5U2hpZnQuY2xhc3NMaXN0LnJlbW92ZSgna2V5LWJhc2UtLXByZXNzZWQnKTtcbiAgICAgICAgICAgIH0sIDEwMCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgICB0aGlzLmlucHV0U3ltYm9sKGtleUluc2NyaXB0aW9uKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qIFRPRE86IFdlIG5lZWQgdXNlIGV2ZW50LmNvZGUgaW5zdGVhZCBldmVudC5rZXkhXG4gICAqICovXG5cbiAgY2hhbmdlTW9kTGF5b3V0KCkge1xuICAgIGNvbnN0IGtleXMgPSBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmtleXNfX2tleS1iYXNlJyldO1xuICAgIGlmICgodGhpcy5jYXBzU3RhdGUgPT09IGZhbHNlKSAmJiAodGhpcy5zaGlmdFN0YXRlID09PSBmYWxzZSkpIHtcbiAgICAgIGtleXMuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGtleS5xdWVyeVNlbGVjdG9yQWxsKCcua2V5LWxheW91dC0tZGVmYXVsdCcpWzBdLmNsYXNzTGlzdFxuICAgICAgICAgIC5yZW1vdmUoJ2tleS1sYXlvdXQtLWhpZGRlbicpO1xuICAgICAgICBrZXkucXVlcnlTZWxlY3RvckFsbCgnLmtleS1sYXlvdXQtLXNoaWZ0LW1vZCcpWzBdLmNsYXNzTGlzdFxuICAgICAgICAgIC5hZGQoJ2tleS1sYXlvdXQtLWhpZGRlbicpO1xuICAgICAgICBrZXkucXVlcnlTZWxlY3RvckFsbCgnLmtleS1sYXlvdXQtLWNhcHMtbW9kJylbMF0uY2xhc3NMaXN0XG4gICAgICAgICAgLmFkZCgna2V5LWxheW91dC0taGlkZGVuJyk7XG4gICAgICAgIGtleS5xdWVyeVNlbGVjdG9yQWxsKCcua2V5LWxheW91dC0tY2Fwcy1hbmQtc2hpZnQtbW9kJylbMF0uY2xhc3NMaXN0XG4gICAgICAgICAgLmFkZCgna2V5LWxheW91dC0taGlkZGVuJyk7XG4gICAgICAgIGtleS5xdWVyeVNlbGVjdG9yQWxsKCcua2V5LWxheW91dC0tZGVmYXVsdCcpWzFdLmNsYXNzTGlzdFxuICAgICAgICAgIC5yZW1vdmUoJ2tleS1sYXlvdXQtLWhpZGRlbicpO1xuICAgICAgICBrZXkucXVlcnlTZWxlY3RvckFsbCgnLmtleS1sYXlvdXQtLXNoaWZ0LW1vZCcpWzFdLmNsYXNzTGlzdFxuICAgICAgICAgIC5hZGQoJ2tleS1sYXlvdXQtLWhpZGRlbicpO1xuICAgICAgICBrZXkucXVlcnlTZWxlY3RvckFsbCgnLmtleS1sYXlvdXQtLWNhcHMtbW9kJylbMV0uY2xhc3NMaXN0XG4gICAgICAgICAgLmFkZCgna2V5LWxheW91dC0taGlkZGVuJyk7XG4gICAgICAgIGtleS5xdWVyeVNlbGVjdG9yQWxsKCcua2V5LWxheW91dC0tY2Fwcy1hbmQtc2hpZnQtbW9kJylbMV0uY2xhc3NMaXN0XG4gICAgICAgICAgLmFkZCgna2V5LWxheW91dC0taGlkZGVuJyk7XG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKCh0aGlzLmNhcHNTdGF0ZSA9PT0gZmFsc2UpICYmICh0aGlzLnNoaWZ0U3RhdGUgPT09IHRydWUpKSB7XG4gICAgICBrZXlzLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBrZXkucXVlcnlTZWxlY3RvckFsbCgnLmtleS1sYXlvdXQtLWRlZmF1bHQnKVswXS5jbGFzc0xpc3RcbiAgICAgICAgICAuYWRkKCdrZXktbGF5b3V0LS1oaWRkZW4nKTtcbiAgICAgICAga2V5LnF1ZXJ5U2VsZWN0b3JBbGwoJy5rZXktbGF5b3V0LS1zaGlmdC1tb2QnKVswXS5jbGFzc0xpc3RcbiAgICAgICAgICAucmVtb3ZlKCdrZXktbGF5b3V0LS1oaWRkZW4nKTtcbiAgICAgICAga2V5LnF1ZXJ5U2VsZWN0b3JBbGwoJy5rZXktbGF5b3V0LS1jYXBzLW1vZCcpWzBdLmNsYXNzTGlzdFxuICAgICAgICAgIC5hZGQoJ2tleS1sYXlvdXQtLWhpZGRlbicpO1xuICAgICAgICBrZXkucXVlcnlTZWxlY3RvckFsbCgnLmtleS1sYXlvdXQtLWNhcHMtYW5kLXNoaWZ0LW1vZCcpWzBdLmNsYXNzTGlzdFxuICAgICAgICAgIC5hZGQoJ2tleS1sYXlvdXQtLWhpZGRlbicpO1xuICAgICAgICBrZXkucXVlcnlTZWxlY3RvckFsbCgnLmtleS1sYXlvdXQtLWRlZmF1bHQnKVsxXS5jbGFzc0xpc3RcbiAgICAgICAgICAuYWRkKCdrZXktbGF5b3V0LS1oaWRkZW4nKTtcbiAgICAgICAga2V5LnF1ZXJ5U2VsZWN0b3JBbGwoJy5rZXktbGF5b3V0LS1zaGlmdC1tb2QnKVsxXS5jbGFzc0xpc3RcbiAgICAgICAgICAucmVtb3ZlKCdrZXktbGF5b3V0LS1oaWRkZW4nKTtcbiAgICAgICAga2V5LnF1ZXJ5U2VsZWN0b3JBbGwoJy5rZXktbGF5b3V0LS1jYXBzLW1vZCcpWzFdLmNsYXNzTGlzdFxuICAgICAgICAgIC5hZGQoJ2tleS1sYXlvdXQtLWhpZGRlbicpO1xuICAgICAgICBrZXkucXVlcnlTZWxlY3RvckFsbCgnLmtleS1sYXlvdXQtLWNhcHMtYW5kLXNoaWZ0LW1vZCcpWzFdLmNsYXNzTGlzdFxuICAgICAgICAgIC5hZGQoJ2tleS1sYXlvdXQtLWhpZGRlbicpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmICgodGhpcy5jYXBzU3RhdGUgPT09IHRydWUpICYmICh0aGlzLnNoaWZ0U3RhdGUgPT09IGZhbHNlKSkge1xuICAgICAga2V5cy5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAga2V5LnF1ZXJ5U2VsZWN0b3JBbGwoJy5rZXktbGF5b3V0LS1kZWZhdWx0JylbMF0uY2xhc3NMaXN0XG4gICAgICAgICAgLmFkZCgna2V5LWxheW91dC0taGlkZGVuJyk7XG4gICAgICAgIGtleS5xdWVyeVNlbGVjdG9yQWxsKCcua2V5LWxheW91dC0tc2hpZnQtbW9kJylbMF0uY2xhc3NMaXN0XG4gICAgICAgICAgLmFkZCgna2V5LWxheW91dC0taGlkZGVuJyk7XG4gICAgICAgIGtleS5xdWVyeVNlbGVjdG9yQWxsKCcua2V5LWxheW91dC0tY2Fwcy1tb2QnKVswXS5jbGFzc0xpc3RcbiAgICAgICAgICAucmVtb3ZlKCdrZXktbGF5b3V0LS1oaWRkZW4nKTtcbiAgICAgICAga2V5LnF1ZXJ5U2VsZWN0b3JBbGwoJy5rZXktbGF5b3V0LS1jYXBzLWFuZC1zaGlmdC1tb2QnKVswXS5jbGFzc0xpc3RcbiAgICAgICAgICAuYWRkKCdrZXktbGF5b3V0LS1oaWRkZW4nKTtcbiAgICAgICAga2V5LnF1ZXJ5U2VsZWN0b3JBbGwoJy5rZXktbGF5b3V0LS1kZWZhdWx0JylbMV0uY2xhc3NMaXN0XG4gICAgICAgICAgLmFkZCgna2V5LWxheW91dC0taGlkZGVuJyk7XG4gICAgICAgIGtleS5xdWVyeVNlbGVjdG9yQWxsKCcua2V5LWxheW91dC0tc2hpZnQtbW9kJylbMV0uY2xhc3NMaXN0XG4gICAgICAgICAgLmFkZCgna2V5LWxheW91dC0taGlkZGVuJyk7XG4gICAgICAgIGtleS5xdWVyeVNlbGVjdG9yQWxsKCcua2V5LWxheW91dC0tY2Fwcy1tb2QnKVsxXS5jbGFzc0xpc3RcbiAgICAgICAgICAucmVtb3ZlKCdrZXktbGF5b3V0LS1oaWRkZW4nKTtcbiAgICAgICAga2V5LnF1ZXJ5U2VsZWN0b3JBbGwoJy5rZXktbGF5b3V0LS1jYXBzLWFuZC1zaGlmdC1tb2QnKVsxXS5jbGFzc0xpc3RcbiAgICAgICAgICAuYWRkKCdrZXktbGF5b3V0LS1oaWRkZW4nKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAoKHRoaXMuY2Fwc1N0YXRlID09PSB0cnVlKSAmJiAodGhpcy5zaGlmdFN0YXRlID09PSB0cnVlKSkge1xuICAgICAga2V5cy5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAga2V5LnF1ZXJ5U2VsZWN0b3JBbGwoJy5rZXktbGF5b3V0LS1kZWZhdWx0JylbMF0uY2xhc3NMaXN0XG4gICAgICAgICAgLmFkZCgna2V5LWxheW91dC0taGlkZGVuJyk7XG4gICAgICAgIGtleS5xdWVyeVNlbGVjdG9yQWxsKCcua2V5LWxheW91dC0tc2hpZnQtbW9kJylbMF0uY2xhc3NMaXN0XG4gICAgICAgICAgLmFkZCgna2V5LWxheW91dC0taGlkZGVuJyk7XG4gICAgICAgIGtleS5xdWVyeVNlbGVjdG9yQWxsKCcua2V5LWxheW91dC0tY2Fwcy1tb2QnKVswXS5jbGFzc0xpc3RcbiAgICAgICAgICAuYWRkKCdrZXktbGF5b3V0LS1oaWRkZW4nKTtcbiAgICAgICAga2V5LnF1ZXJ5U2VsZWN0b3JBbGwoJy5rZXktbGF5b3V0LS1jYXBzLWFuZC1zaGlmdC1tb2QnKVswXS5jbGFzc0xpc3RcbiAgICAgICAgICAucmVtb3ZlKCdrZXktbGF5b3V0LS1oaWRkZW4nKTtcbiAgICAgICAga2V5LnF1ZXJ5U2VsZWN0b3JBbGwoJy5rZXktbGF5b3V0LS1kZWZhdWx0JylbMV0uY2xhc3NMaXN0XG4gICAgICAgICAgLmFkZCgna2V5LWxheW91dC0taGlkZGVuJyk7XG4gICAgICAgIGtleS5xdWVyeVNlbGVjdG9yQWxsKCcua2V5LWxheW91dC0tc2hpZnQtbW9kJylbMV0uY2xhc3NMaXN0XG4gICAgICAgICAgLmFkZCgna2V5LWxheW91dC0taGlkZGVuJyk7XG4gICAgICAgIGtleS5xdWVyeVNlbGVjdG9yQWxsKCcua2V5LWxheW91dC0tY2Fwcy1tb2QnKVsxXS5jbGFzc0xpc3RcbiAgICAgICAgICAuYWRkKCdrZXktbGF5b3V0LS1oaWRkZW4nKTtcbiAgICAgICAga2V5LnF1ZXJ5U2VsZWN0b3JBbGwoJy5rZXktbGF5b3V0LS1jYXBzLWFuZC1zaGlmdC1tb2QnKVsxXS5jbGFzc0xpc3RcbiAgICAgICAgICAucmVtb3ZlKCdrZXktbGF5b3V0LS1oaWRkZW4nKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGNoYW5nZUxhbmd1YWdlTGF5b3V0KCkge1xuICAgIGlmICh0aGlzLmxhbmd1YWdlQWx0ZXJuYXRlU3RhdGUgPT09IGZhbHNlKSB7XG4gICAgICB0aGlzLmtleXMuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGtleS5xdWVyeVNlbGVjdG9yKCcua2V5LWJhc2VfX2VuLWtleXMnKS5jbGFzc0xpc3RcbiAgICAgICAgICAuYWRkKCdlbi1rZXlzLS1oaWRkZW4nKTtcbiAgICAgICAga2V5LnF1ZXJ5U2VsZWN0b3IoJy5rZXktYmFzZV9fcnUta2V5cycpLmNsYXNzTGlzdFxuICAgICAgICAgIC5yZW1vdmUoJ3J1LWtleXMtLWhpZGRlbicpO1xuICAgICAgfSk7XG4gICAgICB0aGlzLmxhbmd1YWdlQWx0ZXJuYXRlU3RhdGUgPSB0cnVlO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3NwYWNlaHVtbWVyVmlydHVhbEtleWJvYXJkTGFuZ3VhZ2VBbHRlcm5hdGVTdGF0ZScsICd0cnVlJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMua2V5cy5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAga2V5LnF1ZXJ5U2VsZWN0b3IoJy5rZXktYmFzZV9fZW4ta2V5cycpLmNsYXNzTGlzdFxuICAgICAgICAgIC5yZW1vdmUoJ2VuLWtleXMtLWhpZGRlbicpO1xuICAgICAgICBrZXkucXVlcnlTZWxlY3RvcignLmtleS1iYXNlX19ydS1rZXlzJykuY2xhc3NMaXN0XG4gICAgICAgICAgLmFkZCgncnUta2V5cy0taGlkZGVuJyk7XG4gICAgICB9KTtcbiAgICAgIHRoaXMubGFuZ3VhZ2VBbHRlcm5hdGVTdGF0ZSA9IGZhbHNlO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3NwYWNlaHVtbWVyVmlydHVhbEtleWJvYXJkTGFuZ3VhZ2VBbHRlcm5hdGVTdGF0ZScsICdmYWxzZScpO1xuICAgIH1cbiAgfVxuXG4gIHNldExhbmd1YWdlTGF5b3V0QWZ0ZXJMb2FkaW5nKCkge1xuICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc3BhY2VodW1tZXJWaXJ0dWFsS2V5Ym9hcmRMYW5ndWFnZUFsdGVybmF0ZVN0YXRlJykgPT09ICd0cnVlJykge1xuICAgICAgdGhpcy5jaGFuZ2VMYW5ndWFnZUxheW91dCgpO1xuICAgIH1cbiAgfVxuXG4gIG1vZFN0YXRlTWFuYWdlcihzaWduYWwpIHtcbiAgICBzd2l0Y2ggKHNpZ25hbCkge1xuICAgICAgY2FzZSAnY2Fwcyc6IHtcbiAgICAgICAgaWYgKHRoaXMuY2Fwc1N0YXRlID09PSBmYWxzZSkge1xuICAgICAgICAgIHRoaXMuY2Fwc1N0YXRlID0gdHJ1ZTtcbiAgICAgICAgICB0aGlzLmNoYW5nZU1vZExheW91dCgpO1xuICAgICAgICAgIGlmICh0aGlzLnZlcmJvc2VMdmwgPiAxKSB7XG4gICAgICAgICAgICAvKiBDb25zb2xlIGxvZyB3aXRoICctLS0tIENhcHMgbW9kIG9uIScgd2FzIGhlcmUuICovXG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMua2V5Q2Fwcy5jbGFzc0xpc3QuYWRkKCdrZXktYmFzZS0taG9sZCcpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuY2Fwc1N0YXRlID09PSB0cnVlKSB7XG4gICAgICAgICAgdGhpcy5jYXBzU3RhdGUgPSBmYWxzZTtcbiAgICAgICAgICB0aGlzLmNoYW5nZU1vZExheW91dCgpO1xuICAgICAgICAgIGlmICh0aGlzLnZlcmJvc2VMdmwgPiAxKSB7XG4gICAgICAgICAgICAvKiBDb25zb2xlIGxvZyB3aXRoICctLS0tIENhcHMgbW9kIG9mZiEnIHdhcyBoZXJlLiAqL1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLmtleUNhcHMuY2xhc3NMaXN0LnJlbW92ZSgna2V5LWJhc2UtLWhvbGQnKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgJ3NoaWZ0Jzoge1xuICAgICAgICBpZiAodGhpcy5zaGlmdFN0YXRlID09PSBmYWxzZSkge1xuICAgICAgICAgIHRoaXMuc2hpZnRTdGF0ZSA9IHRydWU7XG4gICAgICAgICAgdGhpcy5jaGFuZ2VNb2RMYXlvdXQoKTtcbiAgICAgICAgICBpZiAodGhpcy52ZXJib3NlTHZsID4gMSkge1xuICAgICAgICAgICAgLyogQ29uc29sZSBsb2cgd2l0aCAnLS0tLSBTaGlmdCBtb2Qgb24hJyB3YXMgaGVyZS4gKi9cbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5rZXlTaGlmdC5jbGFzc0xpc3QuYWRkKCdrZXktYmFzZS0taG9sZCcpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc2hpZnRTdGF0ZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgIHRoaXMuc2hpZnRTdGF0ZSA9IGZhbHNlO1xuICAgICAgICAgIHRoaXMuY2hhbmdlTW9kTGF5b3V0KCk7XG4gICAgICAgICAgaWYgKHRoaXMudmVyYm9zZUx2bCA+IDEpIHtcbiAgICAgICAgICAgIC8qIENvbnNvbGUgbG9nIHdpdGggJy0tLS0gU2hpZnQgbW9kIG9mZiEnIHdhcyBoZXJlLiAqL1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLmtleVNoaWZ0LmNsYXNzTGlzdC5yZW1vdmUoJ2tleS1iYXNlLS1ob2xkJyk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlICdjb250cm9sTGVmdCc6IHtcbiAgICAgICAgaWYgKHRoaXMuY29udHJvbExlZnRTdGF0ZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICB0aGlzLmNvbnRyb2xMZWZ0U3RhdGUgPSB0cnVlO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuY29udHJvbExlZnRTdGF0ZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgIHRoaXMuY29udHJvbExlZnRTdGF0ZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgZGVmYXVsdDoge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICAodGhpcy5zaGlmdFN0YXRlID09PSB0cnVlKVxuICAgICAgJiYgKHRoaXMuY29udHJvbExlZnRTdGF0ZSA9PT0gdHJ1ZSlcbiAgICAgICYmICh0aGlzLmxhbmd1YWdlQWx0ZXJuYXRlQ2FsbENvdW50ZXIgPCAxKVxuICAgICkge1xuICAgICAgdGhpcy5jaGFuZ2VMYW5ndWFnZUxheW91dCgpO1xuICAgIH1cbiAgfVxuXG4gIG9ic2VydmVDb250cm9sTGVmdFN0YXRlKCkge1xuICAgIGNvbnN0IG9uU2hpZnRNb2RXb3JrID0gKCkgPT4ge1xuICAgICAgdGhpcy5tb2RTdGF0ZU1hbmFnZXIoJ2NvbnRyb2xMZWZ0Jyk7XG4gICAgfTtcblxuICAgIGNvbnN0IG9uVW5TaGlmdE1vZFdvcmsgPSAoKSA9PiB7XG4gICAgICB0aGlzLm1vZFN0YXRlTWFuYWdlcignY29udHJvbExlZnQnKTtcbiAgICB9O1xuXG4gICAgY29uc3QgY29udHJvbExlZnRPYnNlcnZlciA9IG5ldyBFbGVtZW50Q2xhc3NPYnNlcnZlcihcbiAgICAgIHRoaXMua2V5Q29udHJvbExlZnQsXG4gICAgICAna2V5LWJhc2UtLXByZXNzZWQnLFxuICAgICAgb25TaGlmdE1vZFdvcmssXG4gICAgICBvblVuU2hpZnRNb2RXb3JrLFxuICAgICk7XG5cbiAgICBjb250cm9sTGVmdE9ic2VydmVyLmluaXQoKTtcbiAgICBjb250cm9sTGVmdE9ic2VydmVyLm9ic2VydmUoKTtcbiAgfVxuXG4gIG9ic2VydmVTaGlmdFN0YXRlKCkge1xuICAgIGNvbnN0IG9uU2hpZnRNb2RXb3JrID0gKCkgPT4ge1xuICAgICAgdGhpcy5tb2RTdGF0ZU1hbmFnZXIoJ3NoaWZ0Jyk7XG4gICAgfTtcblxuICAgIGNvbnN0IG9uVW5TaGlmdE1vZFdvcmsgPSAoKSA9PiB7XG4gICAgICB0aGlzLm1vZFN0YXRlTWFuYWdlcignc2hpZnQnKTtcbiAgICB9O1xuXG4gICAgY29uc3Qgc2hpZnRPYnNlcnZlciA9IG5ldyBFbGVtZW50Q2xhc3NPYnNlcnZlcihcbiAgICAgIHRoaXMua2V5U2hpZnQsXG4gICAgICAna2V5LWJhc2UtLXByZXNzZWQnLFxuICAgICAgb25TaGlmdE1vZFdvcmssXG4gICAgICBvblVuU2hpZnRNb2RXb3JrLFxuICAgICk7XG5cbiAgICBzaGlmdE9ic2VydmVyLmluaXQoKTtcbiAgICBzaGlmdE9ic2VydmVyLm9ic2VydmUoKTtcbiAgfVxuXG4gIG9ic2VydmVDYXBzU3RhdGUoKSB7XG4gICAgY29uc3Qgb25DYXBzTW9kV29yayA9ICgpID0+IHtcbiAgICAgIHRoaXMubW9kU3RhdGVNYW5hZ2VyKCdjYXBzJyk7XG4gICAgfTtcblxuICAgIGNvbnN0IG9uVW5DYXBzTW9kV29yayA9ICgpID0+IHtcbiAgICB9O1xuXG4gICAgY29uc3QgY2Fwc09ic2VydmVyID0gbmV3IEVsZW1lbnRDbGFzc09ic2VydmVyKFxuICAgICAgdGhpcy5rZXlDYXBzLFxuICAgICAgJ2tleS1iYXNlLS1wcmVzc2VkJyxcbiAgICAgIG9uQ2Fwc01vZFdvcmssXG4gICAgICBvblVuQ2Fwc01vZFdvcmssXG4gICAgKTtcblxuICAgIGNhcHNPYnNlcnZlci5pbml0KCk7XG4gICAgY2Fwc09ic2VydmVyLm9ic2VydmUoKTtcbiAgfVxuXG4gIGxpc3RlblZpcnR1YWxLZXlib2FyZCgpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcua2V5c19fa2V5LWJhc2UnKS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy52aXJ0dWFsS2V5Ym9hcmRFdmVudEhhbmRsZXJCb3VuZGVkKTtcbiAgICB9KTtcbiAgfVxuXG4gIGxpc3RlblBoeXNpY2FsS2V5Ym9hcmQoKSB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICdrZXlkb3duJyxcbiAgICAgIHRoaXMua2V5Ym9hcmRFdmVudEhhbmRsZXJCb3VuZGVkLFxuICAgICk7XG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgJ2tleXVwJyxcbiAgICAgIHRoaXMua2V5Ym9hcmRFdmVudEhhbmRsZXJCb3VuZGVkLFxuICAgICk7XG4gIH1cbn1cbiIsIi8qKlxuICogQmFzaWMgbGF5b3V0IGdlbmVyYXRvciBjbGFzcyBpbXBvcnQuXG4gKi9cbmltcG9ydCBCYXNpY1N0cnVjdHVyZUdlbmVyYXRvciBmcm9tICcuL0Jhc2ljU3RydWN0dXJlR2VuZXJhdG9yJztcblxuLyoqXG4gKiBLZXlib2FyZCB3b3JrIGxvZ2ljIGNsYXNzIGltcG9ydC5cbiAqL1xuaW1wb3J0IEtleWJvYXJkTG9naWNNYW5hZ2VyIGZyb20gJy4vS2V5Ym9hcmRMb2dpY01hbmFnZXInO1xuXG4vKiBJbXBvcnQgUGljcyAqL1xuLy8gRXhhbXBsZTogaW1wb3J0IGJpcmRQbGFjZWhvbGRlciBmcm9tICcuLi9hc3NldHMvaW1hZ2VzL3JhdmVuXzAxLnBuZyc7XG5cbi8qIEltcG9ydCBzdHlsZXMgKi9cbmltcG9ydCAnLi4vYXNzZXRzL3N0eWxlcy9zdHlsZS5jc3MnO1xuaW1wb3J0ICcuLi9hc3NldHMvc3R5bGVzL25vcm1hbGl6ZS5jc3MnO1xuXG4vKiBEZWJ1ZyBjb250cm9sLiAqL1xuY29uc3QgZGVidWdIYXJkY29kZSA9IDI7XG4vKipcbiAqIFRPRE86IGdldCBkZWJ1ZyBmbGFnIGZyb20gc29tZXdoZXJlLlxuICovXG5jb25zdCBkZWJ1Z0ZsYWcgPSAxO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVubmVlZGVkLXRlcm5hcnlcbmNvbnN0IGRlYnVnID0gZGVidWdIYXJkY29kZSA/IGRlYnVnSGFyZGNvZGUgOiBkZWJ1Z0ZsYWc7XG5cbi8qIENvbnN0YW50cyBhbmQgdmFycyBvZiBzdGF0ZXMgYW5kIG90aGVyIHRoaW5ncy4gKi9cbmNvbnN0IGxhbmd1YWdlR2VuZXJhbCA9ICdlbic7XG5cbi8qIE9ubG9hZCB3b3JrIGZ1bmN0aW9uOiBlbnRyeSBwb2ludCBmb3IgbW9zdCBjb2RlLiAqL1xuZnVuY3Rpb24gd2luZG93T25Mb2FkV29yaygpIHtcbiAgLyogQ3JlYXRlIGJhc2ljIHN0cnVjdHVyZSBnZW5lcmF0b3IgaW5zdGFuY2UuICovXG4gIGNvbnN0IGJhc2ljU3RydWN0dXJlR2VuZXJhdG9yID0gbmV3IEJhc2ljU3RydWN0dXJlR2VuZXJhdG9yKFxuICAgICdib2R5JyxcbiAgICBsYW5ndWFnZUdlbmVyYWwsXG4gICAgZGVidWcsXG4gICk7XG5cbiAgLyogR2VuZXJhdGUgYW5kIGFwcGVuZCBnZW5lcmF0ZWQgZWxlbWVudHMgdG8gRE9NLiAqL1xuICBiYXNpY1N0cnVjdHVyZUdlbmVyYXRvci5nZW5lcmF0ZUFsbCgpO1xuICBiYXNpY1N0cnVjdHVyZUdlbmVyYXRvci5hcHBlbmRIVE1MRWxlbWVudHMoKTtcblxuICAvKiBDcmVhdGUga2V5Ym9hcmQgd29yayBsb2dpYyBjbGFzcyBpbnN0YW5jZS4gICovXG4gIGNvbnN0IGtleWJvYXJkTWFuYWdlciA9IG5ldyBLZXlib2FyZExvZ2ljTWFuYWdlcihcbiAgICAnYm9keScsXG4gICAgJy5rZXlib2FyZC1hbmQtZGlzcGxheScsXG4gICAgZGVidWcsXG4gICk7XG5cbiAga2V5Ym9hcmRNYW5hZ2VyLnNldExhbmd1YWdlTGF5b3V0QWZ0ZXJMb2FkaW5nKCk7XG4gIGtleWJvYXJkTWFuYWdlci5saXN0ZW5QaHlzaWNhbEtleWJvYXJkKCk7XG4gIGtleWJvYXJkTWFuYWdlci5saXN0ZW5WaXJ0dWFsS2V5Ym9hcmQoKTtcbiAga2V5Ym9hcmRNYW5hZ2VyLm9ic2VydmVDb250cm9sTGVmdFN0YXRlKCk7XG4gIGtleWJvYXJkTWFuYWdlci5vYnNlcnZlU2hpZnRTdGF0ZSgpO1xuICBrZXlib2FyZE1hbmFnZXIub2JzZXJ2ZUNhcHNTdGF0ZSgpO1xufVxuXG4vKiBTdGFydCBvbmxvYWQgd29yayAqL1xud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XG4gIHdpbmRvd09uTG9hZFdvcmsoKTtcbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
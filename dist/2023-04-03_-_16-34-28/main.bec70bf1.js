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

  getInscriptionForKey(elementForInscription, key, symbolMod) {
    const elementForInscriptionLocal = elementForInscription;
    switch (symbolMod) {
      case 'symbolDefault': {
        elementForInscriptionLocal.innerHTML = this.inscriptions[this.language][key]
          .symbolDefault.symbol;
        break;
      }
      case 'symbolShiftMod': {
        elementForInscriptionLocal.innerHTML = this.inscriptions[this.language][key]
          .symbolShiftMod.symbol !== 'none'
          ? this.inscriptions[this.language][key].symbolShiftMod.symbol
          : this.inscriptions[this.language][key].symbolDefault.symbol;
        break;
      }
      case 'symbolCapsMod': {
        elementForInscriptionLocal.innerHTML = this.inscriptions[this.language][key]
          .symbolCapsMod.symbol !== 'none'
          ? this.inscriptions[this.language][key].symbolCapsMod.symbol
          : this.inscriptions[this.language][key].symbolDefault.symbol;
        break;
      }
      case 'symbolCapsShiftMod': {
        elementForInscriptionLocal.innerHTML = this.inscriptions[this.language][key]
          .symbolCapsShiftMod.symbol !== 'none'
          ? this.inscriptions[this.language][key].symbolCapsShiftMod.symbol
          : this.inscriptions[this.language][key].symbolDefault.symbol;
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
          this.getInscriptionForKey(elementLocal, keyNumberLocal, 'symbolDefault');
          break;
        }
        case 1: {
          elementLocal.classList.add('key-layout--shift-mod');
          elementLocal.classList.add('key-layout--hidden');
          this.getInscriptionForKey(elementLocal, keyNumberLocal, 'symbolShiftMod');
          break;
        }
        case 2: {
          elementLocal.classList.add('key-layout--caps-mod');
          elementLocal.classList.add('key-layout--hidden');
          this.getInscriptionForKey(elementLocal, keyNumberLocal, 'symbolCapsMod');
          break;
        }
        case 3: {
          elementLocal.classList.add('key-layout--caps-and-shift-mod');
          elementLocal.classList.add('key-layout--hidden');
          this.getInscriptionForKey(elementLocal, keyNumberLocal, 'symbolCapsShiftMod');
          break;
        }
        default: {
          break;
        }
      }
      keyLayoutsCurrentLang.appendChild(elementLocal);
    });
    if (this.verboseLvl > 1) {
      console.log(keyLayoutsCurrentLang);
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

  keyShift;

  keyCaps;

  capsState;

  shiftState;

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

    this.keyShift = document.querySelector('[data-event-code="ShiftLeft"]');
    this.keyCaps = document.querySelector('[data-event-code="CapsLock"]');

    this.capsState = false;
    this.shiftState = false;
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
      /* Console log with event.key info message was here. */
      console.log('---- Key event:', event);
    }

    const eventCodeExceptions = [
      'MetaLeft',
      'MetaRight',
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

    const lastKeyHit = event.code;

    if (!eventCodeExceptions.includes(lastKeyHit)) {
      this.searchKeyByDataAtrAndActions(lastKeyHit, changeKeyState);
    } else if (
      lastKeyHit === 'MetaLeft'
      || lastKeyHit === 'MetaRight'
    ) {
      this.searchKeyByDataAtrAndActions('MetaLeft', changeKeyState);
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

  /* TODO: We need use event.code instead event.key!
   * */

  changeModLayout() {
    const keys = [...document.querySelectorAll('.keys__key-base')];
    if ((this.capsState === false) && (this.shiftState === false)) {
      keys.forEach((key) => {
        key.querySelector('.key-layout--default').classList
          .remove('key-layout--hidden');
        key.querySelector('.key-layout--shift-mod').classList
          .add('key-layout--hidden');
        key.querySelector('.key-layout--caps-mod').classList
          .add('key-layout--hidden');
        key.querySelector('.key-layout--caps-and-shift-mod').classList
          .add('key-layout--hidden');
      });
    } else if ((this.capsState === false) && (this.shiftState === true)) {
      keys.forEach((key) => {
        key.querySelector('.key-layout--default').classList
          .add('key-layout--hidden');
        key.querySelector('.key-layout--shift-mod').classList
          .remove('key-layout--hidden');
        key.querySelector('.key-layout--caps-mod').classList
          .add('key-layout--hidden');
        key.querySelector('.key-layout--caps-and-shift-mod').classList
          .add('key-layout--hidden');
      });
    } else if ((this.capsState === true) && (this.shiftState === false)) {
      keys.forEach((key) => {
        key.querySelector('.key-layout--default').classList
          .add('key-layout--hidden');
        key.querySelector('.key-layout--shift-mod').classList
          .add('key-layout--hidden');
        key.querySelector('.key-layout--caps-mod').classList
          .remove('key-layout--hidden');
        key.querySelector('.key-layout--caps-and-shift-mod').classList
          .add('key-layout--hidden');
      });
    } else if ((this.capsState === true) && (this.shiftState === true)) {
      keys.forEach((key) => {
        key.querySelector('.key-layout--default').classList
          .add('key-layout--hidden');
        key.querySelector('.key-layout--shift-mod').classList
          .add('key-layout--hidden');
        key.querySelector('.key-layout--caps-mod').classList
          .add('key-layout--hidden');
        key.querySelector('.key-layout--caps-and-shift-mod').classList
          .remove('key-layout--hidden');
      });
    }
  }

  modStateManager(signal) {
    switch (signal) {
      case 'caps': {
        if (this.capsState === false) {
          this.capsState = true;
          this.changeModLayout();
          if (this.verboseLvl > 1) {
            console.log('---- Caps mod on!');
          }
          this.keyCaps.classList.add('key-base--hold');
        } else if (this.capsState === true) {
          this.capsState = false;
          this.changeModLayout();
          if (this.verboseLvl > 1) {
            console.log('---- Caps mod on!');
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
            console.log('---- Caps mod on!');
          }
          this.keyShift.classList.add('key-base--hold');
        } else if (this.shiftState === true) {
          this.shiftState = false;
          this.changeModLayout();
          if (this.verboseLvl > 1) {
            console.log('---- Caps mod on!');
          }
          this.keyShift.classList.remove('key-base--hold');
        }
        break;
      }
      default: {
        break;
      }
    }
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

  keyboardManager.listenPhysicalKeyboard();
  keyboardManager.listenVirtualKeyboard();
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

module.exports = JSON.parse('{"en":{"1":{"eventCode":"Backquote","row":"1","symbolDefault":{"symbol":"`","mnemonicHTML":"&#96;","name":"Grave Accent"},"symbolShiftMod":{"symbol":"~","mnemonicHTML":"&#96;","name":"Tilde"},"symbolCapsMod":{"symbol":"`","mnemonicHTML":"&#96;","name":"Grave Accent"},"symbolCapsShiftMod":{"symbol":"~","mnemonicHTML":"&#96;","name":"Tilde"}},"2":{"eventCode":"Digit1","row":"1","symbolDefault":{"symbol":"1","name":"Digit One"},"symbolShiftMod":{"symbol":"!","name":"Exclamation Mark"},"symbolCapsMod":{"symbol":"1","name":"Digit One"},"symbolCapsShiftMod":{"symbol":"!","name":"Exclamation Mark"}},"3":{"eventCode":"Digit2","row":"1","symbolDefault":{"symbol":"2","name":"Digit Two"},"symbolShiftMod":{"symbol":"@","mnemonicHTML":"&#96;","name":"Commercial At"},"symbolCapsMod":{"symbol":"2","name":"Digit Two"},"symbolCapsShiftMod":{"symbol":"@","mnemonicHTML":"&#96;","name":"Commercial At"}},"4":{"eventCode":"Digit3","row":"1","symbolDefault":{"symbol":"3","name":"Digit Three"},"symbolShiftMod":{"symbol":"#","mnemonicHTML":"&#35;","name":"Number Sign"},"symbolCapsMod":{"symbol":"3","name":"Digit Three"},"symbolCapsShiftMod":{"symbol":"#","mnemonicHTML":"&#35;","name":"Number Sign"}},"5":{"eventCode":"Digit4","row":"1","symbolDefault":{"symbol":"4","name":"Digit Four"},"symbolShiftMod":{"symbol":"@","mnemonicHTML":"&#96;","name":"Dollar Sign"},"symbolCapsMod":{"symbol":"4","name":"Digit Four"},"symbolCapsShiftMod":{"symbol":"@","mnemonicHTML":"&#96;","name":"Dollar Sign"}},"6":{"eventCode":"Digit5","row":"1","symbolDefault":{"symbol":"5","name":"Digit Five"},"symbolShiftMod":{"symbol":"%","mnemonicHTML":"&#96;","name":"Percent Sign"},"symbolCapsMod":{"symbol":"5","name":"Digit Five"},"symbolCapsShiftMod":{"symbol":"%","mnemonicHTML":"&#96;","name":"Percent Sign"}},"7":{"eventCode":"Digit6","row":"1","symbolDefault":{"symbol":"6","name":"Digit Six"},"symbolShiftMod":{"symbol":"^","mnemonicHTML":"&#96;","name":"Circumflex Accent"},"symbolCapsMod":{"symbol":"6","name":"Digit Six"},"symbolCapsShiftMod":{"symbol":"^","mnemonicHTML":"&#96;","name":"Circumflex Accent"}},"8":{"eventCode":"Digit7","row":"1","symbolDefault":{"symbol":"7","name":"Digit Seven"},"symbolShiftMod":{"symbol":"&","mnemonicHTML":"&#96;","name":"Ampersand"},"symbolCapsMod":{"symbol":"7","name":"Digit Seven"},"symbolCapsShiftMod":{"symbol":"&","mnemonicHTML":"&#96;","name":"Ampersand"}},"9":{"eventCode":"Digit8","row":"1","symbolDefault":{"symbol":"8","name":"Digit Eight"},"symbolShiftMod":{"symbol":"*","mnemonicHTML":"&#96;","name":"Asterisk"},"symbolCapsMod":{"symbol":"8","name":"Digit Eight"},"symbolCapsShiftMod":{"symbol":"*","mnemonicHTML":"&#96;","name":"Asterisk"}},"10":{"eventCode":"Digit9","row":"1","symbolDefault":{"symbol":"9","name":"Digit Nine"},"symbolShiftMod":{"symbol":"(","mnemonicHTML":"&#40;","name":"Left Parenthesis"},"symbolCapsMod":{"symbol":"9","name":"Digit Nine"},"symbolCapsShiftMod":{"symbol":"(","mnemonicHTML":"&#40;","name":"Left Parenthesis"}},"11":{"eventCode":"Digit0","row":"1","symbolDefault":{"symbol":"0","name":"Digit Zero"},"symbolShiftMod":{"symbol":")","mnemonicHTML":"&#96;","name":"Right Parenthesis"},"symbolCapsMod":{"symbol":"0","name":"Digit Zero"},"symbolCapsShiftMod":{"symbol":")","mnemonicHTML":"&#96;","name":"Right Parenthesis"}},"12":{"eventCode":"Minus","row":"1","symbolDefault":{"symbol":"-","name":"Hyphen-Minus"},"symbolShiftMod":{"symbol":"_","name":"Low Line"},"symbolCapsMod":{"symbol":"-","name":"Hyphen-Minus"},"symbolCapsShiftMod":{"symbol":"_","name":"Low Line"}},"13":{"eventCode":"Equal","row":"1","symbolDefault":{"symbol":"=","name":"Equals Sign"},"symbolShiftMod":{"symbol":"+","name":"Plus Sign"},"symbolCapsMod":{"symbol":"=","name":"Equals Sign"},"symbolCapsShiftMod":{"symbol":"+","name":"Plus Sign"}},"14":{"eventCode":"Backspace","row":"1","symbolDefault":{"symbol":"Backspace","name":"Backspace key"},"symbolShiftMod":{"symbol":"none","name":"none"},"symbolCapsMod":{"symbol":"none","name":"none"},"symbolCapsShiftMod":{"symbol":"none","name":"none"}},"15":{"eventCode":"Tab","row":"2","symbolDefault":{"symbol":"Tab","name":"Tab key"},"symbolShiftMod":{"symbol":"none","name":"none"},"symbolCapsMod":{"symbol":"none","name":"none"},"symbolCapsShiftMod":{"symbol":"none","name":"none"}},"16":{"eventCode":"KeyQ","row":"2","symbolDefault":{"symbol":"q","name":"Latin Small Letter Q"},"symbolShiftMod":{"symbol":"Q","name":"Latin Capital Letter Q"},"symbolCapsMod":{"symbol":"Q","name":"Latin Capital Letter Q"},"symbolCapsShiftMod":{"symbol":"q","name":"Latin Small Letter Q"}},"17":{"eventCode":"KeyW","row":"2","symbolDefault":{"symbol":"w","name":"Latin Small Letter W"},"symbolShiftMod":{"symbol":"W","name":"Latin Capital Letter W"},"symbolCapsMod":{"symbol":"W","name":"Latin Capital Letter W"},"symbolCapsShiftMod":{"symbol":"w","name":"Latin Small Letter W"}},"18":{"eventCode":"KeyE","row":"2","symbolDefault":{"symbol":"e","name":"Latin Small Letter E"},"symbolShiftMod":{"symbol":"E","name":"Latin Capital Letter E"},"symbolCapsMod":{"symbol":"E","name":"Latin Capital Letter E"},"symbolCapsShiftMod":{"symbol":"e","name":"Latin Small Letter E"}},"19":{"eventCode":"KeyR","row":"2","symbolDefault":{"symbol":"r","name":"Latin Small Letter R"},"symbolShiftMod":{"symbol":"R","name":"Latin Capital Letter R"},"symbolCapsMod":{"symbol":"R","name":"Latin Capital Letter R"},"symbolCapsShiftMod":{"symbol":"r","name":"Latin Small Letter R"}},"20":{"eventCode":"KeyT","row":"2","symbolDefault":{"symbol":"t","name":"Latin Small Letter T"},"symbolShiftMod":{"symbol":"T","name":"Latin Capital Letter T"},"symbolCapsMod":{"symbol":"T","name":"Latin Capital Letter T"},"symbolCapsShiftMod":{"symbol":"t","name":"Latin Small Letter T"}},"21":{"eventCode":"KeyY","row":"2","symbolDefault":{"symbol":"y","name":"Latin Small Letter Y"},"symbolShiftMod":{"symbol":"Y","name":"Latin Capital Letter Y"},"symbolCapsMod":{"symbol":"Y","name":"Latin Capital Letter Y"},"symbolCapsShiftMod":{"symbol":"y","name":"Latin Small Letter Y"}},"22":{"eventCode":"KeyU","row":"2","symbolDefault":{"symbol":"u","name":"Latin Small Letter U"},"symbolShiftMod":{"symbol":"U","name":"Latin Capital Letter U"},"symbolCapsMod":{"symbol":"U","name":"Latin Capital Letter U"},"symbolCapsShiftMod":{"symbol":"u","name":"Latin Small Letter U"}},"23":{"eventCode":"KeyI","row":"2","symbolDefault":{"symbol":"i","name":"Latin Small Letter I"},"symbolShiftMod":{"symbol":"I","name":"Latin Capital Letter I"},"symbolCapsMod":{"symbol":"I","name":"Latin Capital Letter I"},"symbolCapsShiftMod":{"symbol":"i","name":"Latin Small Letter I"}},"24":{"eventCode":"KeyO","row":"2","symbolDefault":{"symbol":"o","name":"Latin Small Letter O"},"symbolShiftMod":{"symbol":"O","name":"Latin Capital Letter O"},"symbolCapsMod":{"symbol":"O","name":"Latin Capital Letter O"},"symbolCapsShiftMod":{"symbol":"o","name":"Latin Small Letter O"}},"25":{"eventCode":"KeyP","row":"2","symbolDefault":{"symbol":"p","name":"Latin Small Letter P"},"symbolShiftMod":{"symbol":"P","name":"Latin Capital Letter P"},"symbolCapsMod":{"symbol":"P","name":"Latin Capital Letter P"},"symbolCapsShiftMod":{"symbol":"p","name":"Latin Small Letter P"}},"26":{"eventCode":"BracketLeft","row":"2","symbolDefault":{"symbol":"[","mnemonicHTML":"&#91;","name":"Left Square Bracket"},"symbolShiftMod":{"symbol":"{","mnemonicHTML":"&#123;","name":"Left Curly Bracket"},"symbolCapsMod":{"symbol":"[","mnemonicHTML":"&#91;","name":"Left Square Bracket"},"symbolCapsShiftMod":{"symbol":"{","mnemonicHTML":"&#123;","name":"Left Curly Bracket"}},"27":{"eventCode":"BracketRight","row":"2","symbolDefault":{"symbol":"]","mnemonicHTML":"&#93;","name":"Right Square Bracket"},"symbolShiftMod":{"symbol":"}","mnemonicHTML":"&#125;","name":"Right Curly Bracket"},"symbolCapsMod":{"symbol":"]","mnemonicHTML":"&#93;","name":"Right Square Bracket"},"symbolCapsShiftMod":{"symbol":"}","mnemonicHTML":"&#125;","name":"Right Curly Bracket"}},"28":{"eventCode":"Backslash","row":"2","symbolDefault":{"symbol":"\\\\","mnemonicHTML":"&#92;","name":"Reverse Solidus"},"symbolShiftMod":{"symbol":"|","mnemonicHTML":"&#124;","name":"Vertical Line"},"symbolCapsMod":{"symbol":"\\\\","mnemonicHTML":"&#92;","name":"Reverse Solidus"},"symbolCapsShiftMod":{"symbol":"|","mnemonicHTML":"&#124;","name":"Vertical Line"}},"29":{"eventCode":"CapsLock","row":"3","symbolDefault":{"symbol":"Caps Lock","name":"Caps Lock key"},"symbolShiftMod":{"symbol":"none","name":"none"},"symbolCapsMod":{"symbol":"none","name":"none"},"symbolCapsShiftMod":{"symbol":"none","name":"none"}},"30":{"eventCode":"KeyA","row":"3","symbolDefault":{"symbol":"a","name":"Latin Small Letter A"},"symbolShiftMod":{"symbol":"A","name":"Latin Capital Letter A"},"symbolCapsMod":{"symbol":"A","name":"Latin Capital Letter A"},"symbolCapsShiftMod":{"symbol":"a","name":"Latin Small Letter A"}},"31":{"eventCode":"KeyS","row":"3","symbolDefault":{"symbol":"s","name":"Latin Small Letter S"},"symbolShiftMod":{"symbol":"S","name":"Latin Capital Letter S"},"symbolCapsMod":{"symbol":"S","name":"Latin Capital Letter S"},"symbolCapsShiftMod":{"symbol":"s","name":"Latin Small Letter S"}},"32":{"eventCode":"KeyD","row":"3","symbolDefault":{"symbol":"d","name":"Latin Small Letter D"},"symbolShiftMod":{"symbol":"D","name":"Latin Capital Letter D"},"symbolCapsMod":{"symbol":"D","name":"Latin Capital Letter D"},"symbolCapsShiftMod":{"symbol":"d","name":"Latin Small Letter D"}},"33":{"eventCode":"KeyF","row":"3","symbolDefault":{"symbol":"f","name":"Latin Small Letter F"},"symbolShiftMod":{"symbol":"F","name":"Latin Capital Letter F"},"symbolCapsMod":{"symbol":"F","name":"Latin Capital Letter F"},"symbolCapsShiftMod":{"symbol":"f","name":"Latin Small Letter F"}},"34":{"eventCode":"KeyG","row":"3","symbolDefault":{"symbol":"g","name":"Latin Small Letter G"},"symbolShiftMod":{"symbol":"G","name":"Latin Capital Letter G"},"symbolCapsMod":{"symbol":"G","name":"Latin Capital Letter G"},"symbolCapsShiftMod":{"symbol":"g","name":"Latin Small Letter G"}},"35":{"eventCode":"KeyH","row":"3","symbolDefault":{"symbol":"h","name":"Latin Small Letter H"},"symbolShiftMod":{"symbol":"H","name":"Latin Capital Letter H"},"symbolCapsMod":{"symbol":"H","name":"Latin Capital Letter H"},"symbolCapsShiftMod":{"symbol":"h","name":"Latin Small Letter H"}},"36":{"eventCode":"KeyJ","row":"3","symbolDefault":{"symbol":"j","name":"Latin Small Letter J"},"symbolShiftMod":{"symbol":"J","name":"Latin Capital Letter J"},"symbolCapsMod":{"symbol":"J","name":"Latin Capital Letter J"},"symbolCapsShiftMod":{"symbol":"j","name":"Latin Small Letter J"}},"37":{"eventCode":"KeyK","row":"3","symbolDefault":{"symbol":"k","name":"Latin Small Letter K"},"symbolShiftMod":{"symbol":"K","name":"Latin Capital Letter K"},"symbolCapsMod":{"symbol":"K","name":"Latin Capital Letter K"},"symbolCapsShiftMod":{"symbol":"k","name":"Latin Small Letter K"}},"38":{"eventCode":"KeyL","row":"3","symbolDefault":{"symbol":"l","name":"Latin Small Letter L"},"symbolShiftMod":{"symbol":"L","name":"Latin Capital Letter L"},"symbolCapsMod":{"symbol":"L","name":"Latin Capital Letter L"},"symbolCapsShiftMod":{"symbol":"l","name":"Latin Small Letter L"}},"39":{"eventCode":"Semicolon","row":"3","symbolDefault":{"symbol":";","name":"Semicolon"},"symbolShiftMod":{"symbol":":","name":"Colon"},"symbolCapsMod":{"symbol":";","name":"Semicolon"},"symbolCapsShiftMod":{"symbol":":","name":"Colon"}},"40":{"eventCode":"Quote","row":"3","symbolDefault":{"symbol":"\'","mnemonicHTML":"&#39;","name":"Apostrophe"},"symbolShiftMod":{"symbol":"\\"","mnemonicHTML":"&#34;","name":"Quotation Mark"},"symbolCapsMod":{"symbol":"\'","mnemonicHTML":"&#39;","name":"Apostrophe"},"symbolCapsShiftMod":{"symbol":"\\"","mnemonicHTML":"&#34;","name":"Quotation Mark"}},"41":{"eventCode":"Enter","row":"3","symbolDefault":{"symbol":"Enter","name":"Enter key"},"symbolShiftMod":{"symbol":"none","name":"none"},"symbolCapsMod":{"symbol":"none","name":"none"},"symbolCapsShiftMod":{"symbol":"none","name":"none"}},"42":{"eventCode":"ShiftLeft","row":"4","symbolDefault":{"symbol":"Shift","name":"Left Shift key"},"symbolShiftMod":{"symbol":"none","name":"none"},"symbolCapsMod":{"symbol":"none","name":"none"},"symbolCapsShiftMod":{"symbol":"none","name":"none"}},"43":{"eventCode":"KeyZ","row":"4","symbolDefault":{"symbol":"z","name":"Latin Small Letter Z"},"symbolShiftMod":{"symbol":"Z","name":"Latin Capital Letter Z"},"symbolCapsMod":{"symbol":"Z","name":"Latin Capital Letter Z"},"symbolCapsShiftMod":{"symbol":"z","name":"Latin Small Letter Z"}},"44":{"eventCode":"KeyX","row":"4","symbolDefault":{"symbol":"x","name":"Latin Small Letter X"},"symbolShiftMod":{"symbol":"X","name":"Latin Capital Letter X"},"symbolCapsMod":{"symbol":"X","name":"Latin Capital Letter X"},"symbolCapsShiftMod":{"symbol":"x","name":"Latin Small Letter X"}},"45":{"eventCode":"KeyC","row":"4","symbolDefault":{"symbol":"c","name":"Latin Small Letter C"},"symbolShiftMod":{"symbol":"C","name":"Latin Capital Letter C"},"symbolCapsMod":{"symbol":"C","name":"Latin Capital Letter C"},"symbolCapsShiftMod":{"symbol":"c","name":"Latin Small Letter C"}},"46":{"eventCode":"KeyV","row":"4","symbolDefault":{"symbol":"v","name":"Latin Small Letter V"},"symbolShiftMod":{"symbol":"V","name":"Latin Capital Letter V"},"symbolCapsMod":{"symbol":"V","name":"Latin Capital Letter V"},"symbolCapsShiftMod":{"symbol":"v","name":"Latin Small Letter V"}},"47":{"eventCode":"KeyB","row":"4","symbolDefault":{"symbol":"b","name":"Latin Small Letter B"},"symbolShiftMod":{"symbol":"B","name":"Latin Capital Letter B"},"symbolCapsMod":{"symbol":"B","name":"Latin Capital Letter B"},"symbolCapsShiftMod":{"symbol":"b","name":"Latin Small Letter B"}},"48":{"eventCode":"KeyN","row":"4","symbolDefault":{"symbol":"n","name":"Latin Small Letter N"},"symbolShiftMod":{"symbol":"N","name":"Latin Capital Letter N"},"symbolCapsMod":{"symbol":"N","name":"Latin Capital Letter N"},"symbolCapsShiftMod":{"symbol":"n","name":"Latin Small Letter N"}},"49":{"eventCode":"KeyM","row":"4","symbolDefault":{"symbol":"m","name":"Latin Small Letter M"},"symbolShiftMod":{"symbol":"M","name":"Latin Capital Letter M"},"symbolCapsMod":{"symbol":"M","name":"Latin Capital Letter M"},"symbolCapsShiftMod":{"symbol":"m","name":"Latin Small Letter M"}},"50":{"eventCode":"Comma","row":"4","symbolDefault":{"symbol":",","name":"Comma"},"symbolShiftMod":{"symbol":"<","name":"Less-Than Sign"},"symbolCapsMod":{"symbol":",","name":"Comma"},"symbolCapsShiftMod":{"symbol":"<","name":"Less-Than Sign"}},"51":{"eventCode":"Period","row":"4","symbolDefault":{"symbol":".","name":"Full Stop (Dot)"},"symbolShiftMod":{"symbol":">","name":"Greater-Than Sign"},"symbolCapsMod":{"symbol":".","name":"Full Stop (Dot)"},"symbolCapsShiftMod":{"symbol":">","name":"Greater-Than Sign"}},"52":{"eventCode":"Slash","row":"4","symbolDefault":{"symbol":"/","mnemonicHTML":"&#47;","name":"Solidus"},"symbolShiftMod":{"symbol":"?","name":"Question Mark"},"symbolCapsMod":{"symbol":"/","mnemonicHTML":"&#47;","name":"Solidus"},"symbolCapsShiftMod":{"symbol":"?","name":"Question Mark"}},"53":{"eventCode":"ShiftRight","row":"4","symbolDefault":{"symbol":"Shift","name":"Right Shift key"},"symbolShiftMod":{"symbol":"none","name":"none"},"symbolCapsMod":{"symbol":"none","name":"none"},"symbolCapsShiftMod":{"symbol":"none","name":"none"}},"54":{"eventCode":"ArrowUp","row":"4","symbolDefault":{"symbol":"&#9650;","name":"Up Arrow key"},"symbolShiftMod":{"symbol":"none","name":"none"},"symbolCapsMod":{"symbol":"none","name":"none"},"symbolCapsShiftMod":{"symbol":"none","name":"none"}},"55":{"eventCode":"Delete","row":"4","symbolDefault":{"symbol":"Del","name":"Delete key"},"symbolShiftMod":{"symbol":"none","name":"none"},"symbolCapsMod":{"symbol":"none","name":"none"},"symbolCapsShiftMod":{"symbol":"none","name":"none"}},"56":{"eventCode":"ControlLeft","row":"5","symbolDefault":{"symbol":"Ctrl","name":"Left Ctrl key"},"symbolShiftMod":{"symbol":"none","name":"none"},"symbolCapsMod":{"symbol":"none","name":"none"},"symbolCapsShiftMod":{"symbol":"none","name":"none"}},"57":{"eventCode":"MetaLeft","row":"5","symbolDefault":{"symbol":"Win","name":"Win key"},"symbolShiftMod":{"symbol":"none","name":"none"},"symbolCapsMod":{"symbol":"none","name":"none"},"symbolCapsShiftMod":{"symbol":"none","name":"none"}},"58":{"eventCode":"AltLeft","row":"5","symbolDefault":{"symbol":"Alt","name":"Left Alt key"},"symbolShiftMod":{"symbol":"none","name":"none"},"symbolCapsMod":{"symbol":"none","name":"none"},"symbolCapsShiftMod":{"symbol":"none","name":"none"}},"59":{"eventCode":"Space","row":"5","symbolDefault":{"symbol":"Space","name":"Space key"},"symbolShiftMod":{"symbol":"none","name":"none"},"symbolCapsMod":{"symbol":"none","name":"none"},"symbolCapsShiftMod":{"symbol":"none","name":"none"}},"60":{"eventCode":"AltRight","row":"5","symbolDefault":{"symbol":"Alt","name":"Right Alt key"},"symbolShiftMod":{"symbol":"none","name":"none"},"symbolCapsMod":{"symbol":"none","name":"none"},"symbolCapsShiftMod":{"symbol":"none","name":"none"}},"61":{"eventCode":"ControlRight","row":"5","symbolDefault":{"symbol":"Ctrl","name":"Right Ctrl key"},"symbolShiftMod":{"symbol":"none","name":"none"},"symbolCapsMod":{"symbol":"none","name":"none"},"symbolCapsShiftMod":{"symbol":"none","name":"none"}},"62":{"eventCode":"ArrowLeft","row":"5","symbolDefault":{"symbol":"&#9668;","name":"Left Arrow key"},"symbolShiftMod":{"symbol":"none","name":"none"},"symbolCapsMod":{"symbol":"none","name":"none"},"symbolCapsShiftMod":{"symbol":"none","name":"none"}},"63":{"eventCode":"ArrowDown","row":"5","symbolDefault":{"symbol":"&#9660;","name":"Down Arrow key"},"symbolShiftMod":{"symbol":"none","name":"none"},"symbolCapsMod":{"symbol":"none","name":"none"},"symbolCapsShiftMod":{"symbol":"none","name":"none"}},"64":{"eventCode":"ArrowRight","row":"5","symbolDefault":{"symbol":"&#9658;","name":"Right Arrow key"},"symbolShiftMod":{"symbol":"none","name":"none"},"symbolCapsMod":{"symbol":"none","name":"none"},"symbolCapsShiftMod":{"symbol":"none","name":"none"}}}}');

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5iZWM3MGJmMS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDMEQ7O0FBRTFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsUUFBUTtBQUN2QixlQUFlLFFBQVE7QUFDdkI7QUFDQTs7QUFFQTtBQUNBLGVBQWUsUUFBUTtBQUN2QjtBQUNBLGVBQWUsUUFBUTtBQUN2Qjs7QUFFQTtBQUNBLGVBQWUsUUFBUTtBQUN2QixlQUFlLFFBQVE7QUFDdkIsZUFBZSxRQUFRO0FBQ3ZCO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCLGVBQWUsUUFBUTtBQUN2QjtBQUNBLGVBQWUsUUFBUTtBQUN2QjtBQUNBLGVBQWUsUUFBUTtBQUN2QjtBQUNBOztBQUVBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCLGVBQWUsUUFBUTtBQUN2QixlQUFlLFFBQVE7QUFDdkIsZUFBZSxRQUFRO0FBQ3ZCOztBQUVBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCLGVBQWUsUUFBUTtBQUN2QixlQUFlLFFBQVE7QUFDdkI7O0FBRUE7QUFDQSxlQUFlLFFBQVE7QUFDdkI7QUFDQSxlQUFlLFFBQVE7QUFDdkIsZUFBZSxRQUFRO0FBQ3ZCLGVBQWUsUUFBUTtBQUN2Qjs7QUFFQTtBQUNBLGVBQWUsUUFBUTtBQUN2QjtBQUNBLGVBQWUsUUFBUTtBQUN2QixlQUFlLFFBQVE7QUFDdkIsZUFBZSxRQUFRO0FBQ3ZCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ2U7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSx5QkFBeUIsU0FBUztBQUNsQyx5QkFBeUIsU0FBUztBQUNsQyx5QkFBeUIsU0FBUztBQUNsQztBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHlEQUFZO0FBQ3BDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EscURBQXFELGtCQUFrQjs7QUFFdkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxrQkFBa0I7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixtREFBbUQ7QUFDOUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsWUFBWTtBQUNwQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDOWFlO0FBQ2Y7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBLGdEQUFnRCxrQkFBa0I7QUFDbEU7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqRDBEOztBQUUxRDtBQUNBO0FBQ0E7QUFDZTtBQUNmO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSwyQkFBMkIsU0FBUztBQUNwQywyQkFBMkIsU0FBUztBQUNwQywyQkFBMkIsU0FBUztBQUNwQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtEQUErRCxjQUFjO0FBQzdFO0FBQ0E7QUFDQSxrRUFBa0UsY0FBYztBQUNoRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLDhCQUE4Qiw2REFBb0I7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSw2QkFBNkIsNkRBQW9CO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ25ZQTtBQUNBO0FBQ0E7QUFDZ0U7O0FBRWhFO0FBQ0E7QUFDQTtBQUMwRDs7QUFFMUQ7QUFDQTs7QUFFQTtBQUNvQztBQUNJOztBQUV4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLGdFQUF1QjtBQUM3RDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4QkFBOEIsNkRBQW9CO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3ZpcnR1YWwta2V5Ym9hcmQvLi9hc3NldHMvc3R5bGVzL25vcm1hbGl6ZS5jc3M/YmVhMSIsIndlYnBhY2s6Ly92aXJ0dWFsLWtleWJvYXJkLy4vYXNzZXRzL3N0eWxlcy9zdHlsZS5jc3M/MjM1OCIsIndlYnBhY2s6Ly92aXJ0dWFsLWtleWJvYXJkLy4vc3JjL0Jhc2ljU3RydWN0dXJlR2VuZXJhdG9yLmpzIiwid2VicGFjazovL3ZpcnR1YWwta2V5Ym9hcmQvLi9zcmMvRWxlbWVudENsYXNzT2JzZXJ2ZXIuanMiLCJ3ZWJwYWNrOi8vdmlydHVhbC1rZXlib2FyZC8uL3NyYy9LZXlib2FyZExvZ2ljTWFuYWdlci5qcyIsIndlYnBhY2s6Ly92aXJ0dWFsLWtleWJvYXJkLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8qIEltcG9ydCBKU09OIHdpdGgga2V5cyBpbnNjcmlwdGlvbnMgYW5kIG90aGVyIGtleXMgaW5mbyAqL1xuaW1wb3J0IGluc2NyaXB0aW9ucyBmcm9tICcuLi9hc3NldHMvanMvaW5zY3JpcHRpb25zLmpzb24nO1xuXG4vKipcbiAqIFRPRE86IHJld29yayBKU09OLiBFdmVyeSBidXR0b24gbmVlZCBvbmUgdW5pcXVlIGlkZW50aWZpZXIuIE1heWJlLCBldmVudC5jb2RlP1xuICogICAgICAgKG5vdCBkZXByZWNhdGVkIGV2ZW50LmtleUNvZGUgb3IgZXZlbnQud2hpY2ghISEpXG4gKiAgICAgICBBZnRlciBpdCwgcmV3b3JrIHJlbGV2YW50IGNsYXNzIG1ldGhvZHMuXG4gKiAqL1xuXG4vLyA8ZWRpdG9yLWZvbGQgZGVzYz1cIktleXMgT2JqZWN0IEpTRG9jXCI+XG4vKipcbiAqIEB0eXBlZGVmICAge09iamVjdH0ga2V5SW5zY3JpcHRpb25zICAtIE9iamVjdCwgcGFyc2VkIGZyb20gSlNPTiB3aXRoIGluZm8gYWJvdXQga2V5cy5cbiAqIEBwcm9wZXJ0eSAge09iamVjdH0gZW4gICAgICAgICAgICAgICAtIGlubmVyIE9iamVjdCB3aXRoIGluZm9cbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFib3V0IGtleXMgZm9yIEVuZ2xpc2gga2V5Ym9hcmQuXG4gKi9cblxuLyoqXG4gKiBAdHlwZWRlZiAgIHtPYmplY3R9IGVuICAgICAgICAgICAtIGlubmVyIE9iamVjdCB3aXRoIGluZm9cbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWJvdXQga2V5cyBmb3IgRW5nbGlzaCBrZXlib2FyZC5cbiAqIEBwcm9wZXJ0eSAge09iamVjdH0ga2V5QnlOdW1iZXIgIC0gaW5uZXIgT2JqZWN0IHdpdGggaW5mb3JtYXRpb24gYWJvdXQgc2VwYXJhdGUga2V5LlxuICovXG5cbi8qKlxuICogQHR5cGVkZWYgICB7T2JqZWN0fSBrZXlCeU51bWJlciAgICAtIGlubmVyIE9iamVjdCB3aXRoIGluZm9ybWF0aW9uIGFib3V0IHNlcGFyYXRlIGtleS5cbiAqIEBwcm9wZXJ0eSAge1N0cmluZ30gZXZlbnRDb2RlICAgICAgLSBrZXkgZXZlbnQuY29kZS5cbiAqIEBwcm9wZXJ0eSAge1N0cmluZ30gcm93ICAgICAgICAgICAgLSBmaWVsZCB3aXRoIGluZm9ybWF0aW9uXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWJvdXQga2V5Ym9hcmQgcm93IG9mIGN1cnJlbnQga2V5LlxuICogQHByb3BlcnR5ICB7T2JqZWN0fSBzeW1ib2xEZWZhdWx0ICAtIE9iamVjdCB3aXRoIGluZm9ybWF0aW9uIGFib3V0IHN5bWJvbCBmb3IgZGVmYXVsdCBzdGF0ZS5cbiAqIEBwcm9wZXJ0eSAge09iamVjdH0gc3ltYm9sU2hpZnRNb2QgLSBPYmplY3Qgd2l0aCBpbmZvcm1hdGlvbiBhYm91dCBzeW1ib2xcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgU2hpZnQgbW9kaWZpY2F0aW9uIHN0YXRlLlxuICogQHByb3BlcnR5ICB7T2JqZWN0fSBzeW1ib2xDYXBzTW9kICAtIE9iamVjdCB3aXRoIGluZm9ybWF0aW9uIGFib3V0IHN5bWJvbFxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciBTaGlmdCBtb2RpZmljYXRpb24gc3RhdGUuXG4gKiBAcHJvcGVydHkgIHtPYmplY3R9IHN5bWJvbENhcHNTaGlmdE1vZCAtIE9iamVjdCB3aXRoIGluZm9ybWF0aW9uIGFib3V0IHN5bWJvbFxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgU2hpZnQgbW9kaWZpY2F0aW9uIHN0YXRlLlxuICovXG5cbi8qKlxuICogQHR5cGVkZWYgICB7T2JqZWN0fSBzeW1ib2xEZWZhdWx0ICAtIE9iamVjdCB3aXRoIGluZm9ybWF0aW9uIGFib3V0IHN5bWJvbCBmb3IgZGVmYXVsdCBzdGF0ZS5cbiAqIEBwcm9wZXJ0eSAge1N0cmluZ30gc3ltYm9sICAgICAgICAgLSBzeW1ib2wuXG4gKiBAcHJvcGVydHkgIHtTdHJpbmd9IG1uZW1vbmljSFRNTCAgIC0gSFRNTCBtbmVtb25pYy5cbiAqIEBwcm9wZXJ0eSAge1N0cmluZ30gbmFtZSAgICAgICAgICAgLSBodW1hbi1yZWFkYWJsZSBuYW1lIG9mIHN5bWJvbC5cbiAqL1xuXG4vKipcbiAqIEB0eXBlZGVmICAge09iamVjdH0gc3ltYm9sU2hpZnRNb2QgLSBPYmplY3Qgd2l0aCBpbmZvcm1hdGlvbiBhYm91dCBzeW1ib2xcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgU2hpZnQgbW9kaWZpY2F0aW9uIHN0YXRlLlxuICogQHByb3BlcnR5ICB7U3RyaW5nfSBzeW1ib2wgICAgICAgICAtIHN5bWJvbC5cbiAqIEBwcm9wZXJ0eSAge1N0cmluZ30gbW5lbW9uaWNIVE1MICAgLSBIVE1MIG1uZW1vbmljLlxuICogQHByb3BlcnR5ICB7U3RyaW5nfSBuYW1lICAgICAgICAgICAtIGh1bWFuLXJlYWRhYmxlIG5hbWUgb2Ygc3ltYm9sLlxuICovXG5cbi8qKlxuICogQHR5cGVkZWYgICB7T2JqZWN0fSBzeW1ib2xDYXBzTW9kICAtIE9iamVjdCB3aXRoIGluZm9ybWF0aW9uIGFib3V0IHN5bWJvbFxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciBTaGlmdCBtb2RpZmljYXRpb24gc3RhdGUuXG4gKiBAcHJvcGVydHkgIHtTdHJpbmd9IHN5bWJvbCAgICAgICAgIC0gc3ltYm9sLlxuICogQHByb3BlcnR5ICB7U3RyaW5nfSBtbmVtb25pY0hUTUwgICAtIEhUTUwgbW5lbW9uaWMuXG4gKiBAcHJvcGVydHkgIHtTdHJpbmd9IG5hbWUgICAgICAgICAgIC0gaHVtYW4tcmVhZGFibGUgbmFtZSBvZiBzeW1ib2wuXG4gKi9cblxuLyoqXG4gKiBAdHlwZWRlZiAgIHtPYmplY3R9IHN5bWJvbENhcHNTaGlmdE1vZCAgLSBPYmplY3Qgd2l0aCBpbmZvcm1hdGlvbiBhYm91dCBzeW1ib2xcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciBTaGlmdCBtb2RpZmljYXRpb24gc3RhdGUuXG4gKiBAcHJvcGVydHkgIHtTdHJpbmd9IHN5bWJvbCAgICAgICAgIC0gc3ltYm9sLlxuICogQHByb3BlcnR5ICB7U3RyaW5nfSBtbmVtb25pY0hUTUwgICAtIEhUTUwgbW5lbW9uaWMuXG4gKiBAcHJvcGVydHkgIHtTdHJpbmd9IG5hbWUgICAgICAgICAgIC0gaHVtYW4tcmVhZGFibGUgbmFtZSBvZiBzeW1ib2wuXG4gKi9cbi8vIDwvZWRpdG9yLWZvbGQgZGVzYz1cIktleXMgT2JqZWN0IEpTRG9jXCI+XG5cbi8qKlxuICogQmFzaWNTdHJ1Y3R1cmVHZW5lcmF0b3IgY2xhc3MgZm9yIGdlbmVyYXRlIGJhc2ljIEhUTUwgRWxlbWVudHMgZm9yIEFwcC5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFzaWNTdHJ1Y3R1cmVHZW5lcmF0b3Ige1xuICAvLyA8ZWRpdG9yLWZvbGQgZGVzYz1cIlRva2Vuc1wiPlxuICByb290VG9rZW47XG4gIC8vIDwvZWRpdG9yLWZvbGQgZGVzYz1cIlRva2Vuc1wiPlxuXG4gIC8vIDxlZGl0b3ItZm9sZCBkZXNjPVwiRWxlbWVudHNcIj5cbiAgcm9vdDtcblxuICByb290Q29udGFpbmVyO1xuXG4gIGhlYWRlcjtcblxuICBtYWluO1xuXG4gIGZvb3RlcjtcblxuICBjb250YWluZXI7XG5cbiAga2V5Ym9hcmQ7XG4gIC8vIDwvZWRpdG9yLWZvbGQgZGVzYz1cIkVsZW1lbnRzXCI+XG5cbiAgaW5zY3JpcHRpb25zO1xuXG4gIC8qKlxuICAgKiBLZXlib2FyZCBrZXlzIGNvdW50LlxuICAgKi9cbiAga2V5c0NvdW50O1xuXG4gIC8qKlxuICAgKiBWZXJib3NlIExWTCBmb3IgbWFuYWdlIG91dHB1dCB0byBjb25zb2xlLlxuICAgKi9cbiAgdmVyYm9zZUx2bDtcblxuICBsYW5ndWFnZTtcblxuICAvKipcbiAgICogQmFzaWMgc3RydWN0dXJlIGdlbmVyYXRvciBjb25zdHJ1Y3Rvci5cbiAgICogQHBhcmFtIHJvb3RUb2tlbiAgIHtTdHJpbmd9ICAtIFRva2VuIG9mIHJvb3QgZWxlbWVudCwgaW4gdGhhdCB3ZSBhZGQgbmV3IGVsZW1lbnRzLlxuICAgKiBAcGFyYW0gbGFuZ3VhZ2UgICAge1N0cmluZ30gIC0gQ3VycmVudCBBcHAgbGFuZ3VhZ2UuXG4gICAqIEBwYXJhbSB2ZXJib3NlTHZsICB7bnVtYmVyfSAgLSB2ZXJib3NlIExWTCBmb3IgbWFuYWdlIG91dHB1dCB0byBjb25zb2xlLlxuICAgKi9cbiAgY29uc3RydWN0b3Iocm9vdFRva2VuLCBsYW5ndWFnZSwgdmVyYm9zZUx2bCA9IDApIHtcbiAgICB0aGlzLnZlcmJvc2VMdmwgPSB2ZXJib3NlTHZsO1xuXG4gICAgdGhpcy5sYW5ndWFnZSA9IGxhbmd1YWdlO1xuXG4gICAgdGhpcy5yb290VG9rZW4gPSByb290VG9rZW47XG4gICAgdGhpcy5yb290ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihyb290VG9rZW4pO1xuXG4gICAgLyogSW5pdGlhbGlzZSBmaWVsZHMgZm9yIG1haW4gc3RydWN0dXJlIGVsZW1lbnRzLiAqL1xuICAgIHRoaXMucm9vdENvbnRhaW5lciA9IG51bGw7XG4gICAgdGhpcy5oZWFkZXIgPSBudWxsO1xuICAgIHRoaXMubWFpbiA9IG51bGw7XG4gICAgdGhpcy5mb290ZXIgPSBudWxsO1xuXG4gICAgLyogQ3JlYXRlIGNvbnRlbnQgY29udGFpbmVyIGZvciBldmVyeSBvdXRlciBzdHJ1Y3R1cmUgZWxlbWVudC4gKi9cbiAgICB0aGlzLmNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRoaXMuY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvbnRhaW5lcicpO1xuXG4gICAgLyogSW5pdGlhbGl6ZSBrZXlib2FyZCAqL1xuICAgIHRoaXMua2V5Ym9hcmQgPSBudWxsO1xuXG4gICAgLyoqXG4gICAgICogT2JqZWN0LCBwYXJzZWQgZnJvbSBKU09OIHdpdGggaW5mbyBhYm91dCBrZXlzLlxuICAgICAqIEB0eXBlIGtleUluc2NyaXB0aW9uc1xuICAgICAqL1xuICAgIHRoaXMuaW5zY3JpcHRpb25zID0gaW5zY3JpcHRpb25zO1xuICAgIHRoaXMua2V5c0NvdW50ID0gT2JqZWN0LmtleXModGhpcy5pbnNjcmlwdGlvbnNbdGhpcy5sYW5ndWFnZV0pLmxlbmd0aDtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZW5lcmF0ZSBoZWFkZXIgSFRNTCBFbGVtZW50IGFuZCBpdHMgYmFzaWMgY29udGVudC5cbiAgICovXG4gIGdlbmVyYXRlSGVhZGVyKCkge1xuICAgIC8qIEdlbmVyYXRlIGhlYWRlciAqL1xuICAgIHRoaXMuaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XG4gICAgdGhpcy5oZWFkZXIuY2xhc3NMaXN0LmFkZCgnaGVhZGVyJyk7XG5cbiAgICAvKiBHZW5lcmF0ZSBoZWFkaW5nICovXG4gICAgY29uc3QgaGVhZGluZ0gxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICBoZWFkaW5nSDEuaW5uZXJUZXh0ID0gJ1ZpcnR1YWwga2V5Ym9hcmQnO1xuICAgIGhlYWRpbmdIMS5jbGFzc0xpc3QuYWRkKCdoZWFkZXJfX2hlYWRpbmcnKTtcblxuICAgIC8qIEFwcGVuZCBoZWFkaW5nIGFuZCBjb250YWluZXIgKi9cbiAgICB0aGlzLmhlYWRlci5hcHBlbmRDaGlsZCh0aGlzLmNvbnRhaW5lci5jbG9uZU5vZGUodHJ1ZSkpO1xuICAgIHRoaXMuaGVhZGVyLmxhc3RFbGVtZW50Q2hpbGQuY2xhc3NMaXN0LmFkZCgnY29udGFpbmVyLS1oZWFkZXInKTtcbiAgICB0aGlzLmhlYWRlci5sYXN0RWxlbWVudENoaWxkLmFwcGVuZENoaWxkKGhlYWRpbmdIMSk7XG4gIH1cblxuICBnZXRJbnNjcmlwdGlvbkZvcktleShlbGVtZW50Rm9ySW5zY3JpcHRpb24sIGtleSwgc3ltYm9sTW9kKSB7XG4gICAgY29uc3QgZWxlbWVudEZvckluc2NyaXB0aW9uTG9jYWwgPSBlbGVtZW50Rm9ySW5zY3JpcHRpb247XG4gICAgc3dpdGNoIChzeW1ib2xNb2QpIHtcbiAgICAgIGNhc2UgJ3N5bWJvbERlZmF1bHQnOiB7XG4gICAgICAgIGVsZW1lbnRGb3JJbnNjcmlwdGlvbkxvY2FsLmlubmVySFRNTCA9IHRoaXMuaW5zY3JpcHRpb25zW3RoaXMubGFuZ3VhZ2VdW2tleV1cbiAgICAgICAgICAuc3ltYm9sRGVmYXVsdC5zeW1ib2w7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSAnc3ltYm9sU2hpZnRNb2QnOiB7XG4gICAgICAgIGVsZW1lbnRGb3JJbnNjcmlwdGlvbkxvY2FsLmlubmVySFRNTCA9IHRoaXMuaW5zY3JpcHRpb25zW3RoaXMubGFuZ3VhZ2VdW2tleV1cbiAgICAgICAgICAuc3ltYm9sU2hpZnRNb2Quc3ltYm9sICE9PSAnbm9uZSdcbiAgICAgICAgICA/IHRoaXMuaW5zY3JpcHRpb25zW3RoaXMubGFuZ3VhZ2VdW2tleV0uc3ltYm9sU2hpZnRNb2Quc3ltYm9sXG4gICAgICAgICAgOiB0aGlzLmluc2NyaXB0aW9uc1t0aGlzLmxhbmd1YWdlXVtrZXldLnN5bWJvbERlZmF1bHQuc3ltYm9sO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgJ3N5bWJvbENhcHNNb2QnOiB7XG4gICAgICAgIGVsZW1lbnRGb3JJbnNjcmlwdGlvbkxvY2FsLmlubmVySFRNTCA9IHRoaXMuaW5zY3JpcHRpb25zW3RoaXMubGFuZ3VhZ2VdW2tleV1cbiAgICAgICAgICAuc3ltYm9sQ2Fwc01vZC5zeW1ib2wgIT09ICdub25lJ1xuICAgICAgICAgID8gdGhpcy5pbnNjcmlwdGlvbnNbdGhpcy5sYW5ndWFnZV1ba2V5XS5zeW1ib2xDYXBzTW9kLnN5bWJvbFxuICAgICAgICAgIDogdGhpcy5pbnNjcmlwdGlvbnNbdGhpcy5sYW5ndWFnZV1ba2V5XS5zeW1ib2xEZWZhdWx0LnN5bWJvbDtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlICdzeW1ib2xDYXBzU2hpZnRNb2QnOiB7XG4gICAgICAgIGVsZW1lbnRGb3JJbnNjcmlwdGlvbkxvY2FsLmlubmVySFRNTCA9IHRoaXMuaW5zY3JpcHRpb25zW3RoaXMubGFuZ3VhZ2VdW2tleV1cbiAgICAgICAgICAuc3ltYm9sQ2Fwc1NoaWZ0TW9kLnN5bWJvbCAhPT0gJ25vbmUnXG4gICAgICAgICAgPyB0aGlzLmluc2NyaXB0aW9uc1t0aGlzLmxhbmd1YWdlXVtrZXldLnN5bWJvbENhcHNTaGlmdE1vZC5zeW1ib2xcbiAgICAgICAgICA6IHRoaXMuaW5zY3JpcHRpb25zW3RoaXMubGFuZ3VhZ2VdW2tleV0uc3ltYm9sRGVmYXVsdC5zeW1ib2w7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgZGVmYXVsdDoge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBnZW5lcmF0ZUtleUxheW91dHMoa2V5TGF5b3V0TGFuZ3VhZ2UsIGtleU51bWJlckxvY2FsKSB7XG4gICAgY29uc3Qga2V5TGF5b3V0c0N1cnJlbnRMYW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIGtleUxheW91dHNDdXJyZW50TGFuZy5jbGFzc0xpc3QuYWRkKGBrZXktYmFzZV9fJHtrZXlMYXlvdXRMYW5ndWFnZX0ta2V5c2ApO1xuXG4gICAgY29uc3QgbGF5b3V0QXJyID0gW1xuICAgICAgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpLFxuICAgICAgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpLFxuICAgICAgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpLFxuICAgICAgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpLFxuICAgIF07XG4gICAgbGF5b3V0QXJyLmZvckVhY2goKGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCBlbGVtZW50TG9jYWwgPSBlbGVtZW50O1xuICAgICAgZWxlbWVudExvY2FsLmNsYXNzTGlzdC5hZGQoYCR7a2V5TGF5b3V0TGFuZ3VhZ2V9LWtleXNfX2tleS1sYXlvdXRgKTtcbiAgICAgIHN3aXRjaCAoaW5kZXgpIHtcbiAgICAgICAgY2FzZSAwOiB7XG4gICAgICAgICAgZWxlbWVudExvY2FsLmNsYXNzTGlzdC5hZGQoJ2tleS1sYXlvdXQtLWRlZmF1bHQnKTtcbiAgICAgICAgICB0aGlzLmdldEluc2NyaXB0aW9uRm9yS2V5KGVsZW1lbnRMb2NhbCwga2V5TnVtYmVyTG9jYWwsICdzeW1ib2xEZWZhdWx0Jyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSAxOiB7XG4gICAgICAgICAgZWxlbWVudExvY2FsLmNsYXNzTGlzdC5hZGQoJ2tleS1sYXlvdXQtLXNoaWZ0LW1vZCcpO1xuICAgICAgICAgIGVsZW1lbnRMb2NhbC5jbGFzc0xpc3QuYWRkKCdrZXktbGF5b3V0LS1oaWRkZW4nKTtcbiAgICAgICAgICB0aGlzLmdldEluc2NyaXB0aW9uRm9yS2V5KGVsZW1lbnRMb2NhbCwga2V5TnVtYmVyTG9jYWwsICdzeW1ib2xTaGlmdE1vZCcpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGNhc2UgMjoge1xuICAgICAgICAgIGVsZW1lbnRMb2NhbC5jbGFzc0xpc3QuYWRkKCdrZXktbGF5b3V0LS1jYXBzLW1vZCcpO1xuICAgICAgICAgIGVsZW1lbnRMb2NhbC5jbGFzc0xpc3QuYWRkKCdrZXktbGF5b3V0LS1oaWRkZW4nKTtcbiAgICAgICAgICB0aGlzLmdldEluc2NyaXB0aW9uRm9yS2V5KGVsZW1lbnRMb2NhbCwga2V5TnVtYmVyTG9jYWwsICdzeW1ib2xDYXBzTW9kJyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSAzOiB7XG4gICAgICAgICAgZWxlbWVudExvY2FsLmNsYXNzTGlzdC5hZGQoJ2tleS1sYXlvdXQtLWNhcHMtYW5kLXNoaWZ0LW1vZCcpO1xuICAgICAgICAgIGVsZW1lbnRMb2NhbC5jbGFzc0xpc3QuYWRkKCdrZXktbGF5b3V0LS1oaWRkZW4nKTtcbiAgICAgICAgICB0aGlzLmdldEluc2NyaXB0aW9uRm9yS2V5KGVsZW1lbnRMb2NhbCwga2V5TnVtYmVyTG9jYWwsICdzeW1ib2xDYXBzU2hpZnRNb2QnKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBkZWZhdWx0OiB7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGtleUxheW91dHNDdXJyZW50TGFuZy5hcHBlbmRDaGlsZChlbGVtZW50TG9jYWwpO1xuICAgIH0pO1xuICAgIGlmICh0aGlzLnZlcmJvc2VMdmwgPiAxKSB7XG4gICAgICBjb25zb2xlLmxvZyhrZXlMYXlvdXRzQ3VycmVudExhbmcpO1xuICAgIH1cbiAgICByZXR1cm4ga2V5TGF5b3V0c0N1cnJlbnRMYW5nO1xuICB9XG5cbiAgLyoqXG4gICAqIEdlbmVyYXRlIGtleXMgZm9yIGtleWJvYXJkIHdpdGggbGF5b3V0cyBmb3IgbW9kc1xuICAgKiBhbmQga2V5Ym9hcmQgZGlmZmVyZW50IGxhbmd1YWdlIGxheW91dHMuXG4gICAqL1xuICBnZW5lcmF0ZUtleXMoKSB7XG4gICAgLyogR2VuZXJhdGUga2V5cywgY29sdW1uLWdhcHMgYW5kIHJvdy1nYXBzLCBhcyBncmlkIGVsZW1lbnRzLiAqL1xuICAgIGZvciAobGV0IGtleUluZGV4ID0gMTsga2V5SW5kZXggPD0gdGhpcy5rZXlzQ291bnQgKyAodGhpcy5rZXlzQ291bnQgLSAwKTsga2V5SW5kZXggKz0gMSkge1xuICAgICAgaWYgKGtleUluZGV4ICUgMiA9PT0gMCkge1xuICAgICAgICBjb25zdCBrZXlOdW1iZXJUbXAgPSAoa2V5SW5kZXggLyAyKS50b1N0cmluZygxMCk7XG4gICAgICAgIC8qIEFkZCBrZXkgYmFzZS4gKi9cbiAgICAgICAgY29uc3Qga2V5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGtleS5jbGFzc0xpc3QuYWRkKCdrZXlzX19rZXktYmFzZScpO1xuICAgICAgICBrZXkuc2V0QXR0cmlidXRlKFxuICAgICAgICAgICdkYXRhLWV2ZW50LWNvZGUnLFxuICAgICAgICAgIHRoaXMuaW5zY3JpcHRpb25zW3RoaXMubGFuZ3VhZ2VdW2tleU51bWJlclRtcF0uZXZlbnRDb2RlLFxuICAgICAgICApO1xuXG4gICAgICAgIGtleS5hcHBlbmRDaGlsZCh0aGlzLmdlbmVyYXRlS2V5TGF5b3V0cygnZW4nLCBrZXlOdW1iZXJUbXApKTtcblxuICAgICAgICAvKiBBZGQgc3R5bGVzIGZvciBrZXlzIHdpdGggbm9uLXN0YW5kYXJkIHNpemVzLiAqL1xuICAgICAgICBzd2l0Y2ggKCh0aGlzLmluc2NyaXB0aW9uc1t0aGlzLmxhbmd1YWdlXVtrZXlOdW1iZXJUbXBdLnN5bWJvbERlZmF1bHQuc3ltYm9sKSkge1xuICAgICAgICAgIGNhc2UgJ0JhY2tzcGFjZSc6IHtcbiAgICAgICAgICAgIGtleS5jbGFzc0xpc3QuYWRkKCdrZXktYmFzZS0tYmFja3NwYWNlJyk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgICAgY2FzZSAnVGFiJzoge1xuICAgICAgICAgICAga2V5LmNsYXNzTGlzdC5hZGQoJ2tleS1iYXNlLS10YWInKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjYXNlICdcXFxcJzoge1xuICAgICAgICAgICAga2V5LmNsYXNzTGlzdC5hZGQoJ2tleS1iYXNlLS1iYWNrc2xhc2gnKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjYXNlICdDYXBzIExvY2snOiB7XG4gICAgICAgICAgICBrZXkuY2xhc3NMaXN0LmFkZCgna2V5LWJhc2UtLWNhcHNsb2NrJyk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgICAgY2FzZSAnRW50ZXInOiB7XG4gICAgICAgICAgICBrZXkuY2xhc3NMaXN0LmFkZCgna2V5LWJhc2UtLWVudGVyJyk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgICAgY2FzZSAnU2hpZnQnOiB7XG4gICAgICAgICAgICBpZiAodGhpcy5pbnNjcmlwdGlvbnNbdGhpcy5sYW5ndWFnZV1ba2V5TnVtYmVyVG1wXS5zeW1ib2xEZWZhdWx0Lm5hbWUgPT09ICdMZWZ0IFNoaWZ0IGtleScpIHtcbiAgICAgICAgICAgICAga2V5LmNsYXNzTGlzdC5hZGQoJ2tleS1iYXNlLS1zaGlmdC1sZWZ0Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5pbnNjcmlwdGlvbnNbdGhpcy5sYW5ndWFnZV1ba2V5TnVtYmVyVG1wXS5zeW1ib2xEZWZhdWx0Lm5hbWUgPT09ICdSaWdodCBTaGlmdCBrZXknKSB7XG4gICAgICAgICAgICAgIGtleS5jbGFzc0xpc3QuYWRkKCdrZXktYmFzZS0tc2hpZnQtcmlnaHQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjYXNlICdDdHJsJzoge1xuICAgICAgICAgICAgaWYgKHRoaXMuaW5zY3JpcHRpb25zW3RoaXMubGFuZ3VhZ2VdW2tleU51bWJlclRtcF0uc3ltYm9sRGVmYXVsdC5uYW1lID09PSAnTGVmdCBDdHJsIGtleScpIHtcbiAgICAgICAgICAgICAga2V5LmNsYXNzTGlzdC5hZGQoJ2tleS1iYXNlLS1jdHJsLWxlZnQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLmluc2NyaXB0aW9uc1t0aGlzLmxhbmd1YWdlXVtrZXlOdW1iZXJUbXBdLnN5bWJvbERlZmF1bHQubmFtZSA9PT0gJ1JpZ2h0IEN0cmwga2V5Jykge1xuICAgICAgICAgICAgICBrZXkuY2xhc3NMaXN0LmFkZCgna2V5LWJhc2UtLWN0cmwtcmlnaHQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjYXNlICdXaW4nOiB7XG4gICAgICAgICAgICBrZXkuY2xhc3NMaXN0LmFkZCgna2V5LWJhc2UtLXdpbi1sZWZ0Jyk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgICAgY2FzZSAnQWx0Jzoge1xuICAgICAgICAgICAgaWYgKHRoaXMuaW5zY3JpcHRpb25zW3RoaXMubGFuZ3VhZ2VdW2tleU51bWJlclRtcF0uc3ltYm9sRGVmYXVsdC5uYW1lID09PSAnTGVmdCBBbHQga2V5Jykge1xuICAgICAgICAgICAgICBrZXkuY2xhc3NMaXN0LmFkZCgna2V5LWJhc2UtLWFsdC1sZWZ0Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5pbnNjcmlwdGlvbnNbdGhpcy5sYW5ndWFnZV1ba2V5TnVtYmVyVG1wXS5zeW1ib2xEZWZhdWx0Lm5hbWUgPT09ICdSaWdodCBBbHQga2V5Jykge1xuICAgICAgICAgICAgICBrZXkuY2xhc3NMaXN0LmFkZCgna2V5LWJhc2UtLWFsdC1yaWdodCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICAgIGNhc2UgJ1NwYWNlJzoge1xuICAgICAgICAgICAga2V5LmNsYXNzTGlzdC5hZGQoJ2tleS1iYXNlLS1zcGFjZScpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmtleWJvYXJkLmFwcGVuZENoaWxkKGtleSk7XG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAoa2V5SW5kZXggIT09IDEpXG4gICAgICAgICYmIChrZXlJbmRleCAhPT0gMjkpXG4gICAgICAgICYmIChrZXlJbmRleCAhPT0gNTcpXG4gICAgICAgICYmIChrZXlJbmRleCAhPT0gODMpXG4gICAgICAgICYmIChrZXlJbmRleCAhPT0gMTExKVxuICAgICAgKSB7XG4gICAgICAgIC8qIEFkZCBjb2x1bW4tZ2FwLCBhcyBkaXYgaW4gZ3JpZC4gKi9cbiAgICAgICAgY29uc3QgY29sdW1uR2FwRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb2x1bW5HYXBFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2tleXNfX2NvbHVtbi1nYXAnKTtcbiAgICAgICAgdGhpcy5rZXlib2FyZC5hcHBlbmRDaGlsZChjb2x1bW5HYXBFbGVtZW50KTtcbiAgICAgIH0gZWxzZSBpZiAoa2V5SW5kZXggIT09IDEpIHtcbiAgICAgICAgLyogQWRkIHJvdy1nYXAsIGFzIGRpdiBpbiBncmlkLiAqL1xuICAgICAgICBjb25zdCByb3dHYXBFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHJvd0dhcEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgna2V5c19fcm93LWdhcCcpO1xuICAgICAgICB0aGlzLmtleWJvYXJkLmFwcGVuZENoaWxkKHJvd0dhcEVsZW1lbnQpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBHZW5lcmF0ZSBtYWluIEhUTUwgRWxlbWVudCBhbmQgaXRzIGJhc2ljIGNvbnRlbnQuXG4gICAqL1xuICBnZW5lcmF0ZU1haW4oKSB7XG4gICAgLyogR2VuZXJhdGUgbWFpbiAqL1xuICAgIHRoaXMubWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcbiAgICB0aGlzLm1haW4uY2xhc3NMaXN0LmFkZCgnbWFpbicpO1xuXG4gICAgLyogR2VuZXJhdGUgYmFzaWMgY29udGFpbmVycyBhbmQgZGlzcGxheSB0ZXh0YXJlYSAqL1xuICAgIGNvbnN0IGtleWJvYXJkQW5kRGlzcGxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGtleWJvYXJkQW5kRGlzcGxheS5jbGFzc0xpc3QuYWRkKCdrZXlib2FyZC1hbmQtZGlzcGxheScpO1xuICAgIGNvbnN0IGRpc3BsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICAgIGRpc3BsYXkuY2xhc3NMaXN0LmFkZCgna2V5Ym9hcmRfX2Rpc3BsYXknKTtcbiAgICB0aGlzLmtleWJvYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGhpcy5rZXlib2FyZC5jbGFzc0xpc3QuYWRkKCdrZXlib2FyZF9fa2V5cy1jb250YWluZXInKTtcblxuICAgIGlmICh0aGlzLnZlcmJvc2VMdmwgPiAwKSB7XG4gICAgICAvLyBDb25zb2xlIGxvZyB3aXRoIEtleXMgY291bnQgd2FzIGhlcmUuXG4gICAgfVxuXG4gICAgdGhpcy5nZW5lcmF0ZUtleXMoKTtcblxuICAgIC8qIEFwcGVuZCBjb250YWluZXIsIGdlbmVyYXRlZCBrZXlib2FyZCBhbmQgZGlzcGxheSB0byBtYWluICovXG4gICAga2V5Ym9hcmRBbmREaXNwbGF5LmFwcGVuZENoaWxkKGRpc3BsYXkpO1xuICAgIGtleWJvYXJkQW5kRGlzcGxheS5hcHBlbmRDaGlsZCh0aGlzLmtleWJvYXJkKTtcbiAgICB0aGlzLm1haW4uYXBwZW5kQ2hpbGQodGhpcy5jb250YWluZXIuY2xvbmVOb2RlKHRydWUpKTtcbiAgICB0aGlzLm1haW4ubGFzdEVsZW1lbnRDaGlsZC5jbGFzc0xpc3QuYWRkKCdjb250YWluZXItLW1haW4nKTtcbiAgICB0aGlzLm1haW4ubGFzdEVsZW1lbnRDaGlsZC5hcHBlbmRDaGlsZChrZXlib2FyZEFuZERpc3BsYXkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdlbmVyYXRlIGZvb3RlciBIVE1MIEVsZW1lbnQgYW5kIGl0cyBiYXNpYyBjb250ZW50LlxuICAgKi9cbiAgZ2VuZXJhdGVGb290ZXIoKSB7XG4gICAgLyogR2VuZXJhdGUgZm9vdGVyIGFuZCBwYXJhZ3JhcGhzICovXG4gICAgdGhpcy5mb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKTtcbiAgICB0aGlzLmZvb3Rlci5jbGFzc0xpc3QuYWRkKCdmb290ZXInKTtcbiAgICBjb25zdCBmb290ZXJQYXJhZ3JhcGhzID0gW107XG4gICAgZm9yIChsZXQgY291bnQgPSAwOyBjb3VudCA8PSAxOyBjb3VudCArPSAxKSB7XG4gICAgICBmb290ZXJQYXJhZ3JhcGhzLnB1c2goZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpKTtcbiAgICB9XG4gICAgZm9vdGVyUGFyYWdyYXBoc1swXS5pbm5lclRleHQgPSAn0JrQu9Cw0LLQuNCw0YLRg9GA0LAg0YHQvtC30LTQsNC90LAg0LTQu9GPINC+0L/QtdGA0LDRhtC40L7QvdC90L7QuSDRgdC40YHRgtC10LzRiyBXaW5kb3dzJztcbiAgICBmb290ZXJQYXJhZ3JhcGhzWzFdLmlubmVyVGV4dCA9ICfQmtC+0LzQsdC40L3QsNGG0LjRjyDQv9C10YDQtdC60LvRjtGH0LXQvdC40Y8g0Y/Qt9GL0LrQsDog0LvQtdCy0YvQtSBDdHJsICsgU2hpZnQnO1xuXG4gICAgLyogQXBwZW5kIGNvbnRhaW5lciBhbmQgcGFyYWdyYXBocyAqL1xuICAgIHRoaXMuZm9vdGVyLmFwcGVuZENoaWxkKHRoaXMuY29udGFpbmVyLmNsb25lTm9kZSh0cnVlKSk7XG4gICAgdGhpcy5mb290ZXIubGFzdEVsZW1lbnRDaGlsZC5jbGFzc0xpc3QuYWRkKCdjb250YWluZXItLWZvb3RlcicpO1xuICAgIGZvb3RlclBhcmFncmFwaHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgdGhpcy5mb290ZXIubGFzdEVsZW1lbnRDaGlsZC5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZW5lcmF0ZSBhbGwgYmFzaWMgSFRNTCBlbGVtZW50cyBmb3IgQXBwLlxuICAgKi9cbiAgZ2VuZXJhdGVBbGwoKSB7XG4gICAgaWYgKHRoaXMudmVyYm9zZUx2bCA+IDApIHtcbiAgICAgIC8vIENvbnNvbGUgbG9nIHdpdGggbWVzc2FnZSAnKioqKiBHZW5lcmF0aW5nIGJhc2ljIEhUTUwgbGF5b3V0Li4uICoqKionIHdhcyBoZXJlLlxuICAgIH1cblxuICAgIC8qIEZvciBkZWJ1ZyAqL1xuICAgIGNvbnN0IHRlc3RFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGVzdEVsZW1lbnQuc3R5bGUud2lkdGggPSAnMjU2cHgnO1xuICAgIHRlc3RFbGVtZW50LnN0eWxlLmhlaWdodCA9ICcyNTZweCc7XG4gICAgdGVzdEVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ2JsdWUnO1xuXG4gICAgLyogQXBwIHJvb3QgZWxlbWVudCAqL1xuICAgIHRoaXMucm9vdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRoaXMucm9vdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdyb290LWNvbnRhaW5lcicpO1xuXG4gICAgLyogR2VuZXJhdGUgYmFzaWMgZWxlbWVudHMgKi9cbiAgICB0aGlzLmdlbmVyYXRlSGVhZGVyKCk7XG4gICAgdGhpcy5nZW5lcmF0ZU1haW4oKTtcbiAgICB0aGlzLmdlbmVyYXRlRm9vdGVyKCk7XG5cbiAgICAvKiBBcHBlbmQgdG8gcm9vdENvbnRhaW5lciAqL1xuICAgIHRoaXMucm9vdENvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmhlYWRlcik7XG4gICAgdGhpcy5yb290Q29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMubWFpbik7XG4gICAgdGhpcy5yb290Q29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuZm9vdGVyKTtcbiAgfVxuXG4gIGFwcGVuZEhUTUxFbGVtZW50cygpIHtcbiAgICAvKiBBcHBlbmQgdG8gRE9NICovXG4gICAgdGhpcy5yb290LmFwcGVuZENoaWxkKHRoaXMucm9vdENvbnRhaW5lcik7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEVsZW1lbnRDbGFzc09ic2VydmVyIHtcbiAgdGFyZ2V0RWxlbWVudDtcblxuICBjbGFzc1RvV2F0Y2g7XG5cbiAgY2xhc3NBZGRlZENhbGxiYWNrO1xuXG4gIGNsYXNzUmVtb3ZlZENhbGxiYWNrO1xuXG4gIG9ic2VydmVyO1xuXG4gIGxhc3RDbGFzc1N0YXRlO1xuXG4gIGNvbnN0cnVjdG9yKHRhcmdldEVsZW1lbnQsIGNsYXNzVG9XYXRjaCwgY2xhc3NBZGRlZENhbGxiYWNrLCBjbGFzc1JlbW92ZWRDYWxsYmFjaykge1xuICAgIHRoaXMudGFyZ2V0RWxlbWVudCA9IHRhcmdldEVsZW1lbnQ7XG4gICAgdGhpcy5jbGFzc1RvV2F0Y2ggPSBjbGFzc1RvV2F0Y2g7XG4gICAgdGhpcy5jbGFzc0FkZGVkQ2FsbGJhY2sgPSBjbGFzc0FkZGVkQ2FsbGJhY2s7XG4gICAgdGhpcy5jbGFzc1JlbW92ZWRDYWxsYmFjayA9IGNsYXNzUmVtb3ZlZENhbGxiYWNrO1xuICAgIHRoaXMub2JzZXJ2ZXIgPSBudWxsO1xuICAgIHRoaXMubGFzdENsYXNzU3RhdGUgPSB0YXJnZXRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyh0aGlzLmNsYXNzVG9XYXRjaCk7XG4gIH1cblxuICBpbml0KCkge1xuICAgIHRoaXMub2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcih0aGlzLm11dGF0aW9uQ2FsbGJhY2tGbik7XG4gIH1cblxuICBtdXRhdGlvbkNhbGxiYWNrRm4gPSAobXV0YXRpb25zTGlzdCkgPT4ge1xuICAgIG11dGF0aW9uc0xpc3QuZm9yRWFjaCgobXV0YXRpb24pID0+IHtcbiAgICAgIGlmIChtdXRhdGlvbi50eXBlID09PSAnYXR0cmlidXRlcycgJiYgbXV0YXRpb24uYXR0cmlidXRlTmFtZSA9PT0gJ2NsYXNzJykge1xuICAgICAgICBjb25zdCBjdXJyZW50Q2xhc3NTdGF0ZSA9IG11dGF0aW9uLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnModGhpcy5jbGFzc1RvV2F0Y2gpO1xuICAgICAgICBpZiAodGhpcy5sYXN0Q2xhc3NTdGF0ZSAhPT0gY3VycmVudENsYXNzU3RhdGUpIHtcbiAgICAgICAgICB0aGlzLmxhc3RDbGFzc1N0YXRlID0gY3VycmVudENsYXNzU3RhdGU7XG4gICAgICAgICAgaWYgKGN1cnJlbnRDbGFzc1N0YXRlKSB7XG4gICAgICAgICAgICB0aGlzLmNsYXNzQWRkZWRDYWxsYmFjaygpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmNsYXNzUmVtb3ZlZENhbGxiYWNrKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgb2JzZXJ2ZSgpIHtcbiAgICB0aGlzLm9ic2VydmVyLm9ic2VydmUodGhpcy50YXJnZXRFbGVtZW50LCB7IGF0dHJpYnV0ZXM6IHRydWUgfSk7XG4gIH1cblxuICBzdG9wKCkge1xuICAgIHRoaXMub2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICB9XG59XG4iLCJpbXBvcnQgRWxlbWVudENsYXNzT2JzZXJ2ZXIgZnJvbSAnLi9FbGVtZW50Q2xhc3NPYnNlcnZlcic7XG5cbi8qKlxuICogS2V5Ym9hcmRMb2dpY01hbmFnZXIgY2xhc3MgZm9yIGltcGxlbWVudCB0aGUgbG9naWMgb2YgdGhlIHZpcnR1YWwga2V5Ym9hcmQuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEtleWJvYXJkTG9naWNNYW5hZ2VyIHtcbiAgLy8gPGVkaXRvci1mb2xkIGRlc2M9XCJUb2tlbnNcIj5cbiAgcGFnZVJvb3RUb2tlbjtcblxuICBrZXlib2FyZFRva2VuO1xuICAvLyA8L2VkaXRvci1mb2xkIGRlc2M9XCJUb2tlbnNcIj5cblxuICAvLyA8ZWRpdG9yLWZvbGQgZGVzYz1cIkVsZW1lbnRzXCI+XG4gIHBhZ2VSb290O1xuXG4gIGtleWJvYXJkO1xuXG4gIHRleHRGaWVsZDtcbiAgLy8gPC9lZGl0b3ItZm9sZCBkZXNjPVwiRWxlbWVudHNcIj5cblxuICAvLyA8ZWRpdG9yLWZvbGQgZGVzYz1cIkV2ZW50IEhhbmRsZXJzIEJvdW5kZWQgdG8gY2xhc3MgY29udGV4dFwiPlxuICBrZXlib2FyZEV2ZW50SGFuZGxlckJvdW5kZWQ7XG5cbiAgdmlydHVhbEtleWJvYXJkRXZlbnRIYW5kbGVyQm91bmRlZDtcbiAgLy8gPC9lZGl0b3ItZm9sZD5cblxuICAvKipcbiAgICogVmVyYm9zZSBMVkwgZm9yIG1hbmFnZSBvdXRwdXQgdG8gY29uc29sZS5cbiAgICovXG4gIHZlcmJvc2VMdmw7XG5cbiAgc3BlY2lhbEtleXM7XG5cbiAga2V5c0V4Y2VwdGlvbjtcblxuICBrZXlzQWxwaGFiZXRpY1VwcGVyQ2FzZTtcblxuICBsYXN0S2V5RXZlbnQ7XG5cbiAgdGV4dEZpZWxkQ2hhbmdlRXZlbnQ7XG5cbiAga2V5U2hpZnQ7XG5cbiAga2V5Q2FwcztcblxuICBjYXBzU3RhdGU7XG5cbiAgc2hpZnRTdGF0ZTtcblxuICAvKipcbiAgICogS2V5Ym9hcmQgbG9naWMgY2xhc3MgY29uc3RydWN0b3IuXG4gICAqIEBwYXJhbSBwYWdlUm9vdFRva2VuIHtTdHJpbmd9ICAtIHRva2VuIGZvciBBcHAgcGFnZSByb290IGVsZW1lbnQuXG4gICAqIEBwYXJhbSBrZXlib2FyZFRva2VuIHtTdHJpbmd9ICAtIHRva2VuIGZvciBrZXlib2FyZCByb290IGVsZW1lbnQuXG4gICAqIEBwYXJhbSB2ZXJib3NlTHZsICAgIHtudW1iZXJ9ICAtIHZlcmJvc2UgTFZMIGZvciBtYW5hZ2Ugb3V0cHV0IHRvIGNvbnNvbGUuXG4gICAqL1xuICBjb25zdHJ1Y3RvcihwYWdlUm9vdFRva2VuLCBrZXlib2FyZFRva2VuLCB2ZXJib3NlTHZsID0gMCkge1xuICAgIHRoaXMudmVyYm9zZUx2bCA9IHZlcmJvc2VMdmw7XG5cbiAgICB0aGlzLnBhZ2VSb290VG9rZW4gPSBwYWdlUm9vdFRva2VuO1xuICAgIHRoaXMucGFnZVJvb3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMucGFnZVJvb3RUb2tlbik7XG5cbiAgICB0aGlzLmtleWJvYXJkVG9rZW4gPSBrZXlib2FyZFRva2VuO1xuICAgIHRoaXMua2V5Ym9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMua2V5Ym9hcmRUb2tlbik7XG5cbiAgICB0aGlzLnRleHRGaWVsZCA9IHRoaXMua2V5Ym9hcmQucXVlcnlTZWxlY3RvcignLmtleWJvYXJkX19kaXNwbGF5Jyk7XG5cbiAgICB0aGlzLnNwZWNpYWxLZXlzID0gW1xuICAgICAgJ1NoaWZ0JyxcbiAgICAgICdDYXBzIExvY2snLFxuICAgICAgJ0N0cmwnLFxuICAgICAgJ1dpbicsXG4gICAgICAnQWx0JyxcbiAgICAgICdUYWInLFxuICAgIF07XG5cbiAgICB0aGlzLmtleXNFeGNlcHRpb24gPSBbXG4gICAgICAnQ2Fwc0xvY2snLFxuICAgICAgJ1xcJycsXG4gICAgICAnU2hpZnQnLFxuICAgICAgJ0RlbGV0ZScsXG4gICAgICAnQ29udHJvbCcsXG4gICAgICAnTWV0YScsXG4gICAgICAnQWx0JyxcbiAgICAgICcgJyxcbiAgICAgICdBcnJvd1VwJyxcbiAgICAgICdBcnJvd0Rvd24nLFxuICAgICAgJ0Fycm93TGVmdCcsXG4gICAgICAnQXJyb3dSaWdodCcsXG4gICAgXTtcblxuICAgIHRoaXMua2V5c0FscGhhYmV0aWNVcHBlckNhc2UgPSBbXG4gICAgICAnQScsICdCJywgJ0MnLCAnRCcsICdFJywgJ0YnLCAnRycsICdIJyxcbiAgICAgICdJJywgJ0onLCAnSycsICdMJywgJ00nLCAnTicsICdPJywgJ1AnLFxuICAgICAgJ1EnLCAnUicsICdTJywgJ1QnLCAnVScsICdWJywgJ1cnLCAnWCcsXG4gICAgICAnWScsICdaJ107XG5cbiAgICB0aGlzLmxhc3RLZXlFdmVudCA9IG51bGw7XG5cbiAgICAvKiBCaW5kIGNsYXNzIGNvbnRleHQgZm9yIGxpc3RlbmVycyBoYW5kbGVycywgd2hhdCBkZWZpbmVkIGFzIG1ldGhvZCBvZiB0aGlzIGNsYXNzLiAqL1xuICAgIHRoaXMua2V5Ym9hcmRFdmVudEhhbmRsZXJCb3VuZGVkID0gdGhpcy5rZXlib2FyZEV2ZW50SGFuZGxlci5iaW5kKHRoaXMpO1xuXG4gICAgdGhpcy52aXJ0dWFsS2V5Ym9hcmRFdmVudEhhbmRsZXJCb3VuZGVkID0gdGhpcy52aXJ0dWFsS2V5Ym9hcmRFdmVudEhhbmRsZXIuYmluZCh0aGlzKTtcblxuICAgIC8qIE1ha2UgZXZlbnQgZm9yIGNoYW5nZSB0ZXh0IGFyZWEgKi9cbiAgICB0aGlzLnRleHRGaWVsZENoYW5nZUV2ZW50ID0gbmV3IEV2ZW50KCdjaGFuZ2UnKTtcblxuICAgIHRoaXMua2V5U2hpZnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1ldmVudC1jb2RlPVwiU2hpZnRMZWZ0XCJdJyk7XG4gICAgdGhpcy5rZXlDYXBzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtZXZlbnQtY29kZT1cIkNhcHNMb2NrXCJdJyk7XG5cbiAgICB0aGlzLmNhcHNTdGF0ZSA9IGZhbHNlO1xuICAgIHRoaXMuc2hpZnRTdGF0ZSA9IGZhbHNlO1xuICB9XG5cbiAgc2VhcmNoS2V5QnlEYXRhQXRyQW5kQWN0aW9ucyhkYXRhRXZlbnRDb2RlLCBjYWxsYmFjaywgbnVtYmVyID0gMCkge1xuICAgIC8qIEZpbmQgaGl0dGVkIGtleSBieSBYUGF0aC4gKi9cbiAgICBsZXQgcHJlc3NlZEtleSA9IG51bGw7XG4gICAgaWYgKG51bWJlciA9PT0gMCkge1xuICAgICAgcHJlc3NlZEtleSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWV2ZW50LWNvZGU9XCIke2RhdGFFdmVudENvZGV9XCJdYCk7XG4gICAgfVxuICAgIGlmIChudW1iZXIgPT09IDEpIHtcbiAgICAgIHByZXNzZWRLZXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGBbZGF0YS1ldmVudC1jb2RlPVwiJHtkYXRhRXZlbnRDb2RlfVwiXWApO1xuICAgICAgWywgcHJlc3NlZEtleV0gPSBwcmVzc2VkS2V5O1xuICAgIH1cbiAgICBpZiAocHJlc3NlZEtleSkge1xuICAgICAgY2FsbGJhY2socHJlc3NlZEtleSwgdGhpcy5sYXN0S2V5RXZlbnQpO1xuICAgIH0gZWxzZSBpZiAodGhpcy52ZXJib3NlTHZsID4gMCkge1xuICAgICAgLyogQ29uc29sZSBsb2cgd2l0aCBlcnJvciBtZXNzYWdlIHdhcyBoZXJlLiAqL1xuICAgIH1cbiAgfVxuXG4gIGtleWJvYXJkRXZlbnRIYW5kbGVyKGV2ZW50KSB7XG4gICAgaWYgKHRoaXMudmVyYm9zZUx2bCA+IDApIHtcbiAgICAgIC8qIENvbnNvbGUgbG9nIHdpdGggZXZlbnQua2V5IGluZm8gbWVzc2FnZSB3YXMgaGVyZS4gKi9cbiAgICAgIGNvbnNvbGUubG9nKCctLS0tIEtleSBldmVudDonLCBldmVudCk7XG4gICAgfVxuXG4gICAgY29uc3QgZXZlbnRDb2RlRXhjZXB0aW9ucyA9IFtcbiAgICAgICdNZXRhTGVmdCcsXG4gICAgICAnTWV0YVJpZ2h0JyxcbiAgICBdO1xuXG4gICAgLyogR2V0IGN1cnJlbnQga2V5IGV2ZW50IGludG8gY2xhc3MgZmllbGQgKi9cbiAgICB0aGlzLmxhc3RLZXlFdmVudCA9IGV2ZW50O1xuXG4gICAgLyogUHJldmVudCBkZWZhdWx0IGJlaGF2aW91ciBmb3IgYnV0dG9ucyAqL1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBmdW5jdGlvbiB2aXJ0dWFsS2V5Ym9hcmRTaW11bGF0ZUNsaWNrT24oa2V5KSB7XG4gICAgICBjb25zdCBjbGlja1NpbXVsYXRlZEV2ZW50ID0gbmV3IE1vdXNlRXZlbnQoXG4gICAgICAgICdjbGljaycsXG4gICAgICAgIHtcbiAgICAgICAgICB2aWV3OiB3aW5kb3csXG4gICAgICAgICAgYnViYmxlczogdHJ1ZSxcbiAgICAgICAgICBjYW5jZWxhYmxlOiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICAgICk7XG4gICAgICBrZXkuZGlzcGF0Y2hFdmVudChjbGlja1NpbXVsYXRlZEV2ZW50KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjaGFuZ2VLZXlTdGF0ZShrZXksIGV2ZW50TG9jYWwpIHtcbiAgICAgIC8qIENoYW5nZSB2aXN1YWwgKi9cbiAgICAgIGlmIChldmVudExvY2FsLnR5cGUgPT09ICdrZXlkb3duJykge1xuICAgICAgICBrZXkuY2xhc3NMaXN0LmFkZCgna2V5LWJhc2UtLXByZXNzZWQnKTtcbiAgICAgICAgdmlydHVhbEtleWJvYXJkU2ltdWxhdGVDbGlja09uKGtleSk7XG4gICAgICB9IGVsc2UgaWYgKGV2ZW50TG9jYWwudHlwZSA9PT0gJ2tleXVwJykge1xuICAgICAgICBrZXkuY2xhc3NMaXN0LnJlbW92ZSgna2V5LWJhc2UtLXByZXNzZWQnKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBsYXN0S2V5SGl0ID0gZXZlbnQuY29kZTtcblxuICAgIGlmICghZXZlbnRDb2RlRXhjZXB0aW9ucy5pbmNsdWRlcyhsYXN0S2V5SGl0KSkge1xuICAgICAgdGhpcy5zZWFyY2hLZXlCeURhdGFBdHJBbmRBY3Rpb25zKGxhc3RLZXlIaXQsIGNoYW5nZUtleVN0YXRlKTtcbiAgICB9IGVsc2UgaWYgKFxuICAgICAgbGFzdEtleUhpdCA9PT0gJ01ldGFMZWZ0J1xuICAgICAgfHwgbGFzdEtleUhpdCA9PT0gJ01ldGFSaWdodCdcbiAgICApIHtcbiAgICAgIHRoaXMuc2VhcmNoS2V5QnlEYXRhQXRyQW5kQWN0aW9ucygnTWV0YUxlZnQnLCBjaGFuZ2VLZXlTdGF0ZSk7XG4gICAgfVxuICB9XG5cbiAgZGVsZXRlTGFzdFN5bWJvbCgpIHtcbiAgICB0aGlzLnRleHRGaWVsZC52YWx1ZSA9IHRoaXMudGV4dEZpZWxkLnZhbHVlLnNwbGl0KCcnKS5zbGljZSgwLCAtMSkuam9pbignJyk7XG4gICAgdGhpcy50ZXh0RmllbGQuZGlzcGF0Y2hFdmVudCh0aGlzLnRleHRGaWVsZENoYW5nZUV2ZW50KTtcbiAgfVxuXG4gIGRlbGV0ZUFsbCgpIHtcbiAgICB0aGlzLnRleHRGaWVsZC52YWx1ZSA9ICcnO1xuICAgIHRoaXMudGV4dEZpZWxkLmRpc3BhdGNoRXZlbnQodGhpcy50ZXh0RmllbGRDaGFuZ2VFdmVudCk7XG4gIH1cblxuICBpbnB1dFN5bWJvbChzeW1ib2wpIHtcbiAgICB0aGlzLnRleHRGaWVsZC52YWx1ZSArPSBzeW1ib2w7XG4gICAgdGhpcy50ZXh0RmllbGQuZGlzcGF0Y2hFdmVudCh0aGlzLnRleHRGaWVsZENoYW5nZUV2ZW50KTtcbiAgfVxuXG4gIGlucHV0TGluZUJyZWFrKCkge1xuICAgIHRoaXMudGV4dEZpZWxkLnZhbHVlICs9ICdcXG4nO1xuICAgIHRoaXMudGV4dEZpZWxkLmRpc3BhdGNoRXZlbnQodGhpcy50ZXh0RmllbGRDaGFuZ2VFdmVudCk7XG4gIH1cblxuICBpbnB1dFNwYWNlKCkge1xuICAgIHRoaXMudGV4dEZpZWxkLnZhbHVlICs9ICcgJztcbiAgICB0aGlzLnRleHRGaWVsZC5kaXNwYXRjaEV2ZW50KHRoaXMudGV4dEZpZWxkQ2hhbmdlRXZlbnQpO1xuICB9XG5cbiAgdmlydHVhbEtleWJvYXJkRXZlbnRIYW5kbGVyKGV2ZW50KSB7XG4gICAgY29uc3Qga2V5SW5zY3JpcHRpb24gPSBldmVudC5zcmNFbGVtZW50LmlubmVyVGV4dDtcblxuICAgIGlmICghdGhpcy5zcGVjaWFsS2V5cy5pbmNsdWRlcyhrZXlJbnNjcmlwdGlvbikpIHtcbiAgICAgIHN3aXRjaCAoa2V5SW5zY3JpcHRpb24pIHtcbiAgICAgICAgY2FzZSAnQmFja3NwYWNlJzoge1xuICAgICAgICAgIHRoaXMuZGVsZXRlTGFzdFN5bWJvbCgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGNhc2UgJ0RlbCc6IHtcbiAgICAgICAgICB0aGlzLmRlbGV0ZUFsbCgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGNhc2UgJ1NwYWNlJzoge1xuICAgICAgICAgIHRoaXMuaW5wdXRTcGFjZSgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGNhc2UgJ0VudGVyJzoge1xuICAgICAgICAgIHRoaXMuaW5wdXRMaW5lQnJlYWsoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBkZWZhdWx0OiB7XG4gICAgICAgICAgdGhpcy5pbnB1dFN5bWJvbChrZXlJbnNjcmlwdGlvbik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKiBUT0RPOiBXZSBuZWVkIHVzZSBldmVudC5jb2RlIGluc3RlYWQgZXZlbnQua2V5IVxuICAgKiAqL1xuXG4gIGNoYW5nZU1vZExheW91dCgpIHtcbiAgICBjb25zdCBrZXlzID0gWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5rZXlzX19rZXktYmFzZScpXTtcbiAgICBpZiAoKHRoaXMuY2Fwc1N0YXRlID09PSBmYWxzZSkgJiYgKHRoaXMuc2hpZnRTdGF0ZSA9PT0gZmFsc2UpKSB7XG4gICAgICBrZXlzLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBrZXkucXVlcnlTZWxlY3RvcignLmtleS1sYXlvdXQtLWRlZmF1bHQnKS5jbGFzc0xpc3RcbiAgICAgICAgICAucmVtb3ZlKCdrZXktbGF5b3V0LS1oaWRkZW4nKTtcbiAgICAgICAga2V5LnF1ZXJ5U2VsZWN0b3IoJy5rZXktbGF5b3V0LS1zaGlmdC1tb2QnKS5jbGFzc0xpc3RcbiAgICAgICAgICAuYWRkKCdrZXktbGF5b3V0LS1oaWRkZW4nKTtcbiAgICAgICAga2V5LnF1ZXJ5U2VsZWN0b3IoJy5rZXktbGF5b3V0LS1jYXBzLW1vZCcpLmNsYXNzTGlzdFxuICAgICAgICAgIC5hZGQoJ2tleS1sYXlvdXQtLWhpZGRlbicpO1xuICAgICAgICBrZXkucXVlcnlTZWxlY3RvcignLmtleS1sYXlvdXQtLWNhcHMtYW5kLXNoaWZ0LW1vZCcpLmNsYXNzTGlzdFxuICAgICAgICAgIC5hZGQoJ2tleS1sYXlvdXQtLWhpZGRlbicpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmICgodGhpcy5jYXBzU3RhdGUgPT09IGZhbHNlKSAmJiAodGhpcy5zaGlmdFN0YXRlID09PSB0cnVlKSkge1xuICAgICAga2V5cy5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAga2V5LnF1ZXJ5U2VsZWN0b3IoJy5rZXktbGF5b3V0LS1kZWZhdWx0JykuY2xhc3NMaXN0XG4gICAgICAgICAgLmFkZCgna2V5LWxheW91dC0taGlkZGVuJyk7XG4gICAgICAgIGtleS5xdWVyeVNlbGVjdG9yKCcua2V5LWxheW91dC0tc2hpZnQtbW9kJykuY2xhc3NMaXN0XG4gICAgICAgICAgLnJlbW92ZSgna2V5LWxheW91dC0taGlkZGVuJyk7XG4gICAgICAgIGtleS5xdWVyeVNlbGVjdG9yKCcua2V5LWxheW91dC0tY2Fwcy1tb2QnKS5jbGFzc0xpc3RcbiAgICAgICAgICAuYWRkKCdrZXktbGF5b3V0LS1oaWRkZW4nKTtcbiAgICAgICAga2V5LnF1ZXJ5U2VsZWN0b3IoJy5rZXktbGF5b3V0LS1jYXBzLWFuZC1zaGlmdC1tb2QnKS5jbGFzc0xpc3RcbiAgICAgICAgICAuYWRkKCdrZXktbGF5b3V0LS1oaWRkZW4nKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAoKHRoaXMuY2Fwc1N0YXRlID09PSB0cnVlKSAmJiAodGhpcy5zaGlmdFN0YXRlID09PSBmYWxzZSkpIHtcbiAgICAgIGtleXMuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGtleS5xdWVyeVNlbGVjdG9yKCcua2V5LWxheW91dC0tZGVmYXVsdCcpLmNsYXNzTGlzdFxuICAgICAgICAgIC5hZGQoJ2tleS1sYXlvdXQtLWhpZGRlbicpO1xuICAgICAgICBrZXkucXVlcnlTZWxlY3RvcignLmtleS1sYXlvdXQtLXNoaWZ0LW1vZCcpLmNsYXNzTGlzdFxuICAgICAgICAgIC5hZGQoJ2tleS1sYXlvdXQtLWhpZGRlbicpO1xuICAgICAgICBrZXkucXVlcnlTZWxlY3RvcignLmtleS1sYXlvdXQtLWNhcHMtbW9kJykuY2xhc3NMaXN0XG4gICAgICAgICAgLnJlbW92ZSgna2V5LWxheW91dC0taGlkZGVuJyk7XG4gICAgICAgIGtleS5xdWVyeVNlbGVjdG9yKCcua2V5LWxheW91dC0tY2Fwcy1hbmQtc2hpZnQtbW9kJykuY2xhc3NMaXN0XG4gICAgICAgICAgLmFkZCgna2V5LWxheW91dC0taGlkZGVuJyk7XG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKCh0aGlzLmNhcHNTdGF0ZSA9PT0gdHJ1ZSkgJiYgKHRoaXMuc2hpZnRTdGF0ZSA9PT0gdHJ1ZSkpIHtcbiAgICAgIGtleXMuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGtleS5xdWVyeVNlbGVjdG9yKCcua2V5LWxheW91dC0tZGVmYXVsdCcpLmNsYXNzTGlzdFxuICAgICAgICAgIC5hZGQoJ2tleS1sYXlvdXQtLWhpZGRlbicpO1xuICAgICAgICBrZXkucXVlcnlTZWxlY3RvcignLmtleS1sYXlvdXQtLXNoaWZ0LW1vZCcpLmNsYXNzTGlzdFxuICAgICAgICAgIC5hZGQoJ2tleS1sYXlvdXQtLWhpZGRlbicpO1xuICAgICAgICBrZXkucXVlcnlTZWxlY3RvcignLmtleS1sYXlvdXQtLWNhcHMtbW9kJykuY2xhc3NMaXN0XG4gICAgICAgICAgLmFkZCgna2V5LWxheW91dC0taGlkZGVuJyk7XG4gICAgICAgIGtleS5xdWVyeVNlbGVjdG9yKCcua2V5LWxheW91dC0tY2Fwcy1hbmQtc2hpZnQtbW9kJykuY2xhc3NMaXN0XG4gICAgICAgICAgLnJlbW92ZSgna2V5LWxheW91dC0taGlkZGVuJyk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBtb2RTdGF0ZU1hbmFnZXIoc2lnbmFsKSB7XG4gICAgc3dpdGNoIChzaWduYWwpIHtcbiAgICAgIGNhc2UgJ2NhcHMnOiB7XG4gICAgICAgIGlmICh0aGlzLmNhcHNTdGF0ZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICB0aGlzLmNhcHNTdGF0ZSA9IHRydWU7XG4gICAgICAgICAgdGhpcy5jaGFuZ2VNb2RMYXlvdXQoKTtcbiAgICAgICAgICBpZiAodGhpcy52ZXJib3NlTHZsID4gMSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLS0gQ2FwcyBtb2Qgb24hJyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMua2V5Q2Fwcy5jbGFzc0xpc3QuYWRkKCdrZXktYmFzZS0taG9sZCcpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuY2Fwc1N0YXRlID09PSB0cnVlKSB7XG4gICAgICAgICAgdGhpcy5jYXBzU3RhdGUgPSBmYWxzZTtcbiAgICAgICAgICB0aGlzLmNoYW5nZU1vZExheW91dCgpO1xuICAgICAgICAgIGlmICh0aGlzLnZlcmJvc2VMdmwgPiAxKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnLS0tLSBDYXBzIG1vZCBvbiEnKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5rZXlDYXBzLmNsYXNzTGlzdC5yZW1vdmUoJ2tleS1iYXNlLS1ob2xkJyk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlICdzaGlmdCc6IHtcbiAgICAgICAgaWYgKHRoaXMuc2hpZnRTdGF0ZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICB0aGlzLnNoaWZ0U3RhdGUgPSB0cnVlO1xuICAgICAgICAgIHRoaXMuY2hhbmdlTW9kTGF5b3V0KCk7XG4gICAgICAgICAgaWYgKHRoaXMudmVyYm9zZUx2bCA+IDEpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0tIENhcHMgbW9kIG9uIScpO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLmtleVNoaWZ0LmNsYXNzTGlzdC5hZGQoJ2tleS1iYXNlLS1ob2xkJyk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5zaGlmdFN0YXRlID09PSB0cnVlKSB7XG4gICAgICAgICAgdGhpcy5zaGlmdFN0YXRlID0gZmFsc2U7XG4gICAgICAgICAgdGhpcy5jaGFuZ2VNb2RMYXlvdXQoKTtcbiAgICAgICAgICBpZiAodGhpcy52ZXJib3NlTHZsID4gMSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLS0gQ2FwcyBtb2Qgb24hJyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMua2V5U2hpZnQuY2xhc3NMaXN0LnJlbW92ZSgna2V5LWJhc2UtLWhvbGQnKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgb2JzZXJ2ZVNoaWZ0U3RhdGUoKSB7XG4gICAgY29uc3Qgb25TaGlmdE1vZFdvcmsgPSAoKSA9PiB7XG4gICAgICB0aGlzLm1vZFN0YXRlTWFuYWdlcignc2hpZnQnKTtcbiAgICB9O1xuXG4gICAgY29uc3Qgb25VblNoaWZ0TW9kV29yayA9ICgpID0+IHtcbiAgICAgIHRoaXMubW9kU3RhdGVNYW5hZ2VyKCdzaGlmdCcpO1xuICAgIH07XG5cbiAgICBjb25zdCBzaGlmdE9ic2VydmVyID0gbmV3IEVsZW1lbnRDbGFzc09ic2VydmVyKFxuICAgICAgdGhpcy5rZXlTaGlmdCxcbiAgICAgICdrZXktYmFzZS0tcHJlc3NlZCcsXG4gICAgICBvblNoaWZ0TW9kV29yayxcbiAgICAgIG9uVW5TaGlmdE1vZFdvcmssXG4gICAgKTtcblxuICAgIHNoaWZ0T2JzZXJ2ZXIuaW5pdCgpO1xuICAgIHNoaWZ0T2JzZXJ2ZXIub2JzZXJ2ZSgpO1xuICB9XG5cbiAgb2JzZXJ2ZUNhcHNTdGF0ZSgpIHtcbiAgICBjb25zdCBvbkNhcHNNb2RXb3JrID0gKCkgPT4ge1xuICAgICAgdGhpcy5tb2RTdGF0ZU1hbmFnZXIoJ2NhcHMnKTtcbiAgICB9O1xuXG4gICAgY29uc3Qgb25VbkNhcHNNb2RXb3JrID0gKCkgPT4ge1xuICAgIH07XG5cbiAgICBjb25zdCBjYXBzT2JzZXJ2ZXIgPSBuZXcgRWxlbWVudENsYXNzT2JzZXJ2ZXIoXG4gICAgICB0aGlzLmtleUNhcHMsXG4gICAgICAna2V5LWJhc2UtLXByZXNzZWQnLFxuICAgICAgb25DYXBzTW9kV29yayxcbiAgICAgIG9uVW5DYXBzTW9kV29yayxcbiAgICApO1xuXG4gICAgY2Fwc09ic2VydmVyLmluaXQoKTtcbiAgICBjYXBzT2JzZXJ2ZXIub2JzZXJ2ZSgpO1xuICB9XG5cbiAgbGlzdGVuVmlydHVhbEtleWJvYXJkKCkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5rZXlzX19rZXktYmFzZScpLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnZpcnR1YWxLZXlib2FyZEV2ZW50SGFuZGxlckJvdW5kZWQpO1xuICAgIH0pO1xuICB9XG5cbiAgbGlzdGVuUGh5c2ljYWxLZXlib2FyZCgpIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgJ2tleWRvd24nLFxuICAgICAgdGhpcy5rZXlib2FyZEV2ZW50SGFuZGxlckJvdW5kZWQsXG4gICAgKTtcblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAna2V5dXAnLFxuICAgICAgdGhpcy5rZXlib2FyZEV2ZW50SGFuZGxlckJvdW5kZWQsXG4gICAgKTtcbiAgfVxufVxuIiwiLyoqXG4gKiBCYXNpYyBsYXlvdXQgZ2VuZXJhdG9yIGNsYXNzIGltcG9ydC5cbiAqL1xuaW1wb3J0IEJhc2ljU3RydWN0dXJlR2VuZXJhdG9yIGZyb20gJy4vQmFzaWNTdHJ1Y3R1cmVHZW5lcmF0b3InO1xuXG4vKipcbiAqIEtleWJvYXJkIHdvcmsgbG9naWMgY2xhc3MgaW1wb3J0LlxuICovXG5pbXBvcnQgS2V5Ym9hcmRMb2dpY01hbmFnZXIgZnJvbSAnLi9LZXlib2FyZExvZ2ljTWFuYWdlcic7XG5cbi8qIEltcG9ydCBQaWNzICovXG4vLyBFeGFtcGxlOiBpbXBvcnQgYmlyZFBsYWNlaG9sZGVyIGZyb20gJy4uL2Fzc2V0cy9pbWFnZXMvcmF2ZW5fMDEucG5nJztcblxuLyogSW1wb3J0IHN0eWxlcyAqL1xuaW1wb3J0ICcuLi9hc3NldHMvc3R5bGVzL3N0eWxlLmNzcyc7XG5pbXBvcnQgJy4uL2Fzc2V0cy9zdHlsZXMvbm9ybWFsaXplLmNzcyc7XG5cbi8qIERlYnVnIGNvbnRyb2wuICovXG5jb25zdCBkZWJ1Z0hhcmRjb2RlID0gMjtcbi8qKlxuICogVE9ETzogZ2V0IGRlYnVnIGZsYWcgZnJvbSBzb21ld2hlcmUuXG4gKi9cbmNvbnN0IGRlYnVnRmxhZyA9IDE7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5uZWVkZWQtdGVybmFyeVxuY29uc3QgZGVidWcgPSBkZWJ1Z0hhcmRjb2RlID8gZGVidWdIYXJkY29kZSA6IGRlYnVnRmxhZztcblxuLyogQ29uc3RhbnRzIGFuZCB2YXJzIG9mIHN0YXRlcyBhbmQgb3RoZXIgdGhpbmdzLiAqL1xuY29uc3QgbGFuZ3VhZ2VHZW5lcmFsID0gJ2VuJztcblxuLyogT25sb2FkIHdvcmsgZnVuY3Rpb246IGVudHJ5IHBvaW50IGZvciBtb3N0IGNvZGUuICovXG5mdW5jdGlvbiB3aW5kb3dPbkxvYWRXb3JrKCkge1xuICAvKiBDcmVhdGUgYmFzaWMgc3RydWN0dXJlIGdlbmVyYXRvciBpbnN0YW5jZS4gKi9cbiAgY29uc3QgYmFzaWNTdHJ1Y3R1cmVHZW5lcmF0b3IgPSBuZXcgQmFzaWNTdHJ1Y3R1cmVHZW5lcmF0b3IoXG4gICAgJ2JvZHknLFxuICAgIGxhbmd1YWdlR2VuZXJhbCxcbiAgICBkZWJ1ZyxcbiAgKTtcblxuICAvKiBHZW5lcmF0ZSBhbmQgYXBwZW5kIGdlbmVyYXRlZCBlbGVtZW50cyB0byBET00uICovXG4gIGJhc2ljU3RydWN0dXJlR2VuZXJhdG9yLmdlbmVyYXRlQWxsKCk7XG4gIGJhc2ljU3RydWN0dXJlR2VuZXJhdG9yLmFwcGVuZEhUTUxFbGVtZW50cygpO1xuXG4gIC8qIENyZWF0ZSBrZXlib2FyZCB3b3JrIGxvZ2ljIGNsYXNzIGluc3RhbmNlLiAgKi9cbiAgY29uc3Qga2V5Ym9hcmRNYW5hZ2VyID0gbmV3IEtleWJvYXJkTG9naWNNYW5hZ2VyKFxuICAgICdib2R5JyxcbiAgICAnLmtleWJvYXJkLWFuZC1kaXNwbGF5JyxcbiAgICBkZWJ1ZyxcbiAgKTtcblxuICBrZXlib2FyZE1hbmFnZXIubGlzdGVuUGh5c2ljYWxLZXlib2FyZCgpO1xuICBrZXlib2FyZE1hbmFnZXIubGlzdGVuVmlydHVhbEtleWJvYXJkKCk7XG4gIGtleWJvYXJkTWFuYWdlci5vYnNlcnZlU2hpZnRTdGF0ZSgpO1xuICBrZXlib2FyZE1hbmFnZXIub2JzZXJ2ZUNhcHNTdGF0ZSgpO1xufVxuXG4vKiBTdGFydCBvbmxvYWQgd29yayAqL1xud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XG4gIHdpbmRvd09uTG9hZFdvcmsoKTtcbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
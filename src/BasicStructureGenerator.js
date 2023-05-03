/* Import JSON with keys inscriptions and other keys info */
import inscriptions from '../assets/js/inscriptions.json';

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
export default class BasicStructureGenerator {
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
    this.inscriptions = inscriptions;
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

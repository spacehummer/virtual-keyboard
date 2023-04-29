// ESLint rules per file start
/* eslint-disable no-console */
// ESLint rules per file end

import inscriptions from '../assets/js/inscriptions.json';

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
    this.inscriptions = inscriptions;
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

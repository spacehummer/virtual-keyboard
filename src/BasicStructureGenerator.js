// ESLint rules per file start
/* eslint-disable no-console */
// ESLint rules per file end
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
  // </editor-fold desc="Elements">

  verboseLvl;

  constructor(rootToken, verboseLvl = 0) {
    this.verboseLvl = verboseLvl;

    this.rootToken = rootToken;
    this.root = document.querySelector(rootToken);

    this.rootContainer = null;
    this.header = null;
    this.main = null;
    this.footer = null;
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

    this.header.appendChild(headingH1);
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


    keyboardAndDisplay.appendChild(display);
    keyboardAndDisplay.appendChild(keyboard);
    this.main.append(keyboardAndDisplay);
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
    footerParagraphs.forEach((element) => {
      this.footer.appendChild(element);
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

  append() {
    /* Append to DOM */
    this.root.appendChild(this.rootContainer);
  }
}

/**
 * KeyboardLogicManager class for implement the logic of the virtual keyboard.
 */
export default class KeyboardLogicManager {
  // <editor-fold desc="Tokens">
  pageRootToken;

  keyboardToken;
  // </editor-fold desc="Tokens">

  // <editor-fold desc="Elements">
  pageRoot;

  keyboard;
  // </editor-fold desc="Elements">

  // <editor-fold desc="Event Handlers Bounded to class context">
  keyboardEventHandlerBounded;
  // </editor-fold>

  /**
   * Verbose LVL for manage output to console.
   */
  verboseLvl;

  keysException;

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

    /* Bind class context for listeners handlers, what defined as method of this class. */
    this.keyboardEventHandlerBounded = this.keyboardEventHandler.bind(this);
  }

  searchKeyAndActions(searchingText, callback) {
    /* Find hitted key by XPath. */
    const pressedKey = document.evaluate(
      `//button[text() = '${searchingText}']`,
      document,
      null,
      XPathResult.FIRST_ORDERED_NODE_TYPE,
      null,
    ).singleNodeValue;
    if (pressedKey) {
      callback(pressedKey);
    } else if (this.verboseLvl > 0) {
      console.log('!!!! ERROR: cant find virtual key by `event.code!`');
    }
  }

  keyboardEventHandler(event) {
    if (this.verboseLvl > 0) {
      console.log('---- Key event info:', event);
    }

    function changeKeyState(key) {
      key.classList.add('key-base--pressed');
    }

    const lastKeyHit = event.key;
    if (!this.keysException.includes(lastKeyHit)) {
      this.searchKeyAndActions(event.key, changeKeyState);
    } else if (this.keysException.includes(lastKeyHit)) {
      switch (event.key) {
        case 'CapsLock': {
          this.searchKeyAndActions('Caps Lock', changeKeyState);
          break;
        }
        default: {
          break;
        }
      }
    }
  }

  listenPhysicalKeyboard() {
    document.addEventListener(
      'keydown',
      this.keyboardEventHandlerBounded,
    );
  }
}

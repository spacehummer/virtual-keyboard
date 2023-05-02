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
      console.log('---- Key event:', event);
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

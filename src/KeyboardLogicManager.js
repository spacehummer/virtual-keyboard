import ElementClassObserver from './ElementClassObserver';

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

    const shiftObserver = new ElementClassObserver(
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

    const capsObserver = new ElementClassObserver(
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

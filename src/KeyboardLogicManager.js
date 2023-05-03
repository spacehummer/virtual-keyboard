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

    const controlLeftObserver = new ElementClassObserver(
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

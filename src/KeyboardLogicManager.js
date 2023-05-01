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

  /**
   * Keyboard logic class constructor.
   * @param keyboardToken {String}  - token for keyboard root element.
   */
  constructor(pageRootToken, keyboardToken) {
    this.pageRootToken = pageRootToken;
    this.pageRoot = document.querySelector(this.pageRootToken);

    this.keyboardToken = keyboardToken;
    this.keyboard = document.querySelector(this.keyboardToken);
  }
}

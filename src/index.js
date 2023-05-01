// ESLint rules per file start
// ESLint rules per file end

/**
 * Basic layout generator class import.
 */
import BasicStructureGenerator from './BasicStructureGenerator';

/**
 * Keyboard work logic class import.
 */
import KeyboardLogicManager from './KeyboardLogicManager';

/* Import Pics */
// Example: import birdPlaceholder from '../assets/images/raven_01.png';

/* Import styles */
import '../assets/styles/style.css';
import '../assets/styles/normalize.css';

/* Debug control. */
const debugHardcode = 1;
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
  const basicStructureGenerator = new BasicStructureGenerator(
    'body',
    languageGeneral,
    debug,
  );

  /* Generate and append generated elements to DOM. */
  basicStructureGenerator.generateAll();
  basicStructureGenerator.appendHTMLElements();

  /* Create keyboard work logic class instance.  */
  const keyboardManager = new KeyboardLogicManager(
    'body',
    '.keyboard-and-display',
    1,
  );

  keyboardManager.listenPhysicalKeyboard();
  keyboardManager.listenVirtualKeyboard();
}

/* Start onload work */
window.addEventListener('load', () => {
  windowOnLoadWork();
});

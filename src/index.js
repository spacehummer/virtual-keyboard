// ESLint rules per file start
// ESLint rules per file end

// import '../pages/index.html';

/**
 * Utility's import.
 */
/* Example: */
// import {
//   /* Functions: */
// getRandomInt,
//   colorGenerateRandomHex,
//   shuffleFisherYates,
//   addAllFieldsAsTextNode,
// } from "./utils";


/**
 * App phrase content import.
 */
import {
  /* Objects and vars: */
  phrase,
} from "./content";

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
const debugFlag = 0;
// eslint-disable-next-line no-unneeded-ternary
const debug = debugHardcode ? debugHardcode : debugFlag;

/* Constants and vars of states and other things. */
let languageGeneral = "en";


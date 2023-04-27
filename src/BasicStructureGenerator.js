export default class BasicStructureGenerator {
  root;

  rootToken;

  constructor(rootToken) {
    this.rootToken = rootToken;
    this.root = document.querySelector(rootToken);
  }

  generate() {
    const testElement = document.createElement('div');
    testElement.style.width = '256px';
    testElement.style.height = '256px';
    testElement.style.backgroundColor = 'blue';

    this.root.appendChild(testElement);
  }
}

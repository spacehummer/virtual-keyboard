export default class ElementClassObserver {
  targetElement;

  classToWatch;

  classAddedCallback;

  classRemovedCallback;

  observer;

  lastClassState;

  constructor(targetElement, classToWatch, classAddedCallback, classRemovedCallback) {
    this.targetElement = targetElement;
    this.classToWatch = classToWatch;
    this.classAddedCallback = classAddedCallback;
    this.classRemovedCallback = classRemovedCallback;
    this.observer = null;
    this.lastClassState = targetElement.classList.contains(this.classToWatch);
  }

  init() {
    this.observer = new MutationObserver(this.mutationCallbackFn);
  }

  mutationCallbackFn = (mutationsList) => {
    mutationsList.forEach((mutation) => {
      if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
        const currentClassState = mutation.target.classList.contains(this.classToWatch);
        if (this.lastClassState !== currentClassState) {
          this.lastClassState = currentClassState;
          if (currentClassState) {
            this.classAddedCallback();
          } else {
            this.classRemovedCallback();
          }
        }
      }
    });
  };

  observe() {
    this.observer.observe(this.targetElement, { attributes: true });
  }

  stop() {
    this.observer.disconnect();
  }
}

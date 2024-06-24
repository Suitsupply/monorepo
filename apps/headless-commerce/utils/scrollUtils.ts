import { debounce } from './debounce';

const scrollYKey = '--scroll-y';
export const disabledClass = 'scroll-disabled';
const disableStack: boolean[] = [];

export const scrollDebounce = (key: string, cb: Function, scrollElement = window?.document) => {
  scrollElement.addEventListener('scroll', () => {
    debounce(key, cb);
  });
};

export const disableScroll = () => {
  disableStack.push(true);

  if (window?.document?.querySelector('body')?.classList.contains(disabledClass)) {
    return;
  }

  window?.document?.querySelector('html')?.style.setProperty(scrollYKey, `${window?.scrollY * -1}px`);

  requestAnimationFrame(() => {
    window?.document?.querySelector('body')?.classList.add(disabledClass);
  });
};

export const enableScroll = () => {
  disableStack.pop();

  if (disableStack.length === 0) {
    if (!window?.document?.querySelector('body')?.classList.contains(disabledClass)) {
      return;
    }

    const scrollY = Math.abs(
      parseInt(window?.document?.querySelector('html')?.style.getPropertyValue(scrollYKey) || '0'),
    );

    window?.document?.querySelector('body')?.classList.remove(disabledClass);

    requestAnimationFrame(() => {
      window?.scrollTo({ left: scrollX, top: scrollY });

      window?.document?.querySelector('html')?.style.removeProperty(scrollYKey);
    });
  }
};

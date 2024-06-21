export const waitForTransition = async (element: HTMLDivElement, timeout = 300): Promise<void> =>
  new Promise<void>(resolve => {
    const timeoutId = setTimeout(() => {
      resolve();
    }, timeout);

    element.addEventListener(
      'transitionend',
      () => {
        clearTimeout(timeoutId);
        resolve();
      },
      { once: true },
    );
  });

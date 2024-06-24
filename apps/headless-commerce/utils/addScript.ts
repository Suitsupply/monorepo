export const addScript = (url: string, attributes: Record<string, unknown> = {}): void => {
  const script = window?.document?.createElement('script');
  script.type = 'text/javascript';
  script.src = url;

  for (const [key, value] of Object.entries(attributes)) {
    script.setAttribute(key, value as string);
  }

  window?.document?.head.appendChild(script);
};

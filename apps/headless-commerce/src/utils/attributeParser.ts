import type { Maybe } from 'graphql/jsutils/Maybe';

export const parseAttributeFromString = (attributeString: Maybe<string>) => {
  if (!attributeString) {
    return null;
  }

  const [key, value] = attributeString.split('=');

  if (!key || !value) {
    return null;
  }

  return { [key.trim()]: value?.replace(/["']/g, '').trim() };
};

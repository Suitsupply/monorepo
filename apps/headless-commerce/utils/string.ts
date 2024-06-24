export const isString = (value: unknown): value is string => typeof value === 'string';

export const capitalize = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export type ReplaceStringParamsType = {
  inputString: string;
  startMarker: string;
  endMarker: string;
  replacement: string;
};

export const replaceSubstring = ({ inputString, startMarker, endMarker, replacement }: ReplaceStringParamsType) => {
  let result = inputString;
  let startIndex = result.indexOf(startMarker);

  while (startIndex !== -1) {
    const endIndex = result.indexOf(endMarker, startIndex + startMarker.length);

    if (endIndex === -1) {
      break;
    }

    result = result.slice(0, startIndex) + replacement + result.slice(endIndex + endMarker.length);
    startIndex = result.indexOf(startMarker, startIndex + replacement.length);
  }

  return result;
};

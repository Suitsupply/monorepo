// Encode looks for a semicolon
export const encodeExpires = (input: string) => input.replace(/Expires=(.+?),(.+?);/g, 'Expires=$1#$2;');

// Decode cannot look for a semicolon, because at that time the values are split by semicolon.
export const decodeExpires = (input: string) => input.replace(/Expires=(.+?)#(.+?)/g, 'Expires=$1,$2');

export type DecodedPairs = Array<[string, string | boolean]>;

export const decodedPairs = (setCookieValue: string, keys: Array<string>): Array<DecodedPairs> => {
  const splitCookies = decodeExpires(setCookieValue).split(', ');

  return splitCookies
    .map(x => x.split('; '))
    .map(x => {
      return x.map(y => {
        // Because decode looks for a colon, we need to split by colon first
        // before we can decode, otherwise we would have to look at the format
        // of the value (besides comma). Some implementations might not use
        // `GMT`, for example.
        let decoded = y;
        if (y.startsWith('Expires=')) {
          decoded = decodeExpires(y);
        }

        // Take note that values with string value true will have string value
        // true and others like `Secure` which have no value will have boolean
        // value true.
        let key: string;
        let value: string | boolean;
        if (decoded.includes('=')) {
          const splitDecoded = decoded.split('=');
          key = splitDecoded[0];
          value = splitDecoded[1];

          // Only decode these values.
          if (keys.includes(key)) {
            value = decodeURIComponent(value);
          }
        } else {
          key = decoded;
          value = true;
        }

        return [key, value];
      });
    });
};

export const encodeDecodedPairs = (pairs: Array<DecodedPairs>): string => {
  return pairs
    .map(x => x.map(([key, value]) => (typeof value === 'boolean' ? key : [key, value].join('='))).join('; '))
    .join(', ');
};

export const ensureDecodedValues = (setCookieString: string, keys: Array<string>): string => {
  return encodeDecodedPairs(decodedPairs(setCookieString, keys));
};

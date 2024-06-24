const _transformationSeparator = ',';
const _widthPrefix = 'w_';
const _heightPrefix = 'h_';
const _aspectRatioPrefix = 'ar_';
const _aspectRatioseparator = ':';

/** Commerce specific */
const _extractText = (base: string, startsWith: string, endsWith: string): string | undefined => {
  const regexArray = `${base}${endsWith}`.match(new RegExp(`${startsWith}(.+?)${endsWith}`));

  return regexArray?.[1];
};

export const getSize = (url: string): { width: number; height: number } => {
  const bits = new URL(url).pathname
    .split('/')
    .filter(bit => bit.includes(_aspectRatioPrefix) || bit.includes(_widthPrefix) || bit.includes(_heightPrefix));
  const lastBit = bits[bits.length - 1];

  const aspectRatio = _extractText(lastBit, _aspectRatioPrefix, _transformationSeparator);
  let width = parseInt(_extractText(lastBit, _widthPrefix, _transformationSeparator) ?? '0', 10);
  let height = parseInt(_extractText(lastBit, _heightPrefix, _transformationSeparator) ?? '0', 10);

  if (aspectRatio && (width === 0 || height === 0)) {
    const [aspectRatioWidth, aspectRatioHeight] = aspectRatio.split(_aspectRatioseparator).map(Number);

    if (height === 0 && width !== 0) {
      const widthRatio = aspectRatioHeight / aspectRatioWidth;
      height = width * widthRatio;
    }

    if (width === 0 && height !== 0) {
      const heightRatio = aspectRatioWidth / aspectRatioHeight;
      width = height * heightRatio;
    }
  }

  return { width, height };
};

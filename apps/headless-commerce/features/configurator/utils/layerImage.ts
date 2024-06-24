import { IMAGE_CDN_BASE_URL } from '@susu/headless-commerce/config/config';
import type { Locale } from '@susu/headless-commerce/config/locale';
import type { SiteId } from '@susu/headless-commerce/gql/generated/graphql';
import { isAcceptance, isLive } from '@susu/headless-commerce/utils/environment';
import { convertLocaleToCommerceGraphQLFormat } from '@susu/headless-commerce/utils/localeUtils';

export type LayerImageProps = {
  modelId: string;
  productIds: string[];
  siteId: SiteId;
  locale: Locale;
};

export const getComposedLayerApiBaseUrl = () => {
  return isLive()
    ? 'https://vercel.api.lookbuilder.suitsupply.com'
    : isAcceptance()
      ? 'https://vercel.acceptance.api.lookbuilder.suitsupply.com'
      : 'https://vercel.testing.api.lookbuilder.suitsupply.com';
};

export const composeLayerAPIUrl = ({ modelId, productIds, siteId, locale }: LayerImageProps): string => {
  const loc = convertLocaleToCommerceGraphQLFormat(locale);

  const baseUrl = getComposedLayerApiBaseUrl();

  return `${baseUrl}/api/composedUrl?siteID=${siteId}&locale=${loc}&ImageCheck=true&ModelLayer=${modelId}&Products=${productIds.join(
    ',',
  )}`;
};

const transformationCache: Record<string, string> = {};

export const fetchLayerImageTransformation = async (props: LayerImageProps): Promise<string> => {
  try {
    const apiURL = composeLayerAPIUrl(props);

    if (transformationCache[apiURL]) {
      return transformationCache[apiURL];
    }

    const response = await fetch(apiURL);
    if (!response.ok) {
      const responseJSON = await response.json();
      throw new Error(responseJSON.error.message);
    }

    const data = await response.text();

    transformationCache[apiURL] = data;

    return data;
  } catch (error: unknown) {
    throw error as Error;
  }
};

export const getImageUrl = async (props: LayerImageProps): Promise<string> => {
  try {
    const transformation = await fetchLayerImageTransformation(props);

    return `${IMAGE_CDN_BASE_URL}${transformation}`;
  } catch (error: unknown) {
    throw error as Error;
  }
};

const adjustLayerSizeTransformation = (transformBits: Array<string>): Array<string> => {
  const bitsCopy = [...transformBits, 'q_80'].sort();
  const widthIndex = bitsCopy.findIndex(bit => bit.startsWith('w_'));
  const heightIndex = bitsCopy.findIndex(bit => bit.startsWith('h_'));

  let aspectRatio = 0.625;

  let adjustedWidth = 800;
  let adjustedHeight = adjustedWidth / aspectRatio;

  bitsCopy[widthIndex !== -1 ? widthIndex : bitsCopy.length] = `w_${adjustedWidth}`;
  bitsCopy[heightIndex !== -1 ? heightIndex : bitsCopy.length] = `h_${adjustedHeight}`;

  return bitsCopy;
};

export const adjustLayeredTransform = (url: string): string => {
  const adjustedUrl = url.replaceAll('f6f6f6', 'efefef');
  const URLParts = adjustedUrl.split('/');
  const sizedParts = URLParts.filter(bit => bit.includes('h_') || bit.includes('w_'));
  const lastSizedPart = sizedParts.at(-1);

  const transformBits =
    lastSizedPart?.split(',').filter(bit => !['q_', 'dpr_', 'f_', 'fl_'].some(key => bit.includes(key))) ?? [];
  const newBits = adjustLayerSizeTransformation(transformBits);

  const newTransform = [...newBits, 'f_webp', 'fl_progressive:steep'];
  const newUrl = adjustedUrl.replace(lastSizedPart as string, newTransform.join(','));
  const formatLess = newUrl.slice(0, -4);

  return `${formatLess}.jpeg`;
};

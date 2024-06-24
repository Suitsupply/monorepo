import { baseURL } from '@susu/headless-commerce/config/config';
import { type Locale, locales } from '@susu/headless-commerce/config/locale';
import type { NavigationLink, SiteId } from '@susu/headless-commerce/gql/generated/graphql';
import type { Maybe } from 'graphql/jsutils/Maybe';

import { convertLocaleToCookieFormat } from './localeUtils';

export enum ELinkType {
  CATEGORY = 'Category',
  SFCC_CONTENT_ASSET = 'SFCC Content Asset',
  SFCC_URL = 'SFCC UURL',
  SFCC_CONTROLLER = 'SFCC Controller',
  EXTERNAL_URL = 'URL',
}

const getExtraParameters = (extraParameters: Maybe<string>): string => {
  if (extraParameters) {
    const splitByQuestion = extraParameters.split('?');
    const splitByAmpersand = splitByQuestion[splitByQuestion.length - 1]?.split('&');
    const splitByEqual = splitByAmpersand.map((param: string) => param.split('='));
    const asObject = Object.fromEntries(splitByEqual);

    return new URLSearchParams(asObject).toString();
  }

  return '';
};

export const generateUrlFromLinkContent = (link: NavigationLink, siteId: SiteId, locale: Locale): string => {
  if (!link) {
    return '';
  }

  const hasRelativeUrl = Number(link.relativeUrl?.length) > 0;
  const formattedLocaleRelativeUrl = locale;
  const formattedLocaleReferenceId = convertLocaleToCookieFormat(locale);
  const extraParameters = getExtraParameters(link.extraParameters);
  const host = baseURL();

  if (hasRelativeUrl) {
    const queryParams = extraParameters ? `?${extraParameters}` : '';

    return `${host}/${formattedLocaleRelativeUrl}${link.relativeUrl}${queryParams}`;
  } else if (link.linkType === ELinkType.CATEGORY) {
    const baseParams = `?cgid=${link.referenceId}`;
    const queryParams = extraParameters ? `${baseParams}&${extraParameters}` : baseParams;

    return `${host}/on/demandware.store/Sites-${siteId}-Site/${formattedLocaleReferenceId}/Search-Show${queryParams}`;
  } else if (link?.linkType === ELinkType.SFCC_CONTENT_ASSET) {
    const baseParams = `?cid=${link.referenceId}`;
    const queryParams = extraParameters ? `${baseParams}&${extraParameters}` : baseParams;

    return `${host}/on/demandware.store/Sites-${siteId}-Site/${formattedLocaleReferenceId}/Page-Show${queryParams}`;
  } else if (link.linkType === ELinkType.SFCC_CONTROLLER) {
    const queryParams = extraParameters ? `?${extraParameters}` : '';

    return `${host}/on/demandware.store/Sites-${siteId}-Site/${formattedLocaleReferenceId}/${link.referenceId}${queryParams}`;
  } else if (link.linkType === ELinkType.EXTERNAL_URL) {
    return String(link.absoluteUrl);
  }

  return '';
};

export const getAlternateLangs = (resolvedUrl: string, locale: Locale) => {
  const url = new URL(resolvedUrl);

  if (url.pathname.startsWith(`/${locale}`)) {
    url.pathname = url.pathname.slice(7);
  }

  return locales
    .filter(loc => loc !== locale)
    .map(locale => {
      const localeUrl = new URL(url);
      localeUrl.pathname = `/${locale}${url.pathname}`;

      return {
        lang: locale,
        href: localeUrl.toString(),
      };
    })
    .reduce(
      (acc, curr) => {
        acc[curr.lang] = curr.href;
        return acc;
      },
      {} as Record<string, string>,
    );
};

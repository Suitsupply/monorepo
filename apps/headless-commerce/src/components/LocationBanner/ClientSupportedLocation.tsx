'use client';

import { LAST_VISITED_LOCALE } from '@headless-commerce/constants/cookie';
import { useCountry } from '@headless-commerce/contexts/country/client';
import { useLocale } from '@headless-commerce/contexts/locale/client';
import { getCookie } from '@headless-commerce/utils/cookies/browser';
import { convertCookieFormatToLocale } from '@headless-commerce/utils/localeUtils';

import ClientSwitchLocation from './ClientSwitchLocation';
import { LocationSwitched } from './LocationSwitched/LocationSwitched';

export default function ClientSupportedLocation() {
  const country = useCountry();
  const locale = useLocale();
  let lastVisitedCookieLocaleString = getCookie(LAST_VISITED_LOCALE);
  if (!lastVisitedCookieLocaleString) {
    return <ClientSwitchLocation />;
  }

  const lastVisitedLocale = convertCookieFormatToLocale(lastVisitedCookieLocaleString);
  if (lastVisitedLocale !== locale) {
    return <LocationSwitched country={country} />;
  }

  return <ClientSwitchLocation />;
}

export type AllowedLocaleLanguage = 'de' | 'en' | 'es' | 'fr' | 'ko' | 'it' | 'pl' | 'sv' | 'zh';

export type AllowedLocaleCountry =
  | 'ae'
  | 'at'
  | 'au'
  | 'be'
  | 'bg'
  | 'bn'
  | 'ca'
  | 'ch'
  | 'cn'
  | 'cy'
  | 'cz'
  | 'de'
  | 'dk'
  | 'do'
  | 'ee'
  | 'es'
  | 'fi'
  | 'fr'
  | 'gb'
  | 'gh'
  | 'gi'
  | 'gp'
  | 'gr'
  | 'gw'
  | 'hk'
  | 'hr'
  | 'hu'
  | 'ie'
  | 'in'
  | 'ir'
  | 'is'
  | 'it'
  | 'je'
  | 'jp'
  | 'kr'
  | 'li'
  | 'lt'
  | 'lu'
  | 'lv'
  | 'mc'
  | 'mo'
  | 'mt'
  | 'my'
  | 'nl'
  | 'no'
  | 'pl'
  | 'pr'
  | 'pt'
  | 'qa'
  | 'ro'
  | 'se'
  | 'sg'
  | 'si'
  | 'sk'
  | 'us';

export type AllowedLocale = `${AllowedLocaleLanguage}-${AllowedLocaleCountry}`;

export const allowedLocaleLanguages: Array<AllowedLocaleLanguage> = [
  'de',
  'en',
  'es',
  'fr',
  'ko',
  'it',
  'pl',
  'sv',
  'zh',
];

export const allowedLocaleCountries: Array<AllowedLocaleCountry> = [
  'ae',
  'at',
  'au',
  'be',
  'bg',
  'bn',
  'ca',
  'ch',
  'cn',
  'cy',
  'cz',
  'de',
  'dk',
  'do',
  'ee',
  'es',
  'fi',
  'fr',
  'gb',
  'gh',
  'gi',
  'gp',
  'gr',
  'gw',
  'hk',
  'hr',
  'hu',
  'ie',
  'in',
  'ir',
  'is',
  'it',
  'je',
  'jp',
  'kr',
  'li',
  'lt',
  'lu',
  'lv',
  'mc',
  'mo',
  'mt',
  'my',
  'nl',
  'no',
  'pl',
  'pr',
  'pt',
  'qa',
  'ro',
  'se',
  'sg',
  'si',
  'sk',
  'us',
];

export enum Locale {
  'de-at' = 'de-at',
  'de-ch' = 'de-ch',
  'de-de' = 'de-de',
  'de-li' = 'de-li',
  'en-ae' = 'en-ae',
  'en-at' = 'en-at',
  'en-au' = 'en-au',
  'en-be' = 'en-be',
  'en-bg' = 'en-bg',
  'en-bn' = 'en-bn',
  'en-ca' = 'en-ca',
  'en-ch' = 'en-ch',
  'en-cn' = 'en-cn',
  'en-cy' = 'en-cy',
  'en-cz' = 'en-cz',
  'en-de' = 'en-de',
  'en-dk' = 'en-dk',
  'en-do' = 'en-do',
  'en-ee' = 'en-ee',
  'en-es' = 'en-es',
  'en-fi' = 'en-fi',
  'en-fr' = 'en-fr',
  'en-gb' = 'en-gb',
  'en-gh' = 'en-gh',
  'en-gi' = 'en-gi',
  'en-gp' = 'en-gp',
  'en-gr' = 'en-gr',
  'en-gw' = 'en-gw',
  'en-hk' = 'en-hk',
  'en-hr' = 'en-hr',
  'en-hu' = 'en-hu',
  'en-ie' = 'en-ie',
  'en-in' = 'en-in',
  'en-ir' = 'en-ir',
  'en-is' = 'en-is',
  'en-it' = 'en-it',
  'en-je' = 'en-je',
  'en-jp' = 'en-jp',
  'en-kr' = 'en-kr',
  'en-li' = 'en-li',
  'en-lt' = 'en-lt',
  'en-lu' = 'en-lu',
  'en-lv' = 'en-lv',
  'en-mc' = 'en-mc',
  'en-mo' = 'en-mo',
  'en-mt' = 'en-mt',
  'en-my' = 'en-my',
  'en-nl' = 'en-nl',
  'en-no' = 'en-no',
  'en-pl' = 'en-pl',
  'en-pr' = 'en-pr',
  'en-pt' = 'en-pt',
  'en-qa' = 'en-qa',
  'en-ro' = 'en-ro',
  'en-se' = 'en-se',
  'en-sg' = 'en-sg',
  'en-si' = 'en-si',
  'en-sk' = 'en-sk',
  'en-us' = 'en-us',
  'es-es' = 'es-es',
  'es-gi' = 'es-gi',
  'es-pr' = 'es-pr',
  'es-us' = 'es-us',
  'fr-be' = 'fr-be',
  'fr-ca' = 'fr-ca',
  'fr-ch' = 'fr-ch',
  'fr-fr' = 'fr-fr',
  'fr-je' = 'fr-je',
  'fr-mc' = 'fr-mc',
  'ko-kr' = 'ko-kr',
  'it-ch' = 'it-ch',
  'it-it' = 'it-it',
  'pl-pl' = 'pl-pl',
  'sv-se' = 'sv-se',
  'zh-cn' = 'zh-cn',
}

// export const cachedLocales: Array<Locale> = [
//   Locale['en-us'],
//   Locale['de-de'],
//   Locale['en-nl'],
//   Locale['fr-fr'],
//   Locale['en-gb'],
//   Locale['it-it'],
//   Locale['en-ca'],
//   Locale['en-be'],
//   Locale['en-se'],
//   Locale['pl-pl'],
// ];

export const locales: Array<Locale> = [
  Locale['de-at'],
  Locale['de-ch'],
  Locale['de-de'],
  Locale['de-li'],
  Locale['en-ae'],
  Locale['en-at'],
  Locale['en-au'],
  Locale['en-be'],
  Locale['en-bg'],
  Locale['en-ca'],
  Locale['en-ch'],
  Locale['en-cn'],
  Locale['en-cy'],
  Locale['en-cz'],
  Locale['en-de'],
  Locale['en-dk'],
  Locale['en-ee'],
  Locale['en-es'],
  Locale['en-fi'],
  Locale['en-fr'],
  Locale['en-gb'],
  Locale['en-gi'],
  Locale['en-gr'],
  Locale['en-hk'],
  Locale['en-hr'],
  Locale['en-hu'],
  Locale['en-ie'],
  Locale['en-in'],
  Locale['en-is'],
  Locale['en-it'],
  Locale['en-je'],
  Locale['en-jp'],
  Locale['en-kr'],
  Locale['en-li'],
  Locale['en-lt'],
  Locale['en-lu'],
  Locale['en-lv'],
  Locale['en-mc'],
  Locale['en-mo'],
  Locale['en-mt'],
  Locale['en-my'],
  Locale['en-nl'],
  Locale['en-no'],
  Locale['en-pl'],
  Locale['en-pr'],
  Locale['en-pt'],
  Locale['en-qa'],
  Locale['en-ro'],
  Locale['en-se'],
  Locale['en-sg'],
  Locale['en-si'],
  Locale['en-sk'],
  Locale['en-us'],
  Locale['es-es'],
  Locale['es-gi'],
  Locale['es-pr'],
  Locale['es-us'],
  Locale['fr-be'],
  Locale['fr-ca'],
  Locale['fr-ch'],
  Locale['fr-fr'],
  Locale['fr-je'],
  Locale['fr-mc'],
  Locale['ko-kr'],
  Locale['it-ch'],
  Locale['it-it'],
  Locale['pl-pl'],
  Locale['sv-se'],
  Locale['zh-cn'],
];

// 'en-bn',
// 'en-do',
// 'en-gh',
// 'en-gp',
// 'en-gw',
// 'en-ir',
// 'en-mq',
// 'en-mv',
// 'en-tt',
// 'es-do',
// 'fr-gp',
// 'fr-mq',

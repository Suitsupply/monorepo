import Header from '@headless-commerce/components/Header/Header';
import type { Locale } from '@headless-commerce/config/locale';
import { ClientProviders } from '@headless-commerce/contexts/ClientProviders';
import type { HeaderContextValue } from '@headless-commerce/contexts/header';
import type { CMSHeaderType } from '@headless-commerce/contexts/header/types';
import type { Tags } from '@headless-commerce/contexts/tags';
import { countries } from '@headless-commerce/utils/configuration/country';
import { currencies } from '@headless-commerce/utils/configuration/currency';
import { getMessages } from '@headless-commerce/utils/configuration/messages';
import type { ReactNode } from 'react';

import styles from './NoFooterLayout.module.scss';

export type NoFooterLayoutProps = {
  children?: ReactNode;
  header: HeaderContextValue;
  headerType: CMSHeaderType;
  locale: Locale;
  tags: Tags;
};

export default function NoFooterLayout({ children, header, headerType, locale, tags }: Readonly<NoFooterLayoutProps>) {
  const messages = getMessages(locale);

  return (
    <ClientProviders locale={locale} currencies={currencies} countries={countries} messages={messages}>
      <Header header={header} headerType={headerType} locale={locale} tags={tags} />
      <main className={styles['main']}>{children}</main>
    </ClientProviders>
  );
}

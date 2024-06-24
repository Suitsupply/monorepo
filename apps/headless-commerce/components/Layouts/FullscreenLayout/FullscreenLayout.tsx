import Header from '@susu/headless-commerce/components/Header/Header';
import type { Locale } from '@susu/headless-commerce/config/locale';
import { ClientProviders } from '@susu/headless-commerce/contexts/ClientProviders';
import type { HeaderContextValue } from '@susu/headless-commerce/contexts/header';
import type { CMSHeaderType } from '@susu/headless-commerce/contexts/header/types';
import type { Tags } from '@susu/headless-commerce/contexts/tags';
import { countries } from '@susu/headless-commerce/utils/configuration/country';
import { currencies } from '@susu/headless-commerce/utils/configuration/currency';
import { getMessages } from '@susu/headless-commerce/utils/configuration/messages';
import type { ReactNode } from 'react';

import styles from './FullscreenLayout.module.scss';

export type FullscreenLayoutProps = {
  children?: ReactNode;
  header?: HeaderContextValue;
  headerType: CMSHeaderType;
  locale: Locale;
  tags: Tags;
};

export default function FullscreenLayout({
  children,
  header,
  headerType,
  locale,
  tags,
}: Readonly<FullscreenLayoutProps>) {
  const messages = getMessages(locale);

  return (
    <ClientProviders locale={locale} currencies={currencies} countries={countries} messages={messages}>
      {header && <Header header={header} headerType={headerType} locale={locale} tags={tags} />}
      <main className={styles['main']}>{children}</main>
    </ClientProviders>
  );
}

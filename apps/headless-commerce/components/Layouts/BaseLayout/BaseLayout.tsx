import Footer from '@susu/headless-commerce/components/Footer/Footer';
import Header from '@susu/headless-commerce/components/Header/Header';
import type { Locale } from '@susu/headless-commerce/config/locale';
import { ClientProviders } from '@susu/headless-commerce/contexts/ClientProviders';
import type { FooterContextValue } from '@susu/headless-commerce/contexts/footer';
import type { HeaderContextValue } from '@susu/headless-commerce/contexts/header';
import type { CMSHeaderType } from '@susu/headless-commerce/contexts/header/types';
import type { Tags } from '@susu/headless-commerce/contexts/tags';
import { countries } from '@susu/headless-commerce/utils/configuration/country';
import { currencies } from '@susu/headless-commerce/utils/configuration/currency';
import { getMessages } from '@susu/headless-commerce/utils/configuration/messages';
import { type ReactNode } from 'react';

export type BaseLayoutProps = {
  children?: ReactNode;
  footer: FooterContextValue;
  header: HeaderContextValue;
  headerType: CMSHeaderType;
  locale: Locale;
  tags: Tags;
};

export default function BaseLayout({ children, footer, header, headerType, locale, tags }: Readonly<BaseLayoutProps>) {
  const messages = getMessages(locale);

  return (
    <ClientProviders locale={locale} currencies={currencies} countries={countries} messages={messages}>
      <Header header={header} headerType={headerType} locale={locale} tags={tags} />
      <main>{children}</main>
      <Footer footer={footer} locale={locale} />
    </ClientProviders>
  );
}

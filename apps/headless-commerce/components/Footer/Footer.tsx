import DevelopmentWarningBlock from '@susu/headless-commerce/components/DevelepmentWarningBlock/DevelepmentWarningBlock';
import FooterBottomBlock from '@susu/headless-commerce/components/Footer/FooterBottomBlock/FooterBottomBlock';
import FooterContactAndLinksBlock from '@susu/headless-commerce/components/Footer/FooterContactAndLinksBlock/FooterContactAndLinksBlock';
import FooterNewsletterBlock from '@susu/headless-commerce/components/Footer/FooterNewsletterBlock/FooterNewsletterBlock';
import FooterStoreBlock from '@susu/headless-commerce/components/Footer/FooterStoreBlock/FooterStoreBlock';
import FooterUspBlock from '@susu/headless-commerce/components/Footer/FooterUspBlock/FooterUspBlock';
import type { Locale } from '@susu/headless-commerce/config/locale';
import type { FooterContextValue } from '@susu/headless-commerce/contexts/footer';

import styles from './Footer.module.scss';

export type FooterProps = {
  footer: FooterContextValue;
  locale: Locale;
};

export default function Footer({ footer, locale }: FooterProps) {
  return (
    <footer className={styles.footer}>
      {footer?.sections?.map(section => {
        if (!section) {
          return null;
        }

        const { __typename, id, query } = section;

        switch (__typename) {
          case 'FooterBottomBlock':
            return <FooterBottomBlock key={id} query={query} locale={locale} />;

          case 'FooterContactAndLinksBlock':
            return (
              <FooterContactAndLinksBlock icpQuery={section.icpQuery} key={id} query={query} title={section.title} />
            );

          case 'FooterNewsletterBlock':
            return <FooterNewsletterBlock key={id} query={query} />;

          case 'FooterStoreBlock':
            return <FooterStoreBlock key={id} query={query} locale={locale} />;

          case 'FooterUspBlock':
            return <FooterUspBlock key={id} query={query} locale={locale} expertPanels={section.expertPanels} />;

          default:
            return (
              <DevelopmentWarningBlock
                key={id}
                warning={`Missing mapping for contentType ${__typename} -- ID: ${id}`}
              />
            );
        }
      })}
    </footer>
  );
}

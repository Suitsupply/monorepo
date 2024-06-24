import ExternalLink from '@susu/headless-commerce/components/ExternalLink/ExternalLink';
import type { PromotionEvents } from '@susu/headless-commerce/utils/tracking/tracking';

import styles from './SectionTitle.module.scss';

export type SectionTitleProps = {
  titleText?: string | null;
  titleLink?: string;
  titleLinkText?: string | null;
  ctaTrackingData?: PromotionEvents;
};

export default function SectionTitle({ titleText, titleLink, titleLinkText }: SectionTitleProps) {
  return (
    <div className={styles['section-title__wrapper']}>
      <h3 className="title-01-medium">{titleText}</h3>
      {titleLink?.length && (
        <ExternalLink href={titleLink} className={`${styles['section-title__link']} body-regular`}>
          {titleLinkText}
        </ExternalLink>
      )}
    </div>
  );
}

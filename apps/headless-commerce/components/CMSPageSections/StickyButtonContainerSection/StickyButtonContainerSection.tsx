import type {
  StickyButtonQuery,
  StickyButtonQueryVariables,
} from '@susu/headless-commerce/gql/generated/stickyButton.operation';
import type { OperationResult } from 'urql';

import ClientStickyButtonContainerSection from './ClientStickyButtonContainerSection';
import styles from './StickyButtonContainerSection.module.scss';

export type StickyButtonContainerSectionProps = {
  query: OperationResult<StickyButtonQuery, StickyButtonQueryVariables>;
  automationPageId: string;
};

export default function StickyButtonContainer({
  query,
  automationPageId,
}: Readonly<StickyButtonContainerSectionProps>) {
  const { stickyOnDesktop, stickyOnMobile, stickyOnTablet } = query.data?.stickyButton || {};

  const stickyDesktopClass =
    stickyOnDesktop === 'no' ? styles[`sticky-button-container__desktop-${stickyOnDesktop}`] : '';
  const stickyTabletClass = stickyOnTablet === 'no' ? styles[`sticky-button-container__tablet-${stickyOnTablet}`] : '';
  const stickyMobileClass = stickyOnMobile === 'no' ? styles[`sticky-button-container__mobile-${stickyOnMobile}`] : '';

  return (
    <div className={`${stickyDesktopClass} ${stickyTabletClass} ${stickyMobileClass}`}>
      <ClientStickyButtonContainerSection query={query} automationPageId={automationPageId} />
    </div>
  );
}

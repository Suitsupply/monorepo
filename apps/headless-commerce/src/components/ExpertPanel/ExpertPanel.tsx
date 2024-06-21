import { ResponsiveImage } from '@headless-commerce/components/ResponsiveImage/ResponsiveImage';
import type {
  ExpertPanelQuery,
  ExpertPanelQueryVariables,
} from '@headless-commerce/gql/generated/expertPanel.operation';
import type { PanelButtonWithIcon } from '@headless-commerce/gql/generated/graphql';
import { generateIdentifier } from '@headless-commerce/utils/identifier';
import { useMemo } from 'react';
import type { OperationResult } from 'urql';

import ClientButtonWithIcon from '../ButtonWithIcon/ClientButtonWithIcon';
import styles from './ExpertPanel.module.scss';

export type ExpertPanelProps = {
  id: string;
  query: OperationResult<ExpertPanelQuery, ExpertPanelQueryVariables>;
};

export default function ExpertPanel({ query }: Readonly<ExpertPanelProps>) {
  const images = useMemo(
    () => ({ cloudinaryMobileImage: query.data?.panelContentWrapper?.cloudinaryImage }),
    [query.data?.panelContentWrapper?.cloudinaryImage],
  );
  const sizes = useMemo(
    () => ({
      xs: '20vw',
    }),
    [],
  );

  return (
    <div className={styles['expert-panel']}>
      <div className={styles['expert-panel__image']}>
        <ResponsiveImage
          source="cloudinary"
          images={images}
          title={query.data?.panelContentWrapper?.title as string}
          sizes={sizes}
        />
      </div>

      <h2 className="title-02-medium">{query.data?.panelContentWrapper?.title}</h2>
      {query.data?.panelContentWrapper?.panelContentCollection?.items?.map(item => {
        return <ClientButtonWithIcon medium="cs_panel" data={item as PanelButtonWithIcon} key={generateIdentifier()} />;
      })}
    </div>
  );
}

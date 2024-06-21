import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { ClientStoryboardLink } from '@headless-commerce/components/HomepageSections/StoryboardBlock/StoryboardLink/ClientStoryboardLink';
import type { Locale } from '@headless-commerce/config/locale';
import type { Cta } from '@headless-commerce/gql/generated/graphql';
import type { StoryboardQuery, StoryboardQueryVariables } from '@headless-commerce/gql/generated/storyboard.operation';
import { generateIdentifier } from '@headless-commerce/utils/identifier';
import type { OperationResult } from 'urql';

import ClientStoryboardBlock from './ClientStoryboardBlock';

export type StoryboardBlockProps = {
  locale: Locale;
  query: OperationResult<StoryboardQuery, StoryboardQueryVariables>;
};

export default function StoryboardBlock({ query }: Readonly<StoryboardBlockProps>) {
  const links = query.data?.storyboardBanner?.storyboardItemsCollection?.items ?? [];

  return (
    <ClientStoryboardBlock>
      {links.filter(Boolean).map(cta => {
        return cta?.text?.json ? (
          documentToReactComponents(cta?.text?.json)
        ) : (
          <ClientStoryboardLink key={cta?.sys?.id || cta?.title || generateIdentifier()} cta={cta as Cta} />
        );
      })}
    </ClientStoryboardBlock>
  );
}

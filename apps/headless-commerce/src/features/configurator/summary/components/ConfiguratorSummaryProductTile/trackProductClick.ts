import type { Locale } from '@headless-commerce/config/locale';
import { customerPromise } from '@headless-commerce/contexts/customer';
import type {
  AffiliationValueType,
  CategoryValueType,
  ItemListNameValueType,
  ListIdValueType,
  MixAndMatchValueType,
  PlpGridImagesValueType,
  VariantValueType,
} from '@headless-commerce/libs/avo/avo';
import { enrichEvent } from '@headless-commerce/libs/segment/utils';
import type { CountryConfiguration } from '@headless-commerce/types/CountryConfiguration';
import type { Customer } from '@headless-commerce/types/Customer';
import type { PageType } from '@headless-commerce/types/PageType';
import { trackEvent } from '@headless-commerce/utils/tracking/tracking';

import type { ConfiguratorProduct } from '../types';

export const trackProductClick = ({
  country,
  currentUrl,
  index,
  locale,
  locationId,
  pageType,
  product,
}: {
  country: CountryConfiguration;
  currentUrl: string;
  customer: Customer;
  index: number;
  locale: Locale;
  locationId: string;
  pageType: PageType;
  product: ConfiguratorProduct;
}) => {
  (async () => {
    await customerPromise;
    const { categoryStep } = product;

    trackEvent({
      segment: {
        event: 'productClicked',
        properties: enrichEvent(
          {
            country,
            locale,
          },
          {
            affiliation: `webstore-${country.ecommerce.currencyCode.toLowerCase()}` as AffiliationValueType,
            cartId: '',
            category: categoryStep as CategoryValueType,
            fitId: product.fitId,
            imageUrl: product.mobileImage.url as string,
            itemCategory2: '',
            itemCategory3: '',
            itemCategory4: '',
            itemCategory5: '',
            itemListName: 'black tie package' as ItemListNameValueType,
            listId: 'black-tie-package_configurator' as ListIdValueType,
            locationId: locationId,
            mixAndMatch: 'false' as MixAndMatchValueType,
            name: product.name,
            onlineMaterial: product.onlineMaterial,
            pageType: pageType,
            plpGridImages: '' as PlpGridImagesValueType,
            position: index + 1,
            price: product.price,
            productId: product.id,
            productSetId: '',
            quantity: 1,
            shopTheLookId: '',
            sku: product.id,
            url: currentUrl,
            value: product.price,
            variant: '' as VariantValueType,
          },
        ),
      },
    });
  })();
};

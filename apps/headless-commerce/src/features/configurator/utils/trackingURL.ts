import { URLData } from '@headless-commerce/utils/tracking/segment';

export const configuratorURLData = (
  style: 'two-piece' | 'three-piece',
  step: string,
): {
  url: string;
  locationId: string;
  path: string;
} => {
  const { url, locationId } = URLData();

  const locationIdObject = new URL(locationId);
  const URLObject = new URL(url);

  locationIdObject.pathname += `/${style}-tuxedo/${step}`;
  URLObject.pathname += `/${style}-tuxedo/${step}`;

  return {
    url: URLObject.toString(),
    locationId: locationIdObject.toString(),
    path: URLObject.pathname,
  };
};

export const parseQueryStringProductIds = (ids: string): Array<string> => {
  if (!ids?.length) {
    throw new Error('No product ids');
  }
  const decodedIds = decodeURIComponent(ids);
  if (!decodedIds.includes(',')) {
    throw new Error('Invalid Format');
  }
  const splitIds = decodedIds.split(',');
  if (splitIds.some(id => !id.length)) {
    throw new Error('Invalid Format');
  }
  return splitIds;
};

/**
 * Utility function for properly formatting prices that are retreived from commerce GraphQL api.
 * TODO: In future this should be fixed on BE side, but for now we do it like this.
 * @param price {string} - Price that should be adjusted
 * @returns Adjusted price.
 */
export const adjustPriceFormat = (price: string) => {
  const parsedPrice = Number(price);
  if (isNaN(parsedPrice)) {
    return Number(price.slice(1));
  }
  return parsedPrice;
};

export type WarehouseConfiguration = {
  countryCode: string;
  stateCode: string;
  postalCode: string;
  city: string;
  closingtime: `${number}${number}:${number}${number}`;
  extraLeadTime: number;
  premiumPackagingAllowed: boolean;
  outletExtraLeadTime: number;
  isPaazlEnabled: true;
  webshopID: string;
  apiKey: string;
  apiToken: string;
};

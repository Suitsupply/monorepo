export const ocapiHostname = `https://${process.env.NEXT_PUBLIC_SFCC_ENVIRONEMENT_BASE_URL}`;
export const ocapiVersion = process.env.NEXT_PUBLIC_SFCC_OCAPI_VERSION ?? 'v23_2';

export function ocapiShopAPIBaseUrl(siteId: string) {
  return `${ocapiHostname}/s/${siteId}/dw/shop/${ocapiVersion}`;
}

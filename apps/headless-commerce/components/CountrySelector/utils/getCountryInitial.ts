export const getCountryInitial = (countryName: string) =>
  countryName.toLowerCase().startsWith('the') ? countryName.charAt(4) : countryName.charAt(0).toUpperCase();

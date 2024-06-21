// Function to return new cookies values
// eslint-disable-next-line class-methods-use-this

export type CookieType = {
  name: string;
  value: string;
  url?: string;
  domain?: string;
  path?: string;
  expires?: number;
  httpOnly?: boolean;
  secure?: boolean;
  sameSite?: 'Strict' | 'Lax' | 'None';
};

export function setTestCookieVals(): Array<CookieType> {
  return [
    // Salesforce
    {
      domain: 'localhost',
      // expirationDate: 1727450481.193513,
      // hostOnly: true,
      httpOnly: false,
      name: 'cookie-message',
      path: '/',
      sameSite: 'None',
      secure: true,
      // session: false,
      // storeId: '0',
      value: '1',
      // id: 34,
    },

    // Headless
    {
      domain: 'localhost',
      // expirationDate: 1727450481.193513,
      // hostOnly: true,
      httpOnly: false,
      name: 'OptanonAlertBoxClosed',
      path: '/',
      sameSite: 'None',
      secure: true,
      // session: false,
      // storeId: '0',
      value: new Date().toISOString(),
      // id: 34,
    },
  ];
}

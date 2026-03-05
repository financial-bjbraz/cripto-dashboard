// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  bffUrl: 'http://localhost:3000',
  // Get your CoinMarketCap API key at https://coinmarketcap.com/api/
  // Leave empty to use the sandbox demo key (fake data)
  coinMarketCapApiKey: '',
  // Get your Reown Project ID at https://cloud.reown.com
  reownProjectId: 'YOUR_REOWN_PROJECT_ID',
  // Cognito Hosted UI — OAuth2 Authorization Code + PKCE
  oidcConfig: {
    authority: 'https://cognito-idp.us-east-1.amazonaws.com/us-east-1_1jVdBHfqN',
    client_id: '7kpe7t9iqpect9e3ljirjp2c39',
    redirect_uri: 'http://localhost:4200',
    response_type: 'code',
    scope: 'email openid phone',
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

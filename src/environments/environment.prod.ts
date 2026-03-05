export const environment = {
  production: true,
  bffUrl: '/api',
  coinMarketCapApiKey: '',
  reownProjectId: 'YOUR_REOWN_PROJECT_ID',
  // Cognito Hosted UI — OAuth2 Authorization Code + PKCE
  oidcConfig: {
    authority: 'https://cognito-idp.us-east-1.amazonaws.com/us-east-1_1jVdBHfqN',
    client_id: '7kpe7t9iqpect9e3ljirjp2c39',
    redirect_uri: 'https://d84l1y8p4kdic.cloudfront.net',
    response_type: 'code',
    scope: 'email openid phone',
  },
};

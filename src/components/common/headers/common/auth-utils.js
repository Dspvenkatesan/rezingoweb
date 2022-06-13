import { UserAgentApplication } from 'msal';

export const requiresInteraction = (errorMessage) => {
  if (!errorMessage || !errorMessage.length) {
    return false;
  }

  return (
    errorMessage.indexOf('consent_required') > -1 ||
    errorMessage.indexOf('interaction_required') > -1 ||
    errorMessage.indexOf('login_required') > -1
  );
};

export const fetchMsGraph = async (url, accessToken) => {
  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return response.json();
};

export const isIE = () => {
  const ua = window.navigator.userAgent;
  const msie = ua.indexOf('MSIE ') > -1;
  const msie11 = ua.indexOf('Trident/') > -1;

  // If you as a developer are testing using Edge InPrivate mode, please add "isEdge" to the if check
  // const isEdge = ua.indexOf("Edge/") > -1;

  return msie || msie11;
};

export const AUTH_SCOPES = {
  OPENID: 'openid',
  OFFLINE_ACCESS: 'offline_access',
  PROFILE: 'profile'
};

export const AUTH_REQUESTS = {
  LOGIN: {
    scopes: [AUTH_SCOPES.OPENID, AUTH_SCOPES.PROFILE],
  },
  EMAIL: {
    scopes: [],
  },
  REFRESH_TOKEN: {
    scopes: ['https://rezingoapp.b2clogin.com/rezingoapp.onmicrosoft.com/B2C_1_HealthAppUF'],
  },
};

export const msalApp = new UserAgentApplication({
  auth: {
    clientId: '9f1c1b83-7f53-4a64-8b42-c39b5c8275dd',
    // authority: 'https://reactauth.b2clogin.com/tfp/reactauth.onmicrosoft.com/B2C_1_React_Authentication_Sign_In/',
    // authority:'https://rezingoapp.b2clogin.com/rezingoapp.onmicrosoft.com/B2C_1_HealthAppUF',
    // authority:'https://login.microsoftonline.com/common/',
    authority: "https://rezingoapp.b2clogin.com/rezingoapp.onmicrosoft.com/B2C_1_HealthAppUF",
    knownAuthorities: ["rezingoapp.b2clogin.com"],
    validateAuthority: 'false',
    redirectUri: 'http://rezingo.com/',
    postLogoutRedirectUri: 'http://rezingo.com/',
    navigateToLoginRequestUrl: 'false',
  },
 


  cache: {
    cacheLocation: 'sessionStorage',
    storeAuthStateInCookie: isIE(),
  },
  system: {
    navigateFrameWait: 0,
  },
});
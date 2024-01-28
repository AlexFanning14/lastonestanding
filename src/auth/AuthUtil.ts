const { REACT_APP_COGNITO_DOMAIN, REACT_APP_CLIENT_ID, REACT_APP_SCOPES, REACT_APP_REDIRECT_URI } = process.env;

function getAuthURL() : string {
    return `${REACT_APP_COGNITO_DOMAIN}/oauth2/authorize?response_type=token&identity_provider=Okta&client_id=${REACT_APP_CLIENT_ID}&redirect_uri=${REACT_APP_REDIRECT_URI}&scope=${REACT_APP_SCOPES}`;
}

function retrieveAccessToken(url: string) {
    return window.location.hash.split("&")[0].slice(14); // 14 is length of access_token=
}

export {
    getAuthURL,
    retrieveAccessToken
};

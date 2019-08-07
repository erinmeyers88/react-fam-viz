import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import FamilySearch from './vendor/fs-js-lite';

const clientId = 'a02j000000Bp9pzAAB';
const redirectURI = 'http://localhost:3000';

const fs = new FamilySearch({
  appKey: clientId,
  redirectUri: redirectURI,
  saveAccessToken: true,
  tokenCookie: 'FS_AUTH_TOKEN'
});


ReactDOM.render(<App fs={fs}/>, document.getElementById('root'));
registerServiceWorker();

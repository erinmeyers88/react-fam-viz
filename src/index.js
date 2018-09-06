import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import FamilySearch from './vendor/fs-js-lite';

const clientId = 'a02f100000Tlq0zAAB';
const redirectURI = 'http://localhost:3000';
let currentPerson;

const fs = new FamilySearch({
  environment: 'intergration',
  appKey: clientId,
  redirectUri: redirectURI,
  saveAccessToken: true,
  tokenCookie: 'FS_AUTH_TOKEN'
});


ReactDOM.render(<App fs={fs}/>, document.getElementById('root'));
registerServiceWorker();

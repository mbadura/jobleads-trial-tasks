import '@babel/polyfill';
import './scss/main.scss';

import './js/1-tools/_detectos';

import React from 'react';
import ReactDOM from 'react-dom';

import App from './js/app';

ReactDOM.render(
    <App />,
    document.getElementById('root')
);

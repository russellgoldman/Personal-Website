import React from 'react';
import ReactDOM from 'react-dom';
import WebFont from 'webfontloader';
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

WebFont.load({
  google: {
    families: ['Roboto:300,400,400i,500,700', 'sans-serif'],
  },
});

ReactDOM.render(<App cache/>, document.getElementById('root'));
registerServiceWorker();

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Landing from './screens/Landing';
import * as serviceWorker from './serviceWorker';
import 'rsuite/dist/styles/rsuite-default.css'

ReactDOM.render(
    <Landing />,
  document.getElementById('root')
);

serviceWorker.unregister();

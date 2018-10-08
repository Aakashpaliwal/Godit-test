import 'bootstrap';
import 'jquery/dist/jquery';
import 'react-popper';
import 'react-fontawesome';

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
<BrowserRouter>
<App />
</BrowserRouter>, document.getElementById('root'));
registerServiceWorker();

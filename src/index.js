import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './views/App'

import { BrowserRouter as Router } from 'react-router-dom';

//Font-awesome
import './fontawesome/css/fontawesome.min.css';
import './fontawesome/css/solid.min.css';
import './fontawesome/css/brands.min.css';
import './fontawesome/css/light.min.css';
import './fontawesome/css/regular.min.css';

ReactDOM.render(
    <Router>
      <App />
    </Router>,
    document.getElementById('root')
);

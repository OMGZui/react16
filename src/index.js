import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import registerServiceWorker from './registerServiceWorker';
import Apply from './apply/apply';
import './apply/apply.css';

ReactDOM.render(<Apply />, document.getElementById('root'));
registerServiceWorker();

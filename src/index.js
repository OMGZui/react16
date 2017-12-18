import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Apply from './apply/apply';
import './apply/apply.css';

ReactDOM.render(
    <Apply/>, document.getElementById('root'));
registerServiceWorker();

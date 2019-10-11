import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Imc from './main/Imc';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<div><h1>Calculo IMC</h1><Imc /></div>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

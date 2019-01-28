import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'
import { Router } from 'react-router-dom'
import createHistory from 'history/createBrowserHistory';
import "font-awesome/css/font-awesome.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import './index.css';
import App from './components/App';

const history = createHistory();
const options = {
    position: 'bottom center',
    timeout: 4000,
    offset: '30px',
    transition: 'scale'
  }
ReactDOM.render(
<Router history={history}>
<AlertProvider template={AlertTemplate} {...options}>
<App history={history}/>
</AlertProvider>
</Router>
, document.getElementById('root'));



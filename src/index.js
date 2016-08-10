import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/Store';
import {Provider} from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
//import './styles/styles.css';

const store = configureStore();  //passing a paramenter here will override the store initial state, useful for SSR
render(
    <Provider store={store}>
        <Router history={browserHistory} routes={routes} />
    </Provider>,
    document.getElementById('app')
);

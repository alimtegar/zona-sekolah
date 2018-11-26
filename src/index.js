import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';
import store from './store';

/* CSS + JS */
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap-select/dist/css/bootstrap-select.min.css';
import 'bootstrap-select/dist/js/bootstrap-select.min';
import './index.css';

store.firebaseAuthIsReady.then(() => {
    ReactDOM.render(
        <Provider store={store}>
            <App/>
        </Provider>
        , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
    serviceWorker.unregister();
});

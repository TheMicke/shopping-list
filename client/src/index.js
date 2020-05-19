import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';


import Login from './components/Login/Login';


ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
            <hr />
            <Login />
        </Provider>
    </BrowserRouter>,
    document.getElementById('root'),
);

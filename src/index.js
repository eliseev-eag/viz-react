import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from "react-router-dom";
import './index.css';
import { store } from './store';
import App from './App/App';
import registerServiceWorker from './registerServiceWorker';

const renderApp = () =>
    <Router>
        <Provider store={store}>
            <App />
        </Provider>
    </Router>

ReactDOM.render(renderApp(), document.getElementById('root'));
registerServiceWorker();

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './components/app';
import { Provider } from 'react-redux';
import reducer from './components/reducer/reducer';
import { createStore } from 'redux';

const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
document.getElementById('root'));



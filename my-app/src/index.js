import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';

import { Provider } from 'react-redux'
import { createStore } from 'redux'

import reducers from './Redux/Reducers'

ReactDOM.render(
    <Provider store={createStore(reducers)}>
        <App/>
    </Provider> , document.querySelector('#root')
)

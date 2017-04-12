import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import RootReducer from './reducers';
import actions from './actions/';
import App from './components/App'
const store = createStore(RootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
ReactDOM.render(
<Provider store ={store}>
    <App />
</Provider>,
  document.getElementById('root')
);

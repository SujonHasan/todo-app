import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App/App';
import { Provider } from 'react-redux';

import { createStore } from 'redux';
import rootReducer from "reducers";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={ createStore(rootReducer)}>
      <App />
    </Provider>
  </React.StrictMode>
);


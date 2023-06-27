import React from 'react';
import ReactDOM from 'react-dom/client';
// need provider to pass all of our store data, and get access to it.
import { Provider } from 'react-redux';
import { App } from 'App';
import './index.css';
import store from './redux/store';
// stores the current location in the browser's address bar using clean URLs and navigates using the browser's built-in history stack.
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

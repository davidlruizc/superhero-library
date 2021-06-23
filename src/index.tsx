import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

// Argon Design System
import 'assets/styles/index.css';
import 'assets/icons/nucleo/css/nucleo.css';
import 'assets/icons/font-awesome/css/font-awesome.min.css';
import 'assets/styles/argon-dashboard-react.css';
import Home from 'pages/Home';
import { createStore } from 'redux';
import rootReducer from 'states';
import { Provider } from 'react-redux';
import { ToastProvider } from 'react-toast-notifications';

const store = createStore(rootReducer);

ReactDOM.render(
  <ToastProvider autoDismiss autoDismissTimeout={5000}>
    <Provider store={store}>
      <React.StrictMode>
        <Home />
      </React.StrictMode>
    </Provider>
  </ToastProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

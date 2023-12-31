import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { StoresProvider } from './stores';
import { Provider } from 'react-redux'
import store from './redux/store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <StoresProvider>
        <App />
      </StoresProvider>
    </Provider>

  </React.StrictMode>
);

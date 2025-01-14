import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AuthContextProvider } from './context/AuthContext';
import { SearchContextProvider } from './context/SearchContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { HelmetProvider } from 'react-helmet-async';
import { StoreProvider } from './components/Store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <SearchContextProvider>
        <StoreProvider>
          <HelmetProvider>
            <App />
          </HelmetProvider>
        </StoreProvider>
      </SearchContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);

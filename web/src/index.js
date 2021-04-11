import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import CookieConsentPanel from 'Panels/CookieConsentPanel';
import { StoreProvider } from 'Containers/StoreProvider';
import ErrorBoundary from 'Containers/ErrorBoundary';
import { QueryClient, QueryClientProvider } from 'react-query'
import urlRoutes from './config/urlRoutes';
import { BlocksPage } from './components/pages';
import 'antd/dist/antd.css';
import './App.css';

const client = new QueryClient();

const App = () => {
  return (
    <Router>
      <div className="pageContainer">
        <Route exact path={urlRoutes.HOME} component={BlocksPage} />
      </div>
      <CookieConsentPanel />
    </Router>
  );
}


const rootElement = document.getElementById('root');
ReactDOM.render(
  <StoreProvider>
    <QueryClientProvider client={client}>
      <ErrorBoundary>
        <App/>
      </ErrorBoundary>
    </QueryClientProvider>
  </StoreProvider>
, rootElement);


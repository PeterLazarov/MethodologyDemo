import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { StoreProvider, StoreContext } from 'Contexts/StoreProvider';
import { QueryClient, QueryClientProvider } from 'react-query'
import urlRoutes from './config/urlRoutes';
import { BlocksPage } from './components/pages';
import 'antd/dist/antd.css';
import './App.css';

const client = new QueryClient();

const App = () => {
  const { dialogState } = useContext(StoreContext);

  return (
    <Router>
      <div className="pageContainer">
        <Route exact path={urlRoutes.HOME} component={BlocksPage} />
      </div>

      {dialogState.showDataDialog && dialogState.DialogComponent}
    </Router>
  );
}


const rootElement = document.getElementById('root');
ReactDOM.render(
  <StoreProvider>
    <QueryClientProvider client={client}>
      <App/>
    </QueryClientProvider>
  </StoreProvider>
, rootElement);


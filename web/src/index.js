import React, {  } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { StoreProvider } from 'Contexts/StoreProvider';
import urlRoutes from './config/urlRoutes';
import { BlocksPage } from './components/pages';
import 'antd/dist/antd.css';
import './App.css';

const App = ({ DialogComponent, showDataDialog }) => {
  return (
    <StoreProvider>
      <Router>
        <div className='App'>        
          <div className="pageContainer">
            <Route exact path={urlRoutes.HOME} component={BlocksPage} />
          </div>

          {showDataDialog && DialogComponent}
        </div>
      </Router>
    </StoreProvider>
  );
}


const rootElement = document.getElementById('root');
ReactDOM.render(<App/>, rootElement);


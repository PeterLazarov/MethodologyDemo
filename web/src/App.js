import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { Dimmer, Loader } from 'semantic-ui-react';
import urlRoutes from './config/urlRoutes';
import { BlocksPage } from './components/pages';
import './styles/App.css';
import './styles/semanticUiStyles.css';
import './styles/materialUiStyles.css';

class App extends Component {
  render() {
    const { dataLoading, DialogComponent, showDataDialog } = this.props;
    
    return (
      <Dimmer.Dimmable 
        as='div' dimmed={dataLoading}
        className='App'>
        <Dimmer active={dataLoading} inverted>
            <Loader />
        </Dimmer>
        
        <div className="pageContainer">
          <Route exact path={urlRoutes.HOME} component={BlocksPage} />
        </div>

        {showDataDialog && DialogComponent}
      </Dimmer.Dimmable>
    );
  }
}

function mapStateToProps({ dataState, dialogState }) {
  return { 
    dataLoading: dataState.dataLoading,
    DialogComponent: dialogState.DialogComponent,
    showDataDialog: dialogState.showDataDialog,    
  };
}

export default connect(mapStateToProps)(App);

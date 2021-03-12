import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import urlRoutes from './config/urlRoutes';
import { BlocksPage } from './components/pages';
import './styles/App.css';
import './styles/materialUiStyles.css';

class App extends Component {
  render() {
    const { dataLoading, DialogComponent, showDataDialog } = this.props;
    
    return (
      <div className='App'>
        <Backdrop className='backdrop' open={dataLoading}>
          <CircularProgress color="inherit" />
        </Backdrop>
        
        <div className="pageContainer">
          <Route exact path={urlRoutes.HOME} component={BlocksPage} />
        </div>

        {showDataDialog && DialogComponent}
      </div>
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

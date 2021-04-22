
import React from 'react';
import { Provider } from 'react-redux'
import configureAppStore, { ReduxState } from 'src/reducers';

const store = configureAppStore();

export const dialogStateSelector = (state: ReduxState) => state.dialogState;
export const dataStateSelector = (state: ReduxState) => state.dataState;

type Props = {
  children: object[]
};
export const StoreProvider: React.FC<Props> = ({ children }) =>  {
  return (
    <Provider store={store}> {children} </Provider>
  );
}
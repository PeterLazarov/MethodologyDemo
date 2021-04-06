
import React from 'react';
import { rootReducer, initialState } from 'Reducers';

export const StoreContext = React.createContext();

export function StoreProvider(props) {
  const [state, dispatch] = React.useReducer(rootReducer, initialState);

  return (
    <StoreContext.Provider value={ { ...state, dispatch } }>{props.children}</StoreContext.Provider>
  );
}

import React, { useEffect } from 'react';
import { rootReducer, initialState } from 'Reducers';

export const StoreContext = React.createContext();

export function StoreProvider(props) {
  const initializer = (initialValue = initialState) =>
    JSON.parse(localStorage.getItem("store-state")) || initialValue;
  
  const [state, dispatch] = React.useReducer(rootReducer, [], initializer);

  useEffect(() => {
    localStorage.setItem('store-state', JSON.stringify(state));
  }, [state]);

  return (
    <StoreContext.Provider value={ { ...state, dispatch } }>{props.children}</StoreContext.Provider>
  );
}
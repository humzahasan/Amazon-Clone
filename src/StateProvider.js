import React, {createContext, useContext, useReducer} from 'react';

//Prepare the data layer
export const StateContext = createContext();

//wrap our app and provide the data layer
export const StateProvider = ({initialState, reducer, children}) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);

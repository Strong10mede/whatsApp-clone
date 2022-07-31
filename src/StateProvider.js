import React, { createContext, useContext, useReducer } from "react";

//preparing the data layer
//created the context
export const StateContext = createContext();

//higher level component (intake component n produce a component)
export const StateProvider = ({ reducer, initialState, children }) => (
  //childern is the <app/>
  //help to setup datalayer
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

//allows to pull data from the data layer
//we are creating a hook
export const useStateValue = () => useContext(StateContext);

import React, { useContext, createContext, useReducer } from "react";
import type { ReactNode } from "react";

type TDefaultData = {
  state: {
    siteBackgroundColor: string
    bioBackgroundColor: string
    bioTextColor: string
  }
  dispatch?: (action: string) => any
};

export const GlobalContext = createContext({
  state: {
    siteBackgroundColor: 'red',
    bioBackgroundColor: '#0E0718',
    bioTextColor: '#726985'
  }
});

const UPDATE_TEXT_COLOR = 'UPDATE_TEXT_COLOR';
const UPDATE_BIO_BACKGROUND_COLOR = 'UPDATE_BIO_BACKGROUND_COLOR';
const UPDATE_SITE_BACKGROUND_COLOR = 'UPDATE_SITE_BACKGROUND_COLOR';

const colorSchemeReducer = (state: any, action: { type: string, payload: string }) => {
  switch (action.type) {
    case UPDATE_TEXT_COLOR:
      return Object.assign({}, state, {bioTextColor: action.payload});
      break;
    case UPDATE_BIO_BACKGROUND_COLOR:
      return Object.assign({}, state, {bioBackgroundColor: action.payload});
      break;
    case UPDATE_SITE_BACKGROUND_COLOR:
      return Object.assign({}, state, {siteBackgroundColor: action.payload});
      break;
    default:
      return state;
  }
}

const GlobalContextProvider = (props: { children: ReactNode }) => {
  const GlobalContextState: TDefaultData = useContext(GlobalContext);
  const [state, dispatch] = useReducer(colorSchemeReducer, GlobalContextState);
  const value = { state, dispatch }
  return (
    <GlobalContext.Provider value={value}>
      {props.children}
    </GlobalContext.Provider>
  );
}


export default GlobalContextProvider;



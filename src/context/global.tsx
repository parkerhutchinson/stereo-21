import React, { createContext, useReducer, Dispatch} from "react";
import type { ReactNode } from "react";

const initialState = {
  caseStudyOpen: false,
  colorScheme: {
    siteBackgroundColor: 'red',
    bioBackgroundColor: '#0E0718',
    bioTextColor: '#726985',
    highlight: 'red'
  }
}

type TDefaultData = {
  caseStudyOpen: boolean
  colorScheme: {
    siteBackgroundColor: string
    bioBackgroundColor: string
    bioTextColor: string
    highlight: string
  }
};

export enum GlobalActions {
  UPDATE_COLOR = 'UPDATE_COLOR',
  OPEN_CASE_STUDY = 'OPEN_CASE_STUDY'
}

type ColorDispatch = {
  type: GlobalActions
  payload: {}
}

export const GlobalContext = createContext<{
  state: TDefaultData;
  dispatch: Dispatch<any>;
}>({
  state: initialState,
  dispatch: () => null
});

const colorSchemeReducer = (state:TDefaultData, action: ColorDispatch) => {
  switch (action.type) {
    case GlobalActions.UPDATE_COLOR: 
      return Object.assign({}, state, {colorScheme: {...action.payload}})
    case GlobalActions.OPEN_CASE_STUDY: 
      return Object.assign({}, state, {caseStudyOpen: action.payload})
    default:
      return state;
  }
}

const GlobalContextProvider = (props: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(colorSchemeReducer, initialState);
  return (
    <GlobalContext.Provider value={{state, dispatch}}>
      {props.children}
    </GlobalContext.Provider>
  );
}


export default GlobalContextProvider;



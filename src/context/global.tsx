import React, { createContext, useReducer, Dispatch} from "react";
import type { ReactNode } from "react";

const initialState = {
  caseStudyOpen: false,
  mobilePanel: false,
  slideMesh: {slideId: -1, url: ''},
  colorScheme: {
    siteBackgroundColor: 'red',
    bioBackgroundColor: '#0E0718',
    bioTextColor: '#726985',
    highlight: 'red'
  }
}

type TDefaultData = {
  caseStudyOpen: boolean
  mobilePanel: boolean
  slideMesh: {
    slideId: number, 
    url: string
  },
  colorScheme: {
    siteBackgroundColor: string
    bioBackgroundColor: string
    bioTextColor: string
    highlight: string
  }
};

export enum GlobalActions {
  UPDATE_COLOR = 'UPDATE_COLOR',
  OPEN_CASE_STUDY = 'OPEN_CASE_STUDY',
  TOGGLE_MOBILE_PANEL = 'TOGGLE_MOBILE_PANEL',
  ADD_SLIDE_MESH = 'ADD_SLIDE_MESH'
}

type ColorDispatch = {
  type: GlobalActions
  payload: {[key:string]:any}
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
    case GlobalActions.TOGGLE_MOBILE_PANEL:
      return Object.assign({}, state, {mobilePanel: action.payload})
    case GlobalActions.ADD_SLIDE_MESH:
      return Object.assign({}, state, {slideMesh: {...action.payload} })
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



import React, { createContext, useReducer, Dispatch } from "react";
import type { ReactNode } from "react";

const initialState = {
  caseStudyOpen: false,
  mobilePanel: false,
  slideData: { brand: '' },
  slideMesh: { slideId: -1, url: '' },
  colorScheme: {
    siteBackgroundColor: 'white',
    bioBackgroundColor: '#0E0718',
    bioTextColor: '#726985',
    highlight: 'white',
    slideBorderStopOne: 'white',
    slideBorderStopTwo: 'white',
    eyeBrowStopOne: 'white',
    eyeBrowStopTwo: 'white'
  }
}

type TDefaultData = {
  caseStudyOpen: boolean
  mobilePanel: boolean
  slideMesh: {
    slideId: number
    url: string
  }
  slideData: {
    brand: string
  }
  colorScheme: {
    siteBackgroundColor: string
    bioBackgroundColor: string
    bioTextColor: string
    highlight: string
    slideBorderStopOne: string
    slideBorderStopTwo: string
    eyeBrowStopOne: string
    eyeBrowStopTwo: string
  }
};

export enum GlobalActions {
  UPDATE_COLOR = 'UPDATE_COLOR',
  OPEN_CASE_STUDY = 'OPEN_CASE_STUDY',
  TOGGLE_MOBILE_PANEL = 'TOGGLE_MOBILE_PANEL',
  ADD_SLIDE_MESH = 'ADD_SLIDE_MESH',
  UPDATE_SLIDE_DATA = 'UPDATE_SLIDE_DATA'
}

type ColorDispatch = {
  type: GlobalActions
  payload: { [key: string]: any }
}

export const GlobalContext = createContext<{
  state: TDefaultData;
  dispatch: Dispatch<any>;
}>({
  state: initialState,
  dispatch: () => null
});

const globalReducer = (state: TDefaultData, action: ColorDispatch) => {
  switch (action.type) {
    case GlobalActions.UPDATE_COLOR:
      return Object.assign({}, state, { colorScheme: { ...action.payload } })
    case GlobalActions.OPEN_CASE_STUDY:
      return Object.assign({}, state, { caseStudyOpen: action.payload })
    case GlobalActions.TOGGLE_MOBILE_PANEL:
      return Object.assign({}, state, { mobilePanel: action.payload })
    case GlobalActions.ADD_SLIDE_MESH:
      return Object.assign({}, state, { slideMesh: { ...action.payload } })
    case GlobalActions.UPDATE_SLIDE_DATA:
      return Object.assign({}, state, { brand: action.payload })
    default:
      return state;
  }
}

const GlobalContextProvider = (props: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(globalReducer, initialState);
  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {props.children}
    </GlobalContext.Provider>
  );
}


export default GlobalContextProvider;



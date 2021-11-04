import React, { createContext, useReducer, Dispatch} from "react";
import type { ReactNode } from "react";

const initialState = {
  siteBackgroundColor: 'red',
  bioBackgroundColor: '#0E0718',
  bioTextColor: '#726985',
}

type TDefaultData = {
  siteBackgroundColor: string
  bioBackgroundColor: string
  bioTextColor: string
};

enum UpdateColorActions {
  UPDATE_TEXT_COLOR = 'UPDATE_TEXT_COLOR',
  UPDATE_BIO_BACKGROUND_COLOR = 'UPDATE_BIO_BACKGROUND_COLOR',
  UPDATE_SITE_BACKGROUND_COLOR = 'UPDATE_SITE_BACKGROUND_COLOR'
}

type ColorDispatch = {
  type: UpdateColorActions
  payload: string
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
    case UpdateColorActions.UPDATE_TEXT_COLOR:
      return Object.assign({}, state, {bioTextColor: action.payload});
      break;
    case UpdateColorActions.UPDATE_BIO_BACKGROUND_COLOR:
      return Object.assign({}, state, {bioBackgroundColor: action.payload});
      break;
    case UpdateColorActions.UPDATE_SITE_BACKGROUND_COLOR:
      return Object.assign({}, state, {siteBackgroundColor: action.payload});
      break;
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



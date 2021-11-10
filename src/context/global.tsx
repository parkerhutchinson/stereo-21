import React, { createContext, useReducer, Dispatch} from "react";
import type { ReactNode } from "react";

const initialState = {
  colorScheme: {
    siteBackgroundColor: 'red',
    bioBackgroundColor: '#0E0718',
    bioTextColor: '#726985',
  }
}

type TDefaultData = {
  colorScheme: {
    siteBackgroundColor: string
    bioBackgroundColor: string
    bioTextColor: string
  }
};

export enum ColorActions {
  UPDATE_COLOR = 'UPDATE_COLOR',
}

type ColorDispatch = {
  type: ColorActions
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
    case ColorActions.UPDATE_COLOR: 
      return Object.assign({}, state, {colorScheme: {...action.payload}})
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



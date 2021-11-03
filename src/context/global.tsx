import React, { useContext, createContext } from "react";
import type { ReactNode } from "react";

type TDefaultData = {
  siteBackgroundColor: string
  bioBackgroundColor: string
  bioTextColor: string
};

export const GlobalContext = createContext({
  siteBackgroundColor: 'red',
  bioBackgroundColor: '#0E0718',
  bioTextColor: '#726985'
});

const GlobalContextProvider = (props: { children: ReactNode }) => {
  const GlobalContextState:TDefaultData = useContext(GlobalContext);
  return (
    <GlobalContext.Provider value={GlobalContextState}>
      {props.children}
    </GlobalContext.Provider>
  );
}


export default GlobalContextProvider;



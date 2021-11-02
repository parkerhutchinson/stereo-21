import React, { useContext, createContext } from "react";
import type { ReactNode } from "react";

type TDefaultData = {
  siteBackgroundColor: string
  bioBackgroundColor: string
  bioTextColor: string
};

const GlobalContext = createContext({
  siteBackgroundColor: 'red',
  bioBackgroundColor: 'blue',
  bioTextColor: 'yellow'
});

export default function (props: { children: ReactNode }) {
  const GlobalContextState:TDefaultData = useContext(GlobalContext);
  return (
    <GlobalContext.Provider value={GlobalContextState}>
      {props.children}
    </GlobalContext.Provider>
  );
}

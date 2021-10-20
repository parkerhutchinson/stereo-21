import React, { useContext, createContext } from "react";
import type { ReactNode } from "react";

type TDefaultData = {
  numberOfSlides: number;
};

const GlobalContext = createContext({
  numberOfSlides: 10,
});

export default function (props: { children: ReactNode }) {
  const GlobalContextState:TDefaultData = useContext(GlobalContext);
  return (
    <GlobalContext.Provider value={GlobalContextState}>
      {props.children}
    </GlobalContext.Provider>
  );
}

import React, { useContext, createContext, useEffect, useState } from "react";
import pageTransformer from "../transformers/page";
import type { ReactNode } from "react";


const defaultPageContext = {
  components: {
    componentId: ''
  },
  meta: {}
}

export const PageContext = createContext(defaultPageContext);

const PageContextProvider = (props: { children: ReactNode, contentfulData: any }) => {
  const {contentfulData, children} = props;
  const [transformedState, setTransformedState] = useState(defaultPageContext);

  useEffect(() => {
    const contentfulDataToPage = pageTransformer(contentfulData);
    setTransformedState(contentfulDataToPage)
  }, [props.contentfulData]);
  
  return (
    <PageContext.Provider value={transformedState}>
      {children}
    </PageContext.Provider>
  );
}


export default PageContextProvider;
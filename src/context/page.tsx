import React, { createContext, useEffect, useState } from "react";
import pageTransformer from "../transformers/page";
import type { ReactNode } from "react";

export interface DefaultPageContext {
  components: {
    componentId: string,
    props: {[props: string]: any}
  }[]
  meta: {
    title: string,
    description: string,
    image?: string 
  }
}

const defaultPageContext = {
  components: [{
    componentId: '',
    props: {}
  }],
  meta: {
    title: '',
    description: ''
  }
}

export const PageContext = createContext(defaultPageContext);

const PageContextProvider = (props: { children: ReactNode, contentfulData: any }) => {
  const {contentfulData, children} = props;
  const [transformedState, setTransformedState] = useState<DefaultPageContext>(defaultPageContext);

  useEffect(() => {
    const contentfulDataToPage:DefaultPageContext = pageTransformer(contentfulData);
    setTransformedState(contentfulDataToPage)
  }, [props.contentfulData]);
  
  return (
    <PageContext.Provider value={transformedState}>
      {children}
    </PageContext.Provider>
  );
}


export default PageContextProvider;
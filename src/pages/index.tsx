import type { NextPage } from 'next'
import { useContext } from 'react';
import Head from 'next/head'
import getContentfulData from "../lib/getContentfuldata";
import { PageContext } from "../context/page";
import dynamic from 'next/dynamic'
import ErrorComponentMissing from "../components/2_molecules/errorComponentMissing";

const ComponentImportMap: { [index: string]: any } = {
  bio: dynamic(() => import('../components/3_organisms/bio')),
  slides: dynamic(() => import('../components/3_organisms/slides'))
}

const Page: NextPage = () => {
  const { components, meta } = useContext(PageContext);

  // dynamic component cache
  const componentsMap = components.map((d: any) => {
    return typeof ComponentImportMap[d.componentId] !== 'undefined' ? 
      { Component: ComponentImportMap[d.componentId], props: d.props } : 
      { Component: () => <>{process.env.NODE_ENV === 'development' && <ErrorComponentMissing id={d.componentId} />}</>, props: {} }
  });

  return (
    <>
      <Head>
        <title>Parker Hutchinson | {meta.title}</title>
        <meta name="description" content={meta.description} />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
        <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet"/>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
      </Head>

      {/* dynamic component render with props scoping */}
      {componentsMap.map(
        (DynamicComponent, index: number) => 
          <DynamicComponent.Component key={index} {...DynamicComponent.props} />
        )
      }
    </>
  )
}

export async function getStaticProps() {
  const pageData = await getContentfulData()
  return {
    props: {
      pageData
    }
  }
}

export default Page
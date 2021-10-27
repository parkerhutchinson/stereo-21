import type { NextPage } from 'next'
import { useContext } from 'react';
import Head from 'next/head'
import getContentfulData from "../lib/getContentfuldata";
import {PageContext} from "../context/page";

export async function getStaticProps({ params }:any) {
  const pageData = await getContentfulData()
  return {
    props: {
      pageData
    }
  }
}

const Page:NextPage = ({pageData}:any) => {
  const components = useContext(PageContext);
  console.log(components);
  return (
    <div>
      <Head>
        <title>Parker Hutchinson | STEREO.CODES</title>
        <meta name="description" content="The web portfolio of Parker Hutchinson aka STEREO.CODES" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {pageData && pageData.map((pages:any, index:number) => <h1 key={index}>{pages.fields.meta.fields.title}</h1>)}
    </div>
  )
}

export default Page
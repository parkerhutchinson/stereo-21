import type { NextPage } from 'next'
import { useContext } from 'react';
import Head from 'next/head'
import getContentfulData from "../lib/getContentfuldata";
import {PageContext} from "../context/page";

export async function getStaticProps() {
  const pageData = await getContentfulData()
  return {
    props: {
      pageData
    }
  }
}

const Page:NextPage = () => {
  const {components, meta} = useContext(PageContext);

  return (
    <div>
      <Head>
        <title>Parker Hutchinson | {meta.title}</title>
        <meta name="description" content={meta.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {meta.title && <h1>{meta.title}</h1>}
    </div>
  )
}

export default Page
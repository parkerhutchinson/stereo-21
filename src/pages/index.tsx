import type { NextPage } from 'next'
import Head from 'next/head'
import getContentfulData from "../lib/getContentfuldata";

export async function getStaticProps({ params }:any) {
  const postData = await getContentfulData()
  return {
    props: {
      postData
    }
  }
}

const Page:NextPage = ({postData}:any) => {

  return (
    <div>
      {/* {items && items.map((item) => <div>{item}</div>)} */}
      <Head>
        <title>Parker Hutchinson | STEREO.CODES</title>
        <meta name="description" content="The web portfolio of Parker Hutchinson aka STEREO.CODES" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {postData && postData.map((pages:any, index:number) => <h1 key={index}>{pages.fields.meta.fields.title}</h1>)}
    </div>
  )
}

export default Page
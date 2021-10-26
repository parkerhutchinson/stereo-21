import getContentfulData, {getContentfulPaths} from "../lib/getContentfuldata";

export async function getStaticPaths() {
  const paths = await getContentfulPaths()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }:any) {
  const postData = await getContentfulData()
  return {
    props: {
      postData
    }
  }
}



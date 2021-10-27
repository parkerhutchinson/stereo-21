import { Globals } from "../styles/globals";
import type { AppProps } from "next/app";
import PageContextProvider from "../context/page";

function Stereo({ Component, pageProps }: AppProps) {
  const { pageData } = pageProps;
  const cfData = typeof pageData !== "undefined" ? pageData[0].fields : {};
  return (
    <>
      <Globals />
      <PageContextProvider contentfulData={cfData}>
        <Component {...pageProps} />
      </PageContextProvider>
    </>
  );
}
export default Stereo;

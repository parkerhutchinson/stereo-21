import { Globals } from "../styles/globals";
import type { AppProps } from "next/app";
import PageContextProvider from "../context/page";
import GlobalContextProvider from "../context/global";

function Stereo({ Component, pageProps }: AppProps) {
  const { pageData } = pageProps;
  const cfData = typeof pageData !== "undefined" ? pageData[0].fields : {};
  return (
    <>
      <Globals />
      <GlobalContextProvider>
        <PageContextProvider contentfulData={cfData}>
          <Component {...pageProps} />
        </PageContextProvider>
      </GlobalContextProvider>
    </>
  );
}
export default Stereo;

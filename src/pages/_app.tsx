import { Globals } from "../styles/globals";
import type { AppProps } from "next/app";
import PageContextProvider from "../context/page";

function MyApp({ Component, pageProps }: AppProps) {
  const { pageData } = pageProps;

  return (
    <>
      <Globals />
      <PageContextProvider
        contentfulData={
          typeof pageData !== "undefined" ? pageData[0].fields : {}
        }
      >
        <Component {...pageProps} />
      </PageContextProvider>
    </>
  );
}
export default MyApp;

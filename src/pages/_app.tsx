import { Globals } from "../styles/globals";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Globals />
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;

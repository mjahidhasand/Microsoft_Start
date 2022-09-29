import type { AppProps } from "next/app";
import SEO from "../components/SEO";
import "../styles/globals.css";
import "../styles/variables.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <SEO title="Microsoft Start" />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

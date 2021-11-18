import type { AppProps } from "next/app";
import Head from "next/head";
import globalStyle from "~styles/globalStyles";
import { Global } from "@emotion/react";
import { Provider } from "react-redux";
import store from "~store/configureStore";
import "tailwindcss/tailwind.css";
import "normalize.css";
import "sanitize.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>개발자 임수현의 블로그</title>
        <meta name="description" content="개발자 임수현의 블로그입니다." />
      </Head>
      <Provider store={store}>
        <Global styles={globalStyle} />
        <Component {...pageProps} />
      </Provider>
    </>
  );
}

export default MyApp;

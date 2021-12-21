import type { AppProps } from "next/app";
import Head from "next/head";
import globalStyle from "~styles/globalStyles";
import { Global } from "@emotion/react";
import { Provider } from "react-redux";
import store from "~store/rootStore";
import "tailwindcss/tailwind.css";
import "normalize.css";
import "sanitize.css";
import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <>
      <Head>
        <title>개발자 임수현의 블로그</title>
        <meta name="description" content="개발자 임수현의 블로그입니다." />
      </Head>
      <Provider store={store}>
        <SessionProvider session={session}>
          <Global styles={globalStyle} />
          <Component {...pageProps} />
        </SessionProvider>
      </Provider>
    </>
  );
}

export default MyApp;

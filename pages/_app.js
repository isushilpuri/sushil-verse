import "../styles/globals.css";
// import "../public/assets/styles/main.min.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="viewport-fit=cover" />
        <title>SushilVerse</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

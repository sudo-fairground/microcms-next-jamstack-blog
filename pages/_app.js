import Head from 'next/head'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <script defer src="//ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
        <script defer src="/js/script.js"></script>
      </Head>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp

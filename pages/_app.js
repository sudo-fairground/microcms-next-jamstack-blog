import Head from 'next/head'
import '../styles/globals.scss'

const MyApp = ({ Component, pageProps }) => (
  <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <script defer src="//ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
      <script defer src="/js/script.js"></script>
    </Head>
    <div className={`wrapper ${pageProps.pageClass}`}>
      <Component {...pageProps} />
    </div>
  </>
);

export default MyApp
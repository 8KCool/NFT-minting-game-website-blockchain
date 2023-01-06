import '../styles/globals.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return <div>

      <Head>
        <title>DexBattle</title>
        <meta name="Description" content="Dex Battle Game!" />
        <link rel="icon" href="/Dex.png" />
      </Head>
    <Component {...pageProps}/>
   </div>
}

export default MyApp

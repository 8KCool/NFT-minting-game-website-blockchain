import Head from 'next/head';

import Navbar from '../components/Navbar';
import Main from '../components/Main';
import Nfts from '../components/NFTs';
import Coins from '../components/Coin';
import Game from '../components/Game';
import Roadmap from '../components/Roadmap';
import Footer from '../components/Footer';
import Faqs from '../components/FAQs';


export default function Home() {
  return (
    <div>
      <Head>
        <title>DexBattle</title>
        <meta name="Description" content="Dex Battle Game!" />
        <link rel="icon" href="/Dex.png" />
      </Head>
      <Navbar/>
      <Main/>
      <Nfts/>
      <Coins/>
      <Game/>
      <Roadmap/>
      <Faqs/>
      <Footer/>
      
       
    
    
    </div>
  )
}

import React from "react";
import dynamic from "next/dynamic";
import Head from 'next/head';


const Mint = dynamic (()=> import("../components/MintImplementWithDex"),{ssr:false});

export default function test() {
    return(
        <div>
    <Head>
        <title>DexBattle-Buy with Dex Coin</title>
        <meta name="Description" content="Dex Battle Game!" />
        <link rel="icon" href="/Dex.png" />
      </Head>
    <Mint/>
    </div>
    )
}
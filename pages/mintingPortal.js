import React from "react";
import dynamic from "next/dynamic";


const Mint = dynamic (()=> import("../components/MintImplement"),{ssr:false});

export default function test(){
    return(
        <div>
    <Head>
        <title>DexBattle-Minting</title>
        <meta name="Description" content="Dex Battle Game!" />
        <link rel="icon" href="/Dex.png" />
      </Head>
    <Mint/>
    </div>
    )
}
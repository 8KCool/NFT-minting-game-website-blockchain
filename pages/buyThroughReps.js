import React from "react";
import Head from 'next/head';
import Navbar from "../components/NavAbout";
import Reps from "../components/Reps";
import Footer from "../components/Footer";

export default function buyThroughReps () {
    return (
        <div>
            <Head>
                <title>DexBattle-Representative</title>
                <meta name="Description" content="Dex Battle Game!" />
                <link rel="icon" href="/Dex.png" />
            </Head>

      <Navbar/>
      <div>
        <Reps/>
      </div>
      <Footer/>
        </div>
    )
}




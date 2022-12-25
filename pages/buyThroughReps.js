import React from "react";
import Head from 'next/head';
import Navbar from "../components/NavAbout";
import Reps from "../components/Reps";
import Footer from "../components/Footer";

export default function buyThroughReps () {
    return (
        <div className="flex flex-col">
            <Head>
                <title>DexBattle-Our Representatives</title>
                <meta name="Description" content="Dex Battle Game!" />
                <link rel="icon" href="/Dex.png" />
            </Head>

      <Navbar/>
      <div className="md:my-4">
        <Reps/>
      </div>
      <Footer/>
      
        </div>
    )
}




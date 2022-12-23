import React from "react";
import Head from 'next/head';

export default function buyThroughReps () {
    return (
        <div>
            <Head>
        <title>DexBattle-Representative</title>
        <meta name="Description" content="Dex Battle Game!" />
        <link rel="icon" href="/Dex.png" />
      </Head>
            <h1 className="font-Kanit text-64px text-center text-white mt-8"> Our representatives</h1>

            {/*content*/}
            <ul className="text-blue-400 font-Kanit text-50px max-h-screen justify-evenly flex flex-col md:mx-16">
                <li>UAE</li>
                <li>Morocco</li>
                <li>Egypt</li>
                <li>Turkey</li>
                <li>Sri Lanka</li>
                <li>Pakistan</li>
            </ul>
        </div>
    )
}




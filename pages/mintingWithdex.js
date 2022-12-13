import React from "react";
import dynamic from "next/dynamic";


const Mint = dynamic (()=> import("../components/MintImplementWithDex"),{ssr:false});

export default function test(){
    return(
        <div>
    <Mint/>
    </div>
    )
}
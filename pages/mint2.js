import React from "react";
import dynamic from "next/dynamic";


const MintImplement = dynamic (()=> import("../components/MintImplement"),{ssr:false});

export default function test(){
    return(
        <div>
    <MintImplement/>
    </div>
    )
}
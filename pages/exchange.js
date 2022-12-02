import React from "react";
import dynamic from "next/dynamic";


const ExchangeTokens = dynamic (()=> import("../components/exchangetokens"),{ssr:false});

export default function test(){
    return(
        <div>
    {/* <ExchangeTokens/> uncomment this to enable exchange page */}
    </div>
    )
}
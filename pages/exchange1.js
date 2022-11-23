import React from "react";
import dynamic from "next/dynamic";


const ExchangeTokens1 = dynamic (()=> import("../components/exchangetokens1"),{ssr:false});

export default function test(){
    return<ExchangeTokens1/>
}
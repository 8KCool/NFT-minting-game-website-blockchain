import React from "react";
import dynamic from "next/dynamic";


const MintComponent = dynamic (()=> import("../components/MintComponent"),{ssr:false});

export default function test(){
    return<MintComponent/>
}
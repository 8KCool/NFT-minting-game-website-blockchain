import React from "react";
import dynamic from "next/dynamic";


const Minttest = dynamic (()=> import("../components/Minttest"),{ssr:false});

export default function test(){
    return(
        <div>
    {/* <Minttest/> uncomment this to enable minting page */}
    </div>
    )
}
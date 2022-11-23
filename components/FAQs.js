import { useState, Fragment } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
 
export default function FAQs() {
  const [open, setOpen] = useState(0);
 
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
 
  const customAnimation = {
    mount: { scale: 1 },
    unmount: { scale: 0.9 },
  };
 
  return (
    <div id='faqs'className='mx-16 p-6 my-[44px] rounded-lg'>
      <h1 className='text-3xl text-blue-400 font-Kanit text-center uppercase font-semibold tracking-wide'> Frequently Asked Questions</h1>
      <Accordion open={open === 1} animate={customAnimation}>
        <AccordionHeader onClick={() => handleOpen(1)} className='text-white font-Kanit text-[22px]'>
          How to mint Dexbattle NFTs?
        </AccordionHeader>
        <AccordionBody className='text-justify text-gray-300 font-Kanit text-[20px]'>
          To mint DexBattle nfts you need to have $Dex coins. You can earn $Dex coins by playing DexBattle. Also you can buy $Dex Coins from our <a href="/exchnage" className="text-semibold text-blue-500">exchnage.</a>
          After that you can mint DexBattle nfts from our <a href="/mint2" className="text-semibold text-blue-500">minting page. </a>You need to connect your metamask or binance wallet first.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 2} animate={customAnimation} className='text-white font-Kanit text-[22px]'>
        <AccordionHeader onClick={() => handleOpen(2)}>
          How to buy Dex Coins?
        </AccordionHeader>
        <AccordionBody className='text-justify text-gray-300 font-Kanit text-[20px]'>
        You can earn Dex coins by playing DexBattle and you can swap BNB with Dex Coins from our instant <a href="/exchnage" className="text-semibold text-blue-500">exchnage.</a> 
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 3} animate={customAnimation} className='text-white font-Kanit text-[22px]'>
        <AccordionHeader onClick={() => handleOpen(3)}>
          How much costs Dexbattle NFTs?
        </AccordionHeader>
        <AccordionBody className='text-justify text-gray-300 font-Kanit text-[20px]'>
          <ul>
            <li>Leader items - 100 000 $Dex</li>
            <li>Legendary items - 1000 $Dex</li>
            <li>Epic items - 500 $Dex</li>
            <li>Rear items - 300 $Dex</li>
            <li>Common items - 200 $Dex</li>
            <li>Uncommon items - 100 $Dex</li>
          </ul>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 4} animate={customAnimation} className='text-white font-Kanit text-[24px]'>
        <AccordionHeader onClick={() => handleOpen(4)}>
          What is the total supply of Dexbattle NFts?
        </AccordionHeader>
        <AccordionBody className='text-justify text-gray-300 font-Kanit text-[20px]'>
        <ul>
            <li>Leader items - 25</li>
            <li>Legendary items - 500</li>
            <li>Epic items - 1000</li>
            <li>Rear items - 2000</li>
            <li>Common items - 2500</li>
            <li>Uncommon items - 5000</li>
          </ul>
        </AccordionBody>
      </Accordion>
    </div>
  );
}

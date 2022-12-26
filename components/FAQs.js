import { useState, Fragment } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { social , config } from '../info.config';
 
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
    <div id='faqs'className='md:mx-16 mx-2 p-6 my-[44px] rounded-lg'>
      <h1 className='md:text-[40px] text-[30px] bg-gradient-to-r from-amber-300 via-yellow-400 to-orange-500 bg-clip-text text-transparent font-Kanit text-center uppercase font-semibold tracking-wide'> Frequently Asked Questions</h1>
      <Accordion open={open === 1} animate={customAnimation}>
        <AccordionHeader onClick={() => handleOpen(1)} className='text-white font-Kanit text-[22px] text-[20px]'>
          How to get Dexbattle Characters and Weapons?
        </AccordionHeader>
        <AccordionBody className='text-justify text-gray-300 font-Kanit md:text-[20px] text-[18px]'>
          You can get dex characters and weapons as ERC-1155 fungable tokens on <a href={social.opensea} className="text-blue-400">Opeansea.</a>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 2} animate={customAnimation} className='text-white font-Kanit text-[22px] text-[20px]'>
        <AccordionHeader onClick={() => handleOpen(2)}>
          What are Dex Coin tokens?
        </AccordionHeader>
        <AccordionBody className='text-justify text-gray-300 font-Kanit md:text-[20px] text-[18px]'>
        In the next phase we are hoping to launch $Dex as In-game BEP20 tokens.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 3} animate={customAnimation} className='text-white font-Kanit md:text-[22px] text-[20px]'>
        <AccordionHeader onClick={() => handleOpen(3)}>
          How much costs Dexbattle NFTs?
        </AccordionHeader>
        <AccordionBody className='text-justify text-gray-300 font-Kanit md:text-[20px] text-[18px]'>
          <ul>
            <li>Leader items - {config.leader_items_cost} BNB</li>
            <li>Legendary items - {config.legendary_items_cost} BNB</li>
            <li>Epic items - {config.epic_items_cost} BNB</li>
            <li>Rare items - {config.rare_items_cost} BNB</li>
            <li>Unommon items - {config.uncommon_items_cost} BNB</li>
            <li>Common items - {config.common_items_cost} BNB</li>
          </ul>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 4} animate={customAnimation} className='text-white font-Kanit md:text-[24px] text-[20px]'>
        <AccordionHeader onClick={() => handleOpen(4)}>
          What is the total supply of Dexbattle NFts?
        </AccordionHeader>
        <AccordionBody className='text-justify text-gray-300 font-Kanit md:text-[20px] text-[18px]'>
        <ul>
            <li>Leader items - {config.LeaderSupply}</li>
            <li>Legendary items - {config.LegendarySupply}</li>
            <li>Epic items - {config.EpicSupply}</li>
            <li>Rare items - {config.RareSupply}</li>
            <li>Uncommon items - {config.UncommonSupply}</li>
            <li>Common items - {config.CommonSupply}</li>
          </ul>
        </AccordionBody>
      </Accordion>
    </div>
  );
}

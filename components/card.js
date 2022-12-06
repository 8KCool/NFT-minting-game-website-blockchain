import { useEffect, useState } from "react";
import { initOnboard } from "../ulits/onboard"
import React from "react";
import {
    getTotalMinted,
    isPausedState          } from '../ulits/interact'
    import { config } from '../info.config'



const Cards = ({ item, handleClick, }) => {

const [totalMinted, setTotalMinted ] = useState(0)
// const [maxLeaderSupply, setMaxLeaderSupply] = useState(0)
// const [maxLegendarySupply, setMaxLegendarySupply] = useState(0)
// const [maxEpicSupply, setMaxEpicSupply] = useState(0)
// const [maxRareSupply, setMaxRareSupply] = useState(0)
// const [maxUncommonSupply, setMaxUncommonSupply] = useState(0)
// const [maxCommonSupply, setMaxCommonSupply] = useState(0)
const [maxSupply, setMaxSupply] = useState(0)
const [paused, setPaused] =useState(false)
const [onboard, setOnboard] = useState(null)
const [walletAddress, setWalletAddress] = useState('')
const [cost, setCost] = useState(0)




useEffect( () => {
  const onboardData = initOnboard( {
    address: (address) => setWalletAddress(address ? address : ''),
    wallet: (wallet) => {
      if (wallet.provider) {
        window.localStorage.setItem('selectedWallet', wallet.name)
      } else {
        window.localStorage.removeItem('selectedWallet') }}
  }
  )
setOnboard(onboardData)
}, [])

const previouslySelectedWallet = typeof window !== 'undefined' &&
window.localStorage.getItem('selectedWallet')

useEffect(() => {
if (previouslySelectedWallet !== null && onboard) {
  onboard.walletSelect(previouslySelectedWallet)
}
}, [onboard, previouslySelectedWallet])



 const { id ,title, tier, image } = item;
 
useEffect(() => {
    const init = async (id) => {
      
      setTotalMinted(await getTotalMinted(id))
 }

    init(id)
  }, [])

  useEffect(() => {
    const init = async () => {
      
        setPaused(await isPausedState())
  
 }

    init()
  }, [])

  useEffect(() => {
    const init = async (id) => {
      
      setMaxSupply(id >= 128 ? config.LegendarySupply : id>=99 ? config.EpicSupply : id>=64 ? config.RareSupply : id>=37 ? config.UncommonSupply : id>=10 ? config.CommonSupply : config.LeaderSupply)
      setCost(id>=128 ? config.legendary_items_cost : id>=99 ? config.epic_items_cost : id>=64 ? config.rare_items_cost : id>=37 ? config.uncommon_items_cost : id>=10 ? config.common_items_cost : config.leader_items_cost)
 }

    init(id)
  }, [])


 
  return (
    <div class="max-w-sm bg-gray-200 px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500">
    <div class="relative">
      <img class="w-full rounded-xl" src={image} alt="Character" />
      <p class="absolute top-0 bg-yellow-300 text-gray-800 font-semibold py-1 px-3 rounded-br-lg rounded-tl-lg">{tier}</p>
      <p class="absolute top-0 right-0 bg-white text-gray-800 font-semibold py-1 px-3 rounded-br-lg rounded-tl-lg">{cost} BNB</p>
    </div>
    <h1 class="mt-4 text-gray-800 text-2xl font-bold cursor-pointer">{title}</h1>
    <div class="my-4">
      <div class="flex space-x-1 items-center">
        <p>Supply :
        {maxSupply}
          </p>
      </div>
      <div class="flex space-x-1 items-center" >
        <p> Minted:{totalMinted}</p>
      </div>
      <div class="flex space-x-1 items-center">
        <p>Available:{maxSupply - totalMinted}</p>
      </div>
      <button class="mt-4 text-xl w-full text-white bg-indigo-600 py-2 rounded-xl shadow-lg hover:bg-purple-700"
    onClick={() => handleClick(item)}>
    Mint now</button>
    </div>
  </div>
  );
};

export default Cards;
import Head from 'next/head'
"use client";
import { useState,useContext } from "react";
import { StateContext } from "@/app/components/displayedItem";
import Link from 'next/link';
import Image from "next/image";
import Logo from "../../public/assets/icons/logo-2d.png";
export default function Home() {
  const {displayedItemId, setDisplayedItemId} = useContext(StateContext);
  const initialDisplay = (itemId: number) => {
    setDisplayedItemId(itemId);
  };

  return (
    <div className='grid sm:grid-cols-2 '>
      <div className=' mt-24 sm:mb-40 pl-32 text-left  sm:cols-span-1'>
        <h1 className='text-8xl font-bold text-white'>Virtual Reality</h1>
        <p className='text-xl font-bold text-secondary my-8'>Time to Make the Unreal Real</p>
        <button onClick={() => initialDisplay(1)}> 
        <Link href="/main_page">
        <div className='text-xl font-bold text-black   bg-secondary p-3 rounded-lg justify-center'>
            Learn here
        </div>
        </Link>
        </button>
      </div>
      <div className='sm:cols-span-1 items-center '>
        <Image src={Logo} alt="Logo" className=" justify-self-center sm:mt-0 mt-8" />
      </div>
    </div>
    
   
  )
}

"use client";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@nextui-org/react";
import { useEffect, useState } from "react";
import dropdown from "../../../public/assets/icons/arrow-dropdown.png";
import pullup from "../../../public/assets/icons/arrow-pullup.png";

const Sidebar = () =>{
    const [display0, changedisplay0]= useState(false);
    const [display1, changedisplay1]= useState(false);
    const [display2, changedisplay2]= useState(false);

    
    return (
      <div className="flex flex-col justify-between overflow-auto bg-sidebar text-heading-text border-r border-white ">
      <nav className="top-0 px-4">
        <ul className="py-4 flex flex-col ">
          <div className="border-b border-white">
          <li className="px-2 flex justify-between py-4  text-sm font-bold">
            <Link href="/introtoVR">Introduction to VR</Link>
            {!display0 ? (
             <button className="items-right" 
             onClick={() => {
               console.log(display0)
               changedisplay0(!display0)
 
             }}>
             <Image src={dropdown} alt="dropdown" className="w-3 sm:w-3"/>
             </button>  
          ):(
            <></>
          )}
          {display0 ? (
             <button className="items-right" 
             onClick={() => {
               console.log(display0)
               changedisplay0(!display0)
 
             }}>
             <Image src={pullup} alt="pullup" className="w-3 sm:w-3"/>
             </button>  
          ):(
            <></>
          )}
            
          </li>
          {display0 ? (
              <li className="flex flex-col content-start px-5 text-sm font-medium text-white ">
              <div className="pb-4"><Link href="/introtoVR/#section0">What is VR?</Link></div>
              <div className="pb-4"><Link href="/introtoVR/#section1">VR vs AR vs XR</Link></div>
              <div className="pb-4"><Link href="/introtoVR/#section2">Aspects in VR</Link></div>
  
            </li>
          ):(
            <></>
          )}
          

          </div>
          
          <div className="border-b border-white">
          <li className="px-2 flex justify-between py-4  text-sm font-bold">
            <Link href="/trackinginVR">Tracking in VR</Link>
            {!display1 ? (
             <button className="items-right" 
             onClick={() => {
               console.log(display1)
               changedisplay1(!display1)
 
             }}>
             <Image src={dropdown} alt="dropdown" className="w-3 sm:w-3"/>
             </button>  
          ):(
            <></>
          )}
          {display1 ? (
             <button className="items-right" 
             onClick={() => {
               console.log(display1)
               changedisplay1(!display1)
 
             }}>
             <Image src={pullup} alt="pullup" className="w-3 sm:w-3"/>
             </button>  
          ):(
            <></>
          )}
            
          </li>
          {display1 ? (
              <li className="flex flex-col content-start px-5 text-sm font-medium text-white">
              <div className="pb-4"><Link href="/trackinginVR/#section0">Pose Tracking</Link></div>
              <div className="pb-4"><Link href="/trackinginVR/#section1">Types of Tracking</Link></div>
              <div className="pb-4"><Link href="/trackinginVR/#section2">Optical Tracking</Link></div>
              <div className="pb-4"><Link href="/trackinginVR/#section3">Tracking using SLAM</Link></div>
            </li>
          ):(
            <></>
          )}
          

          </div>

          <div className="border-b border-white">
          <li className="px-2 flex justify-between py-4  text-sm font-bold">
            <Link href="/SLAM">SLAM</Link>
            {!display2 ? (
             <button className="items-right" 
             onClick={() => {
               console.log(display2)
               changedisplay2(!display2)
 
             }}>
             <Image src={dropdown} alt="dropdown" className="w-3 sm:w-3"/>
             </button>  
          ):(
            <></>
          )}
          {display2 ? (
             <button className="items-right" 
             onClick={() => {
               console.log(display2)
               changedisplay2(!display2)
 
             }}>
             <Image src={pullup} alt="pullup" className="w-3 sm:w-3"/>
             </button>  
          ):(
            <></>
          )}
            
          </li>
          {display2 ? (
              <li className="flex flex-col content-start px-5 text-sm font-medium text-white">
              <div className="pb-4"><Link href="/trackinginVR/#section0">Intro to SLAM</Link></div>
              <div className="pb-4"><Link href="/trackinginVR/#section1">Math behind SLAM</Link></div>
              <div className="pb-4"><Link href="/trackinginVR/#section2">SLAM algorithms and types</Link></div>
              <div className="pb-4"><Link href="/trackinginVR/#section3">Aspects in SLAM</Link></div>
              <div className="pb-4"><Link href="/trackinginVR/#section4">Problems of SLAM in VY</Link></div>
            </li>
          ):(
            <></>
          )}
          

          </div>
        </ul>
      </nav>
    </div>
     
    )
  }
export default Sidebar;
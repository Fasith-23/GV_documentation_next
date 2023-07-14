"use client";
import Link from "next/link";
import Image from "next/image";
import { useState,useContext } from "react";
import leftarrow from "../../../public/assets/icons/arrow-left.png";
import rightarrow from "../../../public/assets/icons/arrow-right.png";
import info_list from "@/../public/data/info_list.json";
import { StateContext } from "@/app/components/displayedItem";

export default function MainPage() {
    const {displayedItemId, setDisplayedItemId} = useContext(StateContext);
    const prevDisplay = (itemId: number) => {
        setDisplayedItemId(itemId-1);
      };
    const nextDisplay = (itemId: number) => {
      setDisplayedItemId(itemId+1);
    };
    return (
      <div className="bg-primary p-5 ">
        <div className="border rounded-md border-secondary p-5 ">
            {info_list.map((item:any) => (
                
            <div key={item.id}>
                {displayedItemId === item.id ? (
                    <div>
                        <div className="py-2 border border-secondary rounded-3xl bg-primary flex justify-between items-center">
                            <button onClick={() =>prevDisplay(item.id)}>
                            <Image src={leftarrow} alt="leftarrow" className="w-3 sm:w-3 ml-4" />
                            </button>
                            <div className="text-sidebar text-center text-lg font-bold" >
                            {item.title}
                            </div>
                            <button onClick={() =>nextDisplay(item.id)}>
                            <Image src={rightarrow} alt="rightarrow" className="w-3 sm:w-3 mr-4" />
                            </button>
                                
                        </div>
                        
                        {item.section.map((section:any) => (
                        <div key={section.sectionid}>                     
                            <div className="text-white text-3xl font-bold pt-4 pb-2" id={`${item.id}_${section.sectionid}`}>{section.sectiontitle}</div>
                            <div  className=" text-white text-md font-normal pb-8">{section.sectioncontent}</div>
                        </div>
                        ))}
                    </div>
                
                ):(<>
                    </>)}
            </div>
                
            ))}        
        </div>
      </div>
     
    )
  }
  
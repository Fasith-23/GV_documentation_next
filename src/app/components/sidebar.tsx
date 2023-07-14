"use client";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@nextui-org/react";
import { useEffect, useState, useContext } from "react";
import dropdown from "../../../public/assets/icons/arrow-dropdown.png";
import pullup from "../../../public/assets/icons/arrow-pullup.png";
import info_list from "@/../public/data/info_list.json";
import drop_list from "@/../public/data/info_list.json";
import { StateContext, StateContextProps } from './displayedItem';



const Sidebar = () =>{
    const { displayedItemId, setDisplayedItemId }: StateContextProps = useContext(StateContext);
    const [isActive, setIsActive] = useState(false);
    const toggleDisplay = (itemId: number) => {
      setDisplayedItemId(itemId);
      setIsActive(true);
    };   
    return (
      <div className="flex flex-col justify-between overflow-auto bg-primary text-heading-text">
      <nav className="top-0 px-4">
        <ul className="py-4 flex flex-col ">
        {info_list.map((item:any) => (
          <div key={item.id} className="border-b border-secondary">
          
              <li className="px-2 flex justify-between py-4  text-sm font-bold hover:text-secondary ">
                <Link href="/main_page" className={`${isActive && displayedItemId === item.id ? 'border-l-4 pl-2 border-secondary' : ''}`} onClick={() => toggleDisplay(item.id)}>{item.title}</Link>
                {displayedItemId === item.id ? (
              <button className="items-right" onClick={() => toggleDisplay(item.id)}>
                <Image src={pullup} alt="pullup" className="w-3 sm:w-3" />
              </button>
            ) : (
              <button className="items-right" onClick={() => toggleDisplay(item.id)}>
                <Image src={dropdown} alt="dropdown" className="w-3 sm:w-3" />
              </button>
            )}
              </li>
              {displayedItemId === item.id && (
                  <li className="flex flex-col content-start px-5 text-sm font-medium text-white ">
                    {item.section.map((section:any) => (
                  <div key={section.sectionid} className="pb-4 hover:text-secondary"><Link href={`/main_page/#${item.id}_${section.sectionid}`} onClick={() => toggleDisplay(item.id)}>{section.sectiontitle}</Link></div>
                    ))}
              
                  </li>
              )}

          
          </div>
        ))}
          
        </ul>
      </nav>
    </div>
     
    )
  }
export default Sidebar;
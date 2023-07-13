import Link from "next/link";
import Image from "next/image";
import leftarrow from "../../../public/assets/icons/arrow-left.png";
import rightarrow from "../../../public/assets/icons/arrow-right.png";
import content_list from "@/../public/data/content_list.json"

export default function IntrotoVR() {
  return (
    <div className="bg-sidebar p-5 ">
      <div className="border rounded-md border-heading-text p-5 ">
          
          <div className="py-2 border rounded-3xl bg-white flex justify-between items-center">
              <Link href="/">
                  <Image src={leftarrow} alt="leftarrow" className="w-3 sm:w-3 ml-4"/>
              </Link>
              
              <div className="text-sidebar text-center text-lg font-bold" >
              Intoduction to Virtual Reality
              </div>
              <Link href="/trackinginVR">
                  <Image src={rightarrow} alt="rightarrow" className="w-3 sm:w-3 mr-4"/>
              </Link>
          </div>
          <div>
          {content_list.map((item:any) => (
              <div key={item.id}>
                  <div className="text-heading-text text-3xl font-bold pt-4 pb-2" id={item.id}>{item.title}</div>
                  <div  className=" text-white text-md font-normal pb-8">{item.content}</div>
              </div>
            
          ))}
            
          </div>
                      
        </div>
    </div>
   
  )
  }
  
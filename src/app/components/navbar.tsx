import Link from "next/link"
import Image from "next/image"
import Logo from "../../../public/assets/icons/logo-2d.png"
export default function Navbar() {
    return (
      <nav className="w-full h-16 sticky text-heading-text  border-b border-secondary ">
        <div className="flex justify-between items-center w-full h-full px-28 2xl-16">
            

            <a href="/" className="flex items-center">
                <Image src={Logo} alt="Logo" className="w-12 sm:w-16" />

                <div className="text-sm font-bold"> 
                    <span className="text-secondary">Ghost</span>
                    <span className="text-white">Vision</span>
                </div>
            </a>
            
          
            <div>
                <ul className="hidden sm:flex pr-4">
                    
                    <Link href="/">
                        <li className="ml-10 hover:border-b border-secondary text-sm font-bold">
                            Home
                        </li>
                    </Link>
                    
                    <Link href="/about">
                        <li className="ml-10 hover:border-b border-secondary text-sm font-bold">
                            About Us
                        </li>
                    </Link>
                    
                    
                    
                </ul>
            </div>
        </div>
      </nav>
     
    )
  }
  
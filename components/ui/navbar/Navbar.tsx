import { HomeIcon } from "@primer/octicons-react"
import Link from "next/link"
import { ActiveLink } from "@/components"

const navItems = [
   { path: "/pricing", text: "Pricing" },
   { path: "/about", text: "About" },
   { path: "/contact", text: "Contact" },
]

export const Navbar = async () => {
   
   return (
      <nav className="flex flex-row bg-blue-800 bg-opacity-30 p-2 m-2 rounded">

         <Link href="/"className="flex item-center">
            <HomeIcon className="m-1" size={16} />
            <span> Home </span>
         </Link>
         
         <div className="flex flex-1" />
         {
            navItems.map( ( { path, text }:any, key: number ) => (
               <ActiveLink key={ `${ path }-${ key }`} path={ path }  text={ text } />
            ) )
         }
      </nav>      
   )
}
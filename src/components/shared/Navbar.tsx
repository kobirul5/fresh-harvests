// import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Navbar() {

  const middleLinks: {name:string, path:string}[]= [
    {name: "Home", path:'/'},
    {name: "shop", path:'/shop'},
    {name: "about", path:'/about'},
    {name: "blog", path:'/blog'},
  ]


  return (
    <div className='container mx-auto flex justify-between p-5'>
      <div className='flex items-center'>

        <h3>Fresh Harvests</h3>
        </div>
        {/* middle */}
        <nav>
          <ul className="flex justify-center items-center gap-5 capitalize ">
          {middleLinks.map((link,idx)=><li key={idx}><Link href={link.path}>{link.name}</Link></li>)}
          </ul>
          
        </nav>
      {/* left nav */}
      <div className='flex  items-center gap-5'>
        <Link href={"/favorites"}>Favorites</Link>
        <Link href={"/signup"}>Sign Up</Link>
      </div>
      
    </div>
  )
}

// import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Navbar() {

  const middleLinks: { name: string, path: string }[] = [
    { name: "Home", path: '/' },
    { name: "shop", path: '/shop' },
    { name: "about", path: '/about' },
    { name: "blog", path: '/blog' },
  ]


  return (
    <>
      <div className="navbar shadow-sm backdrop-blur-2xl">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            <ul tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              {middleLinks.map((link, idx) => <li key={idx}><Link className='questrial-regular' href={link.path}>{link.name}</Link></li>)}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Fresh Harvests</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex justify-center questrial-regular items-center gap-5 capitalize ">
            {middleLinks.map((link, idx) => <li key={idx}><Link className='questrial-regular' href={link.path}>{link.name}</Link></li>)}
          </ul>
        </div>
        <div className="navbar-end pr-5">
          <Link className='' href={"/favorites"}>Favorites</Link>
          <Link className='' href={"/signup"}>Sign Up</Link>
        </div>
      </div>
    </>
  )
}

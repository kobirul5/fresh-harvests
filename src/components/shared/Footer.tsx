import { FaMailBulk, FaMap, FaPhone } from "react-icons/fa"
import Image from "next/image"
import Logo from '../../../public/logo.png'
import ViseImage from '../../../public/visa.jpg'
import PaypalImage from '../../../public/paypal.jpg'
import PayImage from '../../../public/pay.jpg'

export default function Footer() {

  const links1:{name:string, path:string}[]=[
    {name:"home", path:"/"},
    {name:"shop", path:"/shop"},
    {name:"about Us", path:"/aboutUs"},
    {name:"blog", path:"/blog"},
    {name:"detail blog", path:"/detail blog"},
  ]
  const links2:{name:string, path:string}[]=[
    {name:"favorites", path:"/favorites"},
    {name:"cart", path:"/cart"},
    {name:"sign in", path:"/signin"},
    {name:"Register", path:"/Register"},

  ]

  return (
    <footer className="footer mt-20 sm:footer-horizontal mx-auto container text-base-content p-10">
      <aside className="">
        <div className="flex justify-center items-center">

        <Image
        alt="log"
        width={30}
        height={30}
        src={Logo}/>
        <a className="font-medium text-2xl">Fresh Harvests</a>
        </div>
        
        <p>
          ACME Industries Ltd.
          <br />
          Providing reliable tech since 1992
        </p>
      </aside>
      <nav>
        <h6 className="font-semibold text-xl text-dark">Quick Links 1</h6>
        {links1.map((link, idx)=><a key={idx} className="link link-hover capitalize">{link.name}</a>)}
        
      </nav>
      <nav>
        <h6 className="font-semibold text-xl">Quick Link 2</h6>
        {links2.map((link, idx)=><a key={idx} className="link link-hover capitalize">{link.name}</a>)}
      </nav>
      <nav>
         <div className=" rounded-xl w-full max-w-md text-gray">
      <h2 className="font-semibold text-xl  text-dark">Contact us</h2>

      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <FaPhone className="text-green w-5 h-5" />
          <span>1234 5678 90</span>
        </div>
        <div className="flex items-center gap-2">
          <FaMailBulk className="text-green w-5 h-5" />
          <span>Freshharvests@gmail.com</span>
        </div>
        <div className="flex items-center gap-2">
          <FaMap className="text-green w-5 h-5" />
          <span>Tanjung Sari Street, Pontianak, Indonesia</span>
        </div>
      </div>

      <div className="mt-6">
        <h3 className="font-semibold  mb-2">
          Accepted Payment Methods:
        </h3>
        <div className="flex gap-4 items-center">
          <Image
            src={ViseImage}
            
            width={100}
            alt="Visa"
            className="h-8 object-contain bg-white px-2 py-1 rounded-md shadow"
          />
          <Image
            src={PaypalImage}
            width={100}
            alt="PayPal"
            className="h-8 object-contain bg-white px-2 py-1 rounded-md shadow"
          />
          <Image
            src={PayImage}
            width={100}
            alt="Apple Pay"
            className="h-8 object-contain bg-white px-2 py-1 rounded-md shadow"
          />
        </div>
      </div>
    </div>
      </nav>
    </footer>
  )
}

'use client';
import { FaApple, FaArrowAltCircleRight, FaGooglePlay } from 'react-icons/fa';
import Image from 'next/image';
import MainHeading from '../shared/MainHeading';
import BannerImage from '../../../public/banner-bg.jpg'
import ImageB from '../../../public/photo01.png'


export default function Banner() {
  return (
    <section style={{
    backgroundImage:
      `url(${BannerImage.src})`,
  }}
   className=" relative bg-cover bg-center overflow-hidden py-12 pb-0 px-6 md:px-20 grid md:grid-cols-2 ">
      <div className="space-y-6 mt-20">
        <MainHeading
        subtitle='Welcome to Fresh Harvest'
        title=' Fresh Fruits and Vegetables'
        />

        <p className="w-8/12">
          At Fresh Harvest, we are passionate about providing you with the freshest
          and most flavorful fruits and vegetables.
        </p>

        <button className="bg-primary btn rounded-[8px] text-white px-6 py-2  shadow hover:bg-orange-600 transition">
          Shop Now
        </button>

        <div className='mb-[150px] relative'>
          <div className=''>
            <FaArrowAltCircleRight className='absolute left-[100px]'/>
          </div>
          <div className="absolute left-[120px] bg-gray-20 p-4 rounded-md flex items-center gap-4">
          <div>
            <p className="text-sm text-[#176D38]">Special Offer</p>
            <h3 className="font-bold text-[28px]">Fresh Salad</h3>
            <p className="text-[#176D38] text-sm">Up to <span className='text-dark'>70% off</span></p>
          </div>
          <Image src="https://i.ibb.co/WWtzDrnJ/banner-girl.png" alt="Salad" width={64} height={64} className="rounded-full" />
        </div>
        </div>

        <p className='mt-4 font-light -mb-[1px]'> Download App</p>
        <div className="flex gap-4 mt-1 ">
          <a href="#" className="flex bg-black text-white items-center gap-2 border px-3 py-2 rounded-xl ">
            <FaApple className="text-2xl" />
            <div className='flex flex-col'>
              <span className='text-[10px]'>Download Now</span>
              <span>App Store</span>
            </div>
          </a>
          <a href="#" className="flex items-center gap-2 border px-3 py-2 rounded-xl bg-black text-white">
            <FaGooglePlay className="text-2xl" />
            <div className='flex flex-col'>
              <span className='text-[10px]'>Get it on</span>
              <span className='font-medium'>Google Play </span>
            </div>
          </a>
        </div>
      </div>

      <div className="mt-10 md:mt-0 relative  ">
        <Image
          src={ImageB}
          alt="Girl with Fruits"
          width={770}
          height={500}
          className="w-full absolute right-0 bottom-0 object-contain max-h-[700px] lg:-mr-20"
        />
      </div>
    </section>
  );
}

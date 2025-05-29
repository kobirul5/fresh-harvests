import Image from 'next/image'
import React from 'react'

export default function AboutUs() {
    return (
        <div className="hero ">
            <div className="hero-content flex-col lg:flex-row">
                <div className='flex-1/2 w-full relative'>
                    <Image
                        src="https://i.ibb.co/1tKZxMnN/Screenshot-56.png"
                        alt='m'
                        width={700}
                        height={700}
                        className=" rounded-lg "
                    />
                    <div className='p-2 px-4 rounded-[8px] bg-white absolute bottom-60 right-40 text-3xl '>Fresh Harvest</div>
                    <div className='absolute right-20 -bottom-10'>
                         <div className="card bg-white max-w-[200px]  shadow-xl">
                                    <figure className="px-5 pt-5 ">
                                        <div className='h-[100px] w-[200px] flex justify-center bg-gray-20 rounded-xl'>
                                            <Image
                                                src="https://i.ibb.co.com/c3Mr8XC/Caesear-Salad.webp"
                                                alt="Mustard"
                                                height={200}
                                                width={200}
                                                className="rounded-xl " />
                                        </div>
                                    </figure>
                                    <div className="card-body items-center text-center">
                                        <h2 className="card-title text-sm">Mustard</h2>
                                        <p>$2.5</p>
                                        <div className="card-actions w-full">
                                            <button className="btn btn-sm w-full rounded-[8px] hover:bg-primary bg-[#D9D9D9]/10 border-gray-20 hover:text-white">Buy Now</button>
                                        </div>
                                    </div>
                                </div>
                    </div>
                </div>
                <div className='flex-1/2'>
                    <div className="flex flex-col  mx-auto mt-10">
                        <h6 className="p-1 bg-green/10 w-fit px-5 rounded-[8px] text-green font-medium my-2">About Us</h6>
                        <h1 className="text-[32px] lg:text-5xl font-bold">About Fresh Harvest</h1>
                    </div>
                    <p className="py-6">Welcome to Fresh Harvest, your premier destination for high-quality and fresh produce. We are passionate about providing you with the finest fruits, vegetables, and salad ingredients to nourish your body and delight your taste buds. With a commitment to excellence, sustainability, and customer satisfaction, Fresh Harvest is here to revolutionize your grocery shopping experience.</p>
                    <button className="btn bg-gray-20/10 border-primary text-primary px-8 hover:bg-primary hover:text-white">Read More</button>
                </div>
            </div>
        </div>
    )
}

import React from 'react'
import MainHeading from '../shared/MainHeading';

export default function Offer() {

    

  return (
    <div
      className="w-full mt-24 bg-cover bg-center py-10 px-6 lg:px-16 text-white"
      style={{
        backgroundImage: "url(https://i.ibb.co/6c1HWxqm/pexels-lum3n-44775-1028599.jpg)", 
      }}
    >
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
        {/* Left content */}
        <div className="text-center lg:text-left space-y-4 text-dark">
          <MainHeading
          subtitle='Special Offer'
          title='Seasonal Fruit Bundle'
          
          />
          <p className="text-4xl font-medium text-black">
            Discount up to <span className="text-orange-500 font-bold">80% OFF</span>
          </p>

          {/* Countdown */}
          <div className="flex justify-center lg:justify-start gap-4 pt-4 text-black">
            {["Days", "Hour", "Min", "Second"].map((label, i) => (
              <div
                key={i}
                className="bg-white px-4 py-2 rounded-lg shadow-md text-center"
              >
                <p className="text-2xl font-bold">{
                  ["03", "18", "54", "21"][i]
                }</p>
                <span className="text-sm">{label}</span>
              </div>
            ))}
          </div>

          {/* Coupon code */}
          <div className="pt-4">
            <span className="bg-[#176D38] px-6 py-2 rounded-full font-semibold text-white text-3xl inline-block">
              CODE : <span className='text-[#FAC714]'>FRESH28</span>
            </span>
          </div>
        </div>

        {/* Right image */}
       
      </div>
    </div>
  );
};

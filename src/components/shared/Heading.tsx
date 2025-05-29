import React from 'react'

export default function Heading({title, subtitle}:{title:string, subtitle:string}) {
  return (
    <div className="flex justify-center items-center mx-auto text-center">
      <h6 className="p-2 bg-green/10 text-green font-medium max-w-[212px] rounded-2xl my-2">{subtitle}</h6>
      <h1 className="text-[32px] lg:text-5xl font-bold">{title}</h1>
    </div>
  )
}

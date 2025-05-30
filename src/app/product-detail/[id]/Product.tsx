'use client'
import Heading from "@/components/shared/Heading"
import Image from "next/image"
import { useEffect, useState } from "react"

type ProductType={
  id: string
}

type ProductData = {
  id: string;
  productName: string;
  description: string;
  price: number;
  stock: number;
  categoryId: string;
  images: string[]; // array of image URLs
  isDeleted: boolean;
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
};

export default function Product({ id}:ProductType) {
  const [pro, setPro] = useState<ProductData | null>(null)

   const { productName, price, images = [], description } = pro || {};
  const [image] = images;

  useEffect(() => {
    const dataFetch = async () => {
      const res = await fetch(`https://code-commando.com/api/v1/products/${id}`);
      const data = await res.json();
      setPro(data.data)
    }
    dataFetch()
  }, [id])
console.log(pro)

if(images.length < 1){
  return <p>Loading</p>
}

  return (
    <div>
      <div className="hero-content grid grid-cols-1 lg:grid-cols-2">
        <Image
          src={image}
          width={700}
          height={500}
          alt="product photo"
          className=""
        />
        <div>
          <Heading title={productName|| "d"} subtitle="f" />
          <p className="py-6">
            {description || "d"}
            {price || "d"}
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  )
}

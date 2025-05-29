import Image from 'next/image';
import React from 'react'
interface Products {
    id: string;
    productName: string;
    description: string;
    price: number;
    stock: number;
    images: string[];
    categoryId: string;
    isDeleted: boolean;
    createdAt: string;
    updatedAt: string;
}

type ProductCardProps = {
    product: Products;
};


export default function FreshProductCard({ product }: ProductCardProps) {
    console.log(product, "---------")
    return (
        <div className="card bg-white  shadow-xl">
            <figure className="px-5 pt-5 ">
                <div className=' h-[200px] w-[200px] flex justify-center bg-gray-20 rounded-xl'>
                    <Image
                        src={product?.images[0]}
                        alt="Shoes"
                        height={200}
                        width={200}
                        className="rounded-xl " />
                </div>
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{product?.productName}</h2>
                <p>${product.price}</p>
                <div className="card-actions w-full">
                    <button className="btn w-full rounded-[8px] hover:bg-primary bg-[#D9D9D9]/10 border-gray-20 hover:text-white">Buy Now</button>
                </div>
            </div>
        </div>
    )
}

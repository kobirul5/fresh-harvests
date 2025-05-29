"use client"
import { useEffect, useState } from "react";
import Heading from "../shared/Heading";
import FreshProductCard from "../FreshProductCard";

type Category = 'All' | 'Fruits' | 'Vegetables' | 'Salad';


export default function FreshProduct() {
    const categories: Category[] = ['All', 'Fruits', 'Vegetables', 'Salad'];
    const [activeCategory, setActiveCategory] = useState<Category>('All');
    const [products, setProducts] = useState([])

    const fetchProducts = async () => {
        try {
            const res = await fetch('https://code-commando.com/api/v1/products');
            if (!res.ok) throw new Error('Network response was not ok');
            const data = await res.json();
            setProducts(data?.data || []);
        } catch (err) {
            console.error('Failed to fetch products', err);
        }

    };

    useEffect(() => {

        fetchProducts();
    }, [])



    console.log(products)

    return (
        <div className="mt-20 container mx-auto">
            <Heading
                title="Our Fresh Products"
                subtitle="Our Products"
            />
            <div className="text-center py-5">
                <p className=" mb-2 max-w-xl mx-auto">
                    We pride ourselves on offering a wide variety of fresh and flavorful fruits, vegetables, and salad ingredients.
                </p>

                {/* Category Buttons */}
                <div className="flex justify-center gap-4 flex-wrap">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`px-5 py-2 rounded-md border transition font-medium
              ${activeCategory === category
                                    ? 'bg-green text-white'
                                    : 'bg-white text-[#A6A6A6] border-[#A6A6A6] hover:bg-green/40'}
            `}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </div>

            <div className="grid grid-cols-4 gap-5 mt-10">
                {products?.slice(0, 8).map((product, i) => <FreshProductCard key={i} product={product} />)}
            </div>
            <div className="flex justify-center items-center rounded-[8px] mt-10">
                <button className="btn bg-gray-20/10 border-primary text-primary px-8 hover:bg-primary hover:text-white ">All Products</button>
            </div>
        </div>
    )
}

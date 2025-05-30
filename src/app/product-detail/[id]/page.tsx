import Heading from "@/components/shared/Heading";
import Image from "next/image";

interface ProductPageProps {
  params: {
    id: string;
  };
}
export default async function ProductDetails({ params }: ProductPageProps) {
  const res = await fetch(`https://code-commando.com/api/v1/products/${params.id}`);
  const data = await res.json();

  console.log(data)

  console.log(params.id)
  return (
    <div className="hero ">
      <div className="hero-content grid grid-cols-1 lg:grid-cols-2">
        <Image
          src={data.data.images[0]}
          width={700}
          height={500}
          alt="product photo"
          className=""
        />
        <div>
          <Heading title={data?.data?.productName} subtitle="" />
          <p className="py-6">
            {data?.data?.description}
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  )
}


import Product from "./Product"

export default async function ProductDetails({
  params,
}: {
  params: Promise<{ id: string }>
}) {
   const { id } = await params



  console.log(id)
  return (
    <Product id={id} />
  )
}

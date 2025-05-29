import Image from "next/image";
import Heading from "../shared/Heading";

export default function Testimonial() {

    return (
        <div className="mt-20 container mx-auto">
            <div>
                <Heading
                    subtitle="Testimonial"
                    title="What Our Customers Say"
                />
                <p className="py-8 text-center mx-auto w-6/12">Welcome to the Fresh Harvest Blog, your go-to resource for all things related to fresh produce, healthy eating, and culinary inspiration.</p>
            </div>

            <div>
                <div className="flex flex-col md:flex-row items-center gap-6 lg:gap-20 p-6  max-w-[1200px] mx-auto rounded-2xl">
                    {/* Profile Image */}
                    <div className="w-[267px] h-[397px] overflow-hidden rounded-full shrink-0">
                        <Image
                            src="https://i.ibb.co/41JSDg6/pexels-alphatradezone-7352523.jpg"
                            alt="User photo"
                            width={500}
                            height={900}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Testimonial Text */}
                    <div className="text-xl p-8 bg-[#F4F6F6] rounded-2xl leading-relaxed">
                        <p className="mb-4">
                            “I absolutely love Fresh Harvest! The quality of their produce is
                            outstanding. It&apos;s always fresh, flavorful, and delicious. The
                            convenience of ordering online and having it delivered to my doorstep
                            saves me so much time. Fresh Harvest has become my go-to for all my
                            fruit and vegetable needs.”
                        </p>
                        <p className="font-semibold">Jane Doe <span className="font-normal">– Professional chef</span></p>
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center gap-4">
                <div className="h-5 w-5 rounded-full bg-green"></div>
                <div className="h-5 w-5 rounded-full bg-gray-20"></div>
                <div className="h-5 w-5 rounded-full bg-gray-20"></div>
            </div>

        </div>
    )
}

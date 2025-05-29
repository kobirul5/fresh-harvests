import Image from "next/image";
import Heading from "../shared/Heading";

export default function Blog() {
     const blogs = [
        {
            id: 1,
            title: "Top 5 Trends in HR Management for 2025",
            date: "may 25, 2025",
            description: "Exploring Seasonal Delights: A Guide to What's Fresh Right Now",
            image: "https://i.ibb.co/PZsBy6TV/imagea-3.jpg",
        },
        {
            id: 2,
            title: "How to Improve Employee Engagement",
            date: "may 25, 2025",
            description: "Exploring Seasonal Delights: A Guide to What's Fresh Right Now",
            image: "https://i.ibb.co/LXvFxgR3/imagea-2.jpg",
        },
        {
            id: 3,
            title: "The Ultimate Guide to Salary Management",
            date: "may 25, 2025",
            description: "Exploring Seasonal Delights: A Guide to What's Fresh Right Now",
            image: "https://i.ibb.co/39V2w2s2/imagea-1.jpg",
        }
    ];
    

  return (
    <div className="mt-20 container mx-auto px-5">

        <div>
            <Heading subtitle="Our Blog"
            title="Fresh Harvest Blog"
            />
            <p className="py-10 text-center mx-auto w-6/12">Welcome to the Fresh Harvest Blog, your go-to resource for all things related to fresh produce, healthy eating, and culinary inspiration.</p>
        </div>
        

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {blogs?.map((blog,) => (
                    <div
                        key={blog.id}
                        className={`shadow-lg rounded-lg overflow-hidden transition-transform transform `}
                    >
                        <Image width={400} height={400} src={blog.image} alt={blog.title} className="w-full h-[260px] object-cover" />
                        <div className="p-4">
                            <p className="font-light capitalize text-primary-color mt-1">{blog.date}</p>
                            <h3 className="text-xl font-semibold ">{blog.description}</h3>
                            <button className="hover:border-b cursor-pointer text-primary mt-4">
                                Read More →
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        
    </div>
  )
}

import AboutUs from "@/components/HomeComponents/AboutUs";
import Banner from "@/components/HomeComponents/Banner";
import Blog from "@/components/HomeComponents/Blog";
import FreshProduct from "@/components/HomeComponents/FreshProduct";
import Offer from "@/components/HomeComponents/Offer";
import Testimonial from "@/components/HomeComponents/Testimonial";

export default function Home() {
  return (
    <main>
      <Banner/>
      <FreshProduct/>
      <AboutUs/>
      <Offer/>
      <Testimonial/>
      <Blog/>
    </main>
  );
}

import AboutUs from "@/components/HomeComponents/AboutUs";
import Banner from "@/components/HomeComponents/Banner";
import Blog from "@/components/HomeComponents/Blog";
import FreshProduct from "@/components/HomeComponents/FreshProduct";
import Offer from "@/components/HomeComponents/Offer";

export default function Home() {
  return (
    <main>
      <Banner/>
      <FreshProduct/>
      <AboutUs/>
      <Offer/>
      <Blog/>
    </main>
  );
}

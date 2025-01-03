import Banner from "@/app/components/Banner";
import Card from "@/app/components/Card";
import Carousel from "@/app/components/Carousel";
import Footer from "@/app/components/Footer";
import Menu from "@/app/components/MenuItems";
import Navbar from "@/app/components/Navbar";
import Offer from "@/app/components/Offer";
import Pizza from "@/app/components/Pizza";
import ProductList from "@/app/components/ProductList";
import Progressor from "@/app/components/Progressor";
import Reservation from "@/app/components/Reservation";
import Image from "next/image";
import Productcard from "./components/Productcard";


export default function App() {
  return (
  <div className="bg-gradient-to-t from-black to-gray-700 min-h-screen">
<Navbar/>
<Carousel/>
<Progressor/>
<Pizza/>
<Banner/>
<ProductList/>
<Menu/>
<Offer/>
<Card/>
<Reservation/>

<Footer/>
  </div>
  );
}

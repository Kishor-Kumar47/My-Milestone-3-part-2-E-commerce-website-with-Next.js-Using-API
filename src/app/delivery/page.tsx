import Image from "next/image";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function DeliveryPage() {
  return (
    <main>
      <div className="bg-gradient-to-t from-black to-gray-700">
        <Navbar />
      </div>

      <div className="min-h-screen bg-gradient-to-t from-black to-slate-700 py-10">
        {/* Introduction */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-amber-600">
            Pizza at Your Doorstep
          </h1>
          <p className="mt-4 text-lg text-gray-300">
            Whether you are in Tando Allahyar or beyond we are got you covered &#10069;
          </p>
        </div>

        {/* Delivery Zones */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {/* Your City Card */}
          <div className="bg-gradient-to-r from-black to-lime-700 p-6 rounded-lg shadow-md text-center hover:scale-105 transition-transform duration-300 ease-in-out ">
            <h2 className="text-2xl font-semibold text-lime-600">
              Tando Allahyar
            </h2>
            <p className="mt-4 text-gray-400">
              {" "}
              <span className="text-lime-600">Free delivery </span>on all
              orders &#10069;
            </p>
            <p className="mt-2 text-sm text-gray-400">
              Delivered within 30 minutes.
            </p>
            <Image
              src="/images/deliver-city.jpg"
              alt="Free Delivery"
              width={300}
              height={200}
              className="mx-auto mt-6 w-24 h-24"
            />
            <button className="mt-6 bg-lime-500 text-white py-2 px-6 rounded-lg hover:bg-lime-600">
              Order Now
            </button>
          </div>

          {/* Whole Region Card */}
          <div className=" p-6 rounded-lg shadow-md text-center bg-gradient-to-r from-black to-amber-700 hover:scale-105 transition-transform duration-300 ease-in-out">
            <h2 className="text-2xl font-semibold text-amber-600">
              Whole Region
            </h2>
            <p className="mt-4 text-gray-400">
              {" "}
              <span className="text-amber-400">300 PKR</span> delivery charge
              per order.
            </p>
            <p className="mt-2 text-sm text-gray-400">
              Delivered within 60-90 minutes.
            </p>
            <Image
              src="/images/delivery-region.webp"
              alt="Region Delivery"
              width={300}
              height={200}
              className="mx-auto mt-6 w-24 h-24"
            />
            <button className="mt-6 bg-amber-500 text-white py-2 px-6 rounded-lg hover:bg-amber-600">
              Order Now
            </button>
          </div>
        </div>

        {/* Delivery Policy Section */}
        <div className="mt-16 max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-semibold text-gray-400">
            Our Delivery Policy
          </h3>
          <ul className="mt-6 space-y-4 text-gray-400">
            <li>🍕 Free delivery in Tando Allahyar for all orders.</li>
            <li>🚚 300 PKR delivery charge for the whole region.</li>
            <li>⏰ Guaranteed fresh and hot delivery every time.</li>
            <li>📦 Real-time order tracking coming soon &#10069;</li>
          </ul>
        </div>
      </div>

      <Footer />
    </main>
  );
}

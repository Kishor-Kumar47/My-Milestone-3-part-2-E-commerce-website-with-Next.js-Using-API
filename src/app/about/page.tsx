import Image from "next/image";
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const page = () => {
  return (
    <main>
      <div className="bg-gradient-to-t from-black to-gray-700">
        <Navbar />
      </div>
      <section className="bg-gradient-to-t from-black to-gray-700 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <Image
              className="hover:scale-[1.1] transition-transform duration-300 object-cover object-center rounded"
              alt="Img"
              src="/images/bg-piza.jpeg"
              width={500}
              height={300}
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-300">
              Our Passion, Your Pizza &#33;
              <br className="hidden  lg:inline-block" />
              <span className="text-xl text-lime-600">
                Owned by Kishor Kumar
              </span>
            </h1>
            <p className="mb-8 leading-relaxed text-gray-300">
              At VN Pizza we bring a slice of happiness to your table. Every
              pizza we craft is a blend of fresh ingredients authentic recipes
              and a passion for perfection. From the crispy crust to the rich
              toppings every bite is a celebration of flavor. Whether you are
              dining in or ordering out we are here to satisfy your cravings and
              make every meal unforgettable. Join us on a delicious journey
              today &#33;
              <br />
              <span className="text-xl text-amber-600">
                {" "}
                &#9889; Slice Your Way to a Gift &#33;
              </span>
              <br />
              Go to Win Gift Page and Explore More &hellip;
            </p>
            <div className="flex justify-center">
              <button className="inline-flex hover:scale-[1.65] transition-transform text-white bg-amber-600 border-0 py-2 px-6 focus:outline-none hover:bg-amber-700 rounded text-lg">
                Contact US &gt;
              </button>
              <button className="ml-4 inline-flex hover:scale-[1.65] transition-transform text-black font-bold bg-lime-500 border-0 py-2 px-6 focus:outline-none hover:bg-lime-600 rounded text-lg">
                Win Pizza &gt;
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default page;

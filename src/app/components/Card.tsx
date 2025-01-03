import Image from "next/image";
import React from "react";

const floatingImageContentBlock = () => {
  return (
    <section className="container mx-auto  py-10 flex flex-col md:flex-row items-center">
      <div className="md:w-1/2 md:pr-10">
        <h2 className="text-3xl font-bold mb-4 text-white">Delicious Pizza</h2>
        <p className="text-white mb-4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est delectus
          ea repellat quos nemo{" "}
        </p>
        <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition duration-200">
          Order Now
        </button>

        <h3 className="text-2xl font-semibold mt-6 mb-2 text-center text-white ">
          Coming Soon: Our New Burger Launches
        </h3>

        <ul className="text-white">
          <li>
            <strong>Cheesy Pizza: </strong>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
          </li>
          <br />
          <li>
            <strong>Spicy Pizza: </strong>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
          </li>
          <br />
          <li>
            <strong>Hot Pizza: </strong>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
          </li>
          <br />
          <li>
            <strong>Vagi Pizza: </strong>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
          </li>
          <br />
        </ul>
      </div>
      <div className="md:w-1/2 mt-6 md:mt-0">
        <Image
          src={"/images/ttpiza.jpg"}
          width={300}
          height={300}
          alt="pizza"
          className="w-full h-auto rounded-lg shadow-lg transition-transform duration-500 ease-in-out transform hover:scale-105 mr-7"
        />
      </div>
    </section>
  );
};

export default floatingImageContentBlock;

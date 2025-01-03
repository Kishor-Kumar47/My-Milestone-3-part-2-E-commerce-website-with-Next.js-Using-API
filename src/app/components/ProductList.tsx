import Image from "next/image";
import React from "react";

const products = [
  {
    id: 1,
    title: "Delicus Pizza",
    category: "fixing",
    price: "Rs700",
    imageUrl: "/images/piza-6.jpeg",
    bgColor: "bg-lime-400",
  },
  {
    id: 2,
    title: "Family Pizza",
    category: "Double Selice",
    price: "Rs900",
    imageUrl: "/images/piza-8.jpeg",
    bgColor: "bg-yellow-400",
  },
  {
    id: 1,
    title: "Vaggi Spicy",
    category: "Friends",
    price: "Rs1300",
    imageUrl: "/images/piza-9.jpeg",
    bgColor: "bg-amber-500",
  },
];

const ProductList = () => {
  return (
    <div className="p-1 flex flex-wrap items-center justify-center mb-6">
      {products.map((product) => (
        <div
          key={product.id}
          className={` shrink-0 m-6 relative overflow-hidden ${product.bgColor} rounded-lg shadow-lg shadow-slate-500 group max-w-xs `}
        >
          <svg
            className="absolute bottom-0 left-0 mb-8 scale-150 group:hover:scale-[1.65] transition-transform"
            viewBox="0 0 375 283"
            fill="none"
          >
            <rect
              x="159.52"
              y="152"
              height="152"
              width="152"
              rx="8"
              transform="rotate(-45 159.52 175)"
              fill="amber"
            />
            <rect
              y="107.48"
              height="152"
              width="152"
              rx="8"
              transform="rotate(-45 0 107.48)"
              fill="red"
            />
          </svg>

          <div className="relative  px-10 flex items-center justify-center group-hover:scale-110 transition-transform">
            <div
              className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
              style={{
                background: "radial-gradient(black, transparent 50%",
                transform: "rotate3d(2, 0, 1, 20deg) scale3d(1, 0.6, 1)",
                opacity: 0.2,
              }}
            ></div>

            <Image
              className="relative "
              src={product.imageUrl}
              width={500}
              height={500}
              alt={product.title}
            />
          </div>

          <div className="relative text-white px-6 pb-6 mt-6">
            <span className="block opacity-75 -mb-1">{product.category}</span>

            <div className="flex justify-between">
              <span className="block font-semibold text-xl">
                {product.title}
              </span>
              <span className="block bg-white rounded-full text-orange-500 text-xs font-bold px-3 py-2 leading-none items-center">
                {product.price}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;

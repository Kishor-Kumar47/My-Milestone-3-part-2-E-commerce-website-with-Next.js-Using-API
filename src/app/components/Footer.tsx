import Link from "next/link";
import React from "react";
import {
  FaLinkedin,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagramSquare,
  FaPizzaSlice,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="flex flex-col md:flex-row md:gap-8 space-y-10 justify-center pt-5 pb-10 bg-gradient-to-l from-black to-slate-900">
        <div className="flex">
          
          <FaPizzaSlice className="text-amber-500 text-5xl" />
          <h1 className="text-7xl text-amber-500 hover:text-lime-500  ">
            Pizza
          </h1>
        </div>

        <nav className="flex justify-center flex-wrap gap-6 text-slate-500 font-medium  ">
          <Link href={"/"} className="hover:text-amber-500 text-lime-500 ">
            Home
          </Link>
          <Link href={"/about"} className="hover:text-amber-500 text-lime-500 ">
            About
          </Link>
          <Link href={"/delivery"} className="hover:text-amber-500 text-lime-500 ">
            Delivery
          </Link>
          <Link href={"/contact"} className="hover:text-amber-500 text-lime-500 ">
            Contact
          </Link>
        </nav>

        <div className="flex justify-center space-x-5  ">
          <Link href={""} target="blank" rel="nofollow noopener">
            <FaLinkedin className="text-3xl text-sky-500 shadow-gray-200 shadow-md transition-transform duration-300 ease-in-out transform hover:scale-105" />
          </Link>
          <Link href={""} target="blank" rel="nofollow noopener">
            <FaInstagramSquare className="text-3xl text-pink-500 shadow-gray-200 shadow-md transition-transform duration-300 ease-in-out transform hover:scale-105" />
          </Link>
          <Link href={""} target="blank" rel="nofollow noopener">
            <FaFacebookSquare className="text-3xl text-blue-600 shadow-gray-200 shadow-md transition-transform duration-300 ease-in-out transform hover:scale-105" />
          </Link>
          <Link href={""} target="blank" rel="nofollow noopener">
            <FaGithubSquare className="text-3xl text-gray-300 shadow-gray-200 shadow-md transition-transform duration-300 ease-in-out transform hover:scale-105" />
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

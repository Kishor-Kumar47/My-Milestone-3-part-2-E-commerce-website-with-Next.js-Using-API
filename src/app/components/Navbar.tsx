import Link from "next/link";
import React from "react";
import { FaPizzaSlice, FaSearch, FaBolt } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";

const Navbar = () => {
  return (
    <main>
      <div className="grid xl:grid-cols-1 grid-cos-1">
        <div className="p-5">
          <div className="py-3 px-4 rounded-xl border w-full">
            <div className="flex justify-between items-center">
              <div className="flex justify-items-center items-center gap-2">
                {/* logo */}
                <FaPizzaSlice className="w-6 h-6 text-orange-400 hover:text-yellow-400 " />

                {/* search bar */}
                <div style={{ position: "relative" }}>
                  <input
                    className="rounded-3xl py-3 px-3 outline-none text-xs w-[350px] pr-10 hidden lg:block md:block"
                    placeholder="Find Your Fvrit Pizza "
                  />

                  <FaSearch className="w-5 h-5 text-orange-400 absolute right-3 top-1/2 transform -translate-y-1/2 hidden lg:block md:block " />
                </div>
                <nav className=" flex justify-center flex-wrap md:hidden lg:block   gap-6 text-slate-500 font-medium  ">
                  <Link
                    href={"/"}
                    className="hover:text-amber-500 text-lime-500 lg:pr-4 lg:pl-4"
                  >
                    Home
                  </Link>
                  <Link
                    href={"/about"}
                    className="hover:text-amber-500 text-lime-500 lg:pr-4  "
                  >
                    About
                  </Link>
                  <Link
                    href={"/delivery"}
                    className="hover:text-amber-500 text-lime-500 lg:pr-4  "
                  >
                    Delivery
                  </Link>
                  <Link
                    href={"/contact"}
                    className="hover:text-amber-500 text-lime-500 lg:pr-4  "
                  >
                    Contact
                  </Link>
                </nav>
              </div>

              <div className="flex justify-center items-center gap-2">
                <span className="w-5 h-5 text-amber-400 hidden lg:block md:block">
                  <FaBolt />
                </span>
                <p className="text-sm text-white hidden lg:block md:block">
                  Order now and get it with
                  <span className="text-amber-400"> 15 minutes</span>
                </p>

                {/* cart icon */}
                <FaCartShopping className="w-8 h-8 rounded-xl ring-2 p-1 relative text-orange-400 hover:text-amber-400" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Navbar;

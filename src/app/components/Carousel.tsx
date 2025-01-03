import Image from "next/image";
import Link from "next/link";
import React from "react";

const Carousel = () => {
  return (
    <div>
      <section className="bg-gradient-to-t from-black to-gray-700">
        <div className="py-4 px-2 mx-auto max-w-screen-xl sm:py-4 lg:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 h-full">
            <div className="col-span-2 sm:col-span-1 md:col-span-2 bg-gradient-to-r from-black to-gray-700 h-auto md:full flex flex-col">
              <Link
                href={""}
                className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow"
              >
                <Image
                  src="/images/piza3.jpg"
                  width={300}
                  height={200}
                  alt="Image"
                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />

                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5" />
                <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-0xl ">
                  Classic Bites
                </h3>
              </Link>
            </div>

            <div className="col-span-2 sm:col-span-1 md:col-span-2 bg-gradient-to-r from-black to-gray-700">
              <Link
                href={""}
                className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 mb-4"
              >
                <Image
                  src="/images/piza2.jpg"
                  width={300}
                  height={200}
                  alt="Image"
                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />

                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5" />
                <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-0xl ">
                  Lazeez
                </h3>
              </Link>

              <div className="grid gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 ">
                <Link
                  href={""}
                  className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 "
                >
                  <Image
                    src="/images/piza1.jpg"
                    width={300}
                    height={200}
                    alt="Image"
                    className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  />

                  <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5" />
                  <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-0xl ">
                    Spicy
                  </h3>
                </Link>
                <Link
                  href={""}
                  className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 "
                >
                  <Image
                    src="/images/ttpiza.jpg"
                    width={300}
                    height={200}
                    alt="Image"
                    className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  />

                  <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5" />
                  <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-0xl ">
                    vaggie
                  </h3>
                </Link>
              </div>
            </div>

            <div className="col-span-2 sm:col-span-2 md:col-span-1 bg-gradient-to-r from-black to-gray-700 h-auto md:h-full flex flex-col">
              <Link
                href={""}
                className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow "
              >
                <Image
                  src="/images/piza5.avif"
                  width={300}
                  height={200}
                  alt="Image"
                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />

                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5" />
                <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-0xl ">
                  Cheesy Delights
                </h3>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Carousel;

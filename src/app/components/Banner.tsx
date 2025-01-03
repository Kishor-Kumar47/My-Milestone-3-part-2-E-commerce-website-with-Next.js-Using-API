import Image from 'next/image'
import React from 'react'

const Banner = () => {
  return (
    <div className='relative overflow-hidden bg-gradient-to-r from-black to-gray-700 font-sans px-6 py-12 mb-7'>
      <div className='absolute inset-0 opacity-20'>
        <Image
        src={'/images/banner-piza-2.jpg'}
        width={300}
        height={20}
        alt='piza banner'
        className='w-full h-full object-cover'
        />
      </div>
      <div className='relative z-10 container mx-auto flex flex-col justify-center items-center text-center'>
        <h2 className='text-white sm:text-5xl font-bold mb-4'>Discover Our Menu</h2>
        <p className='text-white text-lg text-center mb-6 max-w-xl'>Shop Now Our Exclusive Pizza</p>

        <button
        type='button'
        className='bg-lime-500 text-white text-sm font-semibold py-3 px-6 rounded-xl shadow-lg hover:bg-lime-600 hover:scale-[1.4] transition-transform'
        >Explore Our Offers</button>
      </div>
    </div>
  )
}

export default Banner
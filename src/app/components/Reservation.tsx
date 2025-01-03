import React from 'react'

const Reservation = () => {
  return (
    <section className='bg-gradient-to-r from-black to bg-slate-900 py-10'>
        <div className='container mx-auto text-center'>
            <h2 className='text-3xl font-extrabold mb-6 text-white '>Make A Reservation</h2>
            <form className='max-w-md mx-auto'>
                <div className='mb-4 text-black'>
                    <input 
                    type="text"
                    placeholder='Your Name'
                    required
                    className='w-full p-3 border border-gray-300 rounded-md hover:scale-105 duration-500 transition-transform '
                    />
                </div>
                <div className='mb-4 text-black'>
                    <input 
                    type="email"
                    placeholder='Your Email'
                    required
                    className='w-full p-3 border border-gray-300 rounded-md hover:scale-105 duration-500 transition-transform '
                    />
                </div>
                <div className='mb-4 text-black'>
                    <input 
                    type="date"
                    placeholder='Your Name'
                    required
                    className='w-full p-3 border border-gray-300 rounded-md hover:scale-105 duration-500 transition-transform'
                    
                    />
                </div>
                <div className='mb-4 text-black'>
                    <input 
                    type="time"
                    placeholder='Your Name'
                    required
                    className='w-full p-3 border border-gray-300 rounded-md hover:scale-105 duration-500 transition-transform '
                    
                    />
                </div>
                <div className='mb-4'>
                    <button className='bg-lime-500 text-white py-2 px-4 rounded-md hover:bg-lime-600 hover:scale-105 duration-500 transition-transform'>
                        Reserved
                    </button>
                </div>



            </form>
        </div>

    </section>
  )
}

export default Reservation
'use client'
import React from 'react'

type Offer ={
  title: string;
  description: string;
}

const SpecialOffers: React.FC = () =>{
  const offers: Offer[] =[

    {
      title: 'Happy Hours',
      description: '5PM se 7PM tk tamam drinks per 50% off hasil kren '
    },
    {
      title: 'Family Meal Deals',
      description: '2 main courses order kren aur family deal coupon code hasil kren'
    },
    {
      title: 'Weekly Brunch',
      description: 'Ek free complimentry drink ka lutf utaen'
    },
    {
      title: 'Mid Night Deals',
      description: 'Ek free complimentry drink ka lutf utaen'
    },


  ];

  const handleofferClick = (description: string) =>{
    alert(description);
  }

  return(
    <section className='py-10'>
      <div className='container mx-auto text-center'>
        <h2 className='text-4xl font-bold mb-6 text-white'> Special Offers</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6'>
          {offers.map ((offer, index) =>(
            <button key={index}
            onClick={() => handleofferClick (offer.description)}
            className='bg-white shadow-lg rounded-lg text-center hover:bg-gray-300 transition duration-300 transform hover:scale-105'
            >
              <h3 className='text-2xl font-semibold text-orange-600 '>
               {offer.title} 
              </h3>
              <p className='text-slate-700 mt-3'>{offer.description}</p>

            </button>
          ))}
        </div>
      </div>

    </section>
  )


}

export default SpecialOffers






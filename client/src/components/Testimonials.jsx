import React from 'react'
import { assets, testimonialsData } from '../assets/assets'
import { motion } from 'framer-motion'
const Testimonials = () => {
  return (
    <motion.div className='flex flex-col items-center justify-center  py-12 '
    
    initial={{opacity:0.2 ,y:100}}
    transition={{duration:1}}
    whileInView={{opacity:1,y:0}}
    viewport={{once:true}}
    
    >
      <h1 className='text-4xl sm:text-4xl font-semibold mb-2'>Customer Testimonials</h1>
      <p className='text-gray-500 mb-12 text-lg '>What Our Clients Think</p>
      <div className='flex flex-wrap gap-6 '>
        {testimonialsData.map((testimonial,index)=>(
            <div className="bg-white p-12 rounded-lg shadow-md border-8 border-white w-80 m-auto cursor-pointer hover:scale-[1.05] hover:rotate-3 hover:skew-x-6 hover:shadow-2xl hover:bg-opacity-80 transition-all duration-500 ease-out transform " key={index}>
                <div className='flex flex-col items-center'>
                    <img src={testimonial.image} alt="" className='rounded-full w-20  ' />
                    <h2 className='text-xl font-semibold mt-3'>{testimonial.name}</h2>
                    <p className='text-gray-500 mb-4 '>({testimonial.role})</p>
                    <div className='flex mb-4 '>
                        {Array(testimonial.stars).fill().map((item,index)=>(
                            <img  key={index} src={assets.rating_star} alt="" />

                        ))}

                    </div>
                    <p className='text-center text-sm text-black-600'>{testimonial.text}</p>


                </div>

            </div>

        ))}

      </div>
    </motion.div>
  )
}

export default Testimonials

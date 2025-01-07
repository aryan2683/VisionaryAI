import React from 'react'
import { stepsData } from '../assets/assets'
import { motion } from 'framer-motion'

const Steps = () => {
  return (
    <motion.div className='flex flex-col items-center justify-center mt-12 my-32 '
    
    initial={{opacity:0.2 ,y:100}}
    transition={{duration:1}}
    whileInView={{opacity:1,y:0}}
    viewport={{once:true}}

    >
      <h1 className='underline text-4xl sm:text-4xl font-semibold mb-2 '>HOW IT WORKS</h1>
      <p className='text-lg text-gray-600 mb-8 '>Transform words into stunning images</p>
      <motion.div className='space-y-9 w-full max-w-3xl text-md'
      
      initial={{ x: "100vw", opacity: 0 }} // Start off-screen and invisible
  animate={{ x: 0, opacity: 1 }} // Move to original position and fade in
  whileInView={{ x: 0, opacity: 1 }}
  transition={{
    duration: 2, // Increase duration for a slower, more dramatic effect
    ease: "easeOut", // Use easeOut for a smooth deceleration
    delay: 0.2, // Add a slight delay for emphasis
    type: "spring", // Spring type gives a more natural, bouncy effect
    stiffness: 100, // Adjust stiffness for more bounce
    damping: 25, // Add damping for smoothness
  }}
  viewport={{ once: true }}
      >
        {stepsData.map((item, index) => (
          <div key={index} className='flex items-center gap-7 p-7 px-9 bg-white shadow-md border cursor-pointer hover:scale-[1.1] hover:rotate-3 hover:shadow-2xl hover:bg-opacity-80 transition-all duration-500 ease-out transform rounded-lg '>

            <img width={40} src={item.icon} alt="" />
            <div>
              <h2 className='text-xl font-medium'>{item.title}</h2>
              <p className='text-grap-500'>{item.description}</p>
            </div>

          </div>

        ))}
      </motion.div>
    </motion.div>
  )
}

export default Steps

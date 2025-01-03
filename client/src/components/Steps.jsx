import React from 'react'
import { stepsData } from '../assets/assets'
import { motion } from 'framer-motion'

const Steps = () => {
  return (
    <motion.div className='flex flex-col items-center justify-center my-32 '
    
    initial={{opacity:0.2 ,y:100}}
    transition={{duration:1}}
    whileInView={{opacity:1,y:0}}
    viewport={{once:true}}

    >
      <h1 className='underline text-3xl sm:text-4xl font-semibold mb-2 '>HOW IT WORKS</h1>
      <p className='text-lg text-gray-600 mb-8 '>Transform words into stunning images</p>
      <motion.div className='space-y-4 w-full max-w-3xl text-sm'
      
      initial={{ x: "100vw" }}
      animate={{ x: 0 }}
      whileInView={{x:0}}
      transition={{ duration: 1 }}
      viewport={{ once: true,amount:0.5  }}

      >
        {stepsData.map((item, index) => (
          <div key={index} className='flex items-center gap-4 p-5 px-8 bg-white/20 shadow-md border cursor-pointer hover:scale-[1.02] transition-all duration-300 rounded-lg '>

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

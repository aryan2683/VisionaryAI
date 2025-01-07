import React from 'react'
import { assets } from '../assets/assets'
import { motion } from 'framer-motion'


const Description = () => {
  return (
    <motion.div className='flex flex-col items-center justify-center  my-24 p-6  md:px-28 bg-black  pb-20'
    
    initial={{opacity:0.2 ,y:100}}
    transition={{duration:1}}
    whileInView={{opacity:1,y:0}}
    viewport={{once:true}}
    
    >
      <h1 className='text-4xl sm:text-4xl font-semibold mb-2 text-teal-600 underline'>Create AI Images</h1>
      <p className='text-white mb-8 text-lg '>Turn your Imagination into Visuals</p>
      <div className='flex flex-col gap-5 md:gap-14 md:flex-row items-center'>
      <img 
  src={assets.sample_img_1} 
  alt="" 
  className="w-80 xl:w-96 rounded-lg border-4  shadow-md hover:shadow-xl hover:scale-105 hover:border-zinc-500 transition-all duration-300 ease-in-out"
/>

        <div className=''>
        <h2 className="text-3xl font-extrabold max-w-lg mb-6 text-white tracking-wider leading-snug uppercase relative before:content-[''] before:absolute before:w-16 before:h-1 before:bg-red-400 before:top-0 before:left-0 after:content-[''] after:absolute after:w-10 after:h-1 after:bg-red-400 after:bottom-0 after:right-0 before:rounded-tl-lg after:rounded-br-lg pb-4 hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in-out">
  Introducing the AI-Powered Text-to-Image Generator
</h2>


            <p className='text-sky-600 mb-4 text-justify   '>Just type your vision, and our powerful AI brings it to life as extraordinary visuals—whether it’s product designs, character illustrations, stunning portraits, or even concepts that don’t exist yet. With cutting-edge technology driving limitless creativity, your imagination knows no bounds!</p>
            <p className='text-sky-600 mb-4 text-justify'>Effortlessly bring your ideas to life with our free AI image generator! Whether you need stunning visuals or unique creations, our tool transforms your words into captivating, eye-catching images in an instant.</p>
        </div>
      </div>
    </motion.div>
  )
}

export default Description

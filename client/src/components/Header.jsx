import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { motion } from "motion/react"
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom'

const Header = () => {
    const navigate=useNavigate()

    const {user,setShowLogin}=useContext(AppContext)
    const onClickHandler=()=>{
        if(user){
            navigate('/result')
        }else{
            setShowLogin(true)
        }


    }
    return (
        <motion.div className='flex flex-col justify-center items-center text-center my-20 bg-black mt-0  '
            initial={{ opacity: 0.2, y: 100 }}
            transition={{ duration: 1.5 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}>
            <motion.div className='text-stone-500 inline-flex text-center gap-2 bg-white px-6 py-1 rounded-full border border-neutral-500 mt-10'
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}>
                <p className='text-md text-black m-1 '>Discover the Ultimate Text-to-Image Generator</p>
                <img src={assets.star_icon} alt="" />
            </motion.div>

            <motion.h1 className='text-3xl max-w-[200px] sm:text-5xl sm:max-w-[610px] mx-auto mt-6 text-center text-white'>Transform <span className='underline text-blue-600'>Text</span> into Stunning <span className='text-red-600 underline'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.2 }}
            >Images</span> in Seconds!</motion.h1>
            <motion.p className='text-center max-w-xl mx-auto mt-5 text-yellow-600 '
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
            >With AI, turn your imagination into breathtaking visual art in seconds – just type and let the magic unfold!</motion.p>
            <motion.button onClick={onClickHandler} className='font-poppins sm:text-lg text-white bg-white-600 w-auto mt-8 px-12 py-2.5 flex items-center gap-2 rounded-full border-2 border-white '
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ default: { duration: 0.5 }, opacity: { delay: 0.8, duration: 1 } }}
            >Generate Images
                <img className='h-6' src={assets.star_group} alt="" /></motion.button>
                <motion.div
  className="flex flex-wrap justify-center mt-16 gap-3 overflow-hidden relative"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 1, duration: 1 }}
>
<motion.div
  className="flex flex-wrap justify-center mt-16 gap-3 overflow-hidden relative"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 1, duration: 1 }}
>
<motion.div
  className="flex animate-marquee gap-3"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 1, duration: 1 }}
>
  {/* First set of unique images */}
  {Array(6).fill('').map((item, index) => (
    <motion.img
      key={index}
      className="rounded hover:scale-105 transition-all duration-300 cursor-pointer max-sm:w-20 w-32 h-32 border-2 border-white mb-5"
      whileHover={{ scale: 1.05, duration: 0.1 }}
      src={
        index === 0
          ? assets.sample_img_1
          : index === 1
          ? assets.sample_img_2
          : index === 2
          ? assets.sample_img_3
          : index === 3
          ? assets.sample_img_4
          : index === 4
          ? assets.sample_img_1
          : assets.sample_img_2
      }
      alt={`image-${index}`}
      width={70}
    />
  ))}

  {/* Second set of images, ensuring no repetition and using sample_img_1 to sample_img_4 */}
  {Array(6).fill('').map((item, index) => (
    <motion.img
      key={index + 6} // Adjust key for second set of images
      className="rounded hover:scale-105 transition-all duration-300 cursor-pointer max-sm:w-20 w-32 h-32 border-2 border-white mb-5"
      whileHover={{ scale: 1.05, duration: 0.1 }}
      src={
        index % 4 === 0
          ? assets.sample_img_1
          : index % 4 === 1
          ? assets.sample_img_2
          : index % 4 === 2
          ? assets.sample_img_3
          : assets.sample_img_4
      }
      alt={`image-${index + 6}`}
      width={70}
    />
  ))}
</motion.div>

</motion.div>

</motion.div>

            <motion.p

            initial={{opacity:0}}
            animate={{opacity:1}}

            transition={{delay:1.2,duration:0.8}}

                className="mt-3 text-white font-bold text-lg bg-gradient-to-r from-blue-700 to--600 border border-blue-600 hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-800 p-4 rounded-xl shadow-lg transition-all duration-300 ease-in-out mb-10"

                



            >Generated Images from VisionaryAI</motion.p>
        </motion.div>
    )
}

export default Header

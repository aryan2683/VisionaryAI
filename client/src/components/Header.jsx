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
        <motion.div className='flex flex-col justify-center items-center text-center my-20 '
            initial={{ opacity: 0.2, y: 100 }}
            transition={{ duration: 1.5 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}>
            <motion.div className='text-stone-500 inline-flex text-center gap-2 bg-white px-6 py-1 rounded-full border border-neutral-500'
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}>
                <p>"Discover the Ultimate Text-to-Image Generator"</p>
                <img src={assets.star_icon} alt="" />
            </motion.div>

            <motion.h1 className='text-4xl max-w-[200px] sm:text-5xl sm:max-w-[610px] mx-auto mt-10 text-center'>Transform <span className='underline text-blue-600'>Text</span> into Stunning <span className='text-red-600 underline'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.2 }}
            >Images</span> in Seconds!</motion.h1>
            <motion.p className='text-center max-w-xl mx-auto mt-5 '
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
            >With AI, turn your imagination into breathtaking visual art in seconds – just type and let the magic unfold!</motion.p>
            <motion.button onClick={onClickHandler} className='font-poppins sm:text-lg text-white bg-black w-auto mt-8 px-12 py-2.5 flex items-center gap-2 rounded-full'
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ default: { duration: 0.5 }, opacity: { delay: 0.8, duration: 1 } }}
            >Generate Images
                <img className='h-6' src={assets.star_group} alt="" /></motion.button>
            <motion.div className='flex flex-wrap justify-center mt-16 gap-3 '

                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
            >
                {Array(6).fill('').map((item, index) => (
                    <motion.img className="rounded hover:scale-105 transition-all duration-300 cursor-pointer max-sm:w-10 "

                        whileHover={{ scale: 1.05, duration: 0.1 }}

                        src={index % 2 === 0 ? assets.sample_img_2 : assets.sample_img_1} alt="" key={index} width={70} />
                ))}
            </motion.div>
            <motion.p

            initial={{opacity:0}}
            animate={{opacity:1}}

            transition={{delay:1.2,duration:0.8}}

                className="mt-3 text-zinc-800 font-bold text-sm bg-gradient-to-r from-blue-400 to-blue-600 border border-blue-600 hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-800 p-4 rounded-xl shadow-lg transition-all duration-300 ease-in-out"

                



            >Generated Images from VisionaryAI</motion.p>
        </motion.div>
    )
}

export default Header

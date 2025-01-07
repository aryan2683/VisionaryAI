import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'



const GenerateButton = () => {

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

    <motion.div className='pb-16 text-center bg-black '
    
    initial={{opacity:0.2 ,y:100}}
    transition={{duration:1}}
    whileInView={{opacity:1,y:0}}
    viewport={{once:true}}
    
    >
      <h1 className='text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold text-nuetral-800 py-6 md:py-16 text-white'>Experience the magic—try it now and see the transformation unfold!</h1>
      <button onClick={onClickHandler} className='inline-flex items-center gap-2 px-12 py-3 rounded-full  mt-3 text-white font-bold text-lg bg-gradient-to-r from-red-700 to--100 border border-red-600 hover:bg-gradient-to-r hover:from-red-600 hover:to-red-800  rounded-xl shadow-lg transition-all duration-300 ease-in-out '
      
      
      >Generate Images
      <img src={assets.star_group} alt="" className='h-6'/>
      </button>
      
    </motion.div>
  )
}

export default GenerateButton

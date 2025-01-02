import React, { useState } from 'react'
import { assets } from '../assets/assets'
import { motion } from 'framer-motion'
import { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Result = () => {

  const [image,setImage]=useState(assets.sample_img_1)

  const [isImageLoaded,setisImageLoaded]=useState(false)

  const [loading,setLoading]=useState(false)
  const [input,setinput]=useState("")

  const {generateImage}=useContext(AppContext)

  const onSubmitHandler = async(e)=>{
    e.preventDefault()
    setLoading(true)
    if(input){
      const image = await generateImage(input)
      if(image){
        
        setisImageLoaded(true)
        setImage(image)
       
      }

    } setLoading(false)


  }

  return (
    <motion.form 
    
    initial={{opacity:0.2 ,y:100}}
    transition={{duration:1}}
    whileInView={{opacity:1,y:0}}
    viewport={{once:true}}
    
    
    onSubmit={onSubmitHandler} className='flex flex-col min-h-[90vh] justify-center items-center'>
    <div>
      
      <div className='relative '>
        <img src={image} alt="" className='max-w-sm rounded ' />
        <span className={`absolute botom-0 left-0 h-1 bg-blue-500 ${loading ? 'w-full transition-all-duration-[10s]' : 'w-0'}`}/>

      </div>
      <p className={!loading ? 'hidden' : ""}>Loading....</p>
      </div>
  {!isImageLoaded &&
    <div className='flex w-full max-w-xl bg-neutral-500 text-white-900 text-sm p-0.5 mt-10 rounded-full'>
    <input onChange={e=>setinput(e.target.value)} value={input} type="text" placeholder='Describe what you want to generate' className='flex-1 bg-transparent outline-none ml-8 max-sm:w-20 placeholder-color'></input>
    <button type='submit' className='bg-zinc-900 px-10 sm:px-16 py-3 rounded-full text-white text-lg  '> Generate</button>

      
    </div>}
{isImageLoaded &&
    <div className='flex flex-wrap gap-2 justify-center items-center text-white text-sm p-0.5 mt-10 rounded-full '>
      <p onClick={()=>{setisImageLoaded(false)}} className='bg-white border border-zinc-900 text-black cursor-pointer px-8 py-3 rounded-full font-bold'>Generate another </p>
      
      <a href={image} download className='bg-zinc-900 px-10 py-3 rounded-full cursor-pointer'>Download </a>
    </div>}
    </motion.form>
  )
}

export default Result

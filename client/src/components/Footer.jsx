import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='flex items-center justify-between gap-4 py-3 mt-20 border-t-2 border-t-black  p-4  '>
      <img src={assets.logo} alt="" width={120}  />
      <p className='flex-1 border-l border-grap-400 pl-4 text-sm text-gray-500 max-sm:hidden'>
      © 2024 Aryan | All rights reserved.
      </p>
      <div className='flex gap-2.5 '>
        <img src={assets.instagram_icon} alt="" width={25}/>
        <img src={assets.gmail_icon} alt="" width={25}/>
        <img src={assets.linkedIn_icon} alt="" width={25}/>

      </div>
    </div>
  )
}

export default Footer

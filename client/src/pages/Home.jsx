import React from 'react'
import Header from '../components/Header'
import Steps from '../components/Steps'
import Description from '../components/Description'
import Testimonials from '../components/Testimonials'
import GenerateButton from '../components/GenerateButton'


const Home = () => {
  return (
    <div>
        <Header/>
        <hr className="border-t-4 border-black" />
        <Steps/>
        <hr className="border-t-4 border-black"/>
        <Description/>
        <hr className="border-t-4 border-black" />
        <Testimonials/>
        <hr  className="border-t-4 border-black"/>
        <GenerateButton/>
     
    </div>
  )
}

export default Home

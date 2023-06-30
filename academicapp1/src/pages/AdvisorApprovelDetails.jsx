import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'


const Title = () => {
  return (
    <h1 className='text-black text-center bg-green m-0 nav-inner'>
      Advisor Approvel Details
    </h1>
  )
}

const AdvisorApprovelDetails = () => {
  return (
    <div>
        <Navbar/>
        <Title/>
        <Footer/>
    </div>
    
  )
}

export default AdvisorApprovelDetails
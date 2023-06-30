import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Title = () => {
  return (
    <h1 className='text-black text-center bg-green m-0 nav-inner'>
      Coordinating Cource Details
    </h1>
    
  )
}
const CoordinatingCourceDetails = () => {
  return (
    <div>
        <Navbar/>
        <Title/>
        <Footer/>
    </div>
  )
}

export default CoordinatingCourceDetails
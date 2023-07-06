import React from 'react'
import Navbar from '../components/Navbar'
import CardEx from '../components/CardEx'
import ProfilePage from '../components/ProfilePage'
import Footer from '../components/Footer'

const Title = () => {
  return (
    <h1 className='text-black text-center bg-green nav-inner'>
      Student's Details
    </h1>
    
  )
}

const StudentsProfile = () => {
  return (
  <div>
    <Navbar />
    <Title/>

    <ProfilePage />
    <Footer/>
  </div>
    
  )
}

export default StudentsProfile
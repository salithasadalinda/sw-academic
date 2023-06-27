import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import CardEx from '../components/CardEx'
//import VerticalDividerExample from '../components/VerticalDividerExample'
//import TableEx from '../components/TableEx'
//rafce- shortcut
const Title = () => {
  return (
    <h1 className='text-black text-center bg-green'>
      Home Page
    </h1>
    
  )
}
const Home = () => {
  return (
    <div>
        <Navbar/>
        {/* content */}
        <Title/>
        <div className='d-flex justify-content-center'>
          <div className='mx-5'>
              <CardEx title="Students Details" 
                      text="My Text" 
                      imgSrc="./SMS_Logo.png" />
          </div>
          <div className='mx-5'>
              <CardEx title="Coordinating Cource Details" 
                      text="My Text" 
                      imgSrc="./SMS_Logo.png" />
          </div>
          <div className='mx-5'>
              <CardEx title="Advisor Approvel Details" 
                      text="My Text" 
                      imgSrc="./SMS_Logo.png" />
          </div>
        </div>
       
        
        {/* footer */}
        <Footer/>
    </div>
  )
}

export default Home;
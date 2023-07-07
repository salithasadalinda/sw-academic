import React from 'react'
import Navbar from '../components/Navbar'

const SemesterBasedInfomation = () => {
  return (
    <div>
        <Navbar/>
        <div className='bg-white'>
            <SideBar/>
        </div>
    </div>
    
  )
}


const SideBar=()=>{
    return (
        <div className='bg-white'>
            <hr/>
            <h1>semester 01</h1>
            <hr/>
            <h1>semester 02</h1>
            <hr/>
            <h1>semester 03</h1>
            <hr/>
            <h1>semester 04</h1>
            <hr/>
            <h1>semester 05</h1>
            <hr/>
            <h1>semester 06</h1>
            <hr/>
            <h1>semester 07</h1>
            <hr/>
            <h1>semester 08</h1>
        </div>
    )
}


export default SemesterBasedInfomation
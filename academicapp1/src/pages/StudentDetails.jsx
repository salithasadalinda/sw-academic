import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
//import CardEx from '../components/CardEx'
//import VerticalDividerExample from '../components/VerticalDividerExample'
import TableEx from '../components/TableEx'



// back end part 
//link is to go for the particuler place
const data = [
  {
    name: 'safras saleem',
    email: '2019e121@eng.jfn.ac.lk',
    registerNumber: '2019/E/121',
    academicYear: '18/19',
    status: '6',
    statusColor: 'success',
    subject: 'software engineering',
    imgSrc: 'https://mdbootstrap.com/img/new/avatars/8.jpg',
    link:'/home',
  },
  {
    name: 'Alex Ray',
    email: 'alex.ray@gmail.com',
    registerNumber: 'Consultant',
    academicYear: 'Finance',
    status: '6',
    statusColor: 'primary',
    position: 'Junior',
    imgSrc: 'https://mdbootstrap.com/img/new/avatars/6.jpg',
  },
  {
    name: 'Kate Hunington',
    email: 'kate.hunington@gmail.com',
    registerNumber: 'Designer',
    academicYear: 'UI/UX',
    status: 'Awaiting',
    statusColor: 'warning',
    position: 'Senior',
    imgSrc: 'https://mdbootstrap.com/img/new/avatars/7.jpg',
  },

  {
    name: 'Kate Hunington',
    email: 'kate.hunington@gmail.com',
    registerNumber: 'Designer',
    academicYear: 'UI/UX',
    status: 'Awaiting',
    statusColor: 'warning',
    position: 'Senior',
    imgSrc: 'https://mdbootstrap.com/img/new/avatars/7.jpg',
  },
  {
    name: 'Kate Hunington',
    email: 'kate.hunington@gmail.com',
    registerNumber: 'Designer',
    academicYear: 'UI/UX',
    status: 'Awaiting',
    statusColor: 'warning',
    position: 'Senior',
    imgSrc: 'https://mdbootstrap.com/img/new/avatars/7.jpg',
  },

  {
    name: 'Kate Hunington',
    email: 'kate.hunington@gmail.com',
    registerNumber: 'Designer',
    academicYear: 'UI/UX',
    status: 'Awaiting',
    statusColor: 'warning',
    position: 'Senior',
    imgSrc: 'https://mdbootstrap.com/img/new/avatars/7.jpg',
  },
  {
    name: 'Kate Hunington',
    email: 'kate.hunington@gmail.com',
    registerNumber: 'Designer',
    academicYear: 'UI/UX',
    status: 'Awaiting',
    statusColor: 'warning',
    position: 'Senior',
    imgSrc: 'https://mdbootstrap.com/img/new/avatars/7.jpg',
  },
  {
    name: 'Kate Hunington',
    email: 'kate.hunington@gmail.com',
    registerNumber: 'Designer',
    academicYear: 'UI/UX',
    status: 'Awaiting',
    statusColor: 'warning',
    position: 'Senior',
    imgSrc: 'https://mdbootstrap.com/img/new/avatars/7.jpg',
  },
  {
    name: 'safras saleem',
    email: '2019e121@eng.jfn.ac.lk',
    registerNumber: '2019/E/121',
    academicYear: '18/19',
    status: '6',
    statusColor: 'success',
    subject: 'software engineering',
    imgSrc: 'https://mdbootstrap.com/img/new/avatars/8.jpg',
    link:'https://mui.com/',
  },
];



const Title = () => {
  return (
    <h1 className='text-black text-center bg-green'>
      StudentDetails
    </h1>
    
  )
}





//rafce- shortcut
const StudentDetails = () => {
  return (
    <div>
        <Navbar/>
        {/* content */}
       <Title/>
       <br/>

        <TableEx data={data} />
        
        {/* footer */}
        <Footer/>
    </div>
  )
}

export default StudentDetails;
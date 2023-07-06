import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
        <div className='bg-green pt-4 px-4 pb-4 '>
            {/* ps=pl pe<pr   <=old version */}
            <div className='bg-white d-flex nav-inner'>
                {/* fac picture and name */}
                <div className='d-flex m-9'>
                    <div className='d-flex me-2'>
                        <img src='/SMS_Logo.png' width='50' height='50' alt='sms-logo'/>
                    </div>
                    <div>
                        <h5 className='m-0'>
                            {/* m-margin   mt,mp... */}
                            Academic Approval
                        </h5>
                        <small>
                            Faculty Of Engineering - University Of Jaffna
                        </small>
                    </div>
                </div>
                        {/* nev bar component */}
                <div className='d-flex'>
                        
                        <ClickLink exact to='/home' label='Home'/>
                        <ClickLink exact to='/StudentDetails' label='Student Details'/> 
                        <ClickLink exact to='/CoordinatingCourceDetails' label='Coordinating Cource Details'/>
                        <ClickLink exact to='/AdvisorApprovelDetails' label='Advisor Approvel Details'/>
                        
                        
                </div>
                <div>
                        
                </div>                

            </div>
        </div>
    </div>
  )
}


function ClickLink({label,to,exact}){
    return(
        <NavLink exact={exact} to={to} activeClassName="selected" className=' d-flex nav-center-div p-2 rounded' >
            <h6 className="my-auto mx-3">{label}</h6>
        </NavLink>
    )
}


export default Navbar




import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import LoginPage from './loginpage/LoginPage'
import Home from './pages/Home'
import StudentDetails from './pages/StudentDetails'
import CoordinatingCourceDetails from './pages/CoordinatingCourceDetails'
import AdvisorApprovelDetails from './pages/AdvisorApprovelDetails'
import StudentsProfile from './pages/StudentsProfile'
import SemesterBasedInfomation from './pages/SemesterBasedInfomation';


const App = () => {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/loginpage' element={<LoginPage/>}/>
    <Route path='/home' element={<Home/>}/>
    <Route path='/studentdetails' element={<StudentDetails/>}/>
    <Route path='/coordinatingCourceDetails' element={<CoordinatingCourceDetails/>}/>
    <Route path='/AdvisorApprovelDetails' element={<AdvisorApprovelDetails/>}/>
    <Route path='/StudentsProfile' element={<StudentsProfile/>}/>
    <Route path='/SemesterBasedInfomation' element={<SemesterBasedInfomation/>}/>
    

    </Routes>
    
    </BrowserRouter>
  )
}

export default App

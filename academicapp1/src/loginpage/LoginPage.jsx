import React, { useState } from 'react';
import NavLogin from '../loginpage/NavLogin'
import Footer from '../components/Footer'

//the login components :must set regex and other things
const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setErrorMessage('');
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setErrorMessage('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate email format
    if (!isValidEmail(email)) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    // Validate password requirements
    if (!isValidPassword(password)) {
      setErrorMessage(
        'Password should be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number.'
      );
      return;
    }

    // Perform login logic here with email and password
    // For demonstration purposes, we simply log the values
    console.log('Email:', email);
    console.log('Password:', password);

    // Reset the form
    setEmail('');
    setPassword('');
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isValidPassword = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    return passwordRegex.test(password);
  };

  return (
    <div>
        <div className='bg-white p-0'>
        
        <div className='bg-green m-5 justify-content-center'>
        <h1>Login</h1>
                <form onSubmit={handleSubmit}>
                    <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={handleEmailChange}
                    />
                    </div>
                <div>
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={handlePasswordChange}
                />
                </div>
                <button type="submit" className='btn btn-light'>Login</button>
                {errorMessage && <p>{errorMessage}</p>}
            </form>
        </div>
            
        </div>
    </div>
  );
};



const LoginPage = () => {
  return (
    <div>
        <NavLogin/>

        <LoginForm/>
        <Footer/>
    </div>
    
  )
}

export default LoginPage
import React, { useState } from 'react';
import './LoginSignup.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const LoginSignup = () => {
  let navigate = useNavigate();
  const [action, setAction] = useState('Sign up');
  const [signUpData, setSignUpData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  const handleSignUp = () => {
    axios.post('http://localhost:3001/register', signUpData)
      .then(result => {
        console.log(result);
        setAction('Login');
      })
      .catch(err => console.log(err));
  };

  const handleLogin = () => {
    axios.post('http://localhost:3001/login', loginData) 
      .then(result => {
        console.log(result);
        if (result.data === "success") {
          navigate('/home');
        }
      })
      .catch(err => {
        console.log(err);
      });
  };
  
  

  const handleInputChange = (e, formType) => {
    const { name, value } = e.target;

    if (formType === 'Signup') {
      setSignUpData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    } else {
      setLoginData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  return (
    <div className="container">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        {action === 'Login' ? (
          <div>
            <div className="input">
              <img src="" alt="" />
              <input
                type="email"
                name="email"
                placeholder="Email id"
                value={loginData.email}
                onChange={(e) => handleInputChange(e, 'Login')}
              />
            </div>
            <div className="input">
              <img src="" alt="" />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={loginData.password}
                onChange={(e) => handleInputChange(e, 'Login')}
              />
            </div>
          </div>
        ) : (
          <div>
            <div className="input">
              <img src="" alt="" />
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={signUpData.name}
                onChange={(e) => handleInputChange(e, 'Signup')}
              />
            </div>
            <div className="input">
              <img src="" alt="" />
              <input
                type="email"
                name="email"
                placeholder="Email id"
                value={signUpData.email}
                onChange={(e) => handleInputChange(e, 'Signup')}
              />
            </div>
            <div className="input">
              <img src="" alt="" />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={signUpData.password}
                onChange={(e) => handleInputChange(e, 'Signup')}
              />
            </div>
          </div>
        )}
      </div>

      <div className="submit-container">
        <div
          className={action === 'Login' ? 'submit gray' : 'submit'}
          onClick={action === 'Login' ? handleLogin : handleSignUp}
        >
          {action === 'Login' ? 'Login' : 'Sign up'}
        </div>
        <div
          className={action === 'Sign up' ? 'submit gray' : 'submit'}
          onClick={() => {
            setAction(action === 'Login' ? 'Sign up' : 'Login'); // Toggle between Login and Sign up
          }}
        >
          {action === 'Login' ? 'Sign up' : 'Login'}
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;


import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Login = ({userType, setUserType}) => {
  const handleUserTypeChange = (type) => {
    setUserType(type);
  };

  const [userLogInData, setUserLogInData] = useState({ email: '', password: '' });
  const router = useNavigate();
  useEffect(() => {
    const localStorageData = JSON.parse(localStorage.getItem("isUserLogged"));
    if (localStorageData) {
      console.log("user logged in already, Directing to Welcome");
      router('/Home');
    }
  },[]);
  // -------------handleSubmit---------------------------------------------------------------

  function submitHandle(e) {
    e.preventDefault();
    if (userLogInData.email && userLogInData.password) {
      const registeredData = JSON.parse(localStorage.getItem("userData"));
      console.log(registeredData, "registerDATA here");
      if (registeredData) {
        var flag = false;
        for (var i = 0; i < registeredData.length; i++) {
          console.log("inside fo loop");
          if (registeredData[i].email === userLogInData.email && registeredData[i].password === userLogInData.password) {
            // localStorage.setItem("isUserLogged", "true");
            flag = true;
          }
        }
        if (flag === true) {
          localStorage.setItem("isUserLogged", "true");
          router('/Home')
          toast.success("Login Successfull WELCOME MINDSACPE TECHNOLOGY!")
        } else {
          toast.error("Wrong Credentials !")
        }
      } else {
        toast.error("User Not Found plz Register First.");
      }
    } else {
      toast.error("Fill The All Fields !!")
    }
}
// ---------------------------------------------HnadleChnage--------------------------------------------------------
function handleChange(event) {
  const name = event.target.name;
  const value = event.target.value;
  setUserLogInData((e) => ({ ...e, [name]: value }));
}


return (
  <div id='divRegister' >
    <form onSubmit={submitHandle} id="form">
      <h1>LOGIN FORM</h1>
      <label>Email</label><br />
      <input type="email" placeholder='Email' name='email' onChange={handleChange} /><br /><br />
      <label>Password</label><br />
      <input type="password" placeholder=' Password' name='password' onChange={handleChange} /><br />
      <input id='inputlogin' type="Submit" /><br />
       <span id='radiobtn'>
       <label>
          <input
            type="radio"
            value="user"
            checked={userType === 'user'}
            onChange={() => handleUserTypeChange('user')}
          />
          User Login
        </label>
        <label>
          <input
            type="radio"
            value="admin"
            checked={userType === 'admin'}
            onChange={() => handleUserTypeChange('admin')}
          />
          Admin Login
        </label>
        <label>
          <input
            type="radio"
            value="client"
            checked={userType === 'client'}
            onChange={() => handleUserTypeChange('client')}
          />
          Client Login
        </label>
       </span><br />
      <span onClick={()=>{router('/')}} style={{cursor:"pointer", color: "white", textDecoration: "none", marginLeft: "20px", fontWeight: "500", color: "blue" }}>Not User? Register here</span>
    </form>
  </div>
)
}

export default Login;

import { useNavigate } from 'react-router-dom';
import React from 'react'
import { useState } from 'react';
import { toast } from 'react-hot-toast';

const Register = () => {
    const[userData,setUserData]=useState({name:'', email:'', password:''});
    const router=useNavigate();

    
   function submitHandle(e){
    e.preventDefault();

    if(userData.name && userData.email && userData.password){
      var registeredUsers = JSON.parse(localStorage.getItem("userData")) || [];
        registeredUsers.push(userData);
        console.log(registeredUsers,"registeruserData Here");
        localStorage.setItem("userData", JSON.stringify(registeredUsers));
        router('/login')
    setUserData();
    toast.success("Register Done");
      // })
    }else{
      toast.error("Fill all Fields");
    }
   }


   console.log(userData,"userdata heree");
  //  ------------------------------------HandleChange----------------------------------
       function handleChange(event){
        const name= event.target.name;
        const value = event.target.value;
        setUserData((e)=>({...e,[name]: value}));
       }


  return (
    <div id='divRegister'>
       <form id="form" onSubmit={submitHandle}>
       <h1>USER REGISTER</h1>
        <label>Name</label><br />
        <input type="text" name='name' placeholder='Name' onChange={handleChange}/><br />
        <label>Email</label><br />
        <input type="email" name='email' placeholder='Email'  onChange={handleChange} /><br />
        <label>Password</label><br />
        <input type="password" name='password' placeholder=' Password'  onChange={handleChange} /><br />
        <input id='input' type="submit"/><br />
        <span onClick={()=>{router('/login')}} style={{cursor:"pointer", color: "white", textDecoration: "none", marginLeft: "30px", fontWeight: "500", color: "blue" }}>Already User?Login here</span>
       </form>
       
    </div>
    
  )
}

export default Register



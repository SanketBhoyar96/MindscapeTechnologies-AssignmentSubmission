
import React from 'react'
import './Styles.css'
  import {useNavigate } from 'react-router-dom'   
import toast from 'react-hot-toast';

const Home = () => {
  const router=useNavigate();

  function logout(){
    localStorage.removeItem('userData');
    localStorage.removeItem('isUserLogged');
    router('/');
    toast.success("Logout SuccessFul");
    }

     function login(){
      alert('First You Logout This Account Then You Can Login Account Again')
      router("/login");
    }
  return (
    <div id='home'>
           <h1 className='heading'>Welcome MindScape</h1><br />
      <button className='btn' onClick={()=>login()}>Register</button><br /><br />
      <button className='btn' onClick={logout}>Logout</button>
  
    </div>
  )
}
export default Home;
















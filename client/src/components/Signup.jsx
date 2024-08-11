import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import toast from 'react-hot-toast';
import './app.css';
import Axios from 'axios';

const Signup = () => {
   const [username,setName] = useState('')
   const [email,setEmail] = useState('')
   const [password,setPassword] = useState('')
   const nevigate = useNavigate();
   const submit = (e)=>{
    e.preventDefault();
    // console.log(username,email,password);
    if (username ==='') {
      toast.error('enter username',{position:'top-center'});
    }else if (email==='') {
      toast.error('enter email',{position:'top-center'});
    }else if (password==='') {
      toast.error('enter password',{position:'top-center'});
    }else{
     
    } 
    Axios.post('http://localhost:5001/auth/signup',{
      username,
      email,
      password
    }).then(response =>{
      // console.log(response);
     if(response.data.status) {
      toast.success('user registered',{position:'top-center'});
      nevigate("/login")
     }else if (response.data.message==='user already exists') {
      toast.error('user already exists',{position:'top-center'});
     }
    }).catch(err=>{
      console.log(err);
    })

   }
return (
<div className='main'>
  <div className="sign-up-container">
    <form action="" className='sign-up-form' onSubmit={submit}>
       <h2>Sign-up</h2>
      <label htmlFor="username">Username</label>
      <input type="text" placeholder='Username' onChange={(e)=>setName(e.target.value)}/>

      <label htmlFor="Email">Email</label>
      <input type="text" placeholder='Email'  onChange={(e)=>setEmail(e.target.value)} />

      <label htmlFor="Password">Password</label>
      <input type="text" placeholder='Password'  onChange={(e)=>setPassword(e.target.value)}/>

      <button type='submit' className='button'>Sign-up</button>
      <p>already have an account! <Link to='/login'>login</Link></p>
    </form>
   </div>
</div>
  )
}

export default Signup

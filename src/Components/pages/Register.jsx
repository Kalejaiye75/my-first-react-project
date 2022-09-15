import React from 'react'
import { Link } from 'react-router-dom';
import "./register.css"
// import "../../App.css"

const Register = () => {
  return (
    <div className='sign-up'>
      <div className='sign-up-container'>
      <h2>Fill up this section to be part of us</h2>
      <form>
        <input type="name" name="name" placeholder='First name' className='footer-email'/>
        <input type="name" name="name" placeholder='Last name ' className='footer-email'/>
        <input type="username" name="username" placeholder='username' className='footer-email'/>
        <input type="email" name="email" placeholder='Email' className='footer-email'/>
        <input type="password" name="password" placeholder='password' className='footer-email'/>
        <button className='footer-email' onClick={()=> alert("We have recieve your details. Thanks for subscribing!")}>submit</button>
      </form>
      <div reg-page-div>
        <Link to="/login" className='reg-page'>
          Already have an account? Login
        </Link>
      </div>
      </div>
    </div>
  )
}


export default Register; 
import React from 'react'
import "./login.css"

function Login() {
  return (
    <div className='login-div'>
        <div className='login-container'>
            <h1>Welcome back!</h1>
            <form>
                <input type="username" name="username" placeholder='username' className='footer-email'/>
                <input type="password" name="password" placeholder='password' className='footer-email'/>
                <button className='footer-email' onClick={()=> alert("Please wait while we are logging you in...")}>submit</button>
            </form>
        </div>
    </div>
  )
}

export default Login
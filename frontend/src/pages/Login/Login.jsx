import React, { useState } from 'react'
import './Login.css'
const Login = () => {
  return (
    <>
      <div className="login-register">
        <div className="login">
          <div className='box-label'>
            <h2>Login</h2>
          </div>
          <div className="box-heading">
            <p>Welcome back! Sign in to your account.</p>
          </div>
          <div className="box-form">
            <form>
              <label>Username or email address *</label>
              <input></input>
              <label>Password *</label>
              <input></input>
            </form>
          </div>
          <button>Login</button>
          <p>Lost your password?</p>
        </div>
        <div className="divider"></div>
        <div className="register">
          <div className='box-label'>
            <h2>Register</h2>
          </div>
          <div className="box-heading">
            <p>Create new account today to reap the benefits of a personalized shopping experience. </p>
          </div>
          <div className="box-form">
            <form>
              <label>Email address *</label>
              <input></input>
              <label>Password *</label>
              <input></input>
            </form>
          </div>
          <p>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.</p>
          <button>Register</button>
        </div>
      </div>

    </>
  )
}

export default Login

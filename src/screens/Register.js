import React from 'react'
import {Link}from "react-router-dom"
function Register() {
    return (
      <form className='form'>
      <div className='col - sm 12 col-md-6 col-ig-4 col-x1-4 m-3 p-3 bg-info'>
      <div className='form-group m-2'>
      <label htmlFor="username">username</label>
      <input type="text" className='form-control' placeholder="Enter username"/>
      </div>
      <div className='form-group m-2'>
      <label htmlFor="email">email</label>
      <input type="email" className='form-control' placeholder="Enter email"/>
      </div>
      <div className='form-group m-2'>
      <label htmlFor="password">password</label>
      <input type="password" className='form-control' placeholder="Enter password"/>
      </div>
      <button type='submit' className='btn btn-primary' m-2>create account</button>
      <div className='row'>
      <p>i already have an account</p>
      <Link to="/" className='nav-link'>login</Link>
      </div>
      </div>
      </form>
    );
  }

export default Register
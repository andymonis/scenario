import React from 'react'
import { useDispatch } from 'react-redux'

import { navto } from '../slice/router.js';

export const Register = ({ value }) => {
  const dispatch = useDispatch()

  return (
    <div className="page page-register justify-center">
      <h1>Register</h1>

      <div className='grid grid2 gap1'>
        <label>email: </label>
        <input />
        <label>password: </label>
        <input />
        <button onClick={() => dispatch(navto("/home"))}>sign up</button>
      </div>

    </div>
  )
}

export default Register
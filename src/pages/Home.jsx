import React from 'react'
import { useDispatch } from 'react-redux'

import { navto } from '../slice/router.js';

export const Register = ({ value }) => {
  const dispatch = useDispatch()

  return (
    <div className="page page-home">
      <h1>Home</h1>
      <button onClick={() => dispatch(navto("/isas-list"))}>View ISAs</button>
    </div>
  )
}

export default Register
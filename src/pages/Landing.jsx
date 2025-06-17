import React from 'react'
import { useDispatch } from 'react-redux'
import { navto } from '../slice/router.js';

import cushonLogo from '../assets/cushon-logo.png';

export const Landing = ({ value }) => {
  const dispatch = useDispatch()

  return (
    <div className="page flex flex-column align-center">
      <img src={cushonLogo} className='logo' alt='Cushon'/>
      <button onClick={() => dispatch(navto("/register"))}>Become a customer</button>
    </div>
  )
}

export default Landing
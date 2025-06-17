import React from 'react'
import { useDispatch } from 'react-redux'

import { navto } from '../slice/router.js';

export const Header = ({ value }) => {
  const dispatch = useDispatch()

  return (
    <div className="header fixed fixed-top ">
      <h4 className='text-center'>CUSHON</h4>
    </div>
  )
}

export default Header
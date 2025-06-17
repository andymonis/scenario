import React from 'react'
import { useDispatch } from 'react-redux'

import { navto } from '../slice/router.js';

export const Invest = ({ value }) => {
  const dispatch = useDispatch()

  return (
    <div className="page page-invest">
      <h1>Invest</h1>

      <button onClick={() => dispatch(navto("/payment"))}>purchase</button>
    </div>
  )
}

export default Invest
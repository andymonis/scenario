import React from 'react'
import { useDispatch } from 'react-redux'

import { navto } from '../slice/router.js';

export const Purchase = ({ value }) => {
  const dispatch = useDispatch()

  return (
    <div className="page page-purchase">
      <h1>Purchase</h1>

      <button onClick={() => dispatch(navto("/confirmation"))}>complete</button>
    </div>
  )
}

export default Purchase
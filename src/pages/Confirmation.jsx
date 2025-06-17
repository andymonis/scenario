import React from 'react'
import { useDispatch } from 'react-redux'

import { navto } from '../slice/router.js';

export const Confirmation = ({ value }) => {
  const dispatch = useDispatch()

  return (
    <div className="page page-confirmation">
      <h1>Confirmation</h1>
      <button onClick={() => dispatch(navto("/home"))}>home</button>
    </div>
  )
}

export default Confirmation
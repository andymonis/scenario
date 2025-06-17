import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { navto } from '../slice/router.js';

export const IsasDetail = ({ value }) => {
  const dispatch = useDispatch()


  // Check the state for any isas
  const selected = useSelector((state) => state.isas.selected);
  // Render the ISAs if found
  let isa_html = "";
  if(selected.id){
    isa_html = selected.desc
  }


  return (
    <div className="page page-isas-detail">
      <h1>ISAs Detail</h1>
      
      <p>{isa_html}</p>

      <button onClick={() => dispatch(navto("/invest"))}>invest</button>
    </div>
  )
}

export default IsasDetail
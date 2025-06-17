import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { navto } from '../slice/router.js';
import { load, select } from '../slice/isas.js';

let loading = false;

export const IsasList = ({ value }) => {
  const dispatch = useDispatch()

  const on_select = ( id ) => {
    console.log(id)
    // Select the ISA 
    dispatch(select({id:id}));
    // Nav to detail screen
    dispatch(navto("/isas-detail"))
  }

  // TODO: Rework this into a common feature
  // Detect first load. 
  useEffect(() => {
    if(loading===false){
      loading = true;
      dispatch(load());
    }
  });

  // Check the state for any isas
  const list = useSelector((state) => state.isas.list);
  // Render the ISAs if found
  const list_html = [];
  list.forEach(element => {
    const key = `isa_list_${element.id}`;
    list_html.push(
      <div key={key} className='grid grid-lozenge'>
        <p>{element.desc}</p>
        <button onClick={() => on_select(element.id)}>&gt;</button>
      </div>
    );
  });

  return (
    <div className="page page-isas-list">
      <h1>ISAs List</h1>
      <div className='grid'>
        {list_html}
      </div>
    </div>
  )
}

export default IsasList
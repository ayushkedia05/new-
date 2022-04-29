import React from 'react'
import pencil from '../../image/pencil.jpg'
import dustbin from '../../image/dustbin.jpg'


import './accessbutton.css'
 const Accessbutton=()=>{
  return <React.Fragment>
      <div className='access'>
          <button className='btn1'>+  Add Role  </button>
          <div className='ii'><img src={pencil}></img></div>
          <div  className='ii'><img src={dustbin}></img></div>
      </div>
  </React.Fragment>
 }

export default Accessbutton;
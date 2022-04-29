import {React} from 'react'
import './details.css'

import net from '../../image/net.png'
import bell from '../../image/bell.png'

const Detail=()=>{

return  <div className='detailup'>
   
<div className='arrange'>

   <div className='detailcircle'>?</div>
   <div className='detailcircle'><img src={bell}></img></div>
   <div className='loginname'>Kishore</div>
   <div className='detailcircle'></div>

   </div>
   
<div className='choice'>
   <div><img src={net}></img> Permissions</div> 
   <div className='approve'>Approval Matrix</div>
<div className='sync'>

    15 min sync
   </div>
   </div>
  <hr></hr>
  </div>
   
};

export default Detail;
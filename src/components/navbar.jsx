import React from 'react'
import trollFace from "../images/trollface.svg"

function Navbar(){
  return(
    <div className='navbar--main'>
      <img src={trollFace} alt="trollFace" className='navbar--trolllogo'/>
      <h2>Meme Generator</h2>
    </div>
  )
}

export default Navbar
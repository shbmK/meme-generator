import React from 'react'
export default function Header() {
  return (
    <div className='header--main'>
        <img src="pew-pew.png" alt="" className='pew'/>
        <h2 className='header--title'>MemeGenerator</h2>
        <h4 className='header--text'>Made with <span id="rct">React</span></h4>
    </div>
  )
}
import React from 'react'

function Navbar({filteritem , menulist}) {
  return (
    <>
       <nav className='navbar'>
          <div className='btn-group'>
            {menulist.map((list)=>{
               return(<button className='btn-group__item' onClick={()=>filteritem(list)}>{list}</button>)
            })}
          </div>
       </nav>
    </>
  ) 
}

export default Navbar

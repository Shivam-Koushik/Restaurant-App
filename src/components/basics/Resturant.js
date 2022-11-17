import React, { useState } from 'react'
import './style.css'
import Navbar from './navbar'
import Menu from './menuApi'
import MenuCard from './menuCard'
const uniqueList = [...new Set(Menu.map((currList)=>{
  return currList.category
})),'All']
function Resturant() {
    const[menuData,setMenuData] = useState(Menu)
    const [menulist,setMenuList] = useState(uniqueList) 
    const filteritem = (category)=>{
      if(category=== 'All'){
        setMenuData(Menu)
        return;
      }
      const filter = Menu.filter((currElem)=>{
        return currElem.category === category;
      })
      setMenuData(filter);
    } 
  return (
    <>  
       <Navbar filteritem={filteritem} menulist={menulist}/> 
       <MenuCard menuData={menuData}/> 
    </> 
  )
}

export default Resturant

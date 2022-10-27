import React from 'react'
import './Navbar.css'
import {GiHamburgerMenu} from 'react-icons/gi'
import {BsSearch} from 'react-icons/bs'
import {useState} from 'react'

function Navbar() {

    const [hisActive,hsetIsActive]=useState(false);
    const hhandleClick = ()=>hsetIsActive(!hisActive);

    const [misActive,msetIsActive]=useState(false);
    const mhandleClick = ()=>msetIsActive(!misActive);

    const [sisActive,ssetIsActive]=useState(false);
    const shandleClick = ()=>ssetIsActive(!sisActive);

  return (
    <div className='navbar'>
        <div className='nav-contents'>
            <div className='logo'>

            </div>
            <div className={!hisActive?'nav-item':'nav-item active'} onClick = {hhandleClick}>
                Home
            </div>
            <div className={!misActive?'nav-item':'nav-item active'} onClick = {mhandleClick}>
                Movies
            </div>
            <div className={!sisActive?'nav-item':'nav-item active'} onClick = {shandleClick}>
                Series
            </div>
        </div>
        <div className='search-wrapper'>
            <div className='nav-search'>
                <BsSearch className='search'/>
            </div>
            <div className='nav-hamburger'>
                <GiHamburgerMenu className='hamburger'/>
            </div>
        </div>    
    </div>
  )
}

export default Navbar
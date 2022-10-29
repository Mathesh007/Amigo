import React from 'react'
import './Navbar.css'
import logo from '../../Images/Amigo-Logo(PNG).png'
import {GiHamburgerMenu} from 'react-icons/gi'
import {BsSearch} from 'react-icons/bs'
import {useState} from 'react'

function Navbar() {

    const [hisActive,hsetIsActive]=useState(true);
    const hhandleClick = ()=>{
        hsetIsActive(true);
        msetIsActive(false);
        ssetIsActive(false);
    }

    const [misActive,msetIsActive]=useState(false);
    const mhandleClick = ()=>{
        msetIsActive(true);
        hsetIsActive(false)
        ssetIsActive(false)
    }


    const [sisActive,ssetIsActive]=useState(false);
    const shandleClick = ()=>{
        ssetIsActive(true);
        msetIsActive(false)
        hsetIsActive(false)
    }


  return (
    <div className='navbar'>
        <div className='nav-contents'>
            <div className='logo'>
                <img src={logo}/>
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
                <div className='ham-section'>
                    
                </div>
            </div>
        </div>    
    </div>
  )
}

export default Navbar
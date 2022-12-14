import React from 'react';
import './login.css';
import { useState } from "react";
import logo from '../../Images/Amigo-Logo(PNG).png';
import {Link} from 'react-router-dom'

function login() {
    const [open, setOpen] = useState(false)
    const styles = {
        Login_popup: {
            display: open ? "flex" : "none",
            opacity: open ? "1" : "0",
        },
        img: {
            opacity: open ? "0" : "1",
        },
        Login_btn: {
            opacity: open ? "0" : "1",
        }
    };
    return ( <>
        <div className = "Login_container" >
        <img src = { logo }
        alt = ""
        style = { styles.img }
        /> 
        <div className = "ell1" > </div>  
        <div className = "ell2" > </div>  
        <br/>
        <br/>
        <br/>
        <button className = "Login_btn "
        onClick = {() => { setOpen(true) }}
        style = { styles.Login_btn } > Login </button>  
        </div >

        <div className = "Login_popup"
        style = { styles.Login_popup }>
        <h1 className='login-btn'> Login </h1>  
        <input type = "text"
        className = "ip"
        placeholder = "Username"/>
        <br/>
        <br/>
        <input type = "password"
        className = "ip"
        placeholder = "Password"/>
        <br/>
        <br/>
        <br/>
        <Link to="/home">
        <button className = "Login_popbtn">
                Login 
        </button>  
        </Link>
            
        <br/>
        <div className = "line1" > </div> 
        <div className = "txt" > OR </div> 
        <div className = "line2" > </div> 
        <br/>
        <a href = "https://accounts.google.com" className="t ">Log in with Google account</a> 
        <br/>
        
        < div className = "t1" > Don 't have an account? Sign up</div> 
        </div > 
        </>
    )
}

export default login
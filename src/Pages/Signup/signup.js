import React from 'react';
import './signup.css';
import { Link } from 'react-router-dom';

function signup(){
    return(<>
        <div className = "ell1" > </div>  
        <div className = "ell2" > </div>  
        <div className="Signup_popup">
        <h1 > Signup </h1>  
        <input type = "text"
        className = "sip"
        placeholder = "Name"/>
        <br/><br/>
        <input type = "text"
        className = "sip"
        placeholder = "Username"/>
        <br/><br/>
        <input type = "password"
        className = "sip"
        placeholder = "Password"/>
        <br/><br/>
        <input type = "password"
        className = "sip"
        placeholder = "Re-enter Password"/>
        <br/><br/>
        <Link to="/home">
        <button className = "Signup_popbtn" > Sign up </button></Link>
        <br/>
        <div className = "Signupline1" > </div> 
        <div className = "txt" > OR </div> 
        <div className = "Signupline2" > </div> 
        <br/>
        <a href = "https://accounts.google.com" className="st ">Log in with Google account</a>
        
        <Link to = "/" >
        <div className = "st2" > Already have an account?<a href="">Login</a></div> </Link> 
        <br/>
        </div>
        </>
        )
}

export default signup
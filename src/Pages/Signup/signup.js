import React from 'react';
import './signup.css';

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
        <button className = "Signup_popbtn" > Sign up </button>
        <br/>
        <div className = "Signupline1" > </div> 
        <div className = "txt" > OR </div> 
        <div className = "Signupline2" > </div> 
        <br/>
        <a href = "https://accounts.google.com" className="t ">Log in with Google account</a> 
        <br/>
        </div>
        </>
        )
}

export default signup
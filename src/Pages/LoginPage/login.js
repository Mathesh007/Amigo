import React from 'react';
import './login.css';
import { useState } from "react";
import logo from '../../Images/Amigo-Logo(PNG).png';

function login() {
    const [open, setOpen] = useState(false)
    const styles = {
        popup: {
            display: open ? "flex" : "none",
            opacity: open ? "1" : "0",
        },
        img: {
            opacity: open ? "0" : "1",
        },
        btn: {
            opacity: open ? "0" : "1",
        }
    };
    return ( <
        >
        <
        div className = "container" >
        <
        img src = { logo }
        alt = ""
        style = { styles.img }
        /> <
        div className = "ell1" > < /div>  <
        div className = "ell2" > < /div>  <
        br / >
        <
        br / >
        <
        br / >
        <
        button className = "btn "
        onClick = {
            () => { setOpen(true) }
        }
        style = { styles.btn } > Login < /button>  < /
        div >

        <
        div className = "popup"
        style = { styles.popup } >
        <
        h1 > Login < /h1>  <
        input type = "text"
        className = "ip"
        placeholder = "Username" / >
        <
        br / >
        <
        br / >
        <
        input type = "password"
        className = "ip"
        placeholder = "Password" / >
        <
        br / >
        <
        br / >
        <
        br / >
        <
        button className = "popbtn" > Login < /button>  <
        br / >
        <
        div className = "line1" > < /div> <
        div className = "txt" > OR < /div> <
        div className = "line2" > < /div> <
        br / >
        <
        a href = "https://accounts.google.com
        " className="
        t ">Log in with Google account</a> <
        br / >
        <
        br / >
        <
        div className = "t1" > Don 't have an account? Sign up</div> < /
        div > <
        />
    )
}

export default login
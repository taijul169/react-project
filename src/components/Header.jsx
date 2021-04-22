import React from 'react';
import Logo from '../images/logo.png'
const Header =()=>{
    return (
        <>
          <header className="header-area">
            <div className="container d-flex">
                <div className="header-left">
                    <a href="index.html"><img src={Logo} alt="logo.png"/></a>
                </div>
                <div className="main-menu">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">App Features</a></li>
                    <li><a href="#" className="contactus">Contact Us</a></li>
                </ul>
            </div>
            </div>
          </header>
        </>
    )
       
    
}

export default Header;
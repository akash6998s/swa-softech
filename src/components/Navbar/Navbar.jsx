import React from 'react';
import "./Navbar.css"
import { Link } from 'react-router-dom';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Navbar = () => {
    return (
        <div className="nav-container">
            <div className='navbar'>
                <div className="logo">
                    <h1><Link to="/">CryptoHouse</Link></h1>
                </div>
                <nav className="menu">
                    <ul>
                        <li> <a href="#"> <Link to="/"><span className='text-home'> Home</span></Link></a></li>
                        <li> <a href="#"> <Link to="/">Pages</Link></a></li>
                        <li> <a href="#"> <Link to="/">MegaMenu</Link></a></li>
                        <li> <a href="#"> <Link to="/">Blog</Link></a></li>
                        <li> <a href="#"> <Link to="/">Market Cap</Link></a></li>
                        <li> <a href="#"> <Link to="/">Short Code</Link></a></li>
                        <div className="nav-buttons">
                            <button className='signin-btn'><a href="#"><Link to="/">Sign In</Link></a></button>
                            <button className='signup-btn'><a href="#"><Link to="/signup">SIgn Up</Link></a></button>
                          <div className="hamburger"> <FontAwesomeIcon icon={faBars} color='000349' /></div> 
                        </div>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Navbar

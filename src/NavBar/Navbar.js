import React, { useEffect } from 'react';
import '../NavBar/Navbar.css'


const Navbar = () => {
    return(
        <div className='navbar'>
            <a href="#home" className='navbarBtn'>HOME</a>
            <a href="#about" className='navbarBtn'>ABOUT</a>
            <a href="#education" className='navbarBtn'>EDUCATION</a>
            <a href="#project" className='navbarBtn'>PROJECTS</a>
        </div>
    );
}


export default Navbar;
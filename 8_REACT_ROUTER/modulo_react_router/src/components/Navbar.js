import React from 'react'

import { Link, NavLink } from 'react-router-dom';

/* 2 - links com react router */
import './Navbar.css';


const Navbar = () => {
    return (
        <nav>
            {/* <Link to="/">Home</Link>
        <Link to="/about">Sobre</Link> */}

            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">Sobre</NavLink>

        </nav>
    )
}

export default Navbar
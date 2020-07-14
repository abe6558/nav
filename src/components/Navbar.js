import React from 'react'
import './Navbar.css';

function Navbar() {
    return (
        <nav>
            <h2>MIN.CHIN</h2>
            <ul>
                <li><a href="/">home</a></li>
                <li><a href="/about">Info</a></li>
                <li><a href="/projects">projects</a></li>
            </ul>
        </nav>
    )
}

export default Navbar

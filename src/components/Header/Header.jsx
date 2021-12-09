import React from 'react';
import './header.css';

const Header = () => {
    return (
        <div className="header">
            <h2>
                <a href="#">PolyBlog</a>
            </h2>
            <ul className="headerList">
                <a href="#">Contact</a>
                <a href="#">Write</a>
                <a href="#">Login</a>
                <a href="#">Register</a>
            </ul>
        </div>
    )
}

export default Header
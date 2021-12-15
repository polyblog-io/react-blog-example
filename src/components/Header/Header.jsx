import React from 'react';
import './header.scss';
import { Link } from 'react-router-dom'


const Header = () => {
    return (
        <div className="header">
            <h2>
                <Link to="/" className="pageTitle">PolyBlog</Link>
            </h2>
            <ul className="headerList">
                <Link to="#" className="navLink">Login</Link>
                <Link to="#" className="navLink">Blog</Link>
                <Link to="#" className="navLink btn">Get Started</Link>
            </ul>
        </div>
    )
}

export default Header
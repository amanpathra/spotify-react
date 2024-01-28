import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/Nav.css'
import logoImg from '../assets/images/logo.png';
import userImg from '../assets/images/u.png';

const Nav = () => {
    return (
        <nav className='nav'>
            <div className="nav_logo">
                <img src={logoImg} alt="Spotify Logo"/>
                <span>Spotify</span>
            </div>
            <div className="nav_info">
                <Link to={'/upgrade'} className='nav_upgrade'>Upgrade</Link>
                <div className='nav_user'>
                    <img src={userImg} alt="User"/>
                    <span>Aman Pathra</span>
                </div>
            </div>
        </nav>
    )
}

export default Nav;
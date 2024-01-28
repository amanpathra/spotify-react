import React, { useEffect } from 'react';
import '../styles/NavBar.css'

const NavBar = () => {

    const navBtns = [
        {
            name: 'Home',
            icon: 'fa-house'
        },
        {
            name: 'Search',
            icon: 'fa-magnifying-glass'
        },
        {
            name: 'Your Library',
            icon: 'fa-layer-group'
        },
        {
            name: 'Create Playlist',
            icon: 'fa-square-plus'
        },
        {
            name: 'Liked Songs',
            icon: 'fa-heart'
        },
    ]

    const NavBtn = ({btn}) => {
        return (
            <div className="navbtn">
                <i className={`fa-solid fa-xl ${btn.icon}`}></i>
                <span>{btn.name}</span>
            </div>
        )
    }

    return (
        <div className='NavBar'>
            {navBtns.map(btn => (
                <NavBtn btn={btn} key={btn.icon}/>
            ))}
        </div>
    )
}

export default NavBar;
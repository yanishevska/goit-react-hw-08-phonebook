import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authSelectors } from '../../redux/auth';
import s from "./AppBar.module.css";


const Navigation = () => {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
    return (
        <nav>
            <NavLink
                to="/"
                className={s.link}
                style={({ isActive }) => ({
                    color: isActive ? ' rgba(255, 27, 0, 1)' : 'black',
                })}>
                Home
            </NavLink>

            {isLoggedIn && (
                 <NavLink
                to="/contacts"
                className={s.link}
                style={({ isActive }) => ({
                    color: isActive ? ' rgba(255, 27, 0, 1)' : 'black',
                })}>
                Contacts
            </NavLink>
           )}
        
        </nav>
    )
};

export default Navigation;
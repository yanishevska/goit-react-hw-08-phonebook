import React from 'react';
import { NavLink } from 'react-router-dom';
import s from "./AppBar.module.css";



export default function AuthNav() {

  return (
    <div className={s.container}>
      <NavLink
        to="/register"
        className={s.link}
        style={({ isActive }) => ({
          color: isActive ? ' rgba(255, 27, 0, 1)' : 'black',
        })}>
        Registration
      </NavLink>
          
          
      <NavLink
        to="/login"
        className={s.link}
        style={({ isActive }) => ({
          color: isActive ? ' rgba(255, 27, 0, 1)' : 'black',
        })}>
        Login
      </NavLink>
    </div>
  );
};
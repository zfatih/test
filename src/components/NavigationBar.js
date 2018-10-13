import React from 'react'
import {Link, NavLink} from 'react-router-dom'

const NavigationBar= ()=>{
    return (
        <nav className="nav-wrapper green darken-3">
            <div className="container">
                <Link to="/" className="brand-logo">Rezultati</Link>
                <ul className="right">
                    <li><NavLink to="/lige">Lige</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}

export default NavigationBar
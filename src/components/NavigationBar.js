import React from 'react'
import {Link, NavLink} from 'react-router-dom'

const NavigationBar= ()=>{
    return (
        <nav className="green" role="navigation">
            <div className="nav-wrapper container"><Link id="logo-container" to="/" className="brand-logo">Rezultati</Link>
            <ul className="right hide-on-med-and-down">
                <li><NavLink to="/lige">Lige</NavLink></li>
                <li><NavLink to="/about">O nama</NavLink></li>
            </ul>

            <ul id="nav-mobile" className="sidenav">
                <li><NavLink to="/lige">Lige</NavLink></li>
                <li><NavLink to="/about">O nama</NavLink></li>
            </ul>
            <Link to="/" data-target="nav-mobile" className="sidenav-trigger"><i className="material-icons">menu</i></Link>
            </div>
        </nav>
    )
}

export default NavigationBar
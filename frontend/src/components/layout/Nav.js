import React from 'react';
import '../../styles/layout/Nav.css';
import { Link, NavLink } from "react-router-dom";


const Nav = (props) => {

    return (

        <div className="navi">
            <nav>
                <div>
                    <ul className="navi_link">
                        <li><NavLink to="/Home" className={({isActive}) => isActive ? "activo": undefined}>Home</NavLink></li>
                        <li><NavLink to="/Nosotros" className={({isActive}) => isActive ? "activo": undefined}>Nosotros</NavLink></li>
                        <li><NavLink to="/Modelos" className={({isActive}) => isActive ? "activo": undefined}>Modelos</NavLink></li>
                        <li><NavLink to="/Novedades" className={({isActive}) => isActive ? "activo": undefined}>Novedades</NavLink></li>                        
                        <li><NavLink to="/Contacto" className={({isActive}) => isActive ? "activo": undefined}>Contacto</NavLink></li>
                    </ul>
                </div>

            </nav>
        </div>

    );
}

export default Nav;
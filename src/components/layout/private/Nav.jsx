import React from 'react'
import { NavLink } from 'react-router-dom'


export const Nav = () => {
    return (
        <nav className="navbar__container-lists">

            <ul className="container-lists__menu-list">
                <li className="menu-list__item">
                    <a href="#" className="menu-list__link">
                        <span className="menu-list__title">Inicio</span>
                    </a>
                </li>

                <li className="menu-list__item">
                    <a href="#" className="menu-list__link">
                        <span className="menu-list__title">Beneficios</span>
                    </a>
                </li>

                <li className="menu-list__item">
                    <a href="#" className="menu-list__link">
                        <span className="menu-list__title">Pedi tu Rifa</span>
                    </a>
                </li>

                <li className="menu-list__item">
                    <a href="#" className="menu-list__link">
                        <span className="menu-list__title">Resultado</span>
                    </a>
                </li>

                <li className="menu-list__item">
                    <a href="#" className="menu-list__link">
                        <span className="menu-list__title">Contacto</span>
                    </a>
                </li>

                <li className="menu-list__item">
                    <a href="#" className="menu-list__link">
                        <span className="menu-list__title">Tienda</span>
                    </a>
                </li>

                <li className="menu-list__item">
                    <NavLink to='/admin/logout' className="menu-list__link">
                        <span className="menu-list__title">Cerrar Sesión</span>
                    </NavLink>
                </li>
            </ul>

        </nav>
    )
}

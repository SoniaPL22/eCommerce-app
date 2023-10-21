import React, {useState} from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

export const NavMenu = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    return (
         <div className='nav-menu-wrapper'> 
            <div className='nav-menu-icon' onClick={() =>{
                setMenuOpen(!menuOpen);
            }}>
                <span className='nav-menu-bar'></span>
                <span className='nav-menu-bar'></span>
                <span className='nav-menu-bar'></span>
            </div>
            <ul className={menuOpen ? "open" : ""} >
                <li className='nav-menu-list-items'>
                    <div className='nav-menu-list-item'>
                        <Link to="/">Inicio</Link>
                    </div>
                    <div className='nav-menu-list-item'>
                        <Link to="/amigurumi">Amigurumi</Link>
                    </div>
                </li>
                
                <li className='nav-menu-list-items'>
                    <div className='nav-menu-list-item'>
                        <Link to="/fofuchas">Fofuchas</Link>
                    </div>
                    <div className='nav-menu-list-item'>
                        <Link to="/broches">Broches</Link>
                    </div>
                </li>
         
                <li className='nav-menu-list-items'>
                    <div className='nav-menu-list-item'>
                        <Link to="/flores">Flores</Link>
                    </div>
                    <div className='nav-menu-list-item'>
                        <Link to="/a-medida">A medida</Link>
                    </div>
                </li>
                
                <li className='nav-menu-list-items'>
                    <div className='nav-menu-list-item'>
                        <Link to="/más">Más manualidades</Link>
                    </div>
                    <div className='nav-menu-list-item'>
                        <Link to="/contacto">Contáctanos</Link>
                    </div>
                    
                    
                </li>
                
            </ul>
    </div>
    );
};
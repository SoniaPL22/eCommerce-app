import React from 'react';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import { withRouter } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavMenu } from './menu';



const NavigationContainer = props => {
    const dynamicLink = (route, linkText) => {
        return (
            <div className='nav-link-wrapper'>
            <NavLink exact to={route} activeClassName="nav-link-active">{linkText}</NavLink>
        </div>
        );
      };
            
      const handleSignOut = () => {
        props.history.push("/");
        props.handleLogOut();
      }

        return (
            <div className='nav-wrapper'>
                <div className='nav-links-wrapper'> 
                    
                {props.logInStatus === "Logged-in"? <a className= "sign-out-icon" onClick={handleSignOut}> <FontAwesomeIcon icon="fa-solid fa-arrow-right-from-bracket" /> </a> : null}
                {props.logInStatus === "Logged-in"? (dynamicLink("/edition", "Editar")) : null}
                    <div className='nav-link-wrapper'>
                        <NavLink exact to="/" activeClassName="nav-link-active">Inicio</NavLink>
                    </div>
                    <div className='nav-link-wrapper'>
                        <NavLink to="/amigurumi" activeClassName="nav-link-active">Amigurumi</NavLink>
                    </div>
                    <div className='nav-link-wrapper'>
                        <NavLink to="/fofuchas" activeClassName="nav-link-active">Fofuchas</NavLink>
                    </div>
                    <div className='nav-link-wrapper'>
                        <NavLink to="/broches" activeClassName="nav-link-active">Broches</NavLink>
                    </div>
                    <div className='nav-link-wrapper'>
                        <NavLink to="/flores" activeClassName="nav-link-active">Flores</NavLink>
                    </div>
                    <div className='nav-link-wrapper'>
                        <NavLink to="/a-medida" activeClassName="nav-link-active">A medida</NavLink>
                    </div>
                    <div className='nav-link-wrapper'>
                        <NavLink to="/más" activeClassName="nav-link-active">Más manualidades</NavLink>
                    </div>
                    <div className='nav-link-wrapper'>
                        <NavLink to="/contacto" activeClassName="nav-link-active">Contacto</NavLink>
                    </div>
                    <div className='menu-button'><NavMenu /></div>
                </div>
                
            </div>
        );
    }
export default withRouter(NavigationContainer);
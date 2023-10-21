import React from 'react';
import logo from '../../logo/logoappshop.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



function Header() {
  return  <div className='header-wrapper'>
    <div className='left-header-wrapper'>
      <a href="/contacto">
        <div className='whatsapp-wrapper'><button className='whatsapp'><FontAwesomeIcon icon="fa-brands fa-whatsapp" style={{color: "white",}} /></button> 628757961 </div>
      </a>

      <a href="/contacto">
        <div className='email-envelope-wrapper'><button className='email-envelope'><FontAwesomeIcon icon="fa-regular fa-envelope" style={{color: "white",}} /></button>analemosvelosa@gmail.com</div>
      </a>

      <a href="/contacto">
        <div className='phone-wrapper'><button className='phone'><FontAwesomeIcon icon="fa-phone" style={{color: "white",}} /></button>628757961</div>
      </a>
    </div>

    <div className='center-header-wrapper'>
        <img className="header-logo" src={logo} alt="Logo" />
    </div>
    <div className='right-header-wrapper'>
        <a href="https://www.facebook.com/analemosvelosafofuchas/photos">
            <button className='facebook'> <FontAwesomeIcon icon="fa-brands fa-facebook-f" style={{color: "white",}} /></button>
        </a>
        <a href="https://www.instagram.com/analemosvelosa/?hl=es">
            <button className='instagram'> <FontAwesomeIcon icon="fa-brands fa-instagram" style={{color: "white",}} /></button>
        </a>
        
    </div>
  </div>;
}

export default Header;


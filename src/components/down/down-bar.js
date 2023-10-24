import React, { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class DownBar extends Component {
    render() {
        return (
            <div className='bar-down-wrapper'>
                <div className='left-bar-down-wrapper'>
                    <div className='bar-down-title'>Contáctanos</div>
                    <div className='left-bar-down-links'>
                        <div className='left-bar-down-link'>
                            <a className="bar-down-link" href="/contacto">
                                <div className='whatsapp-wrapper'><button className='whatsapp'><FontAwesomeIcon icon="fa-brands fa-whatsapp" style={{color: "white",}} /></button> 628757961 </div>
                            </a>
                        </div>
                        <div className='left-bar-down-link'>
                            <a className="bar-down-link" href="/contacto">
                                <div className='email-envelope-wrapper'><button className='email-envelope'><FontAwesomeIcon icon="fa-regular fa-envelope" style={{color: "white",}} /></button>analemosvelosa@gmail.com</div>
                            </a>
                        </div>
                        <div className='left-bar-down-link'>
                            <a className="bar-down-link" href="/contacto">
                                <div className='phone-wrapper'><button className='phone'><FontAwesomeIcon icon="fa-phone" style={{color: "white",}} /></button>628757961</div>
                            </a>
                        </div>
                        <div className='left-bar-down-link'>
                            <a href="https://www.facebook.com/analemosvelosafofuchas">
                                <button className='facebook'> <FontAwesomeIcon icon="fa-brands fa-facebook-f" style={{color: "white",}} /></button>
                            </a>
                        </div>
                        <div className='left-bar-down-link'>
                            <a href="https://www.instagram.com/analemosvelosa/?hl=es">
                                <button className='instagram'> <FontAwesomeIcon icon="fa-brands fa-instagram" style={{color: "white",}} /></button>
                            </a>
                        </div>
                    </div>
                </div>


                <div className='center-bar-down-wrapper'>
                    <div className='bar-down-title'>Páginas</div>
                    <a className="bar-down-link" href="/amigurumi">
                        <div>Amigurumi</div>
                    </a>
                    <a className="bar-down-link" href="/fofuchas">
                        <div>Fofuchas</div>
                    </a>
                    <a className="bar-down-link" href="/broches">
                        <div>Broches</div>
                    </a>
                    <a className="bar-down-link" href="/flores">
                        <div>Flores</div>
                    </a>
                    <a className="bar-down-link" href="/a-medida">
                        <div>A medida</div>
                    </a>
                    <a className="bar-down-link" href="/más">
                        <div>Más manualidades</div>
                    </a>
                </div>

                <div className='right-bar-down-wrapper'>
                    <div className='bar-down-title'>Enlaces</div>
                    <div className='right-bar-down-links'>
                        <div className='right-bar-down-link'>
                            <a className="bar-down-link" href="/">
                                <div>Volver al inicio</div>
                            </a>
                        </div>
                        <div className='right-bar-down-link'>
                            <a className="bar-down-link" href="/contacto">
                                <div>Ir a contacto</div>
                            </a>
                        </div>
                        <div className='right-bar-down-link'>
                            <a className="bar-down-link" href="/">
                                <div>Ver ofertas</div>
                            </a>
                        </div>
                        <div className='right-bar-down-link'>
                            <a className="bar-down-link" href="/contacto">
                                <div>Mandar email</div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
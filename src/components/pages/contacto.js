import React, { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import emailjs from "@emailjs/browser";

export default class Contacto extends Component {
    constructor(props) {
        super(props);

    
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        
        emailjs.sendForm("service_01ujrnn", "template_l5v5b3c", e.target, "xeEFGlX8Ukiywbw4K");
        alert("Tu Email ha sido enviado correctamente");
    }

    render() {
        return (
            <div>
                <div className='contact-page'>
                    <h1>Contáctanos</h1>
                    
                        <form onSubmit={this.handleSubmit} className='form-wrapper-contact'>
                            <label>Tu email:</label>
                            <input
                                type="email"
                                name="email_from"
                                placeholder="Tu email"
                                className='contact-page-input'
                            />
                            <label>Tu nombre:</label>
                            <input
                                type="text"
                                name="client_name"
                                placeholder="Tu nombre"
                                className='contact-page-input'
                            />
                            <label>Tu mensaje o pedido:</label>
                            <textarea
                                type="text"
                                name="email_message"
                                placeholder="Tu mensaje"
                                className='contact-page-textarea'
                            />
                            
                            <button className='btn contact-page-btn' type="submit">Mandar email <FontAwesomeIcon icon="fa-solid fa-share" /></button>
                
                        </form>
                </div>
            </div>
        );
    }
}
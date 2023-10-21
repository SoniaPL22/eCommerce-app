import React, { Component } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';



export default class Inicio extends Component {
    render() {
        return (
            <div>
                
                <div className='home-page-wrapper'>
                    <h1 className='home-page-title'>Bienvenidos a la <span className='name-shop'>Fábrica Fofuchera</span></h1>
                    <h2 className='home-page-description'>Aqui encontrarás fofuchas, amigurumis y muchas manualidades más</h2>
                    <div className='offers-wrapper'>
                        <div className='two-offers-wrapper'>
                            <div className='offer offer-one'>
                               <h2 className='offer-text'>¡¡Si compras <span className='offer-detail'>2 fofuchas</span> te llevas un  <span className='offer-detail'>amigurumi de regalo</span>!!</h2>
                            </div>
                            <div className='offer offer-two'>
                                <h2 className='offer-text'>¡¡Lote de <span className='offer-detail'>tres amigurumis</span> a elegir por tan solo <span className='offer-detail'>20 €</span>!!</h2>
                            </div>
                        </div>
                            <div className='offer offer-three'>
                                <h2 className='offer-text'>¡¡<span className='offer-detail'>3x2</span> en flores!!</h2>
                            </div>
                    </div>
                    <h1 className='home-page-contact-link'> <Link to="/contacto">Contáctanos o mándanos un email</Link></h1>
                </div>

                
            </div>
        );
    }
}
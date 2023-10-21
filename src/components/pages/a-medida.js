 import React, { Component } from 'react';
 import	imagepersonalized from "../../images/fofucha-personalizada.jpg";
 import	imageclassic from "../../images/fofucha-clasica.jpg";
 import logo from '../../logo/logoappshop.png';

 export default class AMedida extends Component {
     render() {
         return (
             <div className='amedida-wrapper'>
                <div className='amedida-elements-wrapper'>
                    <h2>Puedes cambiar los <span className='text-amedida'>detalles y los colores</span> de la manualidad que quieras.</h2>
                    <h2>Si nos mandas un <span className='text-amedida'>email</span> con los detalles y/o colores que quieres cambiar a la manualidad podremos <span className='text-amedida'>personalizartela a tu gusto</span>.</h2>
                    <button className='btn page-amedida'><a href='/contacto' className='button-link-amedida'>Mandar un email con detalles y colores escogidos</a></button>
                    <h2>También tienes la opción de escoger la <span className='text-amedida'>fofucha personalizada</span>. </h2>
                    <h2>La fofucha personalizada tendrá rasgos más parecidos a la persona a diferencia de la fofucha clásica cuya cara será mas sencilla.</h2>
                    <h2>Aquí vemos la diferencia entre una <span className='text-amedida'>fofucha personalizada</span> y una <span className='text-amedida'>fofucha clásica</span>.</h2>
        
                    <div className="images-amedida-wrapper">
                        <div className="image-amedida-wrapper">
                            <img className="image-amedida" src={imageclassic} />
                            <h3>Fofucha clásica</h3>
                        </div>
                        <div className='image-amedida-wrapper'>
                            <img className="image-amedida" src={imagepersonalized} />
                            <h3>Fofucha personalizada</h3>
                        </div>
                    </div>
                    <h2>Si tienes alguna duda mandanos un email.</h2>

                    <button className='btn page-amedida'><a className='button-link-amedida' href='/contacto'>Ir a mandar un email</a></button>
                </div>
             </div>
         );
     }
 }
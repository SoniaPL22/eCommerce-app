import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

export default function() {
        return (
            <div className='no-match-wrapper'>
                <h2> Lo siento, esa página no existe</h2>
                 
                <Link to="/">Volver a la página inicial</Link>
            </div>
        );
}
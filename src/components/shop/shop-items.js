import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

export default function(props) {

    const { id, title, description, price, shopitem_img } = props.item;
    return (
      <div className='shop-item-wrapper'>
        <div className='shop-item-elements-wrapper'>
          <Link className="link-shop-item-element" to={`/detalles-elementos/${id}`}>
            <div className='shop-item-element-wrapper'>
              <div className='shop-item-img-wrapper'>
                <img className="shop-item-img" src={shopitem_img}/>
              </div>
              <h2 className="shop-item-title">{title}</h2>
              <h2 className="shop-item-price">{price} €</h2>
              <div className='shop-item-description-wrapper'>
                <h3 className="shop-item-description">{description}</h3>
              </div>
            </div>
          </Link>
        </div>
      </div>
    );
  }
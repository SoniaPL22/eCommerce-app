import React, { Component } from 'react';
import axios from 'axios';
import ReactImageMagnify from "react-image-magnify";


export default class ShopItemDetail extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          nowId: this.props.match.params.slug,
          shopItem: {}
        };
    }

    getSpecificShopItem() {
      axios
        .get(`http://localhost:5000/get/${this.state.nowId}`)
        .then(response => {
            this.setState({
              shopItem: response.data
            });
        })
        .catch(error => {
            console.log("getSpecificShopItem error", error);
        });
      }
    
      componentDidMount() {
        this.getSpecificShopItem();
      }
    render() {
        const {
            shopitem_img,
            title,
            price,
            description
        } = this.state.shopItem;

        const itemImage = shopitem_img;
      
        return (
            <div className="shop-item-detail-wrapper">
              <div className='item-detail-img'>
                <ReactImageMagnify {...{
                  smallImage: {
                      alt: 'manualidad',
                      isFluidWidth: true,
                      src: itemImage
                  },
                  largeImage: {
                      src: itemImage,
                      width: 1200,
                      height: 1800
                  },
                  isHintEnabled: true,
                  hintTextMouse: "Hacer Zoom",
                  shouldHideHintAfterFirstActivation: false,
                }}/>
              </div>
              <div className="shop-item-details-wrapper">
                <div className='item-detail-title'>
                  <h1> {title}</h1>
                </div>
                <div className='item-detail-price'> 
                  <h2>Esta encantadora manualidad de {title} cuesta {price} €</h2>
                </div>
                <div className='item-detail-description'>
                  <h3>{description}</h3>
                </div>
                <div className='item-detail-comment'>
                  <h3>Si te interesa esta manualidad <a href="/contacto">contáctanos</a>, ten en cuenta que puedes pedirnos <a href='/a-medida'>cambiar algun detalle o color</a> de la manualidad y nos encargaremos de hacerlo a tu gusto.</h3>
                </div>
              </div>
            </div>
        );
    }
}
        



 

  
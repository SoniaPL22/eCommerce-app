import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const  Editioncontainer = props => {

  const editList = props.data.map(shopItem => {
    return (
      <div key={shopItem.id} className="shop-item-wrapper edition">
          <div className='shop-item-elements-wrapper edition'>
            <div className='shop-item-element-wrapper edition'>
              <div className='shop-item-element-wrapper-first-row edition'>
                <div className='shop-item-img-wrapper'>
                  <img className="shop-item-img" src={shopItem.shopitem_img}/>
                </div>
                <a onClick={() => props.handleDelete(shopItem)}><FontAwesomeIcon className="icon-trash" icon="fa-regular fa-trash-can" /></a>
              </div>
              <h2>{shopItem.title}</h2>
            </div>
          </div>
      </div>
    );
  });
return <div className="shop-items-wrapper edition">{editList}</div>
}

export default Editioncontainer;
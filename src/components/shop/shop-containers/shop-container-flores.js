import React, { Component } from "react";
import axios from "axios";

import ShopItem from "../shop-items";

export default class ShopContainerFlores extends Component {
    constructor() {
        super();
    
        this.state = {
          isLoading: false,
          data: []
        };

        this.handleFilter = this.handleFilter.bind(this);
    }

    handleFilter(filter) {
      this.setState({
        data: this.state.data.filter(item => {
          return item.category === filter;
        })
      });
    }

    getFlores() {
        axios
          .get("http://localhost:5000/category?category=flores")
          .then(response => {
            console.log("response data", response);
            this.setState({
              data: response.data
            });
          })
          .catch(error => {
            console.log(error);
          });
      }

    shopItems() {
      return this.state.data.map(item => {
        console.log("item data", item);
        return (
          <ShopItem key={item.id} item={item} />
        );
      });
    }
    
    componentDidMount() {
      this.getFlores();
    }

    render() {
      if (this.state.isLoading) {
        return <div>Loading...</div>;
      }

      return (
        <div className="shop-items-container">
          <h2 className="shop-items-comment">Pincha en la flor que quieras ver en mayor detalle</h2>
          <div className="shop-items-wrapper">
            {this.shopItems()}
          </div>
        </div>
      );
  }
}
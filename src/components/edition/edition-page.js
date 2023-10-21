import React, { Component } from "react";
import axios from "axios";
import Editioncontainer from "./delete-shop-items";
import EditionForm from "./edition-form";


export default class EditionPage extends Component {
  constructor() {
    super();

    this.state = {
      shopItems: [],
      shopItemUpdate: {}
    };

    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(shopItem) {
    fetch(`http://localhost:5000/delete/${shopItem.id}`, {
        method: "DELETE",
        headers: {
            "content-type": "application/json",
        },
    }).then(response => {
      this.setState({
        shopItems: this.state.shopItems.filter(item => {
          return item.id !== shopItem.id;
        })
      });
      return response.data;
    }).catch(error =>{
        console.log("error with handleDelete", error);
    });

  }

  getItems() {
    axios
      .get("http://localhost:5000/shopitems",)
      .then(response => {
        this.setState({
            shopItems: [...response.data]
        });
      })
      .catch(error => {
        console.log("error in getItems", error);
      });
  }

  componentDidMount() {
    this.getItems();
  }

  render() {
    return (
      <div className="edition-page-wrapper">
         
          <EditionForm
            handleFormSubmission = {this.handleFormSubmission}
            handleFormError = {this.handleFormError}
          />

          <Editioncontainer
            handleDelete = {this.handleDelete}
            data = {this.state.shopItems}
          />
      </div>
    );
  }
}
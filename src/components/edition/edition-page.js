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
    fetch(`postgres://sykkxzzexkikkj:292ca72ab836a13ad842a9d6e6a42ea0ea246268f9cb2fe7280298930553ba2e@ec2-54-78-142-10.eu-west-1.compute.amazonaws.com:5432/dfcm1nfscbsj7f/delete/${shopItem.id}`, {
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
      .get("postgres://sykkxzzexkikkj:292ca72ab836a13ad842a9d6e6a42ea0ea246268f9cb2fe7280298930553ba2e@ec2-54-78-142-10.eu-west-1.compute.amazonaws.com:5432/dfcm1nfscbsj7f/shopitems",)
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
import React, { Component } from 'react';


export default class EditionForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: "",
            description: "",
            category: "amigurumi",
            price: "",
            shopitem_img: ""
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSend = this.handleSend.bind(this);
    }


    handleChange(event){
        this.setState({
            [event.target.name]: event.target.value
        });
    }


    handleSend(event) {
        fetch("postgres://sykkxzzexkikkj:292ca72ab836a13ad842a9d6e6a42ea0ea246268f9cb2fe7280298930553ba2e@ec2-54-78-142-10.eu-west-1.compute.amazonaws.com:5432/dfcm1nfscbsj7f/add", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({
                title: this.state.title,
                description: this.state.description,
                category: this.state.category,
                price: this.state.price,
                shopitem_img: this.state.shopitem_img
            })
        }).then(response => {
            console.log("response for handleSend", response);
            response.json()
        }).then(data => {
            console.log("data for handleSend", data);
            this.setState({
                title: "",
                description: "",
                category: "",
                price: "",
                shopitem_img: "",
            })
        }).catch(error =>{
            console.log("error with handleSend", error);
        });

        event.preventDefault();
    }
   

    render() {
        return (
            <div className='edition-page-form-wrapper'>
                <h2>Añadir o borrar elementos de la tienda</h2>
                
                <form onSubmit={this.handleSend} className='edition-form-wrapper'> 
                    <div className='input-wrapper-two-columns'>
                        <div className='form-input-wrapper'>
                            <label>Nombre de la manualidad:</label>
                            <input
                                type="text"
                                name="title"
                                placeholder="Nombre de la manualidad"
                                value={this.state.title}
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className='form-input-wrapper'>
                            <label>Precio:</label>
                            <input
                                type="text"
                                name="price"
                                placeholder="Precio"
                                value={this.state.price}
                                onChange={this.handleChange}
                            />
                        </div>
                    </div>

                    <div className='input-wrapper-two-columns'>
                        <div className='form-input-wrapper'>
                            <label>Categoria:</label>
                            <select
                                name="category"
                                value={this.state.category}
                                onChange={this.handleChange}
                                className='select-element'
                            >
                                <option value="amigurumi">Amigurumi</option>
                                <option value="fofuchas">Fofuchas</option>
                                <option value="broches">Broches</option>
                                <option value="flores">Flores</option>
                                <option value="otros">Otros</option>
                            </select>
                        </div>

                        <div className='form-input-wrapper'>
                            <label>URL de la imagen:</label>
                            <input
                                type="text"
                                name="shopitem_img"
                                placeholder="Url de la imagen"
                                value={this.state.shopitem_img}
                                onChange={this.handleChange}
                            />
                        </div>
                    </div>


                    <div className='input-wrapper-one-column'>
                        <div className='form-input-wrapper'>
                            <label>Descripción:</label>
                            <textarea
                                type="text"
                                name="description"
                                placeholder="Descripción de la fofucha"
                                value={this.state.description}
                                onChange={this.handleChange}
                                maxLength={68}
                            />
                        </div>
                    </div>
                    
                    
                    
                    <button className='btn' type="submit">Enviar</button>
                
                    
                </form>


                
            </div>
        );
    }
}
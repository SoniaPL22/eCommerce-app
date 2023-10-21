import React, { Component } from "react";

export default class Auth extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    if (this.state.email==="anamaria@gmail.com" & this.state.password=="8765"){
        this.props.handleSuccessfulAuth();
    }else{
        alert("Lo siento, no estás autorizado a entrar")
    }
    event.preventDefault();
  }

  render() {
    return (
      <div className="auth-wrapper">
        <h1>Inicia sesión para editar</h1>

        <form onSubmit={this.handleSubmit} className="form-wrapper-auth">
          <div className="auth-form-inputs-wrapper">
            <div className="form-input-wrapper">
              <label>Tu email:</label>
              <input
                type="email"
                name="email"
                placeholder="Tu email"
                value={this.state.email}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-input-wrapper">
              <label>Tu contraseña:</label>
              <input
                type="password"
                name="password"
                placeholder="Tu contraseña"
                value={this.state.password}
                onChange={this.handleChange}
              />
            </div>
          </div>

          <div>
            <button className="btn" type="submit">Iniciar sesión</button>
          </div>
        </form>
      </div>
    );
  }
}
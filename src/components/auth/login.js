import React, { Component } from 'react';
import Auth from './authpage';

export default class Login extends Component {
    constructor(props) {
        super(props);

        this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);
        this.handleUnsuccessfulAuth = this.handleUnsuccessfulAuth.bind(this);
    }

    handleSuccessfulAuth() {
        this.props.handleSuccessfulLogIn();
        this.props.history.push("/edition");
    }

    handleUnsuccessfulAuth() {
        this.props.handleUnsuccessfulLogIn();
    }


    render() {
        return (
            <div>
                <Auth 
                    handleSuccessfulAuth={this.handleSuccessfulAuth}
                    handleUnsuccessfulAuth={this.handleUnsuccessfulAuth}
                />
            </div>
        );
    }
}
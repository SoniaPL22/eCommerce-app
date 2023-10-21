import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faFacebookF, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faTrashCan } from '@fortawesome/free-regular-svg-icons'
import { faPhone, faArrowRightFromBracket, faShare, faBars } from '@fortawesome/free-solid-svg-icons';

import NavigationContainer from "./navigation/navigation-container";
import Inicio from "./pages/home";
import Amigurumi from './pages/amigurumi';
import Fofuchas from './pages/fofuchas';
import Broches from './pages/broches';
import Flores from './pages/flores';
import AMedida from './pages/a-medida';
import Más from './pages/más';
import ShopItemDetail from './shop/shop-item-detail';
import Contacto from './pages/contacto';
import NoMatch from './pages/no-match';
import Header from './head/head';
import Login from './auth/login';
import EditionPage from './edition/edition-page';
import DownBar from "./down/down-bar";


library.add(faFacebookF, faInstagram, faWhatsapp, faEnvelope, faPhone, faArrowRightFromBracket, faTrashCan, faShare, faBars);

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      logInStatus: "Not-logged-in"
    };

    this.handleSuccessfulLogIn = this.handleSuccessfulLogIn.bind(this);
    this.handleUnsuccessfulLogIn = this.handleUnsuccessfulLogIn.bind(this);
    this.handleLogOut = this.handleLogOut.bind(this);
  }
   
  handleSuccessfulLogIn() {
    this.setState({
      logInStatus: "Logged-in"
    })
  }

  handleUnsuccessfulLogIn() {
    this.setState({
      logInStatus: "Not-logged-in"
    })
  }

  handleLogOut() {
    this.setState({
      logInStatus: "Not-logged-in"
    })
  }

  authorizedRoutes() {
    return [<Route key="edition-route" path="/edition" component={EditionPage} />]
  }

  render() {
    return (
      <div className='app'>
        <Header />
    
        <Router>
          <div>
            <NavigationContainer 
            logInStatus={this.state.logInStatus}
            handleLogOut={this.handleLogOut}
            />
            <Switch>
              <Route exact path="/" component={Inicio} />
              <Route exact path="/login2354" render={props=> (
                <Login {...props}
                handleSuccessfulLogIn={this.handleSuccessfulLogIn}
                handleUnsuccessfulLogIn={this.handleUnsuccessfulLogIn}
                />)}/>
                {this.state.logInStatus=== "Logged-in"? this.authorizedRoutes(): null}
              <Route path="/amigurumi" component={Amigurumi} />
              <Route path="/fofuchas" component={Fofuchas} />
              <Route path="/broches" component={Broches} />
              <Route path="/flores" component={Flores} />
              <Route path="/a-medida" component={AMedida} />
              <Route path="/más" component={Más} />
              <Route exact path="/detalles-elementos/:slug" component={ShopItemDetail} />
              <Route path="/contacto" component={Contacto} />
              <Route component={NoMatch} />
            </Switch>

            <DownBar />

          </div>
        </Router>

      </div>
    );
  }
}

import React, { Fragment, Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigation from "./components/layout/Navigation";
import Footer from "./components/layout/Footer";
import Catalogue from "./components/catalogue/Catalogue";
import Dashboard from "./components/dashboard/Dashboard";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Gallery from "./components/gallery/Gallery";
import Favorites from "./components/favorites/Favorites";

import Parse from "parse";

import { Provider } from "react-redux";
import store from "./store";

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/App.scss";

let serverURL = "http://34.73.39.87/parse";
let applicationId = "9a1fd5f82c592f443c9bf564a1652aff5dc57c13";
let scriptKey = null;

class App extends Component {
  constructor(props) {
    super(props);

    Parse.initialize("9a1fd5f82c592f443c9bf564a1652aff5dc57c13", null);
    Parse.serverURL = "http://34.73.39.87/parse";
  }
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Fragment>
            <Navigation />
            <section className="container">
              {/* <AlertDiv /> */}
              <Switch>
                <Route exact path="/" component={Catalogue} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/gallery" component={Gallery} />
                <Route exact path="/favorites" component={Favorites} />
                <Route exact path="/dashboard" component={Dashboard} />
                {/* <PrivateRoute exact path="/gallery" component={Gallery} />
                <PrivateRoute exact path="/favorites" component={Favorites} />
                <PrivateRoute exact path="/dashboard" component={Dashboard} /> */}
                {/* <PrivateRoute exact path="/add" component={ProductForm} /> */}
              </Switch>
            </section>
            <Footer />
          </Fragment>
        </Router>
      </Provider>
    );
  }
}

export default App;

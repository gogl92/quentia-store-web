import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigation from "./components/layout/Navigation";
import Footer from "./components/layout/Footer";
import Catalogue from "./components/catalogue/Catalogue";
import Dashboard from "./components/dashboard/Dashboard";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Gallery from "./components/gallery/Gallery";
import Favorites from "./components/favorites/Favorites";
import "./styles/App.scss";

function App() {
  return (
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
  );
}

export default App;

import React, { Fragment } from "react";
import { Row } from "reactstrap";
import Sidebar from "../sidebar/Sidebar";
import { connect } from "react-redux";
import ProductItem from "../product/ProductItem";
import PropTypes from "prop-types";

const Catalogue = ({ loggedIn }) => {
  return (
    <Fragment>
      <Fragment>{loggedIn ? <Sidebar /> : <Fragment></Fragment>}</Fragment>
      <h1>Catalogue de quentia</h1>
    </Fragment>
  );
};

Catalogue.propTypes = {
  loggedIn: PropTypes.bool.isRequired
};
const mapStateToProps = state => ({ loggedIn: state.authentication.loggedIn });
export default connect(mapStateToProps, {})(Catalogue);

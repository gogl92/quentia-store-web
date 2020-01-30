import React, { useEffect, Fragment } from "react";
import PropTypes from "prop-types";
import { Row, Container, Col } from "reactstrap";
import { connect } from "react-redux";
import { getProduct } from "../../actions/productActions";
import Sidebar from "../sidebar/Sidebar";
import ProductDetail from "../products/ProductDetail";

const Product = ({ loggedIn, getProduct, product: { product }, match }) => {
  useEffect(() => {
    getProduct(match.params.id);
  }, [getProduct]);
  return (
    <Container>
      {loggedIn ? <Sidebar /> : <Fragment></Fragment>}
      <ProductDetail product={product} />
      {console.log("en product js", product)}
    </Container>
  );
};

Product.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  getProduct: PropTypes.func.isRequired,
  product: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  loggedIn: state.authentication.loggedIn,
  product: state.product
});
export default connect(mapStateToProps, { getProduct })(Product);

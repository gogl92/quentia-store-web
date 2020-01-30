import React, { Fragment, useEffect } from "react";
import { Row, Container, Col } from "reactstrap";
import Sidebar from "../sidebar/Sidebar";
import { connect } from "react-redux";
import ProductItem from "../products/ProductItem";
import SearchBar from "../searchBar/SearchBar";
import { getProducts } from "../../actions/productActions";
import Filters from "../filters/Filters";
import PropTypes from "prop-types";

const Catalogue = ({ loggedIn, getProducts, product: { products } }) => {
  useEffect(() => {
    getProducts();
  }, [getProducts]);
  return (
    <Fragment>
      {loggedIn ? <Sidebar /> : <Fragment></Fragment>}
      <Container>
        <SearchBar />
      </Container>
      <div className="container-fluid">
        <Row>
          <Col sm={12} md={2}>
            <Filters />
          </Col>
          <Col sm={12} md={9}>
            <div className="products d-flex flex-row flex-wrap">
              {products.length > 0 ? (
                products.map(product => (
                  <ProductItem key={product.id} product={product} />
                ))
              ) : (
                <h4>No se encontraron productos</h4>
              )}
            </div>
          </Col>
        </Row>
      </div>
    </Fragment>
  );
};

Catalogue.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  getProducts: PropTypes.func.isRequired,
  product: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  loggedIn: state.authentication.loggedIn,
  product: state.product
});
export default connect(mapStateToProps, { getProducts })(Catalogue);

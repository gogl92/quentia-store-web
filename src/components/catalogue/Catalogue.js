import React, { Fragment, useEffect } from "react";
import { Row, Col } from "reactstrap";
import Sidebar from "../sidebar/Sidebar";
import { connect } from "react-redux";
import ProductItem from "../products/ProductItem";
import SearchBar from "../searchBar/SearchBar";
import { getProducts, getBrands } from "../../actions/productActions";
import Filters from "../filters/Filters";
import PropTypes from "prop-types";

const Catalogue = ({
  loggedIn,
  getProducts,
  getBrands,
  product: { products }
}) => {
  useEffect(() => {
    getProducts();
    getBrands();
  }, [getProducts, getBrands]);
  return (
    <Fragment>
      {loggedIn ? <Sidebar /> : <Fragment></Fragment>}
      <div className="container-fluid">
        <Row>
          <Col sm={12} md={2}>
            <Filters />
          </Col>
          <Col sm={12} md={9}>
            <SearchBar />
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
  product: PropTypes.object.isRequired,
  getBrands: PropTypes.func.isRequired
};
const mapStateToProps = state => ({
  loggedIn: state.authentication.loggedIn,
  product: state.product
});
export default connect(mapStateToProps, { getProducts, getBrands })(Catalogue);
